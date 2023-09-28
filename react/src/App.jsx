import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Treading_Main from "./components/tread/Treading_Main";
import { useEffect } from 'react';
import New_Main from "./components/new-main/New_Main.jsx";
import Recommended_Main from "./components/recommended-main/Recommended_Main";
import Likes_Sidebar from "./components/sidebar/likes/Likes_Sidebar";
import Mobile_Sidebar from "./components/sidebar/mobile/Mobile_Sidebar";
import Main_Slider from "./components/slider/slider.jsx";
import SearchModal from "./components/search-modal/search-modal.jsx";

function App() {
  const useScript = url => {
    useEffect(() => {
      const script = document.createElement('script');

      script.src = url;
      script.async = false;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      }
    }, [url]);
  };

  useScript('src/assets/libs/tether/dist/js/tether.min.js');
  useScript('src/assets/libs/bootstrap/dist/js/bootstrap.js');

  useScript('src/assets/libs/jQuery-Storage-API/jquery.storageapi.min.js');
  useScript('src/assets/libs/jquery.stellar/jquery.stellar.min.js');
  useScript('src/assets/libs/owl.carousel/dist/owl.carousel.min.js');
  useScript('src/assets/libs/jscroll/jquery.jscroll.min.js');
  useScript('src/assets/libs/PACE/pace.min.js');
  useScript('src/assets/libs/jquery-pjax/jquery.pjax.js');

  useScript('src/assets/libs/mediaelement/build/mediaelement-and-player.min.js');
  useScript('src/assets/libs/mediaelement/build/mep.js');
  useScript('src/assets/scripts/player.js');

  useScript('src/assets/scripts/config.lazyload.js');
  useScript('src/assets/scripts/ui-load.js');
  useScript('src/assets/scripts/ui-jp.js');
  useScript('src/assets/scripts/ui-include.js');
  useScript('src/assets/scripts/ui-device.js');
  useScript('src/assets/scripts/ui-form.js');
  useScript('src/assets/scripts/ui-nav.js');
  useScript('src/assets/scripts/ui-screenfull.js');
  useScript('src/assets/scripts/ui-scroll-to.js');
  useScript('src/assets/scripts/ui-toggle-class.js');
  useScript('src/assets/scripts/ui-taburl.js');
  useScript('src/assets/scripts/app.js');
  useScript('src/assets/scripts/site.js');
  useScript('src/assets/scripts/ajax.js');

  return (
    <>
      <div className="app dk" id="app">
        <div id="content" className="app-content white bg " role="main">
          <Header />
          <div className="app-footer app-player grey bg">
            <div className="playlist" ></div>
          </div>
          <div className="app-body" id="view">
            <div className="page-content">
              <div className="black dk">
                <Main_Slider/>
              </div>

              <div className="row-col">
                <div className="col-lg-9 b-r no-border-md">
                  <div className="padding">
                    <Treading_Main />
                    <New_Main />
                    <Recommended_Main />
                  </div>
                </div>
                <div className="col-lg-3 w-xxl w-auto-md">
                  <div className="padding"  data-ui-jp="stick_in_parent">
                    <Likes_Sidebar />
                    <Mobile_Sidebar />
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SearchModal />
        <div id="share-modal" className="modal fade animate">
          <div className="modal-dialog">
            <div className="modal-content fade-down">
              <div className="modal-header">

                <h5 className="modal-title">Share</h5>
              </div>
              <div className="modal-body p-lg">
                <div id="share-list" className="m-b">
                  <a href="" className="btn btn-icon btn-social rounded btn-social-colored indigo" title="Facebook">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-facebook"></i>
                  </a>

                  <a href="" className="btn btn-icon btn-social rounded btn-social-colored light-blue" title="Twitter">
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-twitter"></i>
                  </a>

                  <a href="" className="btn btn-icon btn-social rounded btn-social-colored red-600" title="Google+">
                    <i className="fa fa-google-plus"></i>
                    <i className="fa fa-google-plus"></i>
                  </a>

                  <a href="" className="btn btn-icon btn-social rounded btn-social-colored blue-grey-600"
                     title="Trumblr">
                    <i className="fa fa-tumblr"></i>
                    <i className="fa fa-tumblr"></i>
                  </a>

                  <a href="" className="btn btn-icon btn-social rounded btn-social-colored red-700" title="Pinterst">
                    <i className="fa fa-pinterest"></i>
                    <i className="fa fa-pinterest"></i>
                  </a>
                </div>
                <div>
                  <input className="form-control" defaultValue="http://plamusic.com/slug"/>
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
