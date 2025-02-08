import React from "react";
import "../css/maincon.css";
import stars from "../image/stars.png";
import amazonimage from "../image/amazonimage.png";
import image from "../image/image.png";
import setting from "../image/setting.png";
import truck from "../image/truck.png";
import warranty from "../image/warranty.png";
import money from "../image/money-bag.png";
import trophy from "../image/trophy.png";
import mobile from "../image/mobileimage1.jpg";
import message from "../image/message.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import location from "../image/location1.png";

const Maincon = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  function change() {
    document.getElementsByClassName("img1").style.border =
      "2px solid rgb(58, 179, 195)";
  }
  return (
    <div className="main">
      <div className="box1">
        <div className="con1">
          <div className="first">
            <h1>
              iQOO Z9 5G (Graphene Blue, 8GB RAM, 256GB Storage) | Dimensity
              7200 5G Processor | Sony IMX882 OIS Camera | 120Hz AMOLED with
              1800 nits Local Peak Brightness | 44W Charger in The Box
            </h1>
            <a href="">Visit the iQOO Store</a>
          </div>
          <div className="second">
            <div className="rat">
              <p>4.2 </p>
              <img src={stars} alt="" />
            </div>

            <p>
              <a href="">5,908 ratings</a> | <a href="">Search this page</a>
            </p>
          </div>
          <div className="third">
            <p>
              1K+ bought <span> in past month</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="con2">
          <h6>Limited time deal</h6>
          <p className="para1">
            <span>- 24% </span> ₹ 20,498
          </p>
          <p className="para2">
            M.R.P : ₹ <strike>26,999</strike>
          </p>
          <img src={amazonimage} alt="" />
          <p>Inclusive of all taxes</p>
          <div className="para3">
            <b>EMI</b>
            <span>starts at ₹994. No Cost EMI available </span>
            <p>EMI options</p>
          </div>
        </div>
        <hr />
        <div className="con3">
          <div className="para5">
            <img src={image} alt="" />
            <h3>Offer</h3>
          </div>
          <div className="four">
            <Slider {...settings}>
              <div className="bankoffer">
                <h4>Bank Offer</h4>
                <p>Upto ₹3,000.00 discount on select Credit Card,select....</p>
                <a href="">8 Offer</a>
              </div>
              <div className="bankoffer">
                <h4>No Cost Emi</h4>
                <p>Upto ₹3,000.00 discount on select Credit Card,select....</p>
                <a href="">8 Offer</a>
              </div>
              <div className="bankoffer">
                <h4>Cashback</h4>
                <p>Upto ₹3,000.00 discount on select Credit Card,select....</p>
                <a href="">8 Offer</a>
              </div>
              <div className="bankoffer">
                <h4>Partner Offer</h4>
                <p>Upto ₹3,000.00 discount on select Credit Card,select....</p>
                <a href="">8 Offer</a>
              </div>
            </Slider>
          </div>
        </div>
        <hr />
        <div className="con4">
          <Slider {...settings}>
            <div className="setting">
              <div className="help">
                <img src={setting} alt="" />
                <p>7 days Service Center Replacement</p>
              </div>
            </div>
            <div className="setting">
              <div className="help">
                <img src={truck} alt="" />
                <p>Free Delivery</p>
              </div>
            </div>
            <div className="setting">
              <div className="help">
                <img src={warranty} alt="" />
                <p>1 Year warranty</p>
              </div>
            </div>
            <div className="setting">
              <div className="help">
                <img src={money} alt="" />
                <p>Cash/Pay on Delivery</p>
              </div>
            </div>
            <div className="setting">
              <div className="help">
                <img src={trophy} alt="" />
                <p>Top Brand</p>
              </div>
            </div>
          </Slider>
        </div>
        <hr />
        <div className="con5">
          <p>
            color : <b> Brushed Green</b>
          </p>
          <div className="imagemain">
            <div className="img1" onClick={change}>
              <img src={mobile} alt="" />
              <p>₹20,499.00</p>
              <strike>₹29,999.00</strike>
              <span>FREE Delivery</span>
              <h5>Wed,5 Feb</h5>
            </div>
            <div className="img1">
              <img src={mobile} alt="" />
              <p>₹20,499.00</p>
              <strike>₹40,999.00</strike>
              <span>FREE Delivery</span>
              <h5>Wed,5 Feb</h5>
            </div>
          </div>
          <div className="size">
            <p>size : </p>
            <h4> 8GB RAM, 256GB Storage</h4>
          </div>
          <div className="ram">
            <div className="ram1">
              <p>8GB RAM, 256GB Storage</p>
            </div>
            <div className="ram1">
              <p>8GB RAM, 128GB Storage</p>
            </div>
          </div>
          <div className="table">
            <div className="title">
              <p>Style Name : </p>
              <h4> iQOO Z9 5G</h4>
            </div>
            <table>
              <tr>
                <th>Brand</th>
                <tb>iQOO</tb>
              </tr>
              <tr>
                <th>Operating System</th>
                <tb>Funtouch OS 14 Based On Android 14</tb>
              </tr>
              <tr>
                <th>RAM Memory Installed Size</th>
                <tb>8 GB</tb>
              </tr>
              <tr>
                <th>CPU Model</th>
                <tb>Others</tb>
              </tr>
              <tr>
                <th>CPU Speed</th>
                <tb>2.8 GHz</tb>
              </tr>
            </table>
          </div>
          <div className="para">
            <h3>About this item</h3>
            <ul>
              <li>
                Fully Loaded Performance - Powered by MediaTek Dimensity 7200
                built on flagship grade TSMC 2nd Gen 4nm process with a clock
                speed of 2.8GHz
              </li>
              <li>
                Fully Loaded Camera - Experience Impressive camera shots with 50
                MP Sony IMX882 OIS camera, 4K video recording with OIS, Super
                Night Mode, 2x Portrait Zoom, 50 MP UHD Mode
              </li>
              <li>
                Fully Loaded Display - 16.9cm(6.6) 120Hz Full HD+ AMOLED Display
                with 1800 nits local peak brightness, Certified by SGS Eye Care
                Display, DT Star2-Plus Glass protection, HDR playback supported
              </li>
              <li>
                7.83mm Slim Design, Dual Stereo Speakers, IP54 Rated, Extended
                RAM up to 8GB, FunTouch OS 14 Powered by Android 14
              </li>
            </ul>
          </div>
          <a href="">See more product details</a>
          <div className="final">
            <img src={message} alt="" />
            <p>Report an issue with this product</p>
          </div>
        </div>
      </div>
      <div className="box2">
        <h1>&#8377;20,458.00</h1>
        <img src={amazonimage} alt="" />
        <div className="del">
          <p>
            FREE Delivery Wednesday, 5 February. Order within 12 hrs 36 mins.
            Details
          </p>
        </div>
        <div className="loc">
          <img src={location} alt="" />
          <p>Delivery to kishore - viluppuram 605302</p>
        </div>
        <div className="stock">
          <h3>In Stock</h3>
          <table>
            <tr>
              <p>Payment</p>
              <p className="align">secure transcation</p>
            </tr>
            <tr>
              <p>Ships from</p>
              <p className="align">Amazon</p>
            </tr>
            <tr>
              <p>Sold by</p>
              <p className="align">Darshita Etel</p>
            </tr>
          </table>
        </div>
        <div className="add">
          <h4>Add a Protection Plan:</h4>
          <input type="checkbox" />
          <label htmlFor="">Total Protection Plan </label>
          <span>for</span>
          <p>&#8377;1,499.00</p>
          <input type="checkbox" />
          <label htmlFor="">Extended Warenty </label>
          <span>for</span>
          <p> &#8377;1,499.00</p>
        </div>
        <div className="but">
          <button className="but1">Add to Cart</button>
          <button className="but2">Buy Now</button>
        </div>
        <input type="checkbox" />
        <label htmlFor="">Add gift option</label>
        <button className="but3">Add to Wish List</button>
      </div>
    </div>
  );
};

export default Maincon;
