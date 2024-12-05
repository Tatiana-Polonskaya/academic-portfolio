import { A, useNavigate, useParams } from "@solidjs/router";
import { createResource, Show, Suspense } from "solid-js";
import { fetchAchievementById } from "../../@api/api";
import BaseLayout from "../../layouts/base/base-layout";
import Spinner from "../../components/spinner/spinner";
import Caption from "../../components/caption/caption";
import { Routers } from "../../consts";
import Link from "../../@ui/link/link";
import LineSeparator from "../../components/line-separator/line-separator";
import Row from "../../components/row/row";
import BubbleBlock from "../../@ui/buble-block/buble-block";
import ListRows from "../../components/list-rows/list-rows";

export default function AchievementPage() {
    const navigate = useNavigate();
    const params = useParams();

    const [data] = createResource(params.id, fetchAchievementById);

    const handleDeleteClick = () => {
        console.log("click");
    };

    return (
        <BaseLayout>
            <div>
                <Link direction="left" href={Routers.Articles} title="назад" />
                <LineSeparator title="общая информация" />
                <Suspense fallback={<Spinner />}>
                    <Show when={data()}>
                        <BubbleBlock>
                            <div class="bubble">
                                <Caption
                                    mainText={data().title}
                                    fontSize="24px"
                                    padding="0 0 20px"
                                />
                                <ListRows>
                                    <Row
                                        description={`Авторы: ${data().reward}`}
                                        onClick={() => {}}
                                    />
                                    <Row
                                        description={`Сборник: ${data().level}`}
                                        onClick={() => {}}
                                    />
                                    <Row
                                        description={`Город публикации: ${data().date}`}
                                        onClick={() => {}}
                                    />
                                    <Row
                                        description={`Издательство: ${data().title}`}
                                        onClick={() => {}}
                                    />
                                    
                                </ListRows>
                                <div class="button-group">
                                    {/* <Button
                                        type={buttonTypeByIndexation(data().indexation)}
                                        onClick={() => {}}
                                    >
                                        {data().indexation}
                                    </Button>
                                    <Button
                                        type={buttonTypeByArticleStatus(data().status)}
                                        onClick={() => {}}
                                    >
                                        {convertStatusArticle(data().status)}
                                    </Button> */}
                                </div>
                            </div>
                        </BubbleBlock>
                    </Show>
                </Suspense>
                <LineSeparator title="источник" />
                <Show when={data()} fallback={<Spinner />}>
                    <Row description={`сайт: ${data().event_link}`} onClick={() => {}} />
                </Show>
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
