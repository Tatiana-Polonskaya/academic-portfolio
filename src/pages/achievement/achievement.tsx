import { A, useNavigate, useParams } from "@solidjs/router";
import { createResource, Show } from "solid-js";
import { fetchAchievementById } from "../../@api/api";
import BaseLayout from "../../layouts/base/base-layout";
import ButtonBack from "../../components/button-back/button-back";
import Spinner from "../../components/spinner/spinner";
import Caption from "../../components/caption/caption";
import { Routers } from "../../consts";

export default function AchievementPage() {
    const navigate = useNavigate();
    const params = useParams();

    const [data] = createResource(params.id, fetchAchievementById);

    const handleDeleteClick = () => {
        console.log("click");
    };

    return (
        <BaseLayout>
            <div class="d-flex flex-column mb-3 ps-4 pe-4 ms-2 me-2">
                <ButtonBack />
                <Show when={data()} fallback={<Spinner />}>
                    <div class="d-flex flex-row justify-content-between align-items-center">
                        {data() && <Caption mainText={data().title} />}
                        <div class="d-flex flex-row align-items-center gap-3">
                            <button
                                type="button"
                                class="btn btn-outline-primary align-self-center"
                                onClick={() =>
                                    navigate(Routers.EditAchievement.replace(":id", params.id), {
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
                    <div class="d-flex flex-row justify-content-between align-items-start gap-5">
                        <div>
                            <img
                                src={data().img}
                                style={{ "min-width": "200px", "max-width": "350px" }}
                            />
                        </div>
                        <div style={{ "flex-grow": 1 }}>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <th scope="row" style={{ width: "30%" }}>
                                            Название
                                        </th>
                                        <td>{data().title}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Уровень</th>
                                        <td>{data().level}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Степень</th>
                                        <td>{data().reward}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Дата</th>
                                        <td>{data().date}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Ссылка на диплом</th>
                                        <td>
                                            {data().diploma_link && (
                                                <A href={data().diploma_link}>Диплом</A>
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Ссылка на сайт мероприятия</th>
                                        <td>
                                            {data().event_link && (
                                                <A href={data().event_link}>Мероприятие</A>
                                            )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Show>
            </div>
        </BaseLayout>
    );
}
