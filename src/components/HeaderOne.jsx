import React, { useEffect, useState } from "react";
import query from "jquery";
import { Link, NavLink } from "react-router-dom";
import './HeaderOne.css';


const HeaderOne = () => {
  const [scroll, setScroll] = useState(false);
  
  // Set scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset > 150);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Initialize Select2
  useEffect(() => {
    const selectElement = query(".js-example-basic-single");
    selectElement.select2();
    
    return () => {
      if (selectElement.data("select2")) {
        selectElement.select2("destroy");
      }
    };
  }, []);

  // Default language and currency
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");
  const handleLanguageChange = (language) => setSelectedLanguage(language);

  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const handleCurrencyChange = (currency) => setSelectedCurrency(currency);

  // Menu State
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive((prev) => !prev);
  
  // Search Control
  const [activeSearch, setActiveSearch] = useState(false);
  const toggleSearch = () => setActiveSearch((prev) => !prev);
  
  // Category Control
  const [activeCategory, setActiveCategory] = useState(false);
  const toggleCategory = () => setActiveCategory((prev) => !prev);
  
  const [activeIndexCat, setActiveIndexCat] = useState(null);
  const handleCatClick = (index) => setActiveIndexCat((prev) => (prev === index ? null : index));
  
  // Mobile Menu Active Index
  const [activeIndex, setActiveIndex] = useState(null);
  const handleMenuClick = (index) => setActiveIndex((prev) => (prev === index ? null : index));
//   // Navigation Items
// const navItems = [
//   { name: "Home", to: "/", hasSubMenu: false },
//   { name: "Grocery", to: "/shop", hasSubMenu: true },
//   { name: "Snacks & Branded Foods", to: "/snacks", hasSubMenu: true },
//   { name: "Dairy & Bakery", to: "/dairy", hasSubMenu: true },
//   { name: "Home Care", to: "/homecare", hasSubMenu: true },
//   { name: "Personal Care", to: "/personalcare", hasSubMenu: true },
//   { name: "Beverages", to: "/beverages", hasSubMenu: true },
//   { name: "Baby Care", to: "/babycare", hasSubMenu: true },
//   { name: "Fruits & Vegetables", to: "/fruitsandvegetables", hasSubMenu: true },
// ];
  return (
    <>
      <div className='overlay' />
      <div className={`side-overlay ${(menuActive || activeCategory) && "show"}`} />
      
      {/* Search Box */}
      <form action='#' className={`search-box ${activeSearch ? "active" : ""}`}>
        <button onClick={toggleSearch} type='button' className='search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1'>
          <i className='ph ph-x' />
        </button>
        <div className='container'>
          <div className='position-relative'>
            <input type='text' className='form-control py-16 px-24 text-xl rounded-pill pe-64' placeholder='Search for a product or brand' />
            <button type='submit' className='w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'>
              <i className='ph ph-magnifying-glass' />
            </button>
          </div>
        </div>
      </form>
   
      {/* Mobile Menu */}
      <div className={`mobile-menu scroll-sm d-lg-none d-block ${menuActive ? "active" : ""}`}>
        <button onClick={toggleMenu} type='button' className='close-button'>
          <i className='ph ph-x' />
        </button>
        <div className='mobile-menu__inner'>
          <Link to='/' className='mobile-menu__logo'>
            <img src='assets/images/logo/logo.png' alt='Logo' />
          </Link>
          <div className='mobile-menu__menu'>
            <ul className='nav-menu flex-align nav-menu--mobile'>
              {/* Home Menu */}
              <li onClick={() => handleMenuClick(0)} className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 0 ? "d-block" : ""}`}>
                <Link to='#' className='nav-menu__link'>Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Header Top */}
      <div className='header-top bg-main-600 flex-between'>
        <div className='container container-lg'>
          <div className='flex-between flex-wrap gap-8'>
            <ul className='flex-align flex-wrap d-none d-md-flex'>
              <li className='border-right-item'><Link to='#' className='text-white text-sm hover-text-decoration-underline'>Become A Seller</Link></li>
              <li className='border-right-item'><Link to='#' className='text-white text-sm hover-text-decoration-underline'>About Us</Link></li>
              <li className='border-right-item'><Link to='#' className='text-white text-sm hover-text-decoration-underline'>Free Delivery</Link></li>
              <li className='border-right-item'><Link to='#' className='text-white text-sm hover-text-decoration-underline'>Returns Policy</Link></li>
            </ul>
            <ul className='header-top__right flex-align flex-wrap'>
              <li className='on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white'>
                <Link to='#' className='text-white text-sm py-8'>Help Center</Link>
                <ul className='on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8'>
                  <li className='nav-submenu__item'>
                    <Link to='#' className='nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'>
                      <span className='text-sm d-flex'><i className='ph ph-headset' /></span>
                      Call Center
                    </Link>
                  </li>
                  <li className='nav-submenu__item'>
                    <Link to='#' className='nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'>
                      <span className='text-sm d-flex'><i className='ph ph-chat-circle-dots' /></span>
                      Live Chat
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Language Selector */}
              <li className='on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white'>
                <Link to='#' className='selected-text text-white text-sm py-8'>{selectedLanguage}</Link>
                <ul className='selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8'>
                  {["English", "Japan", "French", "Germany", "Bangladesh", "South Korea"].map(lang => (
                    <li key={lang}>
                      <Link to='#' className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0' onClick={() => handleLanguageChange(lang)}>
                        <img src={`assets/images/thumbs/flag${lang}.png`} alt={lang} className='w-16 h-12 rounded-4 border border-gray-100' />
                        {lang}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Currency Selector */}
              <li className='on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white'>
                <Link to='#' className='selected-text text-white text-sm py-8'>{selectedCurrency}</Link>
                <ul className='selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8'>
                  {["USD", "Yen", "Franc", "EURO", "BDT", "WON"].map(curr => (
                    <li key={curr}>
                      <Link to='#' className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0' onClick={() => handleCurrencyChange(curr)}>
                        <img src={`assets/images/thumbs/flag${curr}.png`} alt={curr} className='w-16 h-12 rounded-4 border border-gray-100' />
                        {curr}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Account Link */}
              <li className='border-right-item'>
                <Link to='/account' className='text-white text-sm py-8 flex-align gap-6'>
                  <span className='icon text-md d-flex'><i className='ph ph-user-circle' /></span>
                  <span className='hover-text-decoration-underline'>My Account</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Header Middle */}
      <header className={`header-middle bg-color-one border-bottom border-gray-100`}>
        <div className='container container-lg'>
          <nav className='header-inner flex-between'>
            <div className='logo'>
              <Link to='/' className='link'>
                <img src='assets/images/logo/logo.png' alt='Logo' />
              </Link>
            </div>

            {/* Search Form Location */}
            <form action='#' className='flex-align flex-wrap form-location-wrapper'>
              <div className='search-category d-flex h-48 select-border-end-0 radius-end-0 search-form d-sm-flex d-none'>
                <select defaultValue={1} className='js-example-basic-single border border-gray-200 border-end-0' name='state'>
                  <option value={1}>All Categories</option>
                  <option value={2}>Grocery</option>
                  <option value={3}>Dairy</option>
                  <option value={4}>Beverages</option>
                  <option value={5}>Baby Care</option>
                  <option value={6}>Personal Care</option>
                  <option value={7}>Snacks</option>
                  <option value={8}>Fruits & Vegetables</option>
                </select>
                <div className='search-form__wrapper position-relative'>
                  <input type='text' className='search-form__input common-input py-13 ps-16 pe-18 rounded-end-pill pe-44' placeholder='Search for a product or brand' />
                  <button type='submit' className='w-32 h-32 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'>
                    <i className='ph ph-magnifying-glass' />
                  </button>
                </div>
              </div>
              <div className='location-box bg-white flex-align gap-8 py-6 px-16 rounded-pill border border-gray-100'>
                <span className='text-gray-900 text-xl d-xs-flex d-none'><i className='ph ph-map-pin' /></span>
                <div className='line-height-1'>
                  <span className='text-gray-600 text-xs'>Your Location</span>
                  <div className='line-height-1'>
                    <select defaultValue={1} className='js-example-basic-single border border-gray-200 border-end-0' name='state'>
                      <option value={1}>Balangar</option>
                      <option value={2}>Chintal</option>
                      <option value={3}>Jagdigirigutta</option>
                      <option value={4}>Pragathi Nagar</option>
                      <option value={5}>Jeedimetla</option>
                      <option value={6}>Suchitra</option>
                      <option value={7}>Shapur</option>
                      <option value={8}>Gandi Misamma</option>
                      <option value={9}>Kompally</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>

            {/* Header Middle Right */}
            <div className='header-right flex-align d-lg-block d-none'>
              <div className='flex-align flex-wrap gap-12'>
                <button type='button' className='search-icon flex-align d-lg-none d-flex gap-4 item-hover'>
                  <span className='text-2xl text-gray-700 d-flex position-relative item-hover__text'>
                    <i className='ph ph-magnifying-glass' />
                  </span>
                </button>
                <Link to='/wishlist' className='flex-align gap-4 item-hover'>
                  <span className='text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text'>
                    <i className='ph ph-heart' />
                    <span className='w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4'>2</span>
                  </span>
                  <span className='text-md text-gray-500 item-hover__text d-none d-lg-flex'>Wishlist</span>
                </Link>
                <Link to='/cart' className='flex-align gap-4 item-hover'>
                  <span className='text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text'>
                    <i className='ph ph-shopping-cart-simple' />
                    <span className='w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4'>2</span>
                  </span>
                  <span className='text-md text-gray-500 item-hover__text d-none d-lg-flex'>Cart</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Header Fixed */}
      
      <header className={`header bg-white border-bottom border-gray-100 ${scroll ? "fixed-header" : ""}`}>
        <div className='container container-lg'>
          <nav className='header-inner d-flex justify-content-between gap-8'>
            <div className='flex-align menu-category-wrapper'>
              {/* /* Category Dropdown */}
               <div className='category on-hover-item'>
                {/* <button onClick={toggleCategory} type='button' className='category__button flex-align gap-8 fw-medium p-16 border-end border-start border-gray-100 text-heading'>
                  <span className='icon text-2xl d-xs-flex d-none'><i className='ph ph-dots-nine' /></span>
                  <span className='d-sm-flex d-none'>All</span> Categories
                  <span className='arrow-icon text-xl d-flex'><i className='ph ph-caret-down' /></span>
                </button> */}
                <div className={`responsive-dropdown cat on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper ${activeCategory ? "active" : ""}`}>
                  {/* Close Button */}
                   <button onClick={() => { toggleCategory(); setActiveIndexCat(null); }} type='button' className='close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex'>
                    <i className='ph ph-x' />
                  </button>
                  <div className='logo px-16 d-lg-none d-block'>
                    <Link to='/' className='link'>
                      <img src='assets/images/logo/logo.png' alt='Logo' />
                    </Link>
                  </div>
                  {/* <ul className='scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto'>
                    {[ 
                      { title: 'Vegetables & Fruit', icon: 'ph-carrot', links: ['Potato & Tomato', 'Cucumber & Capsicum', 'Leafy Vegetables', 'Root Vegetables', 'Beans & Okra', 'Cabbage & Cauliflower', 'Gourd & Drumstick', 'Specialty'] },
                      { title: 'Beverages', icon: 'ph-brandy', links: ['Soda & Cocktail Mix', 'Sports & Energy Drinks', 'Non-Alcoholic Drinks', 'Packaged Water', 'Spring Water', 'Flavoured Water'] },
                      { title: 'Meats & Seafood', icon: 'ph-brandy', links: ['Fresh Meat', 'Frozen Meat', 'Marinated Meat', 'Fresh & Frozen Meat'] },
                      { title: 'Breakfast & Dairy', icon: 'ph-brandy', links: ['Oats & Porridge', 'Kids Cereal', 'Muesli', 'Flakes', 'Granola & Cereal Bars', 'Instant Noodles'] },
                      { title: 'Frozen Foods', icon: 'ph-brandy', links: ['Instant Noodles', 'Hakka Noodles', 'Cup Noodles', 'Vermicelli', 'Instant Pasta'] },
                      { title: 'Biscuits & Snacks', icon: 'ph-brandy', links: ['Salted Biscuits', 'Marie, Health, Digestive', 'Cream Biscuits & Wafers', 'Glucose & Milk biscuits', 'Cookies'] },
                      { title: 'Grocery & Staples', icon: 'ph-brandy', links: ['Lemon, Ginger & Garlic', 'Indian & Exotic Herbs', 'Organic Vegetables', 'Organic Fruits', 'Organic Dry Fruits', 'Organic Dals & Pulses', 'Organic Millet & Flours'] },
                    ].map((cat, index) => (
                      <li key={index} onClick={() => handleCatClick(index)} className={`has-submenus-submenu ${activeIndexCat === index ? "active" : ""}`}>
                        <Link to='#' className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'>
                          <span className='text-xl d-flex'><i className={`ph ${cat.icon}`} /></span>
                          <span>{cat.title}</span>
                          <span className='icon text-md d-flex ms-auto'><i className='ph ph-caret-right' /></span>
                        </Link>
                        <div className={`submenus-submenu py-16 ${activeIndexCat === index ? "open" : ""}`}>
                          <h6 className='text-lg px-16 submenus-submenu__title'>{cat.title}</h6>
                          <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                            {cat.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <Link to='/shop'>{link}</Link>
                              </li>
                            ))}
                          </ul> */}
                        {/* </div> 
                       </li>
                    ))}
                  </ul> */}
                </div>
              </div> 
              {/* Menu Start */}
              {/* <div class="navbar">
             <a href="#">Personal Care</a>
          <a href="#">Beverages</a>
          <a href="#"> Baby Care </a>
          <a href="#"> Fruits & Vegetables </a>
          
            </div> */}

              
              <div className='header-menu d-lg-block d-none'>
                <ul className="nav-menu flex-align">
                  <li className="on-hover-item nav-menu__item has-submenu">
                    <Link to="#" className="nav-menu__link">Home</Link>
                  </li>

                  <li className='on-hover-item nav-menu__item has-submenu'>
                    <Link to='#' className='nav-menu__link'>Grocery</Link>
                    <ul className='on-hover-dropdown common-dropdown nav-submenu scroll-sm'>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <NavLink to='/shop' className={({ isActive }) => 
                          isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"}>
                          Atta Flours & Sooji
                        </NavLink>
                      </li>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <NavLink to='/product-details' className={({ isActive }) => 
                          isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"}>
                          Dals & Pulses
                        </NavLink>
                      </li>

                      <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
        
                                               to='/product-details-two'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Rice  & Rice By Products 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/product-details-two'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Edible Oils  
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/product-details-two'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Masala & Spices  
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/product-details-two'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Salt & Sugar & Jaggery 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/product-details-two'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Soya products, wheat & Other Grians  
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/product-details-two'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Rice  & Rice By Products 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/product-details-two'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Dry Fruits & Nuts  
                                             </NavLink>
                                           </li>
                                         </ul>
                                       </li>
                                       <li className='on-hover-item nav-menu__item has-submenu'>
                                         {/* <span className='badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4'>
                                           New
                                         </span> */}
                                         <Link to='#' className='nav-menu__link'>
                                         Snacks & Branded Foods 
                                         </Link>
                                         <ul className='on-hover-dropdown common-dropdown nav-submenu scroll-sm'>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/cart'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Biscuits & Cookies 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/wishlist'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                                Noodle Pasta & Vermicelli 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/checkout'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Breakfast Cereals 
                                             </NavLink>
                                           </li>
                     
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/become-seller'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                                Snacks & Namkeen 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/account'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Chocaltes & Candies 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/wishlist'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                                 Ready to Cook & Eat 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/wishlist'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                                 Frozen Veggies  & Snacks  
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/wishlist'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                                 Spreads sauces & katcheup  
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/wishlist'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                                 Indian Sweets  
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/wishlist'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                                  Pickels & Chtuneys  
                                             </NavLink>
                                           </li>
                                         </ul>
                                       </li>
                                       <li className='on-hover-item nav-menu__item has-submenu'>
                                         {/* <span className='badge-notification bg-tertiary-600 text-white text-sm py-2 px-8 rounded-4'>
                                           New
                                         </span> */}
                                         <Link to='#' className='nav-menu__link'>
                                         Dairy & Bakery 
                                         </Link>
                                         <ul className='on-hover-dropdown common-dropdown nav-submenu scroll-sm'>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/vendor'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                                Dairy 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/vendor-details'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                                Toast & Khari 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/vendor-two'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                                Cakes & Muffins 
                                             </NavLink>
                                           </li>
                     
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/vendor-two-details'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                                Bread 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/vendor-two-details'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                                Buns 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/vendor-two-details'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                                Baked Cookies 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/vendor-two-details'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                                 Bakery Snacks 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/vendor-two-details'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                                 Butter,Cheese & Panner 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/vendor-two-details'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                                Ghee 
                                             </NavLink>
                                           </li>
                                           
                     
                                         </ul>
                                       </li>
                                       <li className='on-hover-item nav-menu__item has-submenu'>
                                         <Link to='#' className='nav-menu__link'>
                                         Home Care 
                                         </Link>
                                         <ul className='on-hover-dropdown common-dropdown nav-submenu scroll-sm'>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Detergents 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog-details'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Dishwash 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               All Purpose Cleans 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Repellents 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Mops, Brushes & Scurbs 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Electrical 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Disposables 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Pooja Needs 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Shoe Care 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Stationery 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Kitchen Ware 
                                             </NavLink>
                                           </li>
                                           
                                         </ul>
                                       </li>
                                       <li className='on-hover-item nav-menu__item has-submenu'>
                                         <Link to='#' className='nav-menu__link'>
                                         Personal Care 
                                         </Link>
                                         <ul className='on-hover-dropdown common-dropdown nav-submenu scroll-sm'>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Hair Care 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Oral Care  
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Skin Care 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Bath & Hand Wash  
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Body Wash 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Bath & Accessories 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Women Accessories  
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Mens Grooming 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Health Wellness  
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Deo & Fragrance 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Makeup 
                                             </NavLink>
                                           </li>
                                           <li className='common-dropdown__item nav-submenu__item'>
                                             <NavLink
                                               to='/blog'
                                               className={(navData) =>
                                                 navData.isActive
                                                   ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                   : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                               }
                                             >
                                               {" "}
                                               Covid Essentials 
                                             </NavLink>
                                           </li>
                                           </ul> 
                                           </li>
                                           <li className='on-hover-item nav-menu__item has-submenu'>
  <Link to='#' className='nav-menu__link'>
    Beverages
  </Link>
  <ul className='on-hover-dropdown common-dropdown nav-submenu scroll-sm'>
    <li className='common-dropdown__item nav-submenu__item'>
      <NavLink
        to='/shop'
        className={({ isActive }) =>
          isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
        }
      >
        Tea
      </NavLink>
    </li>
    <li className='common-dropdown__item nav-submenu__item'>
      <NavLink
        to='/product-details'
        className={({ isActive }) =>
          isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
        }
      >
        Coffee
      </NavLink>
    </li>
    <li className='common-dropdown__item nav-submenu__item'>
      <NavLink
        to='/product-details-two'
        className={({ isActive }) =>
          isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
        }
      >
        Fruit Juices
      </NavLink>
    </li>
    <li className='common-dropdown__item nav-submenu__item'>
      <NavLink
        to='/product-details-two'
        className={({ isActive }) =>
          isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
        }
      >
        Energy & Soft Drinks
      </NavLink>
    </li>
    <li className='common-dropdown__item nav-submenu__item'>
      <NavLink
        to='/product-details-two'
        className={({ isActive }) =>
          isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
        }
      >
        Health Drink & Supplement
      </NavLink>
    </li>
    <li className='common-dropdown__item nav-submenu__item'>
      <NavLink
        to='/product-details-two'
        className={({ isActive }) =>
          isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
        }
      >
        Soda & Flavoured Water
      </NavLink>
    </li>
  </ul>
</li>
 <li className='on-hover-item nav-menu__item has-submenu'>
                    <Link to='#' className='nav-menu__link'>
                    Baby Care 
                    </Link>
                    <ul className='on-hover-dropdown common-dropdown nav-submenu scroll-sm'>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <NavLink
                          to='/shop'
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          {" "}
                          Baby Grooming  
                        </NavLink>
                      </li>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <NavLink
                          to='/product-details'
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          {" "}
                          Baby Bath & Hygiene  
                        </NavLink>
                      </li>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <NavLink
                          to='/product-details-two'
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          {" "}
                          Diapers & wipes  
                        </NavLink>
                      </li>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <NavLink
                          to='/product-details-two'
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          {" "}
                          Health & wellness 
                        </NavLink>
                      </li>
                     
                    </ul>
                  </li>
                   <li className='on-hover-item nav-menu__item has-submenu'>
                                      <Link to='#' className='nav-menu__link'>
                                      Fruits & Vegetables 
                                      </Link>
                                      <ul className='on-hover-dropdown common-dropdown nav-submenu scroll-sm'>
                                        <li className='common-dropdown__item nav-submenu__item'>
                                          <NavLink
                                            to='/shop'
                                            className={(navData) =>
                                              navData.isActive
                                                ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                                                : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            }
                                          >
                                            {" "}
                                             Herbs & Seasonings
                                          </NavLink>
                                        </li>
                                       
                                      </ul>
                                    </li>
                     </ul>  
                    </div>
                  
              {/* Menu End */}
            </div>

            {/* Header Right */}
            <div className='header-right flex-align'>
              <Link to='/tel:+91-9989-385-332' className='bg-main-600 text-white p-12 h-100 hover-bg-main-800 flex-align gap-8 text-lg d-lg-flex d-none'>
                <div className='d-flex text-32'><i className='ph ph-phone-call' /></div> +91-9989 385 332
              </Link>
              <div className='me-16 d-lg-none d-block'>
                <div className='flex-align flex-wrap gap-12'>
                  <button onClick={toggleSearch} type='button' className='search-icon flex-align d-lg-none d-flex gap-4 item-hover'>
                    <span className='text-2xl text-gray-700 d-flex position-relative item-hover__text'>
                      <i className='ph ph-magnifying-glass' />
                    </span>
                  </button>
                  <Link to='/wishlist' className='flex-align gap-4 item-hover'>
                    <span className='text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text'>
                      <i className='ph ph-heart' />
                      <span className='w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4'>2</span>
                    </span>
                    <span className='text-md text-gray-500 item-hover__text d-none d-lg-flex'>Wishlist</span>
                  </Link>
                  <Link to='/cart' className='flex-align gap-4 item-hover'>
                    <span className='text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text'>
                      <i className='ph ph-shopping-cart-simple' />
                      <span className='w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4'>2</span>
                    </span>
                    <span className='text-md text-gray-500 item-hover__text d-none d-lg-flex'>Cart</span>
                  </Link>
                </div>
              </div>
              <button onClick={toggleMenu} type='button' className='toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex'>
                <i className='ph ph-list' />
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
