import "./line-separator.scss";
import Separator from "./../../../public/separator.svg";

type Props = {
    title: string;
};

// TODO: разобраться с svg

export default function LineSeparator(props: Props) {
    return (
        <div class="line-separator">
            <img class="img-right" src="separator.png" />
            <div class="title">{props.title}</div>
            <img class="img-left" src="separator.png" />
        </div>
    );
}
