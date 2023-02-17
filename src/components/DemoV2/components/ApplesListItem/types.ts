import type { TApple } from '../../services/getApples/types';

import type { BaseSyntheticEvent } from 'react';

export type TAppleListItemProps = {
    onToggle: (e: BaseSyntheticEvent) => void;
    selected: boolean;
    apple: TApple,
}
