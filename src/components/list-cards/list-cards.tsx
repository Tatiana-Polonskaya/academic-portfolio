import { For } from "solid-js";
import Card from "../card/card";
import { TCard } from "../../consts";

type Props = {
  cards: TCard[];
};

export default function ListCards(props: Props) {
  return (
    <div class="row justify-content-center  gap-3 text-center">
      <For each={props.cards}>{(item) => <Card card={item} />}</For>
    </div>
  );
}
