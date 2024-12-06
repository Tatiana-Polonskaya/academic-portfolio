import "./line-separator.scss";

type Props = {
    title: string;
};

export default function LineSeparator(props: Props) {
    return (
        <div class="line-separator">
            <img class="img-right" src="/separator.png" />
            <div class="title">{props.title}</div>
            <img class="img-left" src="/separator.png" />
        </div>
    );
}
