import { A } from "@solidjs/router";
import { Routers } from "../../consts";

export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <i class="bi bi-github" />
                </a>
                <a class="navbar-brand" href="#">
                    Главная
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Переключатель навигации"
                >
                    <span class="navbar-toggler-icon" />
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <A class="nav-link" href={Routers.Main} activeClass="active" end>
                                Главная
                            </A>
                        </li>
                        <li class="nav-item">
                            <A class="nav-link" href={Routers.Articles} activeClass="active">
                                Посты
                            </A>
                        </li>

                        <li class="nav-item">
                            <A
                                class="nav-link"
                                href={Routers.Achievements}
                                activeClass="active"
                                end
                            >
                                Карточки
                            </A>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
