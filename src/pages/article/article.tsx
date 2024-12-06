import { A, useNavigate, useParams } from "@solidjs/router";
import { Show, Suspense, createEffect, createResource, createSignal, on } from "solid-js";
import { deleteArticleById, fetchArticleById } from "../../@api/api";
import BaseLayout from "../../layouts/base/base-layout";
import Spinner from "../../components/spinner/spinner";
import Caption from "../../components/caption/caption";
import ButtonBack from "../../components/button-back/button-back";
import { Routers } from "../../consts";
import { TypeBiblio, createBiblioRecord } from "../../@helpers/bibliographic-record";
import { convertStatusArticle } from "../../@helpers/covert-enums";
import Link from "../../@ui/link/link";
import BubbleBlock from "../../@ui/buble-block/buble-block";

import "./article.scss";
import LineSeparator from "../../components/line-separator/line-separator";
import Row from "../../components/row/row";
import ListRows from "../../components/list-rows/list-rows";
import Button from "../../@ui/button/button";
import {
    buttonTypeByArticleStatus,
    buttonTypeByIndexation,
} from "../../@helpers/color-by-parametres";

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
            <div class="single-article">
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
                                        description={`Авторы: ${data().authors}`}
                                        onClick={() => {}}
                                    />
                                    <Row
                                        description={`Сборник: ${data().conference}`}
                                        onClick={() => {}}
                                    />
                                    <Row
                                        description={`Город публикации: ${data().index}`}
                                        onClick={() => {}}
                                    />
                                    <Row
                                        description={`Издательство: ${data().title}`}
                                        onClick={() => {}}
                                    />
                                    <Row
                                        description={`Год публикации: ${data().year}`}
                                        onClick={() => {}}
                                    />
                                    <Row
                                        description={`Страницы: ${data().pages}`}
                                        onClick={() => {}}
                                    />
                                </ListRows>
                                <div class="button-group">
                                    <Button
                                        classButton={buttonTypeByIndexation(data().indexation)}
                                        onClick={() => {}}
                                    >
                                        {data().indexation}
                                    </Button>
                                    <Button
                                        classButton={buttonTypeByArticleStatus(data().status)}
                                        onClick={() => {}}
                                    >
                                        {convertStatusArticle(data().status)}
                                    </Button>
                                </div>
                            </div>
                        </BubbleBlock>
                    </Show>
                </Suspense>
                <LineSeparator title="библиографическая запись" />
                <BubbleBlock>
                    <div class="bubble text copy-block" title={"скопировать"}>
                        <Show when={data()} fallback={<Spinner />}>
                            {createBiblioRecord(TypeBiblio.ArticleFromCollection, data())}
                        </Show>
                    </div>
                </BubbleBlock>
                <LineSeparator title="источник" />
                <Show when={data()} fallback={<Spinner />}>
                    <Row description={`сайт: ${data().linkArticle}`} id={1} onClick={() => {}} />
                </Show>
            </div>
        </BaseLayout>
    );
}
