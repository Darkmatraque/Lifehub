import PageContainer from "../components/layout/PageContainer";

import DashboardHero from "../components/dashboard/DashboardHero";

import DashboardStats from "../components/dashboard/DashboardStats";

export default function Dashboard() {

    return (

        <PageContainer>

            <DashboardHero />

            <DashboardStats />

        </PageContainer>

    );

}
