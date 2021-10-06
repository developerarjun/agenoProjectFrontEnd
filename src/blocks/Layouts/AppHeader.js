function AppHeader(){
    return (
        <div className="header-center ">
        <div className="container ">
            <div className="row justify-content-between">
                <div className="col-lg-3 col-md-3 col-7 logo-container">
                    <a href="https://sb-revo4.mybigcommerce.com/" className="header-logo">
                        <div className="header-logo-image-container">
                            <img className="header-logo-image" src="https://cdn11.bigcommerce.com/s-o5qtva12q8/images/stencil/original/logo-home6_1523185387__81890.original.png" alt="Ecommerce SB Revo - Home4" title="Ecommerce SB Revo - Home4" />
                        </div>
                    </a>
                </div>

                <div className="header-bottom__search collapsed-block col-xl-6 col-lg-5 col-md-5 col-5 ">
                    <h5 className="search-info-heading  d-sm-none d-xl-none">
                        <span className="expander btn btn-outline-secondary"> <i className="fa fa-search"></i> </span>
                    </h5>
                    <div className="sb-quickSearch search-info-content" aria-hidden="true" tabIndex="-1" data-prevent-quick-search-close>

                        
                        <form className="sb-searchpro" action="/search.php">
                            <fieldset className="form-fieldset">
                                <div className="input-group">
                                    <input className="form-control form-input" data-search-quick name="search_query" id="search_query" data-error-message="Search field cannot be empty." placeholder="Search the store" autoComplete="off" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" id="btn-quickSearch" type="submit"><i className="fa fa-search"></i></button>
                                    </div>
                                </div>

                            </fieldset>
                        </form>
                        <div className="dropdown dropdown--quickSearch">
                            <section className="quickSearchResults " data-bind="html: results"></section>
                        </div>


                    </div>

                </div>
                <div className="col-xl-3 col-lg-4 col-md-4 header-bottom__cart text-right">
                    <ul className="navUser-section">
                        <li className="navUser-item">
                            <a className="cart-button cart-button--wishlist" href="/wishlist.php">
                                <svg className="icon-heart-o" width="19" height="19"><use xlinkHref="#icon-heart-o"></use></svg>
                            </a>
                        </li>

                        <li className="navUser-item">

                            <a className="cart-button cart-button--primary" data-cart-preview data-dropdown="cart-preview-dropdown" data-options="align:left" href="/cart.php">
                                <svg className="icon-shopping-cart" width="24" height="24"><use xlinkHref="#icon-shopping-cart"></use></svg>
                                <span className="countPill cart-quantity">0</span>
                            </a>
                            <div className="dropdown-menu" id="cart-preview-dropdown" data-dropdown-content aria-hidden="true"></div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>


    );
}
export default AppHeader;