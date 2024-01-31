import { Show, createEffect, createSignal, on } from "solid-js";
import { postArticle } from "../../api/api";
import { STATUS_ARTICLE, useForm } from "../../hooks/use-form";

export default function AddForm() {
  const currentYear = new Date().getFullYear();

  const [error, setError] = createSignal("");
  const [message, setMessage] = createSignal("");

  const { form, updateFormField, clearAllField } = useForm({
    title: "",
    year: String(currentYear),
    conference: "",
    status: STATUS_ARTICLE.PUBLISHED,
    link: "",
  });

  createEffect(on(message, () => setTimeout(() => setMessage(""), 10000)));

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    const res = await postArticle(form);

    if (res.status === 200) {
      setError("");
      clearAllField();
      setMessage("Запись успешно добавлена");
    } else {
      setError(`Error:${res.status} ${res.statusText}`);
      setMessage("");
    }
  };

  return (
    <div class="container-fluid text-start">
      <Show when={error()}>
        <div class="alert alert-danger" role="alert">
          {error()}
        </div>
      </Show>
      <Show when={message()}>
        <div class="alert alert-success" role="alert">
          {message()}
        </div>
      </Show>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="title-article-input" class="form-label">
            Название статьи
          </label>
          <input
            type="text"
            class="form-control"
            id="title-article-input"
            placeholder="Ваше название статьи"
            aria-describedby="emailHelp"
            onChange={updateFormField("title")}
            value={form.title}
            required
          />
          <div id="emailHelp" class="form-text">
            Мы никогда никому не передадим вашу электронную почту.
          </div>
        </div>
        <div class="mb-3">
          <label for="conference-article-input" class="form-label">
            Название конференции / журнала / сборника
          </label>
          <input
            type="text"
            class="form-control"
            id="conference-article-input"
            placeholder="Название конференции, журнала или сборника"
            onChange={updateFormField("conference")}
            value={form.conference}
            required
          />
        </div>
        <div class="mb-3">
          <label for="year-article-input" class="form-label">
            Год публикования
          </label>
          <input
            type="number"
            class="form-control"
            id="year-article-input"
            min={2000}
            max={currentYear + 1}
            value={form.year}
            onChange={updateFormField("year")}
            required
          />
        </div>
        <div class="mb-3">
          <label for="link-article-input" class="form-label">
            Ссылка на открытые источники
          </label>
          <input
            type="url"
            class="form-control"
            id="link-article-input"
            placeholder="https://...."
            onChange={updateFormField("link")}
            value={form.link}
          />
        </div>

        <div>
          <p class="form-label">Статус публикации</p>
          <div class="form-check">
            <input
              class="form-check-input "
              type="radio"
              name="flexRadioDefault"
              id="check-publish-input"
              onChange={updateFormField("status", STATUS_ARTICLE.PUBLISHED)}
              checked={form.status === STATUS_ARTICLE.PUBLISHED}
            />
            <label class="form-check-label" for="check-publish-input">
              Опубликована
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="check-add-publish-input"
              onChange={updateFormField("status", STATUS_ARTICLE.NOT_PUBLISHED)}
              checked={form.status === STATUS_ARTICLE.NOT_PUBLISHED}
            />
            <label class="form-check-label" for="check-add-publish-input">
              Принята к публикации
            </label>
          </div>
        </div>
        <div class="d-grid pt-3">
          <button type="submit" class="btn btn-success">
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
}
