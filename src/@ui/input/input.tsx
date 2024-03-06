import "./input.scss";

type Props = {
    class?: string;
    placeholder: string;
};

export default function Input(props: Props) {
    return <input class={`my-input ${props.class}`} placeholder={props.placeholder} />;
}
