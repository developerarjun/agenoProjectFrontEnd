
function TopHeader() {
    return (
        <div class="header-top ">
        <div class="container">
            <div class="header-top-inner">
                <div class="row">
                    <div class="col-lg-6 col-sm-12 d-none d-lg-block">
                        <div class="module sb-promotion sb-promotion--promotion ">
                            <div class="block-content clearfix">
                                <div class="sb-promotion--carousel" data-slick='{
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
                                <div class="sb-brand--item">
                                    <a href="#"><strong>Free Shipping</strong> on all Orders. No Minimum Purchases Required*</a>
                                </div>
                                <div class="sb-brand--item">
                                    <a href="#">Free 3 day delirery and free returns within the US</a>
                                </div>
                                <div class="sb-brand--item">
                                    <a href="#"><strong>20% Discount</strong> on Selected Items</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 text-right">
                        <nav class="navUser">
                            <ul class="navUser-section">
                                <li class="navUser-item d-none d-sm-block">
                                    <a class="navUser-action" href="/login.php"><i class="fa fa-lock" ></i> Sign in</a>
                                </li>
                                <li class="navUser-item">
                                    <a class="navUser-action has-dropdown" href="#" data-dropdown="accountSelection" aria-controls="accountSelection" aria-expanded="false">
                                        <i class="fa fa-user"></i> My Account
                                        <i class="icon" aria-hidden="true"><svg><use xlinkHref="#icon-chevron-down" /></svg></i>
                                    </a>
                                    <ul class="dropdown-menu" id="accountSelection" data-dropdown-content aria-hidden="true" tabindex="-1">
                                        <li class="dropdown-menu-item"><a href="/checkout" title="Click here to proceed to checkout">Check out</a></li>
                                        <li class="dropdown-menu-item"> <a href="/login.php">Sign in</a></li>
                                        <li class="dropdown-menu-item"> <a href="/login.php?action=create_account">Register</a></li>
                                    </ul>
                                </li>
                                <li class="navUser-item">
                                    <a class="navUser-action"> NPR</a>
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