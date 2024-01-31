import { useNavigate } from "@solidjs/router";
import AddForm from "../../components/add-form/add-form";
import Caption from "../../components/caption/caption";
import { Routers } from "../../consts";
import BaseLayout from "../../layouts/base/base-layout";

export default function AddArticle() {
  const navigate = useNavigate();
  return (
    <BaseLayout>
      <div class="container-lg text-center">
        <div class="d-flex mt-2 justify-content-md-start ">
          <button
            type="button"
            class="btn btn-link"
            onClick={() => navigate(Routers.Articles)}
          >
            <i class="bi bi-arrow-left" /> К списку статей
          </button>
        </div>
        <Caption mainText={"Создание новой записи"} />

        <AddForm />
      </div>
    </BaseLayout>
  );
}
