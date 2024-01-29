import { Router, Route } from "@solidjs/router";
import { lazy } from "solid-js";
import { Routers } from "../../consts";
import SingleArticlePage from "../../pages/articles/single/article";
import ArticlesPage from "../../pages/articles/articles";
import CardsPage from "../../pages/cards/cards-page";
import AddArticle from "../../pages/add-article/add-article";

const MainPage = lazy(() => import("../../pages/main/main"));

export default function App() {
  return (
    <Router>
      <Route path={Routers.Main} component={MainPage} />
      <Route path={Routers.Article} component={SingleArticlePage} />
      <Route path={Routers.Articles} component={ArticlesPage} />
      <Route path={Routers.AddArticle} component={AddArticle} />
      <Route path={Routers.Cards} component={CardsPage} />
    </Router>
  );
}
