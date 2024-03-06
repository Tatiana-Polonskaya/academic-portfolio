import "./contact-block.scss";

export default function ContactBlock() {
    return (
        <div class="contact-block">
            <p class="title">Связаться со мной</p>
            <div class="row-grow">
                <button class="btn">
                    <i class="bi bi-envelope" />
                    почта
                </button>
                <button class="btn">
                    <i class="bi bi-telegram" />
                    телеграм
                </button>
                <div class="form">
                    <input class="input"  placeholder="youremail@mail.com"/>
                    <i class="bi bi-arrow-right" />
                </div>
            </div>
        </div>
    );
}
