import { For } from "solid-js";
import Row from "../row/row";
import { Article } from "../../@types/article";
import "./list-rows.scss";

type Props = {
    articles: Article[];
};

export default function ListRows(props: Props) {
    return (
        <div class="list-rows-table">
            <For each={props.articles}>
                {(article, id) => <Row id={id() + 1} article={article} />}
            </For>
        </div>
    );
}
