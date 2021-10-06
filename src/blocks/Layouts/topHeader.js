
function TopHeader() {
    return (
        <div className="header-top ">
        <div className="container">
            <div className="header-top-inner">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 d-none d-lg-block">
                        <div className="module sb-promotion sb-promotion--promotion ">
                            <div className="block-content clearfix">
                                <div className="sb-promotion--carousel" data-slick='{
                                    "dots": false,
                                    "arrows": false,
                                    "mobileFirst": true,
                                    "slidesToShow": 1,
                                    "slidesToScroll": 1,
                                    "vertical": true,
                                    "verticalSwiping": true,
                                    "autoplay": true,
                                    "autoplaySpeed": 5000
                                }'>
                                <div className="sb-brand--item">
                                    <a href="#"><strong>Free Shipping</strong> on all Orders. No Minimum Purchases Required*</a>
                                </div>
                                <div className="sb-brand--item">
                                    <a href="#">Free 3 day delirery and free returns within the US</a>
                                </div>
                                <div className="sb-brand--item">
                                    <a href="#"><strong>20% Discount</strong> on Selected Items</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 text-right">
                        <nav className="navUser">
                            <ul className="navUser-section">
                                <li className="navUser-item d-none d-sm-block">
                                    <a className="navUser-action" href="/login.php"><i className="fa fa-lock" ></i> Sign in</a>
                                </li>
                                <li className="navUser-item">
                                    <a className="navUser-action has-dropdown" href="#" data-dropdown="accountSelection" aria-controls="accountSelection" aria-expanded="false">
                                        <i className="fa fa-user"></i> My Account
                                        <i className="icon" aria-hidden="true"><svg><use xlinkHref="#icon-chevron-down" /></svg></i>
                                    </a>
                                    <ul className="dropdown-menu" id="accountSelection" data-dropdown-content aria-hidden="true" tabIndex="-1">
                                        <li className="dropdown-menu-item"><a href="/checkout" title="Click here to proceed to checkout">Check out</a></li>
                                        <li className="dropdown-menu-item"> <a href="/login.php">Sign in</a></li>
                                        <li className="dropdown-menu-item"> <a href="/login.php?action=create_account">Register</a></li>
                                    </ul>
                                </li>
                                <li className="navUser-item">
                                    <a className="navUser-action"> NPR</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default TopHeader;