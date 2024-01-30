import { For } from "solid-js";
import Card from "../card/card";
import { Achievement } from "../../consts";

type Props = {
  achievements: Achievement[];
};

export default function ListCards(props: Props) {
  return (
    <div class="row justify-content-center gap-3 text-center">
      <For each={props.achievements}>
        {(item) => <Card achievement={item} />}
      </For>
    </div>
  );
}
