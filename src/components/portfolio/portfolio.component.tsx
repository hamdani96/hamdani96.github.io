import { Link } from "react-router-dom";

const PortfolioComponent = () =>{
    return (
      <section className="row align-items-stretch photos" id="section-photos">
            <div className="col-12">
            <div className="row align-items-stretch">
            
            <div className="col-6 col-md-6 col-lg-4" data-aos="fade-up">
              <a href="assets/images/1.jpg" className="d-block photo-item" data-fancybox="gallery">
                <img src="assets/images/1.jpg" alt="Image" className="img-fluid" />
                <div className="photo-text-more">
                  <span className="icon icon-search"></span>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <a href="assets/images/2.jpg" className="d-block photo-item" data-fancybox="gallery">
                <img src="assets/images/2.jpg" alt="Image" className="img-fluid" />
                <div className="photo-text-more">
                  <span className="icon icon-search"></span>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <a href="assets/images/3.jpg" className="d-block photo-item" data-fancybox="gallery">
                <img src="assets/images/3.jpg" alt="Image" className="img-fluid" />
                <div className="photo-text-more">
                  <span className="icon icon-search"></span>
                </div>
              </a>
            </div>

            <div className="col-6 col-md-6 col-lg-4" data-aos="fade-up">
              <a href="assets/images/4.jpg" className="d-block photo-item" data-fancybox="gallery">
                <img src="assets/images/4.jpg" alt="Image" className="img-fluid" />
                <div className="photo-text-more">
                  <span className="icon icon-search"></span>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <a href="assets/images/5.jpg" className="d-block photo-item" data-fancybox="gallery">
                <img src="assets/images/5.jpg" alt="Image" className="img-fluid" />
                <div className="photo-text-more">
                  <span className="icon icon-search"></span>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <a href="assets/images/6.jpg" className="d-block photo-item" data-fancybox="gallery">
                <img src="assets/images/6.jpg" alt="Image" className="img-fluid" />
                <div className="photo-text-more">
                  <span className="icon icon-search"></span>
                </div>
              </a>
            </div>

            <div className="col-6 col-md-6 col-lg-4" data-aos="fade-up">
              <a href="assets/images/8.jpg" className="d-block photo-item" data-fancybox="gallery">
                <img src="assets/images/8.jpg" alt="Image" className="img-fluid" />
                <div className="photo-text-more">
                  <span className="icon icon-search"></span>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <a href="assets/images/9.jpg" className="d-block photo-item" data-fancybox="gallery">
                <img src="assets/images/9.jpg" alt="Image" className="img-fluid" />
                <div className="photo-text-more">
                  <span className="icon icon-search"></span>
                </div>
              </a>
            </div>            

          </div>
            
        </div>
        <div className="col-md-12 text-center">
          <p data-aos="fade-up" data-aos-delay="100">
              <Link to="/contact" className="btn btn-primary btn-md smoothscroll">Next</Link>
          </p>
        </div>
      </section>
    );
}

export default PortfolioComponent;