import { h } from "preact";

const Home = () => {
  return (
    <>
      <div>
        <nav
          className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
          aria-label="Furni navigation bar"
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
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
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li>
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
                  <a className="nav-link" href="/user">
                    <img src="images/user.svg" alt="User " />
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
                  <h1>
                    Modern Interior{" "}
                    <span className="d-block">Design Studio</span>
                  </h1>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Excepturi vero totam repudiandae quidem laborum perferendis.
                  </p>
                  <p>
                    <a href="#" className="btn btn-secondary me-2">
                      Shop Now
                    </a>
                    <a href="#" className="btn btn-white-outline">
                      Explore
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="hero-img-wrap">
                  <img
                    src="images/couch.png"
                    className="img-fluid"
                    alt="Couch"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                <h2 className="mb-4 section-title">
                  Dibuat dengan material terbaik.
                </h2>
                <p className="mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam quae et veritatis esse dolores mollitia fugiat fugit.
                </p>
                <p>
                  <a href="shop.html" className="btn">
                    Explore
                  </a>
                </p>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                <a className="product-item" href="cart.html">
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
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                <a className="product-item" href="cart.html">
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
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                <a className="product-item" href="cart.html">
                  <img
                    src="images/product-3.png"
                    className="img-fluid product-thumbnail"
                    alt="Ergonomic Chair"
                  />
                  <h3 className="product-title">Ergonomic Chair</h3>
                  <strong className="product-price">Rp480.000</strong>
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

        <div className="why-choose-section">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <h2 className="section-title">Why Choose Us</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  tempore eveniet necessitatibus animi aut corporis quis
                  incidunt.
                </p>
                <div className="row my-5">
                  <div className="col-6 col-md-6">
                    <div className="feature">
                      <div className="icon">
                        <img
                          src="images/truck.svg"
                          alt="Fast & Free Shipping"
                          className="img-fluid"
                        />
                      </div>
                      <h3>Fast &amp; Free Shipping</h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Fugiat quidem, et perspiciatis deleniti recusandae
                        quaerat!.
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-md-6">
                    <div className="feature">
                      <div className="icon">
                        <img
                          src="images/bag.svg"
                          alt="Easy to Shop"
                          className="img-fluid"
                        />
                      </div>
                      <h3>Easy to Shop</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Minus, provident itaque libero in nam laborum
                        nesciunt.
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-md-6">
                    <div className="feature">
                      <div className="icon">
                        <img
                          src="images/support.svg"
                          alt="24/7 Support"
                          className="img-fluid"
                        />
                      </div>
                      <h3>24/7 Support</h3>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ipsam aut facere alias temporibus accusantium
                        velit.
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-md-6">
                    <div className="feature">
                      <div className="icon">
                        <img
                          src="images/return.svg"
                          alt="Hassle Free Returns"
                          className="img-fluid"
                        />
                      </div>
                      <h3>Hassle Free Returns</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aperiam ut ipsum cumque consectetur natus tempora
                        ab.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="img-wrap">
                  <img
                    src="images/why-choose-us-img.jpg"
                    alt="Why Choose Us"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="we-help-section">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-7 mb-5 mb-lg-0">
                  <div className="imgs-grid">
                    <div className="grid grid-1">
                      <img src="images/img-grid-1.jpg" alt="Image 1" />
                    </div>
                    <div className="grid grid-2">
                      <img src="images/img-grid-2.jpg" alt="Image 2" />
                    </div>
                    <div className="grid grid-3">
                      <img src="images/img-grid-3.jpg" alt="Image 3" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 ps-lg-5">
                  <h2 className="section-title mb-4">
                    Professional Interior Design
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Esse facere doloremque tempore in officiis atque. Incidunt
                    voluptatibus consequatur eaque, consectetur nulla impedit
                    nesciunt quisquam officia, ipsam eligendi debitis facere
                    molestias!
                  </p>
                  <ul className="list-unstyled custom-list my-4">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </li>
                    <li>Veritatis eveniet, sint asperiores</li>
                    <li>Sed sit accusantium facere beatae</li>
                    <li>Ducimus ratione, iusto magni sunt</li>
                  </ul>
                  <p>
                    <a href="#" className="btn">
                      Explore
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="popular-product">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                  <div className="product-item-sm d-flex">
                    <div className="thumbnail">
                      <img
                        src="images/product-1.png"
                        alt="Nordic Chair"
                        className="img-fluid"
                      />
                    </div>
                    <div className="pt-3">
                      <h3>Nordic Chair</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <p>
                        <a href="#">Read More</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                  <div className="product-item-sm d-flex">
                    <div className="thumbnail">
                      <img
                        src="images/product-2.png"
                        alt="Kruzo Aero Chair"
                        className="img-fluid"
                      />
                    </div>
                    <div className="pt-3">
                      <h3>Kruzo Aero Chair</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <p>
                        <a href="#">Read More</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                  <div className="product-item-sm d-flex">
                    <div className="thumbnail">
                      <img
                        src="images/product-3.png"
                        alt="Ergonomic Chair"
                        className="img-fluid"
                      />
                    </div>
                    <div className="pt-3">
                      <h3>Ergonomic Chair</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                      <p>
                        <a href="#">Read More</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mx-auto text-center">
                  <h2 className="section-title">Testimonials</h2>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="testimonial-slider-wrap text-center">
                    <div id="testimonial-nav">
                      <span className="prev" data-controls="prev">
                        <span className="fa fa-chevron-left"></span>
                      </span>
                      <span className="next" data-controls="next">
                        <span className="fa fa-chevron-right"></span>
                      </span>
                    </div>
                    <div className="testimonial-slider">
                      <div className="item">
                        <div className="row justify-content-center">
                          <div className="col-lg-8 mx-auto">
                            <div className="testimonial-block text-center">
                              <blockquote className="mb-5">
                                <p>
                                  &ldquo;Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Fuga minima voluptatum
                                  voluptate quod architecto nostrum quisquam
                                  dignissimos corporis maxime, a repellendus!
                                  Quis dignissimos earum, omnis eos in sit
                                  dolore vero.&rdquo;
                                </p>
                              </blockquote>

                              <div className="author-info">
                                <div className="author-pic">
                                  <img
                                    src="images/person-1.png"
                                    alt="Maria Jones"
                                    className="img-fluid"
                                  />
                                </div>
                                <h3 className="font-weight-bold">
                                  Maria Jones
                                </h3>
                                <span className="position d-block mb-3">
                                  CEO, Co-Founder, XYZ Inc.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="row justify-content-center">
                          <div className="col-lg-8 mx-auto">
                            <div className="testimonial-block text-center">
                              <blockquote className="mb-5">
                                <p>
                                  &ldquo;Lorem ipsum dolor sit, amet consectetur
                                  adipisicing elit. Assumenda quia ut expedita,
                                  fugit maxime rem voluptatibus laudantium
                                  mollitia quam magnam quaerat veniam esse animi
                                  ipsum dolorem quis dicta odit. Alias?&rdquo;
                                </p>
                              </blockquote>

                              <div className="author-info">
                                <div className="author-pic">
                                  <img
                                    src="images/person-1.png"
                                    alt="Maria Jones"
                                    className="img-fluid"
                                  />
                                </div>
                                <h3 className="font-weight-bold">
                                  Maria Jones
                                </h3>
                                <span className="position d-block mb-3">
                                  CEO, Co-Founder, XYZ Inc.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="row justify-content-center">
                          <div className="col-lg-8 mx-auto">
                            <div className="testimonial-block text-center">
                              <blockquote className="mb-5">
                                <p>
                                  &ldquo;Lorem ipsum dolor sit amet consectetur,
                                  adipisicing elit. Vero facere, soluta
                                  provident quos, quod error, iure unde nesciunt
                                  enim rem est incidunt quis aut alias numquam
                                  quia ipsum illo nisi.&rdquo;
                                </p>
                              </blockquote>

                              <div className="author-info">
                                <div className="author-pic">
                                  <img
                                    src="images/person-1.png"
                                    alt="Maria Jones"
                                    className="img-fluid"
                                  />
                                </div>
                                <h3 className="font-weight-bold">
                                  Maria Jones
                                </h3>
                                <span className="position d-block mb-3">
                                  CEO, Co-Founder, XYZ Inc.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-section">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-6">
                  <h2 className="section-title">Recent Blog</h2>
                </div>
                <div className="col-md-6 text-start text-md-end">
                  <a href="#" className="more">
                    View All Posts
                  </a>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                  <div className="post-entry">
                    <a href="#" className="post-thumbnail">
                      <img
                        src="images/post-1.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-content-entry">
                      <h3>
                        <a href="#">First Time Home Owner Ideas</a>
                      </h3>
                      <div className="meta">
                        <span>
                          by <a href="#">Raffi Fadlika</a>
                        </span>
                        <span>
                          on <a href="#">Aug 13, 2024</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                  <div className="post-entry">
                    <a href="#" className="post-thumbnail">
                      <img
                        src="images/post-2.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-content-entry">
                      <h3>
                        <a href="#">How To Keep Your Furniture Clean</a>
                      </h3>
                      <div className="meta">
                        <span>
                          by <a href="#">Raffi Fadlika</a>
                        </span>
                        <span>
                          on <a href="#">Jun 18, 2023</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                  <div className="post-entry">
                    <a href="#" className="post-thumbnail">
                      <img
                        src="images/post-3.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-content-entry">
                      <h3>
                        <a href="#">Small Space Furniture Apartment Ideas</a>
                      </h3>
                      <div className="meta">
                        <span>
                          by <a href="#">Raffi Fadlika</a>
                        </span>
                        <span>
                          on <a href="#">May 3, 2024</a>
                        </span>
                      </div>
                    </div>
                  </div>
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
                      Furni<span>.</span>
                    </a>
                  </div>
                  <p className="mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nobis architecto exercitationem cupiditate alias corrupti
                    aliquam, expedita, vero, illo sint rem amet est sed? Maxime
                    harum, quasi quidem architecto asperiores fugiat.
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
                      Copyright &copy;
                      <script>document.write(new Date().getFullYear());</script>
                      . All Rights Reserved. &mdash; Designed with love by{" "}
                      <a href="https://portofolio.raffifadlika.com">
                        Raffi Fadlika
                      </a>
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
          <script src="js/bootstrap.bundle.min.js"></script>
          <script src="js/tiny-slider.js"></script>
          <script src="js/custom.js"></script>
        </div>
      </div>
    </>
  );
};

export default Home;
