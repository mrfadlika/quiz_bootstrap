import { h } from "preact";

const AboutUs = () => {
  return (
    <div>
      {/* Start Header/Navigation */}
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

          <div className="collapse navbar-collapse" id="navbars q">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="/shop">
                  Shop
                </a>
              </li>
              <li className="active">
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
      {/* End Header/Navigation */}

      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>About Us</h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum excepturi repellendus ea facilis porro minima at ex
                  dolor, rem alias aliquid iste vitae molestias voluptas odio
                  assumenda ad, soluta autem.
                </p>
                <p>
                  <a href="/shop" className="btn btn-secondary me-2 text-white">
                    Shop Now
                  </a>
                  <a href="#" className="btn btn-white-outline text-white">
                    Explore
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src="images/couch.png" className="img-fluid" alt="Couch" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse a
                nisi ducimus provident sapiente! Minus quisquam delectus sint
                laborum quidem dignissimos quia eveniet animi, sit obcaecati
                vitae placeat error aspernatur?
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
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
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
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
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
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
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
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
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
      </div>
      {/* End Why Choose Us Section */}

      {/* Start Team Section */}
      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-5 mx-auto text-center">
              <h2 className="section-title">Our Team</h2>
            </div>
          </div>

          <div className="row">
            {/* Start Column 1 */}
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img
                src="images/person_1.jpg"
                className="img-fluid mb-5"
                alt="Lawson Arnold"
              />
              <h3>
                <a href="#">
                  <span>Lawson</span> Arnold
                </a>
              </h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <p className="mb-0">
                <a href="#" className="more dark">
                  Learn More <span className="icon-arrow_forward"></span>
                </a>
              </p>
            </div>
            {/* End Column 1 */}

            {/* Start Column 2 */}
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img
                src="images/person_2.jpg"
                className="img-fluid mb-5"
                alt="Jeremy Walker"
              />
              <h3>
                <a href="#">
                  <span>Jeremy</span> Walker
                </a>
              </h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <p className="mb-0">
                <a href="#" className="more dark">
                  Learn More <span className="icon-arrow_forward"></span>
                </a>
              </p>
            </div>
            {/* End Column 2 */}

            {/* Start Column 3 */}
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img
                src="images/person_3.jpg"
                className="img-fluid mb-5"
                alt="Patrik White"
              />
              <h3>
                <a href="#">
                  <span>Patrik</span> White
                </a>
              </h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <p className="mb-0">
                <a href="#" className="more dark">
                  Learn More <span className="icon-arrow_forward"></span>
                </a>
              </p>
            </div>
            {/* End Column 3 */}

            {/* Start Column 4 ```javascript
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img src="images/person_4.jpg" className="img-fluid mb-5" alt="Kathryn Ryan" />
              <h3><a href="#"><span>Kathryn</span> Ryan</a></h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>
            </div>
            {/* End Column 4 */}
          </div>
        </div>
      </div>
      {/* End Team Section */}

      {/* Start Testimonial Slider */}
      <div className="testimonial-section before-footer-section">
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
                              &ldquo;Donec facilisis quam ut purus rutrum
                              lobortis. Donec vitae odio quis nisl dapibus
                              malesuada. Nullam ac aliquet velit. Aliquam
                              vulputate velit imperdiet dolor tempor tristique.
                              Pellentesque habitant morbi tristique senectus et
                              netus et malesuada fames ac turpis egestas.
                              Integer convallis volutpat dui quis
                              scelerisque.&rdquo;
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
                            <h3 className="font-weight-bold">Maria Jones</h3>
                            <span className="position d-block mb-3">
                              CEO, Co-Founder, XYZ Inc.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END item */}

                  {/* Repeat testimonial items as needed */}
                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>
                              &ldquo;Donec facilisis quam ut purus rutrum
                              lobortis. Donec vitae odio quis nisl dapibus
                              malesuada. Nullam ac aliquet velit. Aliquam
                              vulputate velit imperdiet dolor tempor tristique.
                              Pellentesque habitant morbi tristique senectus et
                              netus et malesuada fames ac turpis egestas.
                              Integer convallis volutpat dui quis
                              scelerisque.&rdquo;
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
                            <h3 className="font-weight-bold">Maria Jones</h3>
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
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant
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
                  <a href="https://untree.co">Untree.co</a>
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
      {/* End Footer Section */}
    </div>
  );
};

export default AboutUs;
