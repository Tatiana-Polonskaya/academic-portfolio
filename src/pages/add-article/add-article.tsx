import Caption from "../../components/caption/caption";
import BaseLayout from "../../layouts/base/base-layout";

// FIX: переделать согласно Solidjs

export default function AddArticle() {
  return (
    <BaseLayout>
      <div class="container-lg text-center">
        <Caption mainText={"Создание новой записи"} />
        <div class="container-fluid text-start">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Адрес электронной почты
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                Мы никогда никому не передадим вашу электронную почту.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Адрес электронной почты
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Пример текстового поля
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Проверить меня
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </BaseLayout>
  );
}
