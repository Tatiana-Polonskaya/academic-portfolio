import { Article } from "../../consts";

type Props = {
  article: Article;
};

export default function Row(props: Props) {
  return (
    <tr class="g-2">
      <td class="table-primary">{props.article.id}</td>
      <td class="table-primary">{props.article.title}</td>
      <td class="table-primary">{props.article.body}</td>
    </tr>
  );
}
