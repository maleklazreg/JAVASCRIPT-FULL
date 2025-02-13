import Advertisement from "./Advertisment";
import Subcontent from "./Subcontent";

function MainContent() {
  return (
    <main className="main_content">
      <div className="subcontent_container">
        <Subcontent />
        <Subcontent />
        <Subcontent />
      </div>
      <Advertisement />
    </main>
  );
}

export default MainContent;
