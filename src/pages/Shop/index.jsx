import { h } from "preact";

const Shop = () => {
  return (
    <div>
      <nav
        className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Furni navigation bar"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            Raffi<span>.</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="active">
                <a className="nav-link" href="/shop">
                  Shop
                </a>
              </li>
              <li>
                <a className="nav-link" href="/about">
                  About us
                </a>
              </li>
              <li>
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>
              <li>
                <a className="nav-link" href="/contact">
                  Contact us
                </a>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a className="nav-link" href="#">
                  <img src="images/user.svg" alt="User" />
                </a>
              </li>
              <li>
                <a className="nav-link" href="/cart">
                  <img src="images/cart.svg" alt="Cart" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Shop</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src="images/product-3.png"
                  className="img-fluid product-thumbnail"
                  alt="Nordic Chair"
                />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">Rp500.000</strong>
                <span className="icon-cross">
                  <img
                    src="images/cross.svg"
                    className="img-fluid"
                    alt="Cross Icon"
                  />
                </span>
              </a>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src="images/product-1.png"
                  className="img-fluid product-thumbnail"
                  alt="Nordic Chair"
                />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">Rp500.000</strong>
                <span className="icon-cross">
                  <img
                    src="images/cross.svg"
                    className="img-fluid"
                    alt="Cross Icon"
                  />
                </span>
              </a>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src="images/product-2.png"
                  className="img-fluid product-thumbnail"
                  alt="Kruzo Aero Chair"
                />
                <h3 className="product-title">Kruzo Aero Chair</h3>
                <strong className="product-price">Rp780.000</strong>
                <span className="icon-cross">
                  <img
                    src="images/cross.svg"
                    className="img-fluid"
                    alt="Cross Icon"
                  />
                </span>
              </a>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src="images/product-3.png"
                  className="img-fluid product-thumbnail"
                  alt="Ergonomic Chair"
                />
                <h3 className="product-title">Ergonomic Chair</h3>
                <strong className="product-price">Rp430.000</strong>
                <span className="icon-cross">
                  <img
                    src="images/cross.svg"
                    className="img-fluid"
                    alt="Cross Icon"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-section">
        <div className="container relative">
          <div className="sofa-img">
            <img src="images/sofa.png" alt="Sofa" className="img-fluid" />
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="subscription-form">
                <h3 className="d-flex align-items-center">
                  <span className="me-1">
                    <img
                      src="images/envelope-outline.svg"
                      alt="Envelope"
                      className="img-fluid"
                    />
                  </span>
                  <span>Subscribe to Newsletter</span>
                </h3>

                <form action="#" className="row g-3">
                  <div className="col-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-primary">
                      <span className="fa fa-paper-plane"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div className="mb-4 footer-logo-wrap">
                <a href="#" className="footer-logo">
                  Raffi<span>.</span>
                </a>
              </div>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                excepturi numquam est iure laboriosam vero temporibus modi, ea
                suscipit voluptate voluptatibus ipsam nam, amet nemo veniam
                voluptates delectus. Veniam, in?
              </p>

              <ul className="list-unstyled custom-social">
                <li>
                  <a href="#">
                    <span className="fa fa-brands fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-brands fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-brands fa-instagram"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-brands fa-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-8">
              <div className="row links-wrap">
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Knowledge base</a>
                    </li>
                    <li>
                      <a href="#">Live chat</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                    <li>
                      <a href="#">Our team</a>
                    </li>
                    <li>
                      <a href="#">Leadership</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Nordic Chair</a>
                    </li>
                    <li>
                      <a href="#">Kruzo Aero</a>
                    </li>
                    <li>
                      <a href="#">Ergonomic Chair</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-top copyright">
            <div className="row pt-4">
              <div className="col-lg-6">
                <p className="mb-2 text-center text-lg-start">
                  Copyright &copy;<script>2024</script>. All Rights Reserved.
                  &mdash; Designed with love by{" "}
                  <a href="https://portofolio.raffifadlika.com">Raffi Fadlika</a>
                </p>
              </div>

              <div className="col-lg-6 text-center text-lg-end">
                <ul className="list-unstyled d-inline-flex ms-auto">
                  <li className="me-4">
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
