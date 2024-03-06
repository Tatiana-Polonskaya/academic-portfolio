import { JSX } from "solid-js";
import "./list-rows.scss";

type Props = {
    children: JSX.Element | JSX.Element[];
};

export default function ListRows(props: Props) {
    return <div class="list-rows-table">{props.children}</div>;
}
