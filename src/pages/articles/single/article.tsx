import { A, useNavigate, useParams } from "@solidjs/router";
import { Show, Suspense, createEffect, createResource, createSignal, on } from "solid-js";
import { deleteArticleById, fetchArticleById } from "../../../@api/api";
import BaseLayout from "../../../layouts/base/base-layout";
import Spinner from "../../../components/spinner/spinner";
import Caption from "../../../components/caption/caption";
import ButtonBack from "../../../components/button-back/button-back";
import { Routers } from "../../../consts";
import { TypeBiblio, createBiblioRecord } from "../../../@helpers/bibliographic-record";
import { convertStatusArticle } from "../../../@helpers/covert-enums";

//TODO: добавить обработку ошибок при удалении
//TODO: добавить модальное окно перед удалением

export default function SingleArticlePage() {
    const navigate = useNavigate();
    const params = useParams();

    const [data] = createResource(params.id, fetchArticleById);

    const handleDeleteClick = async () => {
        if (!params.id) return;
        const res = await deleteArticleById(params.id);
        if (res.ok) {
            navigate(Routers.Articles);
        } else {
            console.log(res);
        }
    };

    return (
        <BaseLayout>
            <div class="d-flex flex-column mb-3 ps-4 pe-4 ms-2 me-2">
                <ButtonBack />
                <Suspense fallback={<Spinner />}>
                    <div class="d-flex flex-row justify-content-between align-items-center">
                        {data() && <Caption mainText={data().title} />}
                        <div class="d-flex flex-row align-items-center gap-3">
                            <button
                                type="button"
                                class="btn btn-outline-primary align-self-center"
                                onClick={() =>
                                    navigate(Routers.EditArticle.replace(":id", params.id), {
                                        state: { id: params.id, article: data() },
                                    })
                                }
                            >
                                <i class="bi bi-pencil-fill" />
                            </button>
                            <button
                                type="button"
                                class="btn btn-outline-danger align-self-center"
                                onClick={handleDeleteClick}
                            >
                                <i class="bi bi-trash-fill" />
                            </button>
                        </div>
                    </div>

                    <table class="table">
                        <Show when={data()} fallback={<Spinner />}>
                            <tbody>
                                <tr>
                                    <th scope="row" style={{ width: "30%" }}>
                                        Название
                                    </th>
                                    <td>{data().title}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Авторы</th>
                                    <td>{data().authors}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Конференция</th>
                                    <td>{data().conference}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Индекс</th>
                                    <td>{data().indexation}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Год публикации</th>
                                    <td>{data().year}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Ссылка на открытый источник</th>
                                    <td>
                                        {data().linkArticle && (
                                            <A href={data().linkArticle}>Источник</A>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Ссылка на сборник</th>
                                    <td>
                                        {data().linkCollection && (
                                            <A href={data().linkCollection}>Сборник</A>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Статус</th>
                                    <td>{convertStatusArticle(data().status)}</td>
                                </tr>
                            </tbody>
                        </Show>
                    </table>
                    <div class="container-fluid p-2">
                        {data() && createBiblioRecord(TypeBiblio.ArticleFromCollection, data())}
                    </div>
                </Suspense>
            </div>
        </BaseLayout>
    );
}
