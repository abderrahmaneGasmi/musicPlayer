import Leftbar from "./components/Leftbar";
import Main from "./components/Main";
import Rightbar from "./components/Rightbar";
import "./styles/app.css";
function App() {
  return (
    <div className="main">
      <Leftbar />
      <Main />
      <Rightbar />
    </div>
  );
}

export default App;
