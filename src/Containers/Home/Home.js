import React from "react";
import "./Home.css";
import background1 from "./images/slider-01.jpg";
import background2 from "./images/slider-02.jpg";
import background3 from "./images/slider-03.jpg";
import { Link } from "react-router-dom";

function Home() {
 

  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide bs-slider box-slider"
        data-ride="carousel"
        data-pause="hover"
        data-interval="false"
      >    
     
	
         <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleControls"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleControls" data-slide-to="1"></li>
          <li data-target="#carouselExampleControls" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              id="home"
              className="first-section"
              style={{
                backgroundImage: `url(${background1})`,
                height: "800px",
              }}
            >
              <div className="dtab">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 text-right">
                      <div className="big-tagline">
                        <h2>
                          <strong>Square Academy </strong> Education
                          Universitaire
                        </h2>
                        <p className="lead">Notre plateforme Square Academy</p>
                        <Link to="/contact" className="hover-btn-new">
                          <span>Contacter nous</span>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/contact" className="hover-btn-new">
                          <span>Lire la suite</span>
                        </Link>
                      </div>
                    </div>
                  </div>
             
				 
                 </div>
              
			
               </div>
            </div>
        
           </div>
          <div className="carousel-item">
            <div
              id="home"
              className="first-section"
              style={{
                backgroundImage: `url(${background2})`,
                height: "800px",
              }}
            >
              <div className="dtab">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 text-left">
                      <div className="big-tagline">
                        <h2 data-animation="animated zoomInRight">
                          <strong>Square Academy </strong> Education
                          Universitaire
                        </h2>
                        <p
                          className="lead"
                          data-animation="animated fadeInLeft"
                        >
                          Square Academy éducation Universitaire
                        </p>
                        <Link to="/contact" className="hover-btn-new">
                          <span>Contacter nous</span>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/contact" className="hover-btn-new">
                          <span>Lire la suite</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                
				 
                 </div>
         
              </div>
            </div>
       
          </div>
          <div className="carousel-item">
            <div
              id="home"
              className="first-section"
              style={{
                backgroundImage: `url(${background3})`,
                height: "800px",
              }}
            >
              <div className="dtab">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                      <div className="big-tagline">
                        <h2 data-animation="animated zoomInRight">
                          <strong>Square Academy </strong> éducation
                        </h2>
                        <p
                          className="lead"
                          data-animation="animated fadeInLeft"
                        >
                          Square Academy éducation Universitaire
                        </p>
                        <Link to="/contact" className="hover-btn-new">
                          <span>Contacter nous</span>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/contact" className="hover-btn-new">
                          <span>Lire la suite</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                
				 
                 </div>
              
              </div>
            </div>
        
          </div>

          {/*  
		 
		 <!-- Left Control --> */}
          {/* <a className="new-effect carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
				<span className="fa fa-angle-left" aria-hidden="true"></span>
				<span className="sr-only">Previous</span>
			</a> */}

          {/*  
		 
		 <!-- Right Control --> */}
          {/* <a className="new-effect carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
				<span className="fa fa-angle-right" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a> */}
        </div>
      </div>

      <div id="overviews" className="section wb">
        <div className="container">
          <div className="section-title row text-center">
            <div className="col-md-8 offset-md-2">
              <h3>Découvrez Square Academy</h3>
              <p className="lead">
                La première plateforme pour les étudiants d'économie gestion
              </p>
            </div>
          </div>

          {/*
		   <!-- end title --> */}

          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="message-box">
                <h4>2018 BEST SmartEDU education school</h4>
                <h2>Welcome to SmartEDU education school</h2>
                <p>
                  Quisque eget nisl id nulla sagittis auctor quis id. Aliquam
                  quis vehicula enim, non aliquam risus. Sed a tellus quis mi
                  rhoncus dignissim.
                </p>

                <p>
                  Integer rutrum ligula eu dignissim laoreet. Pellentesque
                  venenatis nibh sed tellus faucibus bibendum. Sed fermentum est
                  vitae rhoncus molestie. Cum sociis natoque penatibus et magnis
                  montes, nascetur ridiculus mus. Sed vitae rutrum neque.
                </p>

                <a href="https://v4.mui.com/api/table-footer/#props" className="hover-btn-new orange">
                  <span>Learn More</span>
                </a>
              </div>

              {/*
			   <!-- end messagebox --> */}
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="post-media wow fadeIn">
                <img
                  src={require("./images/home-photo-1.jpg")}
                  alt=""
                  className="img-fluid img-rounded"
                />
              </div>

              {/*
			   <!-- end media --> */}
            </div>

            {/*
			 <!-- end col --> */}
          </div>
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="post-media wow fadeIn">
                <img
                  src={require("./images/home-photo-2.webp")}
                  alt=""
                  className="img-fluid img-rounded"
                />
              </div>

              {/*
			   <!-- end media --> */}
            </div>

            {/*
			 <!-- end col --> */}

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="message-box">
                <h2>The standard Lorem Ipsum passage, used since the 1500s</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>

                <p>
                  Integer rutrum ligula eu dignissim laoreet. Pellentesque
                  venenatis nibh sed tellus faucibus bibendum.
                </p>

                <a href="https://v4.mui.com/api/table-footer/#props" className="hover-btn-new orange">
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;