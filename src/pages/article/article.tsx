import { useParams } from "@solidjs/router";
import { Show, Suspense } from "solid-js";
import BaseLayout from "../../layouts/base/base-layout";
import Spinner from "../../components/spinner/spinner";
import Caption from "../../components/caption/caption";
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
import { useDataInitContext } from "src/context/data-init-context";
import { IndexationTitles } from "src/@types/indexation";

//TODO: сделать модалочку с уведомлением
export default function SingleArticlePage() {
    const params = useParams();
    const { getArticleById } = useDataInitContext();

    const article = () => getArticleById(params.id);

    const biblioRecord = () => createBiblioRecord(TypeBiblio.ArticleFromCollection, article());

    const handleCopyClick = () => {
        navigator.clipboard.writeText(biblioRecord()).then(() => {
            alert("Текст скопирован");
        });
    };

    return (
        <BaseLayout>
            <div class="single-article">
                <Link direction="left" href={Routers.Articles} title="назад" />
                <LineSeparator title="общая информация" />

                <Suspense fallback={<Spinner />}>
                    <Show when={article()}>
                        <BubbleBlock>
                            <div class="bubble">
                                <Caption
                                    mainText={article().title}
                                    class="middle"
                                    padding="0 0 20px"
                                />
                                <ListRows>
                                    <Row description={`Авторы: ${article().authors}`} />
                                    <Row
                                        description={`Конференция/Сборник: ${article().conference}`}
                                    />
                                    <Row description={`Город публикации: ${article().city}`} />
                                    <Row description={`Издательство: ${article().title}`} />
                                    <Row description={`Год публикации: ${article().year}`} />
                                    <Row description={`Страницы: ${article().pages}`} />
                                </ListRows>
                                <div class="button-group">
                                    <Button
                                        classButton={buttonTypeByIndexation(article().indexation)}
                                    >
                                        {IndexationTitles[article().indexation]}
                                    </Button>
                                    <Button
                                        classButton={buttonTypeByArticleStatus(article().status)}
                                    >
                                        {convertStatusArticle(article().status)}
                                    </Button>
                                </div>
                            </div>
                        </BubbleBlock>
                    </Show>
                </Suspense>
                <LineSeparator title="библиографическая запись" />
                <BubbleBlock>
                    <Show when={article()}>
                        <div
                            class="bubble text copy-block"
                            title={"скопировать"}
                            onClick={handleCopyClick}
                        >
                            {biblioRecord()}
                        </div>
                    </Show>
                </BubbleBlock>
                <Show when={article() && article().linkArticle}>
                    <LineSeparator title="источник" />
                    <Row description={`сайт: ${article().linkArticle}`} id={1} />
                </Show>
            </div>
        </BaseLayout>
    );
}
