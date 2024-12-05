import { For, Show, createEffect, createSignal, mergeProps, on, onMount } from "solid-js";
import { getIndexation, postArticle, putArticle } from "../../@api/api";
import { ARTICLE_STATUS, useForm } from "../../@hooks/use-form";
import { useNavigate } from "@solidjs/router";
import { FormArticle } from "../../@types/article";
import { TIndexation } from "../../@types/indexation";

const currentYear = new Date().getFullYear();

const initialForm: FormArticle = {
    title: "",
    year: "2023",
    conference: "",
    status: ARTICLE_STATUS.PUBLISHED,
    linkArticle: "",
    linkCollection: "",
    authors: "",
    indexation: 0,
    pages: "",
};

type Props = {
    formData?: FormArticle;
    isEdit?: boolean;
    id?: string;
};

const successEditText = "Запись обновлена!";
const successAddText = "Запись успешно добавлена!";

export default function ArticleForm(_props: Props) {
    const [indexations, setIndexations] = createSignal<TIndexation[]>([]);

    onMount(async () => {
        const temp = await getIndexation();
        if (temp) setIndexations(temp);
    });

    const props = mergeProps({ formData: initialForm, isEdit: false, id: "" }, _props);

    const navigate = useNavigate();

    const [error, setError] = createSignal("");
    const [message, setMessage] = createSignal("");

    // eslint-disable-next-line solid/reactivity
    const { form, updateFormField, clearAllField } = useForm(props.formData);

    createEffect(
        on(message, () =>
            setTimeout(() => {
                setMessage("");
                navigate(-1);
            }, 10000),
        ),
    );

    const handleSubmit = async (event: Event) => {
        event.preventDefault();

        const res = props.isEdit ? await putArticle(props.id, form) : await postArticle(form);

        if (res.status === 200) {
            setError("");
            clearAllField();
            setMessage(props.isEdit ? successEditText : successAddText);
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
                        onChange={updateFormField("linkArticle")}
                        value={form.linkArticle}
                    />
                </div>
                <div class="mb-3">
                    <label for="link-article-input" class="form-label">
                        Ссылка на сборник
                    </label>
                    <input
                        type="url"
                        class="form-control"
                        id="link-article-input"
                        placeholder="https://...."
                        onChange={updateFormField("linkCollection")}
                        value={form.linkCollection}
                    />
                </div>

                <div class="mb-3">
                    <label for="authors-article-input" class="form-label">
                        Авторы
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="authors-article-input"
                        placeholder="Перечислите всех авторов"
                        onChange={updateFormField("authors")}
                        value={form.authors}
                    />
                    <div id="emailHelp" class="form-text">
                        Иванов В.В., Петров П.П. и др.
                    </div>
                </div>

                <div class="mb-3">
                    <label for="authors-article-input" class="form-label">
                        Номера страниц через дефис
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="authors-article-input"
                        placeholder="33-42"
                        onChange={updateFormField("pages")}
                        value={form.pages}
                    />
                </div>
                <div>
                    <p class="form-label">Индексирование</p>
                    <For each={indexations()}>
                        {(item) => (
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="check-indexation-input"
                                    onChange={updateFormField("indexation", item.id)}
                                    checked={form.indexation === item.id}
                                />
                                <label class="form-check-label" for="check-indexation-input">
                                    {item.title}
                                </label>
                            </div>
                        )}
                    </For>
                </div>

                <div>
                    <p class="form-label">Статус публикации</p>
                    <div class="form-check-3">
                        <input
                            class="form-check-input "
                            type="radio"
                            name="flexRadioDefault"
                            id="check-publish-input"
                            onChange={updateFormField("status", ARTICLE_STATUS.PUBLISHED)}
                            checked={form.status === ARTICLE_STATUS.PUBLISHED}
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
                            onChange={updateFormField("status", ARTICLE_STATUS.NOT_PUBLISHED)}
                            checked={form.status === ARTICLE_STATUS.NOT_PUBLISHED}
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
