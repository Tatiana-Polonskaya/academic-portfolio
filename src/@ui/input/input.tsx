import { JSX } from "solid-js";
import "./input.scss";

type Props = {
    class?: string;
    onChange?: (text: string) => void;
} & JSX.InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: Props) {
    return (
        <div class={`div-input ${props.class || ""}`}>
            <input
                class={`string-input`}
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e) => props.onChange?.(e.target.value)}
            />
            <i class="bi bi-backspace pointer" onClick={() => props.onChange?.("")} />
        </div>
    );
}
