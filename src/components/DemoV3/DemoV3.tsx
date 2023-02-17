import useDemoComponentsState from './hooks/useDemoComponentsState';
import ApplesListItem from './components/ApplesListItem';
import ApplesList from './components/ApplesList';


function DemoComponent() {
    const { apples, onAppleToggle, handleSubmit, selectedApples } = useDemoComponentsState();

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
