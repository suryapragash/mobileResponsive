import "./App.css";
import Head from "./components1/header/header";
// import Crud from "./component2/copy";
// import Cruddd from "./component2/crud";
// import Head from "./components1/header/header";
import Content from "./components1/content/content";
import Tail from "./components1/header/header2";
import Swipe from "./components1/header/swipe";
import Fooder from "./components1/header/fooder";

function App() {
  return (
    <div className="App">
      <Head />
      <Content />
      <Tail />
      <Swipe />
      <Fooder />
      {/* <h1>Hello Surya</h1>
      <Crud />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Cruddd /> */}
    </div>
  );
}

export default App;
