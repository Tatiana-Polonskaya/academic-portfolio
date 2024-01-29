import { Suspense, createResource } from "solid-js";
import ListRows from "../../components/list-rows/list-rows";

import BaseLayout from "../../layouts/base/base-layout";
import { fetchArticles } from "../../api/api";
import ControlPanel from "../../components/control-panel/control-panel";
import Caption from "../../components/caption/caption";
import Spinner from "../../components/spinner/spinner";

export default function ArticlesPage() {
  const [data] = createResource(true, fetchArticles);
  return (
    <BaseLayout>
      <div class="container-lg px-9 text-center">
        <Caption mainText={"Статьи"} extraText={"за 2020-2024 гг"} />
        <ControlPanel />
        <Suspense fallback={<Spinner />}>
          <ListRows articles={data()} />
        </Suspense>
      </div>
    </BaseLayout>
  );
}
