import React from "react";
import { Link } from "react-router-dom";
import "./PricingStyles.css";

function Pricing() {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">- 5 BTC -</p>
          <p className="btc">- 3 Days -</p>
          <p className="btc">- Views -</p>
          <p className="btc">- Features -</p>
          <p className="btc">- Private quarters -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>- Suite -</h3>
          <span className="bar"></span>
          <p className="btc">- 5 BTC -</p>
          <p className="btc">- 3 Days -</p>
          <p className="btc">- Views -</p>
          <p className="btc">- Features -</p>
          <p className="btc">- Private quarters -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>- Executive -</h3>
          <span className="bar"></span>
          <p className="btc">- 5 BTC -</p>
          <p className="btc">- 3 Days -</p>
          <p className="btc">- Views -</p>
          <p className="btc">- Features -</p>
          <p className="btc">- Private quarters -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
