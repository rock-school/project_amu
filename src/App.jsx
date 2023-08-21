import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Treading_Main from "./components/tread/Treading_Main";

function App() {
  return (
    <>
      <div className="app dk" id="app">
        <div id="content" className="app-content white bg" role="main">
          <Header />
          <Footer />
          <div className="app-body" id="view">
            <div className="page-content">
              <div className="row-col">
                <div className="col-lg-9 b-r no-border-md">
                  <div className="padding">
                    <Treading_Main />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
