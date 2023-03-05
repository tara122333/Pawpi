import DefaultHOC from "./HOC/DefaultHOC";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage}/>
    </>
  );
};

export default App;
