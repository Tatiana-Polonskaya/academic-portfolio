import ArticleForm from "../../components/article-form/article-form";
import Caption from "../../components/caption/caption";
import BaseLayout from "../../layouts/base/base-layout";
import ButtonBack from "../../components/button-back/button-back";

export default function AddArticle() {
  return (
    <BaseLayout>
      <div class="container-lg text-center">
        <ButtonBack />
        <Caption mainText={"Создание новой записи"} />

        <ArticleForm />
      </div>
    </BaseLayout>
  );
}
