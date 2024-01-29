import { createResource } from "solid-js";
import ListRows from "../../components/list-rows/list-rows";

import BaseLayout from "../../layouts/base/base-layout";
import { fetchArticles } from "../../api/api";
import ControlPanel from "../../components/control-panel/control-panel";
import Caption from "../../components/caption/caption";

export default function ArticlesPage() {
  const [data] = createResource(true, fetchArticles);
  return (
    <BaseLayout>
      <div class="container-lg px-9 text-center">
        <Caption mainText={"Статьи"} extraText={"за 2020-2024 гг"}/>
        <ControlPanel />
        <ListRows articles={data()} />
      </div>
    </BaseLayout>
  );
}
