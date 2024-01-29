import "./style.css";
import BaseLayout from "../../layouts/base/base-layout";
import ListCards from "../../components/list-cards/list-cards";
import { fetchImages } from "../../api/api";
import { Suspense, createResource } from "solid-js";
import Caption from "../../components/caption/caption";
import ControlPanel from "../../components/control-panel/control-panel";
import Spinner from "../../components/spinner/spinner";

export default function CardsPage() {
  const [data] = createResource(true, fetchImages);
  return (
    <BaseLayout>
      <div class="container-lg px-9 text-center">
        <Caption mainText={"Дипломы"} />
        <ControlPanel />
        <Suspense fallback={<Spinner />}>
          <ListCards cards={data()} />
        </Suspense>
      </div>
    </BaseLayout>
  );
}
