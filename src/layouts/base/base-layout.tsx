import { Show, children } from "solid-js";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ContactBlock from "../../components/contact-block/contact-block";
import "./base-layout.scss";

export default function BaseLayout(props) {
    const resolved = children(() => props.children);
    return (
        <div class="my-base-layout">
            <Header />
            <div class="content">{resolved()}</div>
            <Show when={props.isContact}>
                <ContactBlock />
            </Show>
            <Footer />
        </div>
    );
}
