import BubbleBlock from "../buble-block/buble-block";
import "./info-buble.scss";

type Props = {
    title: string | number;
    description: string;
    class?:  string;
};

export default function InfoBuble(props: Props) {
    return (
        <BubbleBlock class={props.class}>
            <div class="info-buble">
                <h1 class="info-buble-main">{`${props.title}`}</h1>
                <h3 class="info-buble-description">{props.description}</h3>
            </div>
        </BubbleBlock>
    );
}
