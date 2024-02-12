import { createStore } from "solid-js/store";
import { Article, FormArticle } from "../@types/article";

export enum ARTICLE_STATUS {
    PUBLISHED = 1,
    NOT_PUBLISHED = 0,
}

// FIX: изменить и сделать универсальным для всех типов форм

function useForm(initial: FormArticle) {
    const [form, setForm] = createStore<FormArticle | Article>(initial);

    const clearField = (fieldName: string, clearValue: string | number) => {
        setForm({
            [fieldName]: clearValue,
        });
    };

    const clearAllField = () => {
        setForm({
            title: "",
            year: "2022",
            conference: "",
            status: ARTICLE_STATUS.PUBLISHED,
            linkArticle: "",
            linkCollection: "",
            authors: "",
            indexation: 0,
            pages: "",
        }); //  пофиксить
    };

    const updateFormField = (fieldName: string, value?: string | number) => (event: Event) => {
        const inputElement = event.currentTarget as HTMLInputElement;
        // console.log("value", value);
        setForm({
            [fieldName]: value !== undefined ? value : inputElement.value,
        });
    };

    return { form, updateFormField, clearField, clearAllField };
}

export { useForm };
