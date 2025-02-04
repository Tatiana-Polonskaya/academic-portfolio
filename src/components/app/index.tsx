import { Router, Route } from "@solidjs/router";
import { lazy } from "solid-js";
import { Routers } from "../../consts";
import SingleArticlePage from "../../pages/article/article";
import ArticlesPage from "../../pages/articles/articles";

import AchievementPage from "../../pages/achievement/achievement";
import AchievementsPage from "../../pages/achievements/achievements";
import { DataInitProvider } from "../../context/data-init-context";
import ClearPage from "src/pages/clear-page";

const MainPage = lazy(() => import("../../pages/main/main"));

export default function App() {
    return (
        <DataInitProvider>
            <Router>
                <Route path={Routers.Main} component={MainPage} />
                <Route path={Routers.Article} component={SingleArticlePage} />
                <Route path={Routers.Articles} component={ArticlesPage} />
                <Route path={Routers.Achievements} component={AchievementsPage} />
                <Route path={Routers.Achievement} component={AchievementPage} />
                {/* <Route path={'/clear'} component={ClearPage} /> */}
            </Router>
        </DataInitProvider>
    );
}
