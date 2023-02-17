import { BaseSyntheticEvent, useEffect, useState } from 'react';

import axios from 'axios';

const notifer = ({ message }: { message: string }) => {
    console.log(message, 'MESSAGE');
};

type TApple = {
    name: string;
    color: string;
    id: string;
};

const fetchApples = async () => axios.get('https://someapi.com/apples');

const submitApples = async (apples: string[]) =>
    axios.post('https://someapi.com/apples', {
        apples,
    });

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
        submitApples(selectedApples).then(res => {
            if (res.status === 200) {
                notifer({
                    message: 'this has been submitted',
                });
            }
        });
    };

    useEffect(() => {
        fetchApples().then(res => {
            setApples(res.data);
        });
    }, []);

    return (
        <div>
            <ul>
                {apples.map(a => (
                    <li key={a.id}>
                        <label htmlFor={a.name}>
                            {a.name}
                            <input
                                checked={selectedApples.includes(a.id)}
                                onChange={onAppleToggle}
                                type="checkbox"
                                name={a.id}
                            />
                        </label>
                    </li>
                ))}
            </ul>
            <button type="button" onClick={handleSubmit}>
                submit selected apples
            </button>
        </div>
    );
}

export default DemoComponent;
