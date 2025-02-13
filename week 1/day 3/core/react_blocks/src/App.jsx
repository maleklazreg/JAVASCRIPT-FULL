import "./App.css";
import Header from "./header";
import Navigation from "./Navigation";
import MainContent from "./Maincontent";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content_wrapper">
        <Navigation />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
