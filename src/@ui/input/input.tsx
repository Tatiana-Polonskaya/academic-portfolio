import { JSX } from "solid-js";
import "./input.scss";

type Props = {
    class?: string;
    onChange?: (text: string) => void;
} & JSX.InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: Props) {
    return (
        <input
            class={`my-input ${props.class}`}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.onChange?.(e.target.value)}
        />
    );
}
