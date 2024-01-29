import { Article } from "../../consts";
import { For } from "solid-js";
import Row from "../row/row";

type Props = {
  articles: Article[];
};

export default function ListRows(props: Props) {
  const titles = ["id", "title", "body"];

  return (
    <table class="table-primary table-hover table-bordered align-middle">
      <thead>
        <tr>
          <For each={titles}>{(title) => <th scope="col">{title}</th>}</For>
        </tr>
      </thead>
      <tbody>
        <For each={props.articles}>
          {(article) => <Row article={article} />}
        </For>
      </tbody>
    </table>
  );
}
