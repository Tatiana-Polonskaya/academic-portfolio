import { A, useParams } from "@solidjs/router";
import { Suspense, createResource } from "solid-js";
import { fetchArticleById } from "../../../api/api";
import BaseLayout from "../../../layouts/base/base-layout";
import Spinner from "../../../components/spinner/spinner";
import Caption from "../../../components/caption/caption";
import ButtonBack from "../../../components/button-back/button-back";

export default function SingleArticlePage() {
  const params = useParams();
  const [data] = createResource(params.id, fetchArticleById);

  return (
    <BaseLayout>
      <div class="d-flex flex-column mb-3">
        <ButtonBack />
        <Suspense fallback={<Spinner />}>
          <div class="d-flex flex-row justify-content-between align-items-center">
            {data() && <Caption mainText={data().title} />}
            <div class="d-flex flex-row align-items-center gap-3">
              <button
                type="button"
                class="btn btn-outline-primary align-self-center"
              >
                <i class="bi bi-pencil-fill" />
              </button>
              <button
                type="button"
                class="btn btn-outline-danger align-self-center"
              >
                <i class="bi bi-trash-fill" />
              </button>
            </div>
          </div>

          <table class="table">
            <tbody>
              <tr>
                <th scope="row" style={{ width: "30%" }}>
                  Название
                </th>
                <td>{data() && data().title}</td>
              </tr>
              <tr>
                <th scope="row">Конференция</th>
                <td>{data() && data().conference}</td>
              </tr>
              <tr>
                <th scope="row">Год публикации</th>
                <td>{data() && data().year}</td>
              </tr>
              <tr>
                <th scope="row">Статус</th>
                <td>{data() && data().status}</td>
              </tr>
              <tr>
                <th scope="row">Ссылка на открытый источник</th>
                <td>{data() && <A href={data().link}>Источник</A>}</td>
              </tr>
            </tbody>
          </table>
        </Suspense>
      </div>
    </BaseLayout>
  );
}
