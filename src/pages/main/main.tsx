import { A } from "@solidjs/router";
import { Routers } from "../../consts";
import Counter from "../../components/counter/counter";
import BaseLayout from "../../layouts/base/base-layout";

export default function MainPage() {
  return (
    <BaseLayout>
      <A href={Routers.Cards}>Go to contact</A>
      <div>
        <A href={Routers.Article.replace(":id", "1")}>Go to article 1</A>
      </div>
      <Counter />
    </BaseLayout>
  );
}
