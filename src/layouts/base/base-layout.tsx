import { children } from "solid-js";
// import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

export default function BaseLayout(props) {
  const resolved = children(() => props.children);
  return (
    <div class="container-fluid">
      <Header />
      <div class="container-fluid">{resolved()}</div>
      <Footer />
    </div>
  );
}
