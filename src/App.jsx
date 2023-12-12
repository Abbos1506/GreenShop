import Root from "./companents/root";
import FooterComp from "./pages/home/companents/FooterComp";

function App() {
  return (
    <>
      <Root />
      <div className="footer__app__comp container">
        <FooterComp/>
      </div>
    </>
  );
}

export default App;
