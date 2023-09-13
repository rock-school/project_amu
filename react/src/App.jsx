import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Treading_Main from "./components/tread/Treading_Main";
import { useEffect } from 'react';

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
                <div className="row no-gutter item-info-overlay">
                  <div className="col-sm-6 text-white">
                    <div className="owl-carousel owl-theme owl-dots-sm owl-dots-bottom-left " data-ui-jp="owlCarousel"
                         data-ui-options="{
                           items: 1,
                           loop: true,
                           autoplay: true,
                           nav: true,
                          }">
                      <div className="item r" data-id="item-115"
                           data-src="http://api.soundcloud.com/tracks/239793212/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                        <div className="item-media primary">
                          <a href="track.detail.html" className="item-media-content"
                             ></a>
                          <div className="item-overlay center">
                            <button className="btn-playpause">Play</button>
                          </div>
                        </div>
                        <div className="item-info">
                          <div className="item-overlay bottom text-right">
                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
                            <div className="dropdown-menu pull-right black lt"></div>
                          </div>
                          <div className="item-title text-ellipsis">
                            <a href="track.detail.html">New Album from Nouvelle</a>
                          </div>
                          <div className="item-author text-sm text-ellipsis">
                            <a href="artist.detail.html" className="text-muted">Nouvelle</a>
                          </div>
                        </div>
                      </div>
                      <div className="item r" data-id="item-116"
                           data-src="http://api.soundcloud.com/tracks/260682299/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                        <div className="item-media info">
                          <a href="track.detail.html" className="item-media-content"
                             ></a>
                          <div className="item-overlay center">
                            <button className="btn-playpause">Play</button>
                          </div>
                        </div>
                        <div className="item-info">
                          <div className="item-overlay bottom text-right">
                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
                            <div className="dropdown-menu pull-right black lt"></div>
                          </div>
                          <div className="item-title text-ellipsis">
                            <a href="track.detail.html">Blind Me</a>
                          </div>
                          <div className="item-author text-sm text-ellipsis">
                            <a href="artist.detail.html" className="text-muted">Fifty</a>
                          </div>
                        </div>
                      </div>
                      <div className="item r" data-id="item-117"
                           data-src="http://api.soundcloud.com/tracks/232886537/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                        <div className="item-media accent">
                          <a href="track.detail.html" className="item-media-content"
                             ></a>
                          <div className="item-overlay center">
                            <button className="btn-playpause">Play</button>
                          </div>
                        </div>
                        <div className="item-info">
                          <div className="item-overlay bottom text-right">
                            <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                            <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
                            <div className="dropdown-menu pull-right black lt"></div>
                          </div>
                          <div className="item-title text-ellipsis">
                            <a href="track.detail.html">New Track from Pablo Nouvelle</a>
                          </div>
                          <div className="item-author text-sm text-ellipsis">
                            <a href="artist.detail.html" className="text-muted">Pablo Nouvelle</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 col-xs-6">
                    <div className="item r" data-id="item-1"
                         data-src="http://api.soundcloud.com/tracks/269944843/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                      <div className="item-media ">
                        <a href="track.detail.html" className="item-media-content"
                           ></a>
                        <div className="item-overlay center">
                          <button className="btn-playpause">Play</button>
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="item-overlay bottom text-right">
                          <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                          <a href="#" className="btn-more" data-toggle="dropdown"><i
                              className="fa fa-ellipsis-h"></i></a>
                          <div className="dropdown-menu pull-right black lt"></div>
                        </div>
                        <div className="item-title text-ellipsis">
                          <a href="track.detail.html">Pull Up</a>
                        </div>
                        <div className="item-author text-sm text-ellipsis ">
                          <a href="artist.detail.html" className="text-muted">Summerella</a>
                        </div>


                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 col-xs-6">
                    <div className="item r" data-id="item-2"
                         data-src="http://api.soundcloud.com/tracks/259445397/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                      <div className="item-media ">
                        <a href="track.detail.html" className="item-media-content"
                           ></a>
                        <div className="item-overlay center">
                          <button className="btn-playpause">Play</button>
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="item-overlay bottom text-right">
                          <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                          <a href="#" className="btn-more" data-toggle="dropdown"><i
                              className="fa fa-ellipsis-h"></i></a>
                          <div className="dropdown-menu pull-right black lt"></div>
                        </div>
                        <div className="item-title text-ellipsis">
                          <a href="track.detail.html">Fireworks</a>
                        </div>
                        <div className="item-author text-sm text-ellipsis ">
                          <a href="artist.detail.html" className="text-muted">Kygo</a>
                        </div>


                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 col-xs-6">
                    <div className="item r" data-id="item-3"
                         data-src="http://api.soundcloud.com/tracks/79031167/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                      <div className="item-media ">
                        <a href="track.detail.html" className="item-media-content"
                           ></a>
                        <div className="item-overlay center">
                          <button className="btn-playpause">Play</button>
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="item-overlay bottom text-right">
                          <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                          <a href="#" className="btn-more" data-toggle="dropdown"><i
                              className="fa fa-ellipsis-h"></i></a>
                          <div className="dropdown-menu pull-right black lt"></div>
                        </div>
                        <div className="item-title text-ellipsis">
                          <a href="track.detail.html">I Wanna Be In the Cavalry</a>
                        </div>
                        <div className="item-author text-sm text-ellipsis ">
                          <a href="artist.detail.html" className="text-muted">Jeremy Scott</a>
                        </div>


                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 col-xs-6">
                    <div className="item r" data-id="item-4"
                         data-src="http://api.soundcloud.com/tracks/230791292/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                      <div className="item-media ">
                        <a href="track.detail.html" className="item-media-content"
                           ></a>
                        <div className="item-overlay center">
                          <button className="btn-playpause">Play</button>
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="item-overlay bottom text-right">
                          <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                          <a href="#" className="btn-more" data-toggle="dropdown"><i
                              className="fa fa-ellipsis-h"></i></a>
                          <div className="dropdown-menu pull-right black lt"></div>
                        </div>
                        <div className="item-title text-ellipsis">
                          <a href="track.detail.html">What A Time To Be Alive</a>
                        </div>
                        <div className="item-author text-sm text-ellipsis ">
                          <a href="artist.detail.html" className="text-muted">Judith Garcia</a>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row-col">
                <div className="col-lg-9 b-r no-border-md">
                  <div className="padding">
                    <Treading_Main />
                    <h2 className="widget-title h4 m-b">New</h2>
                    <div className="row">
                      <div className="col-xs-4 col-sm-4 col-md-3">
                        <div className="item r" data-id="item-6"
                             data-src="http://api.soundcloud.com/tracks/236107824/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"
                               ></a>
                            <div className="item-overlay center">
                              <button className="btn-playpause">Play</button>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="item-overlay bottom text-right">
                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                              <a href="#" className="btn-more" data-toggle="dropdown"><i
                                  className="fa fa-ellipsis-h"></i></a>
                              <div className="dropdown-menu pull-right black lt"></div>
                            </div>
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">Body on me</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">Rita Ora</a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-xs-4 col-sm-4 col-md-3">
                        <div className="item r" data-id="item-2"
                             data-src="http://api.soundcloud.com/tracks/259445397/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"
                               ></a>
                            <div className="item-overlay center">
                              <button className="btn-playpause">Play</button>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="item-overlay bottom text-right">
                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                              <a href="#" className="btn-more" data-toggle="dropdown"><i
                                  className="fa fa-ellipsis-h"></i></a>
                              <div className="dropdown-menu pull-right black lt"></div>
                            </div>
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">Fireworks</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">Kygo</a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-xs-4 col-sm-4 col-md-3">
                        <div className="item r" data-id="item-8"
                             data-src="http://api.soundcloud.com/tracks/236288744/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"
                               ></a>
                            <div className="item-overlay center">
                              <button className="btn-playpause">Play</button>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="item-overlay bottom text-right">
                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                              <a href="#" className="btn-more" data-toggle="dropdown"><i
                                  className="fa fa-ellipsis-h"></i></a>
                              <div className="dropdown-menu pull-right black lt"></div>
                            </div>
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">Simple Place To Be</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">RYD</a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-xs-4 col-sm-4 col-md-3">
                        <div className="item r" data-id="item-10"
                             data-src="http://api.soundcloud.com/tracks/237514750/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"
                               ></a>
                            <div className="item-overlay center">
                              <button className="btn-playpause">Play</button>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="item-overlay bottom text-right">
                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                              <a href="#" className="btn-more" data-toggle="dropdown"><i
                                  className="fa fa-ellipsis-h"></i></a>
                              <div className="dropdown-menu pull-right black lt"></div>
                            </div>
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">The Open Road</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">Postiljonen</a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-xs-4 col-sm-4 col-md-3">
                        <div className="item r" data-id="item-12"
                             data-src="http://api.soundcloud.com/tracks/174495152/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"
                              ></a>
                            <div className="item-overlay center">
                              <button className="btn-playpause">Play</button>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="item-overlay bottom text-right">
                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                              <a href="#" className="btn-more" data-toggle="dropdown"><i
                                  className="fa fa-ellipsis-h"></i></a>
                              <div className="dropdown-menu pull-right black lt"></div>
                            </div>
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">Happy ending</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">Postiljonen</a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-xs-4 col-sm-4 col-md-3">
                        <div className="item r" data-id="item-11"
                             data-src="http://api.soundcloud.com/tracks/218060449/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"
                               ></a>
                            <div className="item-overlay center">
                              <button className="btn-playpause">Play</button>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="item-overlay bottom text-right">
                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                              <a href="#" className="btn-more" data-toggle="dropdown"><i
                                  className="fa fa-ellipsis-h"></i></a>
                              <div className="dropdown-menu pull-right black lt"></div>
                            </div>
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">Spring</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">Pablo Nouvelle</a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-xs-4 col-sm-4 col-md-3">
                        <div className="item r" data-id="item-7"
                             data-src="http://api.soundcloud.com/tracks/245566366/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"
                               ></a>
                            <div className="item-overlay center">
                              <button className="btn-playpause">Play</button>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="item-overlay bottom text-right">
                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                              <a href="#" className="btn-more" data-toggle="dropdown"><i
                                  className="fa fa-ellipsis-h"></i></a>
                              <div className="dropdown-menu pull-right black lt"></div>
                            </div>
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">Reflection (Deluxe)</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">Fifth Harmony</a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-xs-4 col-sm-4 col-md-3">
                        <div className="item r" data-id="item-5"
                             data-src="http://streaming.radionomy.com/JamendoLounge">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"
                               ></a>
                            <div className="item-overlay center">
                              <button className="btn-playpause">Play</button>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="item-overlay bottom text-right">
                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                              <a href="#" className="btn-more" data-toggle="dropdown"><i
                                  className="fa fa-ellipsis-h"></i></a>
                              <div className="dropdown-menu pull-right black lt"></div>
                            </div>
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">Live Radio</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">Radionomy</a>
                            </div>


                          </div>
                        </div>
                      </div>
                    </div>
                    <h2 className="widget-title h4 m-b">Recommand for you</h2>
                    <div className="row item-list item-list-md m-b">
                      <div className="col-sm-6">
                        <div className="item r" data-id="item-4"
                             data-src="http://api.soundcloud.com/tracks/230791292/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"
                               ></a>
                            <div className="item-overlay center">
                              <button className="btn-playpause">Play</button>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="item-overlay bottom text-right">
                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                              <a href="#" className="btn-more" data-toggle="dropdown"><i
                                  className="fa fa-ellipsis-h"></i></a>
                              <div className="dropdown-menu pull-right black lt"></div>
                            </div>
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">What A Time To Be Alive</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">Judith Garcia</a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="item r" data-id="item-8"
                             data-src="http://api.soundcloud.com/tracks/236288744/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"
                               ></a>
                            <div className="item-overlay center">
                              <button className="btn-playpause">Play</button>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="item-overlay bottom text-right">
                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                              <a href="#" className="btn-more" data-toggle="dropdown"><i
                                  className="fa fa-ellipsis-h"></i></a>
                              <div className="dropdown-menu pull-right black lt"></div>
                            </div>
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">Simple Place To Be</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">RYD</a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="item r" data-id="item-6"
                             data-src="http://api.soundcloud.com/tracks/236107824/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"
                               ></a>
                            <div className="item-overlay center">
                              <button className="btn-playpause">Play</button>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="item-overlay bottom text-right">
                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                              <a href="#" className="btn-more" data-toggle="dropdown"><i
                                  className="fa fa-ellipsis-h"></i></a>
                              <div className="dropdown-menu pull-right black lt"></div>
                            </div>
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">Body on me</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">Rita Ora</a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="item r" data-id="item-9"
                             data-src="http://api.soundcloud.com/tracks/264094434/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"
                               ></a>
                            <div className="item-overlay center">
                              <button className="btn-playpause">Play</button>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="item-overlay bottom text-right">
                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                              <a href="#" className="btn-more" data-toggle="dropdown"><i
                                  className="fa fa-ellipsis-h"></i></a>
                              <div className="dropdown-menu pull-right black lt"></div>
                            </div>
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">All I Need</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">Pablo Nouvelle</a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="item r" data-id="item-3"
                             data-src="http://api.soundcloud.com/tracks/79031167/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"
                               ></a>
                            <div className="item-overlay center">
                              <button className="btn-playpause">Play</button>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="item-overlay bottom text-right">
                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                              <a href="#" className="btn-more" data-toggle="dropdown"><i
                                  className="fa fa-ellipsis-h"></i></a>
                              <div className="dropdown-menu pull-right black lt"></div>
                            </div>
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">I Wanna Be In the Cavalry</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">Jeremy Scott</a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="item r" data-id="item-2"
                             data-src="http://api.soundcloud.com/tracks/259445397/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"
                              ></a>
                            <div className="item-overlay center">
                              <button className="btn-playpause">Play</button>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="item-overlay bottom text-right">
                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                              <a href="#" className="btn-more" data-toggle="dropdown"><i
                                  className="fa fa-ellipsis-h"></i></a>
                              <div className="dropdown-menu pull-right black lt"></div>
                            </div>
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">Fireworks</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">Kygo</a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="item r" data-id="item-5"
                             data-src="http://streaming.radionomy.com/JamendoLounge">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"
                               ></a>
                            <div className="item-overlay center">
                              <button className="btn-playpause">Play</button>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="item-overlay bottom text-right">
                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                              <a href="#" className="btn-more" data-toggle="dropdown"><i
                                  className="fa fa-ellipsis-h"></i></a>
                              <div className="dropdown-menu pull-right black lt"></div>
                            </div>
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">Live Radio</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">Radionomy</a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="item r" data-id="item-10"
                             data-src="http://api.soundcloud.com/tracks/237514750/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"
                               ></a>
                            <div className="item-overlay center">
                              <button className="btn-playpause">Play</button>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="item-overlay bottom text-right">
                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                              <a href="#" className="btn-more" data-toggle="dropdown"><i
                                  className="fa fa-ellipsis-h"></i></a>
                              <div className="dropdown-menu pull-right black lt"></div>
                            </div>
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">The Open Road</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">Postiljonen</a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="item r" data-id="item-11"
                             data-src="http://api.soundcloud.com/tracks/218060449/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"
                               ></a>
                            <div className="item-overlay center">
                              <button className="btn-playpause">Play</button>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="item-overlay bottom text-right">
                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                              <a href="#" className="btn-more" data-toggle="dropdown"><i
                                  className="fa fa-ellipsis-h"></i></a>
                              <div className="dropdown-menu pull-right black lt"></div>
                            </div>
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">Spring</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">Pablo Nouvelle</a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="item r" data-id="item-7"
                             data-src="http://api.soundcloud.com/tracks/245566366/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"
                               ></a>
                            <div className="item-overlay center">
                              <button className="btn-playpause">Play</button>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="item-overlay bottom text-right">
                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                              <a href="#" className="btn-more" data-toggle="dropdown"><i
                                  className="fa fa-ellipsis-h"></i></a>
                              <div className="dropdown-menu pull-right black lt"></div>
                            </div>
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">Reflection (Deluxe)</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">Fifth Harmony</a>
                            </div>


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 w-xxl w-auto-md">
                  <div className="padding"  data-ui-jp="stick_in_parent">
                    <h6 className="text text-muted">5 Likes</h6>
                    <div className="row item-list item-list-sm m-b">
                      <div className="col-xs-12">
                        <div className="item r" data-id="item-8"
                             data-src="http://api.soundcloud.com/tracks/236288744/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"></a>
                          </div>
                          <div className="item-info">
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">Simple Place To Be</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">RYD</a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <div className="item r" data-id="item-7"
                             data-src="http://api.soundcloud.com/tracks/245566366/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"></a>
                          </div>
                          <div className="item-info">
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">Reflection (Deluxe)</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">Fifth Harmony</a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <div className="item r" data-id="item-4"
                             data-src="http://api.soundcloud.com/tracks/230791292/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"></a>
                          </div>
                          <div className="item-info">
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">What A Time To Be Alive</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">Judith Garcia</a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <div className="item r" data-id="item-9"
                             data-src="http://api.soundcloud.com/tracks/264094434/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"></a>
                          </div>
                          <div className="item-info">
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">All I Need</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">Pablo Nouvelle</a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <div className="item r" data-id="item-3"
                             data-src="http://api.soundcloud.com/tracks/79031167/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                          <div className="item-media ">
                            <a href="track.detail.html" className="item-media-content"></a>
                          </div>
                          <div className="item-info">
                            <div className="item-title text-ellipsis">
                              <a href="track.detail.html">I Wanna Be In the Cavalry</a>
                            </div>
                            <div className="item-author text-sm text-ellipsis ">
                              <a href="artist.detail.html" className="text-muted">Jeremy Scott</a>
                            </div>


                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="text text-muted">Go mobile</h6>
                    <div className="btn-groups">
                      <a href="" className="btn btn-sm dark lt m-r-xs" >
                <span className="pull-left m-r-sm">
                  <i className="fa fa-apple fa-2x"></i>
                </span>
                        <span className="clear text-left l-h-1x">
                  <span className="text-muted text-xxs">Download on the</span>
                  <b className="block m-b-xs">App Store</b>
                </span>
                      </a>
                      <a href="" className="btn btn-sm dark lt" >
                <span className="pull-left m-r-sm">
                  <i className="fa fa-play fa-2x"></i>
                </span>
                        <span className="clear text-left l-h-1x">
                  <span className="text-muted text-xxs">Get it on</span>
                  <b className="block m-b-xs m-r-xs">Google Play</b>
                </span>
                      </a>
                    </div>
                    <div className="b-b m-y"></div>
                    <div className="nav text-sm _600">
                      <a href="#" className="nav-link text-muted m-r-xs">About</a>
                      <a href="#" className="nav-link text-muted m-r-xs">Contact</a>
                      <a href="#" className="nav-link text-muted m-r-xs">Legal</a>
                      <a href="#" className="nav-link text-muted m-r-xs">Policy</a>
                    </div>
                    <p className="text-muted text-xs p-b-lg">&copy; Copyright 2016</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="switcher">
          <div className="switcher white" id="sw-theme">
            <a href="#" data-ui-toggle-class="active" data-ui-target="#sw-theme" className="white sw-btn">
              <i className="fa fa-gear text-muted"></i>
            </a>
            <div className="box-header">
              <strong>Theme Switcher</strong>
            </div>
            <div className="box-divider"></div>
            <div className="box-body">
              <p id="settingLayout" className="hidden-md-down">
                <label className="md-check m-y-xs" data-target="container">
                  <input type="checkbox"/>
                    <i className="green"></i>
                    <span>Boxed Layout</span>
                </label>
                <label className="m-y-xs pointer" data-ui-fullscreen data-target="fullscreen">
                  <span className="fa fa-expand fa-fw m-r-xs"></span>
                  <span>Fullscreen Mode</span>
                </label>
              </p>
              <p>Colors:</p>
              <p data-target="color">
                <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                  <input type="radio" name="color" defaultValue="primary"/>
                    <i className="primary"></i>
                </label>
                <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                  <input type="radio" name="color" defaultValue="accent"/>
                    <i className="accent"></i>
                </label>
                <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                  <input type="radio" name="color" defaultValue="warn"/>
                    <i className="warn"></i>
                </label>
                <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                  <input type="radio" name="color" defaultValue="success"/>
                    <i className="success"></i>
                </label>
                <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                  <input type="radio" name="color" defaultValue="info"/>
                    <i className="info"></i>
                </label>
                <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                  <input type="radio" name="color" defaultValue="blue"/>
                    <i className="blue"></i>
                </label>
                <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                  <input type="radio" name="color" defaultValue="warning"/>
                    <i className="warning"></i>
                </label>
                <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                  <input type="radio" name="color" defaultValue="danger"/>
                    <i className="danger"></i>
                </label>
              </p>
              <p>Themes:</p>
              <div data-target="bg" className="text-u-c text-center _600 clearfix">
                <label className="p-a col-xs-3 light pointer m-a-0">
                  <input type="radio" name="theme" defaultValue="" hidden/>
                    <i className="active-checked fa fa-check"></i>
                </label>
                <label className="p-a col-xs-3 grey pointer m-a-0">
                  <input type="radio" name="theme" defaultValue="grey" hidden/>
                    <i className="active-checked fa fa-check"></i>
                </label>
                <label className="p-a col-xs-3 dark pointer m-a-0">
                  <input type="radio" name="theme" defaultValue="dark" hidden/>
                    <i className="active-checked fa fa-check"></i>
                </label>
                <label className="p-a col-xs-3 black pointer m-a-0">
                  <input type="radio" name="theme" defaultValue="black" hidden/>
                    <i className="active-checked fa fa-check"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="modal white lt fade" id="search-modal" data-backdrop="false">
          <a data-dismiss="modal" className="text-muted text-lg p-x modal-close-btn">&times;</a>
          <div className="row-col">
            <div className="p-a-lg h-v row-cell v-m">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <form action="search.html" className="m-b-md">
                    <div className="input-group input-group-lg">
                      <input type="text" className="form-control" placeholder="Type keyword" data-ui-toggle-class="hide"
                             data-ui-target="#search-result"/>
                  <span className="input-group-btn">
                    <button className="btn b-a no-shadow white" type="submit">Search</button>
                  </span>
                    </div>
                  </form>
                  <div id="search-result" className="animated fadeIn">
                    <p className="m-b-md"><strong>23</strong> <span
                        className="text-muted">Results found for: </span><strong>Keyword</strong></p>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="row item-list item-list-sm item-list-by m-b">
                          <div className="col-xs-12">
                            <div className="item r" data-id="item-7"
                                 data-src="http://api.soundcloud.com/tracks/245566366/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                              <div className="item-media ">
                                <a href="track.detail.html" className="item-media-content" ></a>
                              </div>
                              <div className="item-info">
                                <div className="item-title text-ellipsis">
                                  <a href="track.detail.html">Reflection (Deluxe)</a>
                                </div>
                                <div className="item-author text-sm text-ellipsis ">
                                  <a href="artist.detail.html" className="text-muted">Fifth Harmony</a>
                                </div>
                                <div className="item-meta text-sm text-muted">
                                </div>


                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12">
                            <div className="item r" data-id="item-3"
                                 data-src="http://api.soundcloud.com/tracks/79031167/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                              <div className="item-media ">
                                <a href="track.detail.html" className="item-media-content" ></a>
                              </div>
                              <div className="item-info">
                                <div className="item-title text-ellipsis">
                                  <a href="track.detail.html">I Wanna Be In the Cavalry</a>
                                </div>
                                <div className="item-author text-sm text-ellipsis ">
                                  <a href="artist.detail.html" className="text-muted">Jeremy Scott</a>
                                </div>
                                <div className="item-meta text-sm text-muted">
                                </div>


                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12">
                            <div className="item r" data-id="item-5"
                                 data-src="http://streaming.radionomy.com/JamendoLounge">
                              <div className="item-media ">
                                <a href="track.detail.html" className="item-media-content"
                                   ></a>
                              </div>
                              <div className="item-info">
                                <div className="item-title text-ellipsis">
                                  <a href="track.detail.html">Live Radio</a>
                                </div>
                                <div className="item-author text-sm text-ellipsis ">
                                  <a href="artist.detail.html" className="text-muted">Radionomy</a>
                                </div>
                                <div className="item-meta text-sm text-muted">
                                </div>


                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12">
                            <div className="item r" data-id="item-1"
                                 data-src="http://api.soundcloud.com/tracks/269944843/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                              <div className="item-media ">
                                <a href="track.detail.html" className="item-media-content"
                                  ></a>
                              </div>
                              <div className="item-info">
                                <div className="item-title text-ellipsis">
                                  <a href="track.detail.html">Pull Up</a>
                                </div>
                                <div className="item-author text-sm text-ellipsis ">
                                  <a href="artist.detail.html" className="text-muted">Summerella</a>
                                </div>
                                <div className="item-meta text-sm text-muted">
                                </div>


                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="row item-list item-list-sm item-list-by m-b">
                          <div className="col-xs-12">
                            <div className="item">
                              <div className="item-media rounded ">
                                <a href="artist.detail.html" className="item-media-content"
                                   ></a>
                              </div>
                              <div className="item-info ">
                                <div className="item-title text-ellipsis">
                                  <a href="artist.detail.html">Richard Carr</a>
                                  <div className="text-sm text-muted">6 songs</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12">
                            <div className="item">
                              <div className="item-media rounded ">
                                <a href="artist.detail.html" className="item-media-content"
                                   ></a>
                              </div>
                              <div className="item-info ">
                                <div className="item-title text-ellipsis">
                                  <a href="artist.detail.html">Sara King</a>
                                  <div className="text-sm text-muted">14 songs</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12">
                            <div className="item">
                              <div className="item-media rounded ">
                                <a href="artist.detail.html" className="item-media-content"
                                  ></a>
                              </div>
                              <div className="item-info ">
                                <div className="item-title text-ellipsis">
                                  <a href="artist.detail.html">Melissa Garza</a>
                                  <div className="text-sm text-muted">20 songs</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12">
                            <div className="item">
                              <div className="item-media rounded ">
                                <a href="artist.detail.html" className="item-media-content"
                                   ></a>
                              </div>
                              <div className="item-info ">
                                <div className="item-title text-ellipsis">
                                  <a href="artist.detail.html">James Garcia</a>
                                  <div className="text-sm text-muted">9 songs</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="top-search" className="btn-groups">
                    <strong className="text-muted">Top searches: </strong>
                    <a href="#" className="btn btn-xs white">Happy</a>
                    <a href="#" className="btn btn-xs white">Music</a>
                    <a href="#" className="btn btn-xs white">Weekend</a>
                    <a href="#" className="btn btn-xs white">Summer</a>
                    <a href="#" className="btn btn-xs white">Holiday</a>
                    <a href="#" className="btn btn-xs white">Blue</a>
                    <a href="#" className="btn btn-xs white">Soul</a>
                    <a href="#" className="btn btn-xs white">Calm</a>
                    <a href="#" className="btn btn-xs white">Nice</a>
                    <a href="#" className="btn btn-xs white">Home</a>
                    <a href="#" className="btn btn-xs white">SLeep</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
     {/* <div className="app dk" id="app">
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
      </div>*/}
    </>
  );
}

export default App;
