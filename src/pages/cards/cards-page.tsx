import "./style.css";
import BaseLayout from "../../layouts/base/base-layout";
import ListCards from "../../components/list-cards/list-cards";
import { fetchImages } from "../../api/api";
import { createResource } from "solid-js";
import Caption from "../../components/caption/caption";
import ControlPanel from "../../components/control-panel/control-panel";

export default function CardsPage() {
  const [data] = createResource(true, fetchImages);
  return (
    <BaseLayout>
      <div class="container-lg px-9 text-center">
        <Caption mainText={"Дипломы"} />
        <ControlPanel />
        <ListCards cards={data()} />
      </div>
    </BaseLayout>
  );
}
