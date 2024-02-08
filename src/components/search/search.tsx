import { createSignal, mergeProps } from "solid-js";

type Props = {
    onClick: (value: string) => void;
};

export default function Search(_props: Props) {

    
    const props = mergeProps({ onClick: () => console.log("click") }, _props);

    const [value, setValue] = createSignal("");

    const handleButtonClick = (e: Event) => {
        e.preventDefault();

        props.onClick(value());
    };

    return (
        <form class="d-flex flex-fill" role="search">
            <input
                class="form-control me-2"
                type="search"
                placeholder="Поиск"
                aria-label="Поиск"
                value={value()}
                onChange={(e) => setValue(e.target.value)}
            />
            <button class="btn btn-outline-success" type="submit" onClick={handleButtonClick}>
                Поиск
            </button>
        </form>
    );
}
