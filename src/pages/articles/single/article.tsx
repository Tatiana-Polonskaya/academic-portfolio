import { useParams } from "@solidjs/router";
import { Suspense, createResource } from "solid-js";
import { fetchArticleById } from "../../../api/api";
import BaseLayout from "../../../layouts/base/base-layout";
import Spinner from "../../../components/spinner/spinner";

export default function SingleArticlePage() {
  const params = useParams();
  const [data] = createResource(Number(params.id), fetchArticleById);

  return (
    <BaseLayout>
      <div>
        <p>Article №{params.id}</p>
        <Suspense fallback={<Spinner />}>
          <div>{data() && data().title}</div>
          <div>{data() && data().body}</div>
        </Suspense>
      </div>
    </BaseLayout>
  );
}
