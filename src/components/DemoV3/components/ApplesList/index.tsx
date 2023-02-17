import type { TApplesListProps } from './types';

function ApplesList({ children }: TApplesListProps ){
    return (
        <ul>
            {children}
        </ul>
    )
}

export default ApplesList;
