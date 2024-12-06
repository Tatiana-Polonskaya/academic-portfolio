import { JSX, mergeProps } from "solid-js";
import { ButtonType } from "./type";
import "./button.scss";

type Props = {
    classButton?: ButtonType;
    class?: string;
    children: JSX.Element | JSX.Element[];
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(_props: Props) {
    const props = mergeProps(
        {
            type: ButtonType.Default,
            children: null,
        },
        _props,
    );
    return (
        <button
            class={`button ${props.class || ""}`}
            onClick={props.onClick}
            classList={{
                "button-purple": props.classButton === ButtonType.Default,
                "button-red": props.classButton === ButtonType.Red,
                "button-yellow": props.classButton === ButtonType.Yellow,
                "button-cyan": props.classButton === ButtonType.Cyan,
                "button-green": props.classButton === ButtonType.Green,
            }}
        >
            {props.children}
        </button>
    );
}
