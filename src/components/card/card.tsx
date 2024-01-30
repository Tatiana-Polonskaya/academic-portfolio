import { A } from "@solidjs/router";
import { Achievement, Routers } from "../../consts";

type Props = {
  achievement: Achievement;
};

export default function Card(props: Props) {
  return (
    <div class="card" style={{ width: "15rem" }}>
      <img
        src={props.achievement.img}
        class="card-img-top"
        alt={props.achievement.title}
      />
      <div class="card-body">
        <p class="card-text">{props.achievement.title}</p>
        <A
          href={Routers.Achievement.replace(":id", props.achievement.index)}
          class="card-link"
          end
        >
          Подробнее <i class="bi bi-arrow-right" />
        </A>
      </div>
    </div>
  );
}
