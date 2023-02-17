import {BaseSyntheticEvent, useEffect, useState} from 'react';


import postApples from '../../services/postApples';
import getApples from '../../services/getApples';
import notifier from '../../services/notifier';

import type {TApple} from '../../services/getApples/types';

function useDemoComponentsState(){
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


    return {
        selectedApples,
        onAppleToggle,
        handleSubmit,
        apples
    }
}

export default useDemoComponentsState;
