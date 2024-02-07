import { A, useNavigate, useParams } from "@solidjs/router";
import { Suspense, createResource } from "solid-js";
import { deleteArticleById, fetchArticleById } from "../../../api/api";
import BaseLayout from "../../../layouts/base/base-layout";
import Spinner from "../../../components/spinner/spinner";
import Caption from "../../../components/caption/caption";
import ButtonBack from "../../../components/button-back/button-back";
import { Routers } from "../../../consts";
import { TypeBiblio, createBiblioRecord } from "../../../@helpers/bibliographic-record";

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
                    <div class="container-fluid p-2">
                        {data() && createBiblioRecord(TypeBiblio.ArticleFromCollection, data())}
                    </div>
                </Suspense>
            </div>
        </BaseLayout>
    );
}
