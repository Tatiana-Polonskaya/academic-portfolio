import { A } from "@solidjs/router";
import "./footer.scss";

export default function Footer() {
    const year = new Date().getFullYear();
    const githubLink = "https://github.com/Tatiana-Polonskaya/academic-portfolio";

    return (
        <footer class="my-footer">
            <table>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            Веб-портфолио академических достижений студентки Татьяны Полонской за
                            2020-2024 гг.
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            Репозиторий проекта:{" "}
                            <A class="link" href={githubLink}>
                                GitHub
                            </A>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Дизайн и разработка:{" "}
                            <A class="link" href="">
                                Татьяна Полонская
                            </A>
                        </td>
                        <td style={{ "text-align": "end" }}>{year}</td>
                    </tr>
                </tbody>
            </table>
        </footer>
    );
}
