import { JSX, mergeProps } from "solid-js";
import "./button.scss";

export enum ButtonType {
    Default,
    Red,
    Yellow,
    Cyan,
    Green,
}

type Props = {
    type?: ButtonType;
    class?: string;
    onClick: () => void;
    children: JSX.Element | JSX.Element[];
};

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
            onClick={() => props.onClick}
            classList={{
                "button-purple": props.type === ButtonType.Default,
                "button-red": props.type === ButtonType.Red,
                "button-yellow": props.type === ButtonType.Yellow,
                "button-cyan": props.type === ButtonType.Cyan,
                "button-green": props.type === ButtonType.Green,
            }}
        >
            {props.children}
        </button>
    );
}
