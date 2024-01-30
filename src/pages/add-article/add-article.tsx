import AddForm from "../../components/add-form/add-form";
import Caption from "../../components/caption/caption";
import BaseLayout from "../../layouts/base/base-layout";

export default function AddArticle() {
  return (
    <BaseLayout>
      <div class="container-lg text-center">
        <Caption mainText={"Создание новой записи"} />

        <AddForm />
      </div>
    </BaseLayout>
  );
}
