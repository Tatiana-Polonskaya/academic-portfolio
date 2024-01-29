import { A } from "@solidjs/router";
import { TCard } from "../../consts";

type Props = {
  card: TCard;
};

export default function Card(props: Props) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        src={props.card.thumbnailUrl}
        class="card-img-top"
        alt={props.card.title}
      />
      <div class="card-body">
        <p class="card-text">{props.card.title}</p>
        <A href={props.card.url} class="card-link" end>
          Подробнее <i class="bi bi-arrow-right" />
        </A>
      </div>
    </div>
  );
}
