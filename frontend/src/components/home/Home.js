import React from "react";
import bgImage from "../../assets/images/home-page.jpg";

const Home = () => {
  return (
    <div
      className="gradient"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
      }}
    >
      <div className="container text-center text-white">
        <div className="row pt-5">
          <div className="col "></div>
          <div className="col-6 my-5">
            <h4>sell with us</h4>
            <h1>Sell your car at best Price</h1>
          </div>
          <div className="col"></div>
        </div>
        <div className="container">
          <div className="input-group input-group-lg mx-5 my-5">
            <span className="input-group-text" id="inputGroup-sizing-lg py-3 px-3">Search</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg " />
          </div>
        </div>
        {/* Your homepage content goes here */}
      </div>
      </div>
  );
};

export default Home;
