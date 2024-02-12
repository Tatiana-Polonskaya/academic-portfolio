import "./style.css";
import BaseLayout from "../../layouts/base/base-layout";
import ListCards from "../../components/list-cards/list-cards";
import { fetchAchievements } from "../../@api/api";
import { Suspense, createResource } from "solid-js";
import Caption from "../../components/caption/caption";
import ControlPanel from "../../components/control-panel/control-panel";
import Spinner from "../../components/spinner/spinner";
import { Routers } from "../../consts";

export default function AchievementsPage() {
    const [data] = createResource(true, fetchAchievements);

    const sortedOptions = [
        {
            id: 0,
            title: "Сначала новые",
            onClick: () => {
                console.log("Сначала новые");
            },
        },
        {
            id: 1,
            title: "Сначала поздние",
            onClick: () => {
                console.log("Сначала поздние");
            },
        },
    ];

    const handleSearchClick = (value: string) => {};

    return (
        <BaseLayout>
            <div class="container-lg px-9 text-center">
                <Caption mainText={"Дипломы"} />
                <ControlPanel
                    onFilterClick={() => {}}
                    onSearchClick={handleSearchClick}
                    sortedOptions={sortedOptions}
                    addLink={Routers.AddAchievement}
                />
                <Suspense fallback={<Spinner />}>
                    <ListCards achievements={data()} />
                </Suspense>
            </div>
        </BaseLayout>
    );
}
