import { A } from "@solidjs/router";
import { Routers } from "../../consts";
import "./header.scss";

export default function Header() {
    return (
        <nav class="my-header">
            <div class="block-title">
                <a class="brand">
                    <i class="bi bi-mortarboard" />
                </a>
                <a class="brand">Мое портфолио</a>
            </div>

            {/* <i class="bi bi-list"/> */}

            <ul class="links">
                <A class="link" href={Routers.Main} activeClass="active" end>
                    Дашборд
                </A>
                <A class="link" href={Routers.Articles} activeClass="active">
                    Статьи
                </A>
                <A class="link" href={Routers.Achievements} activeClass="active" end>
                    Дипломы
                </A>
            </ul>
        </nav>
    );
}
