export default function Mobile_Sidebar() {
    return (
        <>
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
        </>
    )
}
