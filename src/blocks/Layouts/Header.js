function Header(){
    return (
        <div class="header-center ">
        <div class="container ">
            <div class="row justify-content-between">
                <div class="col-lg-3 col-md-3 col-7 logo-container">
                    <a href="https://sb-revo4.mybigcommerce.com/" class="header-logo">
                        <div class="header-logo-image-container">
                            <img class="header-logo-image" src="https://cdn11.bigcommerce.com/s-o5qtva12q8/images/stencil/original/logo-home6_1523185387__81890.original.png" alt="Ecommerce SB Revo - Home4" title="Ecommerce SB Revo - Home4" />
                        </div>
                    </a>
                </div>

                <div class="header-bottom__search collapsed-block col-xl-6 col-lg-5 col-md-5 col-5 ">
                    <h5 class="search-info-heading  d-sm-none d-xl-none">
                        <span class="expander btn btn-outline-secondary"> <i class="fa fa-search"></i> </span>
                    </h5>
                    <div class="sb-quickSearch search-info-content" aria-hidden="true" tabindex="-1" data-prevent-quick-search-close>

                        
                        <form class="sb-searchpro" action="/search.php">
                            <fieldset class="form-fieldset">
                                <div class="input-group">
                                    <input class="form-control form-input" data-search-quick name="search_query" id="search_query" data-error-message="Search field cannot be empty." placeholder="Search the store" autocomplete="off" />
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" id="btn-quickSearch" type="submit"><i class="fa fa-search"></i></button>
                                    </div>
                                </div>

                            </fieldset>
                        </form>
                        <div class="dropdown dropdown--quickSearch">
                            <section class="quickSearchResults " data-bind="html: results"></section>
                        </div>


                    </div>

                </div>
                <div class="col-xl-3 col-lg-4 col-md-4 header-bottom__cart text-right">
                    <ul class="navUser-section">
                        <li class="navUser-item">
                            <a class="cart-button cart-button--wishlist" href="/wishlist.php">
                                <svg class="icon-heart-o" width="19" height="19"><use xlinkHref="#icon-heart-o"></use></svg>
                            </a>
                        </li>

                        <li class="navUser-item">

                            <a class="cart-button cart-button--primary" data-cart-preview data-dropdown="cart-preview-dropdown" data-options="align:left" href="/cart.php">
                                <svg class="icon-shopping-cart" width="24" height="24"><use xlinkHref="#icon-shopping-cart"></use></svg>
                                <span class="countPill cart-quantity">0</span>
                            </a>
                            <div class="dropdown-menu" id="cart-preview-dropdown" data-dropdown-content aria-hidden="true"></div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>


    );
}
export default Header;