import { useLocation } from "@solidjs/router";

import ArticleForm from "../../components/article-form/article-form";
import ButtonBack from "../../components/button-back/button-back";
import Caption from "../../components/caption/caption";
import BaseLayout from "../../layouts/base/base-layout";
import { Suspense } from "solid-js";
import Spinner from "../../components/spinner/spinner";
import { Article } from "../../@types/article";


interface LocationState {
  id: string;
  article: Article;
}

export default function EditArticle() {
  const location = useLocation<LocationState>();
  const state = () => location.state;

  return (
    <BaseLayout>
      <div class="container-lg text-center">
        <ButtonBack />
        <Caption mainText={"Редактирование записи"} />

        <Suspense fallback={<Spinner />}>
          <ArticleForm formData={state().article} id={state().id} isEdit />
        </Suspense>
      </div>
    </BaseLayout>
  );
}
