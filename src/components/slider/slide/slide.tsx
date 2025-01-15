import "./style.scss";

type Props = {
    img: string;
    title: string;
};

export default function Slide(props: Props) {
    return (
        <div class="slide">
            <img src={props.img} alt={props.title} class="slide-image" />
            <div class="slide-title">{props.title}</div>
        </div>
    );
}
