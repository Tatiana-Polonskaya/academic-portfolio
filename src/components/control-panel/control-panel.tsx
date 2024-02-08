import AddButton from "../add-button/add-button";
import Filter from "../filter/filter";
import Search from "../search/search";
import Sorted, { SortedItem } from "../sorted/sorted";
import { Routers } from "../../consts";
import { mergeProps } from "solid-js";

type Props = {
    sortedOptions: SortedItem[];
    onSearchClick: (value: string) => void;
    onFilterClick: () => void;
};

export default function ControlPanel(_props: Props) {
    const props = mergeProps({}, _props);

    const handleSearchClick = (value: string) => {
        props.onSearchClick(value);
    };

    return (
        <div class="d-flex p-2 flex-row justify-content-between align-items-center align-self-center gap-2 ">
            <Filter onClick={props.onFilterClick} />
            <Sorted sortedItems={props.sortedOptions} />
            <Search onClick={handleSearchClick} />
            <AddButton link={Routers.AddArticle} />
        </div>
    );
}
