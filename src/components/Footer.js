import React from "react";
import "./FooterStyles.css";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffff", marginRight: "2rem" }}
            />
            <div>
              <p>123 Acme st.</p>
              <p>Houston, Tx</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffff", marginRight: "2rem" }}
              />{" "}
              1-800-123-456
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#ffff", marginRight: "2rem" }}
              />{" "}
              trips@galaxy.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the company</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            assumenda consectetur et incidunt maxime qui vel mollitia animi
            voluptatum tempora a similique amet recusandae suscipit optio, odio
            nesciunt ullam quia!
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#ffff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#ffff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#ffff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
