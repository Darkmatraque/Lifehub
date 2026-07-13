import PageContainer from "../components/layout/PageContainer";

import DashboardHero from "../components/dashboard/DashboardHero";
import DashboardStats from "../components/dashboard/DashboardStats";
import DailyQuote from "../components/dashboard/DailyQuote";
import TodayTasks from "../components/dashboard/TodayTasks";
import QuickActions from "../components/dashboard/QuickActions";

export default function Dashboard() {

    return (

        <PageContainer>

            <DashboardHero />

            <DashboardStats />

            <div className="dashboard-bottom">

                <DailyQuote />

                <TodayTasks />

            </div>

            <QuickActions />

        </PageContainer>

    );

}
