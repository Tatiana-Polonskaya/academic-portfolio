import { useParams } from "@solidjs/router";
import { Suspense, createResource } from "solid-js";
import { fetchArticleById } from "../../../api/api";
import BaseLayout from "../../../layouts/base/base-layout";

export default function SingleArticlePage() {
  const params = useParams();
  const [data] = createResource(Number(params.id), fetchArticleById);

  return (
    <BaseLayout>
      <div>
        <p>Article №{params.id}</p>
        <Suspense fallback={<p>Loading...</p>}>
          <div>{data() && data().title}</div>
          <div>{data() && data().body}</div>
        </Suspense>
      </div>
    </BaseLayout>
  );
}
