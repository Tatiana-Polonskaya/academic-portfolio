import { createResource } from "solid-js";
import ListRows from "../../components/list-rows/list-rows";

import BaseLayout from "../../layouts/base/base-layout";
import { fetchArticles } from "../../api/api";

export default function ArticlesPage() {
  const [data] = createResource(true, fetchArticles);
  return (
    <BaseLayout>
      <div class="container-lg px-9 text-center">
        <ListRows articles={data()} />
      </div>
    </BaseLayout>
  );
}
