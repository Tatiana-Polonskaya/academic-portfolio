import { Article } from "../../consts";
import { For } from "solid-js";
import Row from "../row/row";

type Props = {
  articles: Article[];
};

//TODO: добавить цвет в зависимости от статуса
//TODO: сделать получение названий таблицы с бека

export default function ListRows(props: Props) {
  const titles = ["№", "Название", "Конференция", "Год"];

  return (
    <table class="table table-striped table-hover align-middle">
      <thead>
        <tr>
          <For each={titles}>{(title) => <th scope="col">{title}</th>}</For>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <For each={props.articles}>
          {(article, id) => <Row id={id() + 1} article={article} />}
        </For>
      </tbody>
    </table>
  );
}
