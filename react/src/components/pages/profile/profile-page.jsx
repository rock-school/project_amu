export default function ProfilePage() {
  return (
      <div className="app dk" id="app">
          <div id="aside" className="app-aside modal fade nav-dropdown">
              <div className="left navside grey dk" data-layout="column">
                  <div className="navbar no-radius">
                      <a href="index.html" className="navbar-brand md">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32">
                              <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.2)"/>
                              <circle cx="24" cy="24" r="22" fill="#1c202b" className="brand-color"/>
                              <circle cx="24" cy="24" r="10" fill="#ffffff"/>
                              <circle cx="13" cy="13" r="2"  fill="#ffffff" className="brand-animate"/>
                              <path d="M 14 24 L 24 24 L 14 44 Z" fill="#FFFFFF" />
                              <circle cx="24" cy="24" r="3" fill="#000000"/>
                          </svg>

                          <img src="images/logo.png" alt="." className="hide"/>
                              <span className="hidden-folded inline">pulse</span>
                      </a>
                  </div>
                  <div data-flex className="hide-scroll">
                      <nav className="scroll nav-stacked nav-active-primary">

                          <ul className="nav" data-ui-nav>
                              <li className="nav-header hidden-folded">
                                  <span className="text-xs text-muted">Main</span>
                              </li>
                              <li>
                                  <a href="player.html">
                  <span className="nav-icon">
                    <i className="material-icons">
                      play_circle_outline
                    </i>
                  </span>
                                      <span className="nav-text">Discover</span>
                                  </a>
                              </li>
                              <li>
                                  <a href="browse.html">
                  <span className="nav-icon">
                    <i className="material-icons">
                      sort
                    </i>
                  </span>
                                      <span className="nav-text">Browse</span>
                                  </a>
                              </li>
                              <li>
                                  <a href="chart.html">
                  <span className="nav-icon">
                    <i className="material-icons">
                      trending_up
                    </i>
                  </span>
                                      <span className="nav-text">Charts</span>
                                  </a>
                              </li>
                              <li>
                                  <a href="artist.html">
                  <span className="nav-icon">
                    <i className="material-icons">
                      portrait
                    </i>
                  </span>
                                      <span className="nav-text">Artist</span>
                                  </a>
                              </li>
                              <li>
                                  <a data-toggle="modal" data-target="#search-modal">
                  <span className="nav-icon">
                    <i className="material-icons">
                      search
                    </i>
                  </span>
                                      <span className="nav-text">Search</span>
                                  </a>
                              </li>


                              <li className="nav-header hidden-folded m-t">
                                  <span className="text-xs text-muted">Your collection</span>
                              </li>
                              <li>
                                  <a href="profile.html#tracks">
                  <span className="nav-label">
                    <b className="label">8</b>
                  </span>
                                      <span className="nav-icon">
                    <i className="material-icons">
                      list
                    </i>
                  </span>
                                      <span className="nav-text">Tracks</span>
                                  </a>
                              </li>
                              <li>
                                  <a href="profile.html#playlists">
                  <span className="nav-icon">
                    <i className="material-icons">
                      queue_music
                    </i>
                  </span>
                                      <span className="nav-text">Playlists</span>
                                  </a>
                              </li>
                              <li>
                                  <a href="profile.html#likes">
                  <span className="nav-icon">
                    <i className="material-icons">
                      favorite_border
                    </i>
                  </span>
                                      <span className="nav-text">Likes</span>
                                  </a>
                              </li>
                          </ul>
                      </nav>
                  </div>
                  <div data-flex-no-shrink>
                      <div className="nav-fold dropup">
                          <a data-toggle="dropdown">
              <span className="pull-left">
                <img src="images/a3.jpg" alt="..." className="w-32 img-circle"/>
              </span>
                              <span className="clear hidden-folded p-x p-y-xs">
                <span className="block _500 text-ellipsis">Rachel Platten</span>
              </span>
                          </a>
                          <div className="dropdown-menu w dropdown-menu-scale ">
                              <a className="dropdown-item" href="profile.html#profile">
                                  <span>Profile</span>
                              </a>
                              <a className="dropdown-item" href="profile.html#tracks">
                                  <span>Tracks</span>
                              </a>
                              <a className="dropdown-item" href="profile.html#playlists">
                                  <span>Playlists</span>
                              </a>
                              <a className="dropdown-item" href="profile.html#likes">
                                  <span>Likes</span>
                              </a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="docs.html">
                                  Need help?
                              </a>
                              <a className="dropdown-item" href="signin.html">Sign out</a>
                          </div>
                      </div>

                  </div>
              </div>
          </div>

          <div id="content" className="app-content white bg box-shadow-z2" role="main">
              <div className="app-header hidden-lg-up white lt box-shadow-z1">
                  <div className="navbar">
                      <a href="index.html" className="navbar-brand md">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32">
                              <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.2)"/>
                              <circle cx="24" cy="24" r="22" fill="#1c202b" className="brand-color"/>
                              <circle cx="24" cy="24" r="10" fill="#ffffff"/>
                              <circle cx="13" cy="13" r="2"  fill="#ffffff" className="brand-animate"/>
                              <path d="M 14 24 L 24 24 L 14 44 Z" fill="#FFFFFF" />
                              <circle cx="24" cy="24" r="3" fill="#000000"/>
                          </svg>

                          <img src="images/logo.png" alt="." className="hide" />
                              <span className="hidden-folded inline">pulse</span>
                      </a>
                      <ul className="nav navbar-nav pull-right">
                          <li className="nav-item">
                              <a data-toggle="modal" data-target="#aside" className="nav-link">
                                  <i className="material-icons">menu</i>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="app-footer app-player grey bg">
                  <div className="playlist" style="width:100%"></div>
              </div>
              <div className="app-body" id="view">

                  <div className="page-bg" data-stellar-ratio="2" style="background-image: url('images/a3.jpg');"></div>
                  <div className="page-content">
                      <div className="padding b-b">
                          <div className="row-col">
                              <div className="col-sm w w-auto-xs m-b">
                                  <div className="item w rounded">
                                      <div className="item-media">
                                          <div className="item-media-content" style="background-image: url('images/a3.jpg');"></div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-sm">
                                  <div className="p-l-md no-padding-xs">
                                      <h1 className="page-title">
                                          <span className="h1 _800">Rachel Platten</span>
                                      </h1>
                                      <p className="item-desc text-ellipsis text-muted" data-ui-toggle-class="text-ellipsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Nihil illinc huc pervenit. Verum hoc idem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.</p>
                                      <div className="item-action m-b">
                                          <a href="#" className="btn btn-sm rounded primary">Upload</a>
                                          <a href="#" className="btn btn-sm rounded white">Edit Profile</a>
                                      </div>
                                      <div className="block clearfix m-b">
                                          <span>9</span> <span className="text-muted">Albums</span>, <span>23</span> <span className="text-muted">Tracks</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="row-col">
                          <div className="col-lg-9 b-r no-border-md">
                              <div className="padding p-y-0 m-b-md">
                                  <div className="nav-active-border b-primary bottom m-b-md m-t">
                                      <ul className="nav l-h-2x" data-ui-jp="taburl">
                                          <li className="nav-item m-r inline">
                                              <a className="nav-link active" href="#" data-toggle="tab" data-target="#track">Tracks</a>
                                          </li>
                                          <li className="nav-item m-r inline">
                                              <a className="nav-link" href="#" data-toggle="tab" data-target="#playlist">Playlists</a>
                                          </li>
                                          <li className="nav-item m-r inline">
                                              <a className="nav-link" href="#" data-toggle="tab" data-target="#like">Likes</a>
                                          </li>
                                          <li className="nav-item m-r inline">
                                              <a className="nav-link" href="#" data-toggle="tab" data-target="#profile">Profile</a>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="tab-content">
                                      <div className="tab-pane active" id="track">
                                          <div className="row item-list item-list-by m-b">
                                              <div className="col-xs-12">
                                                  <div className="item r" data-id="item-10" data-src="http://api.soundcloud.com/tracks/237514750/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="item-media-content" style="background-image: url('images/b9.jpg');"></a>
                                                          <div className="item-overlay center">
                                                              <button  className="btn-playpause">Play</button>
                                                          </div>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="item-overlay bottom text-right">
                                                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                                                              <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
                                                              <div className="dropdown-menu pull-right black lt"></div>
                                                          </div>
                                                          <div className="item-title text-ellipsis">
                                                              <a href="track.detail.html">The Open Road</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis hide">
                                                              <a href="artist.detail.html" className="text-muted">Postiljonen</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                              <span className="item-meta-category"><a href="browse.html" className="label">Soul</a></span>
                                                              <span className="item-meta-date text-xs">02.04.2016</span>
                                                          </div>

                                                          <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                              Litatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.
                                                          </div>

                                                          <div className="item-action visible-list m-t-sm">
                                                              <a href="#" className="btn btn-xs white">Edit</a>
                                                              <a href="#" className="btn btn-xs white" data-toggle="modal" data-target="#delete-modal">Delete</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-xs-12">
                                                  <div className="item r" data-id="item-9" data-src="http://api.soundcloud.com/tracks/264094434/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="item-media-content" style="background-image: url('images/b8.jpg');"></a>
                                                          <div className="item-overlay center">
                                                              <button  className="btn-playpause">Play</button>
                                                          </div>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="item-overlay bottom text-right">
                                                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                                                              <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
                                                              <div className="dropdown-menu pull-right black lt"></div>
                                                          </div>
                                                          <div className="item-title text-ellipsis">
                                                              <a href="track.detail.html">All I Need</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis hide">
                                                              <a href="artist.detail.html" className="text-muted">Pablo Nouvelle</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                              <span className="item-meta-category"><a href="browse.html" className="label">Jazz</a></span>
                                                              <span className="item-meta-date text-xs">02.04.2016</span>
                                                          </div>

                                                          <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                              Tandem linguam nescio? Sed hoc sane concedamus.
                                                          </div>

                                                          <div className="item-action visible-list m-t-sm">
                                                              <a href="#" className="btn btn-xs white">Edit</a>
                                                              <a href="#" className="btn btn-xs white" data-toggle="modal" data-target="#delete-modal">Delete</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-xs-12">
                                                  <div className="item r" data-id="item-4" data-src="http://api.soundcloud.com/tracks/230791292/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="item-media-content" style="background-image: url('images/b3.jpg');"></a>
                                                          <div className="item-overlay center">
                                                              <button  className="btn-playpause">Play</button>
                                                          </div>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="item-overlay bottom text-right">
                                                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                                                              <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
                                                              <div className="dropdown-menu pull-right black lt"></div>
                                                          </div>
                                                          <div className="item-title text-ellipsis">
                                                              <a href="track.detail.html">What A Time To Be Alive</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis hide">
                                                              <a href="artist.detail.html" className="text-muted">Judith Garcia</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                              <span className="item-meta-category"><a href="browse.html" className="label">Electro</a></span>
                                                              <span className="item-meta-date text-xs">04.05.2016</span>
                                                          </div>

                                                          <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                              Verum hoc idem saepe faciamus inguam nescio? Sed hoc sane concedamus.
                                                          </div>

                                                          <div className="item-action visible-list m-t-sm">
                                                              <a href="#" className="btn btn-xs white">Edit</a>
                                                              <a href="#" className="btn btn-xs white" data-toggle="modal" data-target="#delete-modal">Delete</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-xs-12">
                                                  <div className="item r" data-id="item-2" data-src="http://api.soundcloud.com/tracks/259445397/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="item-media-content" style="background-image: url('images/b1.jpg');"></a>
                                                          <div className="item-overlay center">
                                                              <button  className="btn-playpause">Play</button>
                                                          </div>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="item-overlay bottom text-right">
                                                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                                                              <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
                                                              <div className="dropdown-menu pull-right black lt"></div>
                                                          </div>
                                                          <div className="item-title text-ellipsis">
                                                              <a href="track.detail.html">Fireworks</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis hide">
                                                              <a href="artist.detail.html" className="text-muted">Kygo</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                              <span className="item-meta-category"><a href="browse.html" className="label">Jazz</a></span>
                                                              <span className="item-meta-date text-xs">02.05.2016</span>
                                                          </div>

                                                          <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                              Hidem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.
                                                          </div>

                                                          <div className="item-action visible-list m-t-sm">
                                                              <a href="#" className="btn btn-xs white">Edit</a>
                                                              <a href="#" className="btn btn-xs white" data-toggle="modal" data-target="#delete-modal">Delete</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-xs-12">
                                                  <div className="item r" data-id="item-12" data-src="http://api.soundcloud.com/tracks/174495152/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="item-media-content" style="background-image: url('images/b11.jpg');"></a>
                                                          <div className="item-overlay center">
                                                              <button  className="btn-playpause">Play</button>
                                                          </div>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="item-overlay bottom text-right">
                                                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                                                              <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
                                                              <div className="dropdown-menu pull-right black lt"></div>
                                                          </div>
                                                          <div className="item-title text-ellipsis">
                                                              <a href="track.detail.html">Happy ending</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis hide">
                                                              <a href="artist.detail.html" className="text-muted">Postiljonen</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                              <span className="item-meta-category"><a href="browse.html" className="label">Latin</a></span>
                                                              <span className="item-meta-date text-xs">09.06.2016</span>
                                                          </div>

                                                          <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                              Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.
                                                          </div>

                                                          <div className="item-action visible-list m-t-sm">
                                                              <a href="#" className="btn btn-xs white">Edit</a>
                                                              <a href="#" className="btn btn-xs white" data-toggle="modal" data-target="#delete-modal">Delete</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-xs-12">
                                                  <div className="item r" data-id="item-6" data-src="http://api.soundcloud.com/tracks/236107824/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="item-media-content" style="background-image: url('images/b5.jpg');"></a>
                                                          <div className="item-overlay center">
                                                              <button  className="btn-playpause">Play</button>
                                                          </div>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="item-overlay bottom text-right">
                                                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                                                              <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
                                                              <div className="dropdown-menu pull-right black lt"></div>
                                                          </div>
                                                          <div className="item-title text-ellipsis">
                                                              <a href="track.detail.html">Body on me</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis hide">
                                                              <a href="artist.detail.html" className="text-muted">Rita Ora</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                              <span className="item-meta-category"><a href="browse.html" className="label">Nature</a></span>
                                                              <span className="item-meta-date text-xs">09.04.2016</span>
                                                          </div>

                                                          <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                              Tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.
                                                          </div>

                                                          <div className="item-action visible-list m-t-sm">
                                                              <a href="#" className="btn btn-xs white">Edit</a>
                                                              <a href="#" className="btn btn-xs white" data-toggle="modal" data-target="#delete-modal">Delete</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-xs-12">
                                                  <div className="item r" data-id="item-11" data-src="http://api.soundcloud.com/tracks/218060449/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="item-media-content" style="background-image: url('images/b10.jpg');"></a>
                                                          <div className="item-overlay center">
                                                              <button  className="btn-playpause">Play</button>
                                                          </div>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="item-overlay bottom text-right">
                                                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                                                              <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
                                                              <div className="dropdown-menu pull-right black lt"></div>
                                                          </div>
                                                          <div className="item-title text-ellipsis">
                                                              <a href="track.detail.html">Spring</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis hide">
                                                              <a href="artist.detail.html" className="text-muted">Pablo Nouvelle</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                              <span className="item-meta-category"><a href="browse.html" className="label">Indie</a></span>
                                                              <span className="item-meta-date text-xs">09.03.2016</span>
                                                          </div>

                                                          <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                              Saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.
                                                          </div>

                                                          <div className="item-action visible-list m-t-sm">
                                                              <a href="#" className="btn btn-xs white">Edit</a>
                                                              <a href="#" className="btn btn-xs white" data-toggle="modal" data-target="#delete-modal">Delete</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-xs-12">
                                                  <div className="item r" data-id="item-3" data-src="http://api.soundcloud.com/tracks/79031167/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="item-media-content" style="background-image: url('images/b2.jpg');"></a>
                                                          <div className="item-overlay center">
                                                              <button  className="btn-playpause">Play</button>
                                                          </div>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="item-overlay bottom text-right">
                                                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                                                              <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
                                                              <div className="dropdown-menu pull-right black lt"></div>
                                                          </div>
                                                          <div className="item-title text-ellipsis">
                                                              <a href="track.detail.html">I Wanna Be In the Cavalry</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis hide">
                                                              <a href="artist.detail.html" className="text-muted">Jeremy Scott</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                              <span className="item-meta-category"><a href="browse.html" className="label">DJ</a></span>
                                                              <span className="item-meta-date text-xs">09.04.2016</span>
                                                          </div>

                                                          <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                              Tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.
                                                          </div>

                                                          <div className="item-action visible-list m-t-sm">
                                                              <a href="#" className="btn btn-xs white">Edit</a>
                                                              <a href="#" className="btn btn-xs white" data-toggle="modal" data-target="#delete-modal">Delete</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-xs-12">
                                                  <div className="item r" data-id="item-5" data-src="http://streaming.radionomy.com/JamendoLounge">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="item-media-content" style="background-image: url('images/b4.jpg');"></a>
                                                          <div className="item-overlay center">
                                                              <button  className="btn-playpause">Play</button>
                                                          </div>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="item-overlay bottom text-right">
                                                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                                                              <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
                                                              <div className="dropdown-menu pull-right black lt"></div>
                                                          </div>
                                                          <div className="item-title text-ellipsis">
                                                              <a href="track.detail.html">Live Radio</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis hide">
                                                              <a href="artist.detail.html" className="text-muted">Radionomy</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                              <span className="item-meta-category"><a href="browse.html" className="label">Electro</a></span>
                                                              <span className="item-meta-date text-xs">09.05.2016</span>
                                                          </div>

                                                          <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                              Verum hoc idem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.
                                                          </div>

                                                          <div className="item-action visible-list m-t-sm">
                                                              <a href="#" className="btn btn-xs white">Edit</a>
                                                              <a href="#" className="btn btn-xs white" data-toggle="modal" data-target="#delete-modal">Delete</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-xs-12">
                                                  <div className="item r" data-id="item-8" data-src="http://api.soundcloud.com/tracks/236288744/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="item-media-content" style="background-image: url('images/b7.jpg');"></a>
                                                          <div className="item-overlay center">
                                                              <button  className="btn-playpause">Play</button>
                                                          </div>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="item-overlay bottom text-right">
                                                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                                                              <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
                                                              <div className="dropdown-menu pull-right black lt"></div>
                                                          </div>
                                                          <div className="item-title text-ellipsis">
                                                              <a href="track.detail.html">Simple Place To Be</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis hide">
                                                              <a href="artist.detail.html" className="text-muted">RYD</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                              <span className="item-meta-category"><a href="browse.html" className="label">Radio</a></span>
                                                              <span className="item-meta-date text-xs">09.04.2016</span>
                                                          </div>

                                                          <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                              Ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.
                                                          </div>

                                                          <div className="item-action visible-list m-t-sm">
                                                              <a href="#" className="btn btn-xs white">Edit</a>
                                                              <a href="#" className="btn btn-xs white" data-toggle="modal" data-target="#delete-modal">Delete</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-xs-12">
                                                  <div className="item r" data-id="item-7" data-src="http://api.soundcloud.com/tracks/245566366/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="item-media-content" style="background-image: url('images/b6.jpg');"></a>
                                                          <div className="item-overlay center">
                                                              <button  className="btn-playpause">Play</button>
                                                          </div>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="item-overlay bottom text-right">
                                                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                                                              <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
                                                              <div className="dropdown-menu pull-right black lt"></div>
                                                          </div>
                                                          <div className="item-title text-ellipsis">
                                                              <a href="track.detail.html">Reflection (Deluxe)</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis hide">
                                                              <a href="artist.detail.html" className="text-muted">Fifth Harmony</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                              <span className="item-meta-category"><a href="browse.html" className="label">Pop</a></span>
                                                              <span className="item-meta-date text-xs">05.05.2016</span>
                                                          </div>

                                                          <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                              Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.
                                                          </div>

                                                          <div className="item-action visible-list m-t-sm">
                                                              <a href="#" className="btn btn-xs white">Edit</a>
                                                              <a href="#" className="btn btn-xs white" data-toggle="modal" data-target="#delete-modal">Delete</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-xs-12">
                                                  <div className="item r" data-id="item-1" data-src="http://api.soundcloud.com/tracks/269944843/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="item-media-content" style="background-image: url('images/b0.jpg');"></a>
                                                          <div className="item-overlay center">
                                                              <button  className="btn-playpause">Play</button>
                                                          </div>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="item-overlay bottom text-right">
                                                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                                                              <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
                                                              <div className="dropdown-menu pull-right black lt"></div>
                                                          </div>
                                                          <div className="item-title text-ellipsis">
                                                              <a href="track.detail.html">Pull Up</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis hide">
                                                              <a href="artist.detail.html" className="text-muted">Summerella</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                              <span className="item-meta-category"><a href="browse.html" className="label">Blue</a></span>
                                                              <span className="item-meta-date text-xs">30.05.2016</span>
                                                          </div>

                                                          <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Nihil illinc huc pervenit.
                                                          </div>

                                                          <div className="item-action visible-list m-t-sm">
                                                              <a href="#" className="btn btn-xs white">Edit</a>
                                                              <a href="#" className="btn btn-xs white" data-toggle="modal" data-target="#delete-modal">Delete</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <a href="#" className="btn btn-sm white rounded">Show More</a>
                                      </div>
                                      <div className="tab-pane" id="playlist">
                                          <div className="row m-b">
                                              <div className="col-xs-4 col-sm-4 col-md-3">
                                                  <div className="item r" data-id="item-2" data-src="http://api.soundcloud.com/tracks/259445397/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="item-media-content" style="background-image: url('images/b1.jpg');"></a>
                                                          <div className="item-overlay center">
                                                              <button  className="btn-playpause">Play</button>
                                                          </div>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="item-overlay bottom text-right">
                                                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                                                              <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
                                                              <div className="dropdown-menu pull-right black lt"></div>
                                                          </div>
                                                          <div className="item-title text-ellipsis">
                                                              <a href="track.detail.html">Fireworks</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis hide">
                                                              <a href="artist.detail.html" className="text-muted">Kygo</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                              <span className="item-meta-stats text-xs ">
                                                                <i className="fa fa-play text-muted"></i> 30
                                                                <i className="fa fa-heart m-l-sm text-muted"></i> 10
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-xs-4 col-sm-4 col-md-3">
                                                  <div className="item r" data-id="item-10" data-src="http://api.soundcloud.com/tracks/237514750/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="item-media-content" style="background-image: url('images/b9.jpg');"></a>
                                                          <div className="item-overlay center">
                                                              <button  className="btn-playpause">Play</button>
                                                          </div>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="item-overlay bottom text-right">
                                                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                                                              <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
                                                              <div className="dropdown-menu pull-right black lt"></div>
                                                          </div>
                                                          <div className="item-title text-ellipsis">
                                                              <a href="track.detail.html">The Open Road</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis hide">
                                                              <a href="artist.detail.html" className="text-muted">Postiljonen</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                              <span className="item-meta-stats text-xs ">
                                                                <i className="fa fa-play text-muted"></i> 860
                                                                <i className="fa fa-heart m-l-sm text-muted"></i> 240
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-xs-4 col-sm-4 col-md-3">
                                                  <div className="item r" data-id="item-1" data-src="http://api.soundcloud.com/tracks/269944843/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="item-media-content" style="background-image: url('images/b0.jpg');"></a>
                                                          <div className="item-overlay center">
                                                              <button  className="btn-playpause">Play</button>
                                                          </div>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="item-overlay bottom text-right">
                                                              <a href="#" className="btn-favorite"><i className="fa fa-heart-o"></i></a>
                                                              <a href="#" className="btn-more" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
                                                              <div className="dropdown-menu pull-right black lt"></div>
                                                          </div>
                                                          <div className="item-title text-ellipsis">
                                                              <a href="track.detail.html">Pull Up</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis hide">
                                                              <a href="artist.detail.html" className="text-muted">Summerella</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                              <span className="item-meta-stats text-xs ">
                                                                <i className="fa fa-play text-muted"></i> 3200
                                                                <i className="fa fa-heart m-l-sm text-muted"></i> 210
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="tab-pane" id="like">
                                          <div className="row m-b">
                                              <div className="col-xs-4 col-sm-4 col-md-3">
                                                  <div className="item r" data-id="item-10" data-src="http://api.soundcloud.com/tracks/237514750/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="item-media-content" style="background-image: url('images/b9.jpg');"></a>
                                                          <div className="item-overlay center">
                                                              <button  className="btn-playpause">Play</button>
                                                          </div>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="item-overlay bottom text-right">
                                                              <a href="#" className="btn-favorite"><i className="a fa-heart-o"></i></a>
                                                              <a href="#" className="btn-more" data-toggle="dropdown"><i className="a fa-ellipsis-h"></i></a>
                                                              <div className="dropdown-menu pull-right black lt"></div>
                                                          </div>
                                                          <div className="tem-title text-ellipsis">
                                                              <a href="track.detail.html">The Open Road</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis hide">
                                                              <a href="artist.detail.html" className="ext-muted">Postiljonen</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                              <span className="tem-meta-stats text-xs ">
                                                                <i className="fa fa-play text-muted"></i> 860
                                                                <i className="a fa-heart m-l-sm text-muted"></i> 240
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-xs-4 col-sm-4 col-md-3">
                                                  <div className="tem r" data-id="item-11" data-src="http://api.soundcloud.com/tracks/218060449/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="tem-media-content" style="background-image: url('images/b10.jpg');"></a>
                                                          <div className="item-overlay center">
                                                              <button  className="tn-playpause">Play</button>
                                                          </div>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="tem-overlay bottom text-right">
                                                              <a href="#" className="btn-favorite"><i className="a fa-heart-o"></i></a>
                                                              <a href="#" className="btn-more" data-toggle="dropdown"><i className="a fa-ellipsis-h"></i></a>
                                                              <div className="dropdown-menu pull-right black lt"></div>
                                                          </div>
                                                          <div className="tem-title text-ellipsis">
                                                              <a href="track.detail.html">Spring</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis hide">
                                                              <a href="artist.detail.html" className="ext-muted">Pablo Nouvelle</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                              <span className="tem-meta-stats text-xs ">
                                                                <i className="fa fa-play text-muted"></i> 4500
                                                                <i className="a fa-heart m-l-sm text-muted"></i> 2310
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="tab-pane" id="profile">
                                          <form>
                                              <div className="orm-group row">
                                                  <div className="col-sm-3 form-control-label text-muted">Location</div>
                                                  <div className="ol-sm-9"><input value="Earth" className="form-control"/></div>
                                              </div>
                                              <div className="orm-group row">
                                                  <div className="col-sm-3 form-control-label text-muted">Website</div>
                                                  <div className="ol-sm-9"><input placeholder="http://" className="form-control"/></div>
                                              </div>
                                              <div className="orm-group row">
                                                  <div className="col-sm-3 form-control-label text-muted">Music Type</div>
                                                  <div className="ol-sm-9">
                                                      <select className="form-control c-select">
                                                          <option>Blue</option>
                                                          <option>Electro</option>
                                                          <option>Pop</option>
                                                          <option>Soul</option>
                                                      </select>
                                                  </div>
                                              </div>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="ol-lg-3 w-xxl w-auto-md">
                              <div className="padding" style="bottom: 60px;" data-ui-jp="stick_in_parent">
                                  <h6 className="text text-muted">5 Likes</h6>
                                  <div className="ow item-list item-list-sm m-b">
                                      <div className="col-xs-12">
                                          <div className="tem r" data-id="item-3" data-src="http://api.soundcloud.com/tracks/79031167/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                              <div className="item-media ">
                                                  <a href="track.detail.html" className="tem-media-content" style="background-image: url('images/b2.jpg');"></a>
                                              </div>
                                              <div className="item-info">
                                                  <div className="tem-title text-ellipsis">
                                                      <a href="track.detail.html">I Wanna Be In the Cavalry</a>
                                                  </div>
                                                  <div className="item-author text-sm text-ellipsis ">
                                                      <a href="artist.detail.html" className="ext-muted">Jeremy Scott</a>
                                                  </div>


                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xs-12">
                                          <div className="tem r" data-id="item-1" data-src="http://api.soundcloud.com/tracks/269944843/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                              <div className="item-media ">
                                                  <a href="track.detail.html" className="tem-media-content" style="background-image: url('images/b0.jpg');"></a>
                                              </div>
                                              <div className="item-info">
                                                  <div className="tem-title text-ellipsis">
                                                      <a href="track.detail.html">Pull Up</a>
                                                  </div>
                                                  <div className="item-author text-sm text-ellipsis ">
                                                      <a href="artist.detail.html" className="ext-muted">Summerella</a>
                                                  </div>


                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xs-12">
                                          <div className="tem r" data-id="item-12" data-src="http://api.soundcloud.com/tracks/174495152/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                              <div className="item-media ">
                                                  <a href="track.detail.html" className="tem-media-content" style="background-image: url('images/b11.jpg');"></a>
                                              </div>
                                              <div className="item-info">
                                                  <div className="tem-title text-ellipsis">
                                                      <a href="track.detail.html">Happy ending</a>
                                                  </div>
                                                  <div className="item-author text-sm text-ellipsis ">
                                                      <a href="artist.detail.html" className="ext-muted">Postiljonen</a>
                                                  </div>


                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xs-12">
                                          <div className="tem r" data-id="item-11" data-src="http://api.soundcloud.com/tracks/218060449/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                              <div className="item-media ">
                                                  <a href="track.detail.html" className="tem-media-content" style="background-image: url('images/b10.jpg');"></a>
                                              </div>
                                              <div className="item-info">
                                                  <div className="tem-title text-ellipsis">
                                                      <a href="track.detail.html">Spring</a>
                                                  </div>
                                                  <div className="item-author text-sm text-ellipsis ">
                                                      <a href="artist.detail.html" className="ext-muted">Pablo Nouvelle</a>
                                                  </div>


                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xs-12">
                                          <div className="tem r" data-id="item-6" data-src="http://api.soundcloud.com/tracks/236107824/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                              <div className="item-media ">
                                                  <a href="track.detail.html" className="tem-media-content" style="background-image: url('images/b5.jpg');"></a>
                                              </div>
                                              <div className="item-info">
                                                  <div className="tem-title text-ellipsis">
                                                      <a href="track.detail.html">Body on me</a>
                                                  </div>
                                                  <div className="item-author text-sm text-ellipsis ">
                                                      <a href="artist.detail.html" className="text-muted">Rita Ora</a>
                                                  </div>


                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <h6 className="text text-muted">Go mobile</h6>
                                  <div className="btn-groups">
                                      <a href="" className="btn btn-sm dark lt m-r-xs" style="width: 135px">
                <span className="pull-left m-r-sm">
                  <i className="fa fa-apple fa-2x"></i>
                </span>
                                          <span className="clear text-left l-h-1x">
                  <span className="text-muted text-xxs">Download on the</span>
                  <b className="block m-b-xs">App Store</b>
                </span>
                                      </a>
                                      <a href="" className="btn btn-sm dark lt" style="width: 133px">
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

                  <div id="delete-modal" className="modal fade animate black-overlay" data-backdrop="false">
                      <div className="row-col h-v">
                          <div className="row-cell v-m">
                              <div className="modal-dialog modal-sm">
                                  <div className="modal-content flip-y">
                                      <div className="modal-body text-center">
                                          <p className="p-y m-t"><i className="fa fa-remove text-warning fa-3x"></i></p>
                                          <p>Are you sure to delete this item?</p>
                                      </div>
                                      <div className="modal-footer">
                                          <button type="button" className="btn btn-default p-x-md" data-dismiss="modal">No</button>
                                          <button type="button" className="btn red p-x-md" data-dismiss="modal">Yes</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>


              </div>
          </div>

          <div id="switcher">
              <div className="switcher white" id="sw-theme">
                  <a href="#" data-ui-toggle-class="active" data-ui-target="#sw-theme" className="white sw-btn">
                      <i className="fa fa-gear text-muted"/>
                  </a>
                  <div className="box-header">
                      <strong>Theme Switcher</strong>
                  </div>
                  <div className="box-divider"></div>
                  <div className="box-body">
                      <p id="settingLayout" className="hidden-md-down">
                          <label className="md-check m-y-xs" data-target="folded">
                              <input type="checkbox"/>
                                  <i className="green"/>
                                  <span>Folded Aside</span>
                          </label>
                          <label className="m-y-xs pointer" data-ui-fullscreen data-target="fullscreen">
                              <span className="fa fa-expand fa-fw m-r-xs"></span>
                              <span>Fullscreen Mode</span>
                          </label>
                      </p>
                      <p>Colors:</p>
                      <p data-target="color">
                          <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                              <input type="radio" name="color" value="primary"/>
                                  <i className="primary"></i>
                          </label>
                          <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                              <input type="radio" name="color" value="accent"/>
                                  <i className="accent"></i>
                          </label>
                          <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                              <input type="radio" name="color" value="warn"/>
                                  <i className="warn"></i>
                          </label>
                          <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                              <input type="radio" name="color" value="success"/>
                                  <i className="success"></i>
                          </label>
                          <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                              <input type="radio" name="color" value="info"/>
                                  <i className="info"></i>
                          </label>
                          <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                              <input type="radio" name="color" value="blue"/>
                                  <i className="blue"></i>
                          </label>
                          <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                              <input type="radio" name="color" value="warning"/>
                                  <i className="warning"></i>
                          </label>
                          <label className="radio radio-inline m-a-0 ui-check ui-check-color ui-check-md">
                              <input type="radio" name="color" value="danger"/>
                                  <i className="danger"></i>
                          </label>
                      </p>
                      <p>Themes:</p>
                      <div data-target="bg" className="text-u-c text-center _600 clearfix">
                          <label className="p-a col-xs-3 light pointer m-a-0">
                              <input type="radio" name="theme" value="" hidden />
                                  <i className="active-checked fa fa-check"></i>
                          </label>
                          <label className="p-a col-xs-3 grey pointer m-a-0">
                              <input type="radio" name="theme" value="grey" hidden/>
                                  <i className="active-checked fa fa-check"></i>
                          </label>
                          <label className="p-a col-xs-3 dark pointer m-a-0">
                              <input type="radio" name="theme" value="dark" hidden/>
                                  <i className="active-checked fa fa-check"></i>
                          </label>
                          <label className="p-a col-xs-3 black pointer m-a-0">
                              <input type="radio" name="theme" value="black" hidden/>
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
                      <div className="ow">
                          <div className="col-md-8 offset-md-2">
                              <form action="search.html" className="-b-md">
                                  <div className="input-group input-group-lg">
                                      <input type="text" className="orm-control" placeholder="Type keyword" data-ui-toggle-class="hide" data-ui-target="#search-result"/>
                  <span className="input-group-btn">
                    <button className="tn b-a no-shadow white" type="submit">Search</button>
                  </span>
                                  </div>
                              </form>
                              <div id="search-result" className="animated fadeIn">
                                  <p className="-b-md"><strong>23</strong> <span className="text-muted">Results found for: </span><strong>Keyword</strong></p>
                                  <div className="ow">
                                      <div className="col-sm-6">
                                          <div className="ow item-list item-list-sm item-list-by m-b">
                                              <div className="col-xs-12">
                                                  <div className="tem r" data-id="item-9" data-src="http://api.soundcloud.com/tracks/264094434/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="tem-media-content" style="background-image: url('images/b8.jpg');"></a>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="tem-title text-ellipsis">
                                                              <a href="track.detail.html">All I Need</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis ">
                                                              <a href="artist.detail.html" className="ext-muted">Pablo Nouvelle</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                          </div>


                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="ol-xs-12">
                                                  <div className="item r" data-id="item-2" data-src="http://api.soundcloud.com/tracks/259445397/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="tem-media-content" style="background-image: url('images/b1.jpg');"></a>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="tem-title text-ellipsis">
                                                              <a href="track.detail.html">Fireworks</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis ">
                                                              <a href="artist.detail.html" className="ext-muted">Kygo</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                          </div>


                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="ol-xs-12">
                                                  <div className="item r" data-id="item-7" data-src="http://api.soundcloud.com/tracks/245566366/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="tem-media-content" style="background-image: url('images/b6.jpg');"></a>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="tem-title text-ellipsis">
                                                              <a href="track.detail.html">Reflection (Deluxe)</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis ">
                                                              <a href="artist.detail.html" className="ext-muted">Fifth Harmony</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                          </div>


                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="ol-xs-12">
                                                  <div className="item r" data-id="item-11" data-src="http://api.soundcloud.com/tracks/218060449/stream?client_id=a10d44d431ad52868f1bce6d36f5234c">
                                                      <div className="item-media ">
                                                          <a href="track.detail.html" className="tem-media-content" style="background-image: url('images/b10.jpg');"></a>
                                                      </div>
                                                      <div className="item-info">
                                                          <div className="tem-title text-ellipsis">
                                                              <a href="track.detail.html">Spring</a>
                                                          </div>
                                                          <div className="item-author text-sm text-ellipsis ">
                                                              <a href="artist.detail.html" className="ext-muted">Pablo Nouvelle</a>
                                                          </div>
                                                          <div className="item-meta text-sm text-muted">
                                                          </div>


                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="ol-sm-6">
                                          <div className="row item-list item-list-sm item-list-by m-b">
                                              <div className="ol-xs-12">
                                                  <div className="item">
                                                      <div className="tem-media rounded ">
                                                          <a href="artist.detail.html" className="item-media-content" style="background-image: url('images/a4.jpg');"></a>
                                                      </div>
                                                      <div className="item-info ">
                                                          <div className="tem-title text-ellipsis">
                                                              <a href="artist.detail.html">Judith Garcia</a>
                                                              <div className="text-sm text-muted">13 songs</div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="ol-xs-12">
                                                  <div className="item">
                                                      <div className="tem-media rounded ">
                                                          <a href="artist.detail.html" className="item-media-content" style="background-image: url('images/a9.jpg');"></a>
                                                      </div>
                                                      <div className="item-info ">
                                                          <div className="tem-title text-ellipsis">
                                                              <a href="artist.detail.html">Douglas Torres</a>
                                                              <div className="text-sm text-muted">20 songs</div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="ol-xs-12">
                                                  <div className="item">
                                                      <div className="tem-media rounded ">
                                                          <a href="artist.detail.html" className="item-media-content" style="background-image: url('images/b1.jpg');"></a>
                                                      </div>
                                                      <div className="item-info ">
                                                          <div className="tem-title text-ellipsis">
                                                              <a href="artist.detail.html">Melissa Garza</a>
                                                              <div className="text-sm text-muted">20 songs</div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="ol-xs-12">
                                                  <div className="item">
                                                      <div className="tem-media rounded ">
                                                          <a href="artist.detail.html" className="item-media-content" style="background-image: url('images/a3.jpg');"></a>
                                                      </div>
                                                      <div className="item-info ">
                                                          <div className="tem-title text-ellipsis">
                                                              <a href="artist.detail.html">Joe Holmes</a>
                                                              <div className="text-sm text-muted">24 songs</div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div id="top-search" className="tn-groups">
                                  <strong className="text-muted">Top searches: </strong>
                                  <a href="#" className="tn btn-xs white">Happy</a>
                                  <a href="#" className="btn btn-xs white">Music</a>
                                  <a href="#" className="tn btn-xs white">Weekend</a>
                                  <a href="#" className="btn btn-xs white">Summer</a>
                                  <a href="#" className="tn btn-xs white">Holiday</a>
                                  <a href="#" className="btn btn-xs white">Blue</a>
                                  <a href="#" className="tn btn-xs white">Soul</a>
                                  <a href="#" className="btn btn-xs white">Calm</a>
                                  <a href="#" className="tn btn-xs white">Nice</a>
                                  <a href="#" className="btn btn-xs white">Home</a>
                                  <a href="#" className="tn btn-xs white">SLeep</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div id="share-modal" className="modal fade animate">
              <div className="odal-dialog">
                  <div className="modal-content fade-down">
                      <div className="odal-header">

                          <h5 className="modal-title">Share</h5>
                      </div>
                      <div className="odal-body p-lg">
                          <div id="share-list" className="m-b">
                              <a href="" className="tn btn-icon btn-social rounded btn-social-colored indigo" title="Facebook">
                                  <i className="fa fa-facebook"></i>
                                  <i className="a fa-facebook"></i>
                              </a>

                              <a href="" className="btn btn-icon btn-social rounded btn-social-colored light-blue" title="Twitter">
                                  <i className="a fa-twitter"></i>
                                  <i className="fa fa-twitter"></i>
                              </a>

                              <a href="" className="tn btn-icon btn-social rounded btn-social-colored red-600" title="Google+">
                                  <i className="fa fa-google-plus"></i>
                                  <i className="a fa-google-plus"></i>
                              </a>

                              <a href="" className="btn btn-icon btn-social rounded btn-social-colored blue-grey-600" title="Trumblr">
                                  <i className="a fa-tumblr"></i>
                                  <i className="fa fa-tumblr"></i>
                              </a>

                              <a href="" className="tn btn-icon btn-social rounded btn-social-colored red-700" title="Pinterst">
                                  <i className="fa fa-pinterest"></i>
                                  <i className="a fa-pinterest"></i>
                              </a>
                          </div>
                          <div>
                              <input className="form-control" value="http://plamusic.com/slug"/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
