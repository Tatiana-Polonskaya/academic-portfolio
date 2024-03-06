import { JSX } from "solid-js";
import "./buble-block.scss";

type Props = {
    class?: string;
    children: JSX.Element | JSX.Element[];
};

export default function BubbleBlock(props: Props) {
    return <div class={`buble-block ${props.class}`}>{props.children}</div>;
}
