import React from "react";

const Hero = () => {
  return (
    <div className="container text-center mt-5 mb-5">
      <div className="row">
        <h2>We are building a modern trading platform.</h2>
        <h2>Focused on simplicity, performance, and learning.</h2>
      </div>

      <hr className="mt-5 mb-5 pt-5 pb-5" />

      <div className="row mt-5" style={{ color: "#424242" }}>
        <div
          className="col-lg-6 col-12 text-start fs-5"
          style={{ fontSize: "16px", fontWeight: "450" }}
        >
          <p>
            TradeX was built with the vision of creating a clean, accessible, and
            modern trading platform that helps users understand markets while
            managing their portfolios efficiently.
          </p>
          <p>
            The goal behind TradeX is not just to enable trading, but to provide
            clarity through intuitive design, meaningful analytics, and
            performance-focused technology.
          </p>
          <p>
            By combining real-world trading concepts with modern full-stack
            development practices, TradeX demonstrates how scalable and
            user-centric financial applications can be built.
          </p>
        </div>

        <div
          className="col-lg-6 col-12 text-start fs-5"
          style={{ fontSize: "16px", fontWeight: "450" }}
        >
          <p>
            TradeX is designed as a learning-first platform, allowing users to
            explore trading workflows, portfolio tracking, and market analytics
            in a simplified environment.
          </p>
          <p>
            The platform is built using modern technologies like React, Node.js,
            Express, and MongoDB, focusing on performance, scalability, and clean
            architecture.
          </p>
          <p>
            TradeX continues to evolve with new features and improvements as part
            of an ongoing effort to build a robust and production-ready trading
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
