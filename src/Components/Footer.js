import React from 'react'
import background2 from "../Containers/Home/images/background3.png";

export default function Footer() {
  return (
    <footer>
    <div
      id="testimonials"
      className="p-2 col-lg-12 col-md-12 col-sm-12 parallax section db parallax-off"
      style={{
        backgroundImage: `url(${background2})`,
    
      }}
    >
      <div className="container" >
        <div className="section-title text-center">
          <h3>Square Academy</h3>
          <p style={{ color: "white" }}>
            La solution révolutionnaire et incontournable à votre
            établissement pour digitaliser le processus des formations vers
            une politique 0 papier.
          </p>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="testi-carousel owl-carousel owl-theme">
              <div className="testimonial clearfix">
                <div className="testi-meta">
                  <img
                    src="../Home/images/blog_6.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <h4 style={{ color: "white" }}>Sousse, Sahloul</h4>
                </div>
                <div className="desc">
                  <p className="lead" style={{ color: "white" }}>
                    Résidence Bouhajeb A-6 Avenue de Yasser Arafet, Sahloul
                    <br />
                    4051 Sousse, Tunisie (216) 73 82 05 93
                    <br />
                    wifek.benromdhane@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
