import { A } from "@solidjs/router";
import AddForm from "../../components/add-form/add-form";
import Caption from "../../components/caption/caption";
import { Routers } from "../../consts";
import BaseLayout from "../../layouts/base/base-layout";

export default function AddArticle() {
  return (
    <BaseLayout>
      <div class="container-lg text-center">
        <div class="d-flex mt-2 justify-content-md-start ">
          <A
            href={Routers.Articles}
            class="link-secondary link-offset-2  link-underline-secondary link-underline-opacity-100-hover"
          >
            <i class="bi bi-arrow-left" /> К списку статей
          </A>
        </div>
        <Caption mainText={"Создание новой записи"} />

        <AddForm />
      </div>
    </BaseLayout>
  );
}
