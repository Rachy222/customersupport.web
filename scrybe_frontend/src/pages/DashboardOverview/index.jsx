import React from "react";
import NewDesignSideBar from "../../components/NewDesignSidebar";
import LeaderBoard from "./components/LeaderBoard";
import RecentRecording from "./components/RecentRecording";
import TotalAnalysis from "./components/TotalAnalysis";
import TotalRecording from "./components/TotalRecording";
import styles from "./DashboardOverview.module.scss";
// import { LeaderboardData } from "./Data";
import TopNav from "../../components/TopNav";
import { useDashBoardData } from "./hooks/index";

function DashboardOverview() {
  const { recentRecording, totalAnalysis, totalRecording, leaderboard } =
    useDashBoardData();
  const [toggleSidebar, setToggleSidebar] = React.useState(false);
  const [setIsSearching] = React.useState("");

  const setterFn = (e) => {
    setIsSearching(e.target.value);
  };
  return (
    <div className={`${styles.dashboard_overviewParent} `}>
      <NewDesignSideBar
        toggleSidebar={toggleSidebar}
        needSearchMobile="needSearchMobile"
        getValue={(e) => setterFn(e)}
        closeSidebar={() => setToggleSidebar(!toggleSidebar)}
      >
        <div className={styles.dashboard_overviewCol}>
          <div className={styles.uploadedRecordingsSideBar}>
            <TopNav
              openSidebar={() => {
                setToggleSidebar(!toggleSidebar);
              }}
              search={(e) => setterFn(e)}
            />
          </div>
          <section className={styles.dashboard_overview}>
            <div className={styles.container}>
              <TotalRecording totalRecordingData={totalRecording} />
              <TotalAnalysis totalAnalysisData={totalAnalysis} />
              <LeaderBoard LeaderboardData={leaderboard} />
            </div>
            <RecentRecording recentRecording={recentRecording} />
          </section>
        </div>
      </NewDesignSideBar>
    </div>
  );
}

export default DashboardOverview;
