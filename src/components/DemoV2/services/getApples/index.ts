import axios from 'axios';

import type { TGetApplesResponse } from './types';

function getApples(){
    return axios.get<TGetApplesResponse>('https://someapi.com/apples');
}

export default getApples;
