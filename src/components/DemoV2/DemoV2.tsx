import {BaseSyntheticEvent, useEffect, useState} from 'react';

import type {TApple} from './services/getApples/types';
import ApplesList from './components/ApplesList';

import ApplesListItem from './components/ApplesListItem';
import postApples from './services/postApples';
import getApples from './services/getApples';
import notifier from './services/notifier';

function DemoComponent() {
    const [apples, setApples] = useState<TApple[]>([]);
    const [selectedApples, setSelectedApples] = useState<string[]>([]);

    const onAppleToggle = (e: BaseSyntheticEvent) => {
        const id = e.target.name;
        setSelectedApples(prevApples => {
            if (prevApples.includes(id)) {
                return prevApples.filter(i => i !== id);
            }
            return [...prevApples, id];
        });
    };

    const handleSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault();
        postApples(selectedApples).then(res => {
            if (res.status === 200) {
                notifier({
                    message: 'this has been submitted',
                });
            }
        });
    };

    useEffect(() => {
        getApples().then(res => {
            setApples(res.data.data);
        });
    }, []);

    return (
        <div>
            <ApplesList>
                {apples.map(a => (
                    <ApplesListItem
                        selected={selectedApples.includes(a.id)}
                        onToggle={onAppleToggle}
                        key={a.id}
                        apple={a}
                    />))}
            </ApplesList>
            <button type="button" onClick={handleSubmit}>
                submit selected apples
            </button>
        </div>
    );
}

export default DemoComponent;
