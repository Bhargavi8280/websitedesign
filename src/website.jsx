import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./website.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Website() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          AGRICULTURE
          <img
            className="Img"
            src="https://w7.pngwing.com/pngs/788/138/png-transparent-farm-agriculture-tractor-agriculture-leaf-label-logo-thumbnail.png"
            alt="Logo"
            style={{ width: "60px" }}
          />
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link ">Home</a>
              <a className="nav-link">About us</a>
              <a className="nav-link">Our service</a>
              <a className="nav-link ">Testimonials</a>
              <a className="nav-link ">Blog</a>
              <a className="nav-link ">Dropdown</a>
              <a className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://img.freepik.com/free-photo/african-people-harvesting-vegetables_23-2151441325.jpg?t=st=1720253409~exp=1720257009~hmac=6bcc09b5cac9cacc2d2a0593e820927a54158b6ffc6a8d2850c6a5a39ae3f562&w=1060"
                className="d-block w-100"
                alt="First slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>Organic vegetables is good for health</h1> <br />
                <p>
                  Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://img.freepik.com/free-photo/volunteer-planting-trees-nature_1268-21664.jpg?t=st=1720278465~exp=1720282065~hmac=6cc6608e1eda90cbbe528af2d78c46d5f533032a2ab7392ac04d36d9bfd4f5d7&w=1060"
                className="d-block w-100 h-80"
                alt="Second slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>Providing Fresh Produce Every Single Day</h1> <br />
                <p>
                  Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://img.freepik.com/free-photo/growing-organic-ecological-plants-fields-background_1268-30622.jpg?t=st=1720277848~exp=1720281448~hmac=f4d41298269772c7d1375bb96b5f70ac16454a09904879e6d571463ee6b823b2&w=1060"
                className="d-block w-100 h-80"
                alt="Third slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>Farming as a Passione</h1> <br />
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="Bhagi">
        <h3>SERVICES</h3>
        <h2>Providing Fresh Produce Every Single Day</h2>
      </div>

      <div className="B1">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/nature-protection-8733092-7059969.png?f=webp&w=256"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/mulching-8051624-6401297.png?f=webp&w=256"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-tractor-2590037-2160118.png?f=webp&w=256"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/shovel-2431553-2019440.png?f=webp&w=256"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>

      <div className="B1">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/seeding-7264664-5976253.png?f=webp&w=256"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/vegetables-basket-1594806-1349430.png?f=webp&w=256"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/vegetable-shop-7407427-5999534.png?f=webp&w=256"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/harvesting-3560920-2988221.png?f=webp&w=256"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>

      <div className="Farmman">
        <div className="man">
          <img
            src="https://img.freepik.com/free-photo/old-man-standing-his-orange-trees_23-2148980168.jpg?t=st=1720279205~exp=1720282805~hmac=0a3ac5d0f6043fc4b8324e847ca45276e6fd961a076db0dd7814943344043354&w=360"
            alt=""
            className="oldman"
          />
          <div className="info">
            <h5>WHY CHOOSE US</h5>
            <h1>More than 50 year experience in agriculture industry </h1>
            <h5>
              Reprehenderit, odio laboriosam? Blanditiis quae ullam quasi illum
              minima nostrum perspiciatis error consequatur sit nulla.
            </h5>
            <br></br>
            <div className="icon1">
              <FontAwesomeIcon icon={faCloudRain} />
              <h6>
                Plants needs rain Lorem ipsum dolor sit amet. ipsum dolor sit
                amet.
              </h6>
              <br />
              <FontAwesomeIcon icon={faHeart} />
              <h6>Love organic foods Lorem ipsum dolor sit amet.</h6>
              <br />
              <FontAwesomeIcon icon={faHouse} />
              <h6>Sell vegies Lorem ipsum dolor sit amet.</h6>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="veg">
        <div className="veg1">
          <h1 className="v1">Plants Make Life Better</h1>
          <br />
          <p className="v2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim <br />
            necessitatibus placeat, atque qui voluptatem velit explicabo vitae{" "}
            <br />
            repellendus architecto provident nisi ullam minus asperiores
            commodi! Tenetur, repellat aliquam nihil illo.
          </p>
          <br />
          <li className="v2">Lorem ipsum dolor sit amet</li>
          <li className="v2">Velit explicabo vitae repellendu</li>
          <li className="v2">Repellat aliquam nihil illo</li> <br></br> <br />
          <br /> <button className="Butt">GET IN TOUCH</button>
        </div>
        <div className="veg2">
          <img
            src="https://img.freepik.com/free-photo/close-up-old-farmer-holding-basket-vegetables-man-is-standing-garden-senior-black-apron_1157-39724.jpg?t=st=1720284801~exp=1720288401~hmac=d3a30a5f35fda3f719b1368e3477efa8b9a889de450f07784a05146759c8b90e&w=360"
            alt=""
            className="vegman"
          />
        </div>
      </div>
      <div className="service">
        <div className="s1">
          <h4>SERVICES</h4>
          <h2>Necessitatibus eius consequatur</h2>
          <div className="serve-img">
            {" "}
            <img src="https://img.freepik.com/free-photo/woman-holding-basket-full-vegetables-close-up_23-2148580024.jpg?t=st=1726844643~exp=1726848243~hmac=f00704be32cfa3693adfc712a99e071b4dd20c1fc6bca02e11b46a55dafa9a72&w=900" />
            <img
              src="https://img.freepik.com/free-photo/male-farmer-watering-plant-crops-his-farm_23-2149211765.jpg?t=st=1726846136~exp=1726849736~hmac=f933c4278d4a7e98e849069ca52656bf2634f8e39375129ecd9a85ba4f8aa7ac&w=996"
              alt=""
            />
            <img
              src="https://img.freepik.com/free-photo/man-woman-cultivating-salad-hydroponic-enviroment-pointing-another-row-bio-green-lettuce-vegetables-diverse-people-working-hot-greenhouse-with-different-crops_482257-48413.jpg?t=st=1726846168~exp=1726849768~hmac=446a28488cb5bc0f16b1dfa795d7ac1004d7426a8b789057140c2a41eb5acf81&w=996"
              alt=""
            />
            <img
              src="https://img.freepik.com/free-photo/farm-worker-driving-tractor-spraying-green-meadow-generated-by-ai_188544-18554.jpg?t=st=1726846194~exp=1726849794~hmac=2e89f9335185c0ad666ba52740590be40cd1e1e73477432e0ff6ae5cd73b13c9&w=1060"
              alt=""
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <center>
          <h1 style={{ color: "green" }}>TESTONOMIALS</h1>
        </center>
        <center>
          <h3>Necessitatibus eius consequatur</h3>
        </center>
      </div>

      <div className="test">
        <div className="t1">
          <img
            src="https://img.freepik.com/free-photo/portrait-handsome-serious-man_23-2149022626.jpg?t=st=1720348304~exp=1720351904~hmac=e7971ccfe4363170037a7490d74cf7d14b519be8a7c5b7252a52ba00847a0f81&w=996"
            alt=""
            className="img-1"
          />{" "}
          <br /> <br />
          <p>
            “Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident{" "}
            <br />
            deleniti iusto molestias, dolore vel fugiat ab placeat ea?”
          </p>{" "}
          <br />
          <h4>JAMES SMITH</h4>
        </div>
        <div className="t2">
          <img
            src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?t=st=1720348853~exp=1720352453~hmac=d88d07f429c6ffc827691d5317136dfd2b0621f4872ddc0afba4ae05f083795a&w=740"
            alt=""
            className="img-1"
          />{" "}
          <br /> <br />
          <p>
            “Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident{" "}
            <br />
            deleniti iusto molestias, dolore vel fugiat ab placeat ea?”
          </p>{" "}
          <br />
          <h4>CLAIRE ANDERSON</h4>
        </div>
        <div className="t3">
          <img
            src="https://img.freepik.com/free-photo/tender-feminine-woman-with-blue-eyes-smiles-pleasantly-has-toothy-smile-wears-white-comfortable-sweater-looks-directly-camera-isolated-pink-background_273609-32160.jpg?t=st=1720348896~exp=1720352496~hmac=117730e671a9b36bfc0f0192c1f8f2d094e28e098e5680c3916e2b606154bf87&w=996"
            alt=""
            className="img-1"
          />{" "}
          <br /> <br />
          <p>
            “Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident{" "}
            <br />
            deleniti iusto molestias, dolore vel fugiat ab placeat ea?”
          </p>{" "}
          <br />
          <h4>KATE SMITH</h4>
        </div>
        <div className="t4">
          <img
            src="https://img.freepik.com/free-photo/front-view-young-businessman-office-clothing_23-2148763859.jpg?t=st=1720348952~exp=1720352552~hmac=ea9cef650061cd5508920dce84579d8df42f9a09377384da73e964d1bd04b71b&w=900"
            alt=""
            className="img-1"
          />{" "}
          <br /> <br />
          <p>
            “Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident{" "}
            <br />
            deleniti iusto molestias, dolore vel fugiat ab placeat ea?”
          </p>{" "}
          <br />
          <h4>DAN SMITH</h4>
        </div>
      </div>

      <div className="subscribe">
        <div className="sub1">
          <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            reprehenderit!
          </p>
        </div>
        <div className="sub2">
          <input type="email" id="email" placeholder="" className="in1" />
          <button className="b-1">subscribe</button>
        </div>
      </div>

      <div className="agriculture">
        <div className="a-1">
          <ul>
            <li>
              <h2>AgriCulture</h2> <br />
            </li>
            <li>A108 Adam Street</li>
            <li>New York, NY 535022</li> <br />
            <li>Phone: +1 5589 55488</li>
            <li>Email: info@example.com</li>
          </ul>
        </div>
        <div className="a-2">
          <ul>
            <li>
              <h4>Useful Links</h4>
            </li>{" "}
            <br />
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Terms of service</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="a-3">
          <ul>
            <li>
              <h4>Our Services</h4>
            </li>{" "}
            <br />
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Product Management</li>
            <li>Marketing</li>
            <li>Graphic Design</li>
          </ul>
        </div>
        <div className="a-4">
          <ul>
            <li>
              <h4>Hic solutasetp</h4>
            </li>{" "}
            <br />
            <li>Molestiae accusamus iure</li>
            <li>Excepturi dignissimos</li>
            <li>Suscipit distinctio</li>
            <li>Dilecta</li>
            <li>Sit quas consectetur</li>
          </ul>
        </div>
        <div className="a-5">
          <ul>
            <li>
              <h4>Nobis illum</h4>
            </li>{" "}
            <br />
            <li>Ipsam</li>
            <li>Laudantium dolorum</li>
            <li>Dinera</li>
            <li>Trodelas</li>
            <li>Flexo</li>
          </ul>
        </div>
      </div>
      <div className="last">
        <div className="la">
          <FontAwesomeIcon icon={faCopyright} /> Copyright MyWebsite. All Rights
          Reserved <br />
          Designed by BootstrapMade
        </div>
      </div>
    </div>
  );
}

export default Website;
