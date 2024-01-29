import Search from "../search/search";
import Sorted from "../sorted/sorted";

export default function ControlPanel() {
  return (
    <div class="d-flex p-2 flex-row justify-content-between align-items-center align-self-center">
      <Sorted />
      <Search />
    </div>
  );
}
