// import Task from "./component2/tasks2";
//import Bootstrap from "./components/boot";
import Head from "./components1/header/header";
import Content from "./components1/content/content";
import Tail from "./components1/header/header2";
import Swipe from "./components1/header/swipe";
import Fooder from "./components1/header/fooder";
import "./App.css";

function App() {
  return (
    <div className="App  ">
      {/* <Task /> */}
      {/* <Bootstrap /> */}
      <Head />
      <Content />
      <Tail />
      <Swipe />
      <Fooder />
    </div>
  );
}

export default App;
