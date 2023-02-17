import type { TAppleListItemProps } from './types';

function ApplesListItem({  apple, selected, onToggle }: TAppleListItemProps){
    return    <li key={apple.id}>
        <label htmlFor={apple.name}>
            {apple.name}
            <input
                checked={selected}
                onChange={onToggle}
                type="checkbox"
                name={apple.id}
            />
        </label>
    </li>
}

export default ApplesListItem;
