import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import "./Hompage.css";
import { FaLeaf } from "react-icons/fa";
import GeoMapImage from "../../assets/Images/Geospatial Mapping Image.jpg";
import MoniEvalImage from "../../assets/Images/Monitoring & Evaluation Image.jpg";
import StackholderImage from "../../assets/Images/Stakeholder Mangement Image.png";
import CO2SeqImage from "../../assets/Images/Carbon Sequestration Image.jpg";
import { BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar>
          <FaLeaf size={30} style={{ color: "green", marginRight: 10 }} />
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            AgroForesterPro
          </Typography>

          <Link to="/signin">
            <Button
              variant="contained"
              style={{ marginLeft: 10, backgroundColor: "#2C6B34" }}
            >
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              variant="contained"
              style={{ marginLeft: 10, backgroundColor: "#2C6B34" }}
            >
              Sign Up
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <section className="welcome">
        <h1>Embrace Nature, Empower Future</h1>
        <p>Be a part of our vibrant journey in reforesting the planet.</p>
        <Button
          variant="contained"
          style={{ marginLeft: 10, backgroundColor: " #6E4B3A" }}
        >
          Join Us
        </Button>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <p>
          <i>
            AgroForesterPro is a comprehensive platform designed to manage
            agroforestry projects across Africa by integrating geospatial data,
            predictive analytics, and on-the-ground insights.
          </i>
        </p>
        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-content">
              <h3>Geospatial Mapping</h3>
              <p>
                Visualize tree planting, soil quality, and water usage across
                multiple regions.
              </p>
              <Button variant="text">Learn more</Button>
            </div>
            <div className="feature-image">
              <img src={GeoMapImage} alt="Geospatial Mapping" />
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-image">
              <img src={MoniEvalImage} alt="Monitoring & Evaluation" />
            </div>
            <div className="feature-content">
              <h3>Monitoring & Evaluation</h3>
              <p>
                Track the health of ecosystems through satellite imagery, drone
                data, and remote sensing.
              </p>
              <Button variant="text">Learn more</Button>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-content">
              <h3>Stakeholder Management</h3>
              <p>
                A single interface to coordinate between local communities,
                NGOs, governments, and investors.
              </p>
              <Button variant="text">Learn more</Button>
            </div>
            <div className="feature-image">
              <img src={StackholderImage} alt="Stakeholder Management" />
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-image">
              <img src={CO2SeqImage} alt="Carbon Sequestration Monitoring" />
            </div>
            <div className="feature-content">
              <h3>Carbon Sequestration Monitoring</h3>
              <p>
                Automatically calculate carbon credits earned from the trees
                planted.
              </p>
              <Button variant="text">Learn more</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-middle">
            <div>
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
            </div>
            <div>
              <h4>Resources</h4>
              <a href="#blog">Blog</a>
              <a href="#guides">User guides</a>
              <a href="#webinars">Webinars</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#about">About us</a>
              <a href="#contact">Contact us</a>
            </div>
            <div>
              <h4>Plans & Pricing</h4>
              <a href="#personal">Personal</a>
              <a href="#startup">Start up</a>
              <a href="#organization">Organization</a>
            </div>
            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://instagram.com">
                  <BsInstagram />
                </a>
                <a href="https://x.com">
                  <BsTwitterX />
                </a>
                <a href="https://www.linkedin.com">
                  <BsLinkedin />
                </a>
                <a href="https://www.youtube.com">
                  <BsYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 AgroForesterPro • Privacy • Terms & Conditions</p>
        </div>
      </footer>
    </>
  );
};

export default Homepage;
