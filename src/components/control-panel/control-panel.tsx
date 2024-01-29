import AddButton from "../add-button/add-button";
import Filter from "../filter/filter";
import Search from "../search/search";
import Sorted from "../sorted/sorted";

export default function ControlPanel() {
  return (
    <div class="d-flex p-2 flex-row justify-content-between align-items-center align-self-center gap-2">
      <Filter />
      <Sorted />
      <Search />
      <AddButton onClick={() => console.log("click add")} />
    </div>
  );
}
