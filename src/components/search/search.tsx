import { createSignal } from "solid-js";

export default function Search() {
    const [value, setValue] = createSignal("");

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
            <button class="btn btn-outline-success" type="submit">
                Поиск
            </button>
        </form>
    );
}
