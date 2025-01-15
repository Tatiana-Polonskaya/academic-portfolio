import "./style.scss";
import { createMemo, useContext } from "solid-js";
import Dot from "../dot/dot";
import { SliderContext } from "../slider";

export default function Dots() {
    const { items } = useContext(SliderContext);

    const renderDots = createMemo(() => {
        console.log("memo");
        
        const dots = [];
        for (let i = 0; i < items().length; i++) {
            dots.push(<Dot number={i} />);
        }
        return dots;
    });

    return <div class="dots">{renderDots()}</div>;
}
