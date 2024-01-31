import { createStore } from "solid-js/store";
import { Achievement, Article } from "../consts";

export enum STATUS_ARTICLE {
  PUBLISHED = 1,
  NOT_PUBLISHED = 0,
}

export type FormArticle = Omit<Article, "index">;
export type FormAchievement = Omit<Achievement, "index">;

function useForm(initial: FormArticle) {
  const [form, setForm] = createStore<FormArticle>(initial);

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
      status: STATUS_ARTICLE.PUBLISHED,
      link: "",
    });
  };

  const updateFormField =
    (fieldName: string, value?: string | number) => (event: Event) => {
      const inputElement = event.currentTarget as HTMLInputElement;
      console.log("value", value);
      setForm({
        [fieldName]: value !== undefined ? value : inputElement.value,
      });
    };

  return { form, updateFormField, clearField, clearAllField };
}

export { useForm };
