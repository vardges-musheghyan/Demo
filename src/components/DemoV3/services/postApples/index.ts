import axios from 'axios';

import type { TPostApplesResponse } from './types';

function postApples(apples: string[]){
    return axios.post<TPostApplesResponse>('https://someapi.com', {
        apples
    })
}

export default postApples;
