import logo from './logo.svg';
import './App.css';
import Header from './conponents/Header';
import Slider from './conponents/Slider';
import Detail from './conponents/Detail';
import Product from './conponents/Product';

function App() {
  return (
    <div className="App">
      <>
  <div className="hero_area">
    {/* header section strats */}
<Header></Header>
    {/* end header section */}
    {/* slider section */}
   <Slider></Slider>
    {/* end slider section */}
  </div>
  {/* detail section */}
 <Detail></Detail>
  {/* end detail section */}
  {/* products section */}
 <Product></Product>
  {/* end products section */}
  {/* find section */}
  <section className="find_section layout_padding-bottom">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-8 offset-md-2">
          <div className="find_container">
            <div className="row">
              <div className="col-sm-6">
                <div className="find_container-img">
                  <img src="images/find-img.png" alt="" />
                </div>
              </div>
              <div className="col-sm-6">
                <h3>
                  Find Everything <br />
                  From A to Z
                </h3>
                <p>Shop Back to school</p>
              </div>
            </div>
          </div>
          <div className="shop_container">
            <div className="row">
              <div className="col-sm-6">
                <p>Shoes</p>
                <h3>Shop by catagories</h3>
                <div>
                  <a href=""> View More </a>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="shoe_img-box">
                  <img src="images/shoes.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="find_img-box">
            <img src="images/find-hero.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end find section */}
  {/* client section */}
  <section className="client_section layout_padding">
    <div className="container">
      <h2>What our Customer says</h2>
      <div
        id="carouselExample2Controls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row layout_padding2">
              <div className="col-md-6">
                <div className="client_box">
                  <div className="client_id-box">
                    <div className="client_img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <h4>Carlac liyo</h4>
                  </div>
                  <div className="client_detail">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="client_box">
                  <div className="client_id-box">
                    <div className="client_img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <h4>Carlac liyo</h4>
                  </div>
                  <div className="client_detail">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row layout_padding2">
              <div className="col-md-6">
                <div className="client_box">
                  <div className="client_id-box">
                    <div className="client_img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <h4>Carlac liyo</h4>
                  </div>
                  <div className="client_detail">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="client_box">
                  <div className="client_id-box">
                    <div className="client_img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <h4>Carlac liyo</h4>
                  </div>
                  <div className="client_detail">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row layout_padding2">
              <div className="col-md-6">
                <div className="client_box">
                  <div className="client_id-box">
                    <div className="client_img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <h4>Carlac liyo</h4>
                  </div>
                  <div className="client_detail">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="client_box">
                  <div className="client_id-box">
                    <div className="client_img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <h4>Carlac liyo</h4>
                  </div>
                  <div className="client_detail">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExample2Controls"
          role="button"
          data-slide="prev"
        >
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExample2Controls"
          role="button"
          data-slide="next"
        >
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div className="container">
      <div className="item_container">
        <div className="row">
          <div className="col-sm-7">
            <h3>Best offers on any makeup items</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical
            </p>
            <div>
              <a href=""> Shop Now </a>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="item_img-box">
              <img src="images/items.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end client section */}
  {/* sign section */}
  <section className="sign_section layout_padding2">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <h3>Sign up for Newsletter</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered
          </p>
        </div>
        <div className="col-md-7">
          <form action="">
            <input type="email" placeholder="Enter your email" />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* end sign section */}
  {/* info section */}
  <section className="info_section layout_padding">
    <div className="container links_container">
      <div className="row">
        <div className="col-md-3">
          <h3>CUSTOMER SERVICE</h3>
          <ul>
            <li>
              <a href=""> International Help </a>
            </li>
            <li>
              <a href=""> Contact Customer Care </a>
            </li>
            <li>
              <a href=""> Return Policy </a>
            </li>
            <li>
              <a href=""> Privacy Policy </a>
            </li>
            <li>
              <a href=""> Shipping Information </a>
            </li>
            <li>
              <a href=""> Promotion Terms </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3>LET US HELP YOU</h3>
          <ul>
            <li>
              <a href=""> Your Account </a>
            </li>
            <li>
              <a href=""> Your Orders </a>
            </li>
            <li>
              <a href=""> Shipping Rates &amp; Policies </a>
            </li>
            <li>
              <a href=""> Amazon Prime </a>
            </li>
            <li>
              <a href=""> Returns &amp; Replacements </a>
            </li>
            <li>
              <a href=""> Help </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3>INFORMATION</h3>
          <ul>
            <li>
              <a href=""> About Us </a>
            </li>
            <li>
              <a href=""> Careers </a>
            </li>
            <li>
              <a href=""> Sell on shop </a>
            </li>
            <li>
              <a href=""> Press &amp; News </a>
            </li>
            <li>
              <a href=""> Competitions </a>
            </li>
            <li>
              <a href=""> Terms &amp; Conditions </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3>OUR SHOP</h3>
          <ul>
            <li>
              <a href=""> Daily Deals </a>
            </li>
            <li>
              <a href=""> App Only Deals </a>
            </li>
            <li>
              <a href=""> Our Hottest Products </a>
            </li>
            <li>
              <a href=""> Gift Vouchers </a>
            </li>
            <li>
              <a href=""> Trending Product </a>
            </li>
            <li>
              <a href=""> Hot Flash Sale </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="follow_container">
        <div className="row">
          <div className="col-md-9">
            <div className="app_container">
              <h3>DOWNLOAD OUR APPS</h3>
              <div>
                <img src="images/google-play.png" alt="" />
                <img src="images/apple-store.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_social">
              <div>
                <a href="">
                  <img src="images/fb.png" alt="" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="images/twitter.png" alt="" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="images/linkedin.png" alt="" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="images/instagram.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end info section */}
  {/* footer section */}
  <section className="container-fluid footer_section">
    <p>
      Copyright © All Rights Reserved By
      <a href="https://html.design/">Free Html Templates</a>
    </p>
  </section>
  {/* footer section */}
</>

    </div>
  );
}

export default App;
