import { Article } from "src/@types/article";

import "./article-mini-table.scss";
import { For } from "solid-js";
import { createBiblioRecord, TypeBiblio } from "src/@helpers/bibliographic-record";

type Props = {
    articles: Article[];
};

export const ArticleMiniTable = (props: Props) => {
    return (
        <div class="article-mini-table">
            <For each={props.articles}>
                {(elem, id) => (
                    <div class="row">
                        {id() + 1}. {createBiblioRecord(TypeBiblio.ArticleFromCollection, elem)}
                    </div>
                )}
            </For>
        </div>
    );
};
