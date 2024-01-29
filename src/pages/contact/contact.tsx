import "./style.css";
import BaseLayout from "../../layouts/base/base-layout";
import ListCards from "../../components/list-cards/list-cards";
import { fetchImages } from "../../api/api";
import { createResource } from "solid-js";

export default function ContactPage() {
  const [data] = createResource(true, fetchImages);
  return (
    <BaseLayout>
      <p>ContactPage</p>
      <div class="container-fluid">
        <ListCards cards={data()} />
      </div>
    </BaseLayout>
  );
}
