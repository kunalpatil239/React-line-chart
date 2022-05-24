import { useState } from "react";
import BarChart from "./components/BarChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Avg Sleep (Minutes)",
        data: UserData.map((data) => data.userGain),
        borderColor: "skyblue",
        tension: 0.5,
        pointRadius: 5,
        pointBackgroundColor: "white",
        pointHoverBackgroundColor: "white",
        pointBorderWidth: "3",
      },
    ],
  });
  return (
    <div style={{ backgroundColor: "lightgray", height: "100vh" }}>
      <h3
        style={{
          textTransform: "uppercase",
          padding: "2rem 4rem",
          fontWeight: "500",
        }}
      >
        Average Sleep of organization Day wise
      </h3>
      <div
        className="lineChart"
        // style={{
        //   padding: "1rem",
        //   backgroundColor: "white",
        //   width: "100vw",
        //   // margin: "auto",
        //   height: "80vh",
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        // }}
      >
        <BarChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
