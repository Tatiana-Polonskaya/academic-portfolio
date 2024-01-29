import { Article } from "../../consts";

type Props = {
  article: Article;
};

export default function Row(props: Props) {
  return (
    <tr class="g-2" style={{ cursor: "pointer" }}>
      <td>{props.article.id}</td>
      <td>{props.article.title}</td>
      <td>{props.article.body}</td>
    </tr>
  );
}
