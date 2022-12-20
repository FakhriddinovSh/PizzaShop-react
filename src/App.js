import "./App.css";
import "./Assets/Fonts/fonts.scss";
import "./Assets/Style/index.scss";
import "./Assets/Style/index.scss";
import { Orders } from "./Components/Orders/Orders";
import { Sidebar } from "./Components/Sh-SideBar/Sh-Sidebar";
import { MainTop } from "./Components/Sh-mainTop/Sh-mainTop";
import { MainTopMenu } from "./Components/Sh-mainTopMenu/Sh-mainTopMenu";

function App() {
  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div
          style={{
            backgroundColor: "#252836",
            paddingLeft: "10px",
            paddingRight: "38px",
          }}>
          <MainTop />
          <MainTopMenu />
        </div>
        {<Orders />}
      </div>
    </>
  );
}

export default App;
