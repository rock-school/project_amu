export default function SearchModal() {
    return (
        <>
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
        </>
    )
}
