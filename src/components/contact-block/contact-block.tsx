import "./contact-block.scss";

export default function ContactBlock() {
    const email = import.meta.env.VITE_mail_contact;

    return (
        <div class="contact-block">
            <p class="title">Связаться со мной:</p>
            <div class="row-grow">
                <a href={`mailto:${email}`} class="btn">
                    Почта
                    <i class="bi bi-envelope" />
                </a>
                <a href={`https://t.me/${import.meta.env.VITE_telegram_name}`} class="btn">
                    Телеграм
                    <i class="bi bi-telegram" />
                </a>
            </div>
        </div>
    );
}
