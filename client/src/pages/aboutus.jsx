import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us container">
      <h2 data-aos="fade-up" className="text-center">About Us</h2>
      <div className="row align-items-center">
        {/* Left Side - Text */}
        <div className="col-md-6">
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
            velit lobortis, vestibulum nulla ac, convallis nisi. Nulla id
            accumsan ligula. Integer vitae magna tincidunt augue placerat
            faucibus. Sed quis libero sit amet nisi auctor pretium vitae viverra
            sapien. Nunc feugiat ex nec massa faucibus, sed sagittis nunc
            sollicitudin.
          </p>
        </div>

        {/* Right Side - Carousel */}
        <div className="col-md-6">
          <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://fastly.picsum.photos/id/691/200/300.jpg?hmac=1nouilaOHm3p-SqXPrCLcCcFEtJ60GlDAwkLAHq4x-c" className="d-block w-100" alt="Slide 1" />
                <div className="carousel-caption text-start">
                  <h1>Example headline.</h1>
                  <p>Some representative placeholder content for the first slide of the carousel.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://picsum.photos/id/237/200/300" className="d-block w-100" alt="Slide 2" />
                <div className="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>Some representative placeholder content for the second slide of the carousel.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://picsum.photos/200/300" className="d-block w-100" alt="Slide 3" />
                <div className="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  <p>Some representative placeholder content for the third slide of this carousel.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
