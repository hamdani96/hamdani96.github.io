import { url } from "inspector";
import { Link } from "react-router-dom";

const HomeComponent = () => {
    return (
      <section className="site-section-hero bg-image" data-stellar-background-ratio="0.5" id="section-home">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-7 text-center">
            <h1 className="text-white heading text-uppercase" data-aos="fade-up">Hamdani</h1>
            <h3 className="text-white">Web Developer</h3>
            <p className="lead text-white mb-5" data-aos="fade-up" data-aos-delay="100">Hai! Selemat datang di website saya.</p>
            <p data-aos="fade-up" data-aos-delay="100">
              <Link to="/about" className="btn btn-primary btn-md smoothscroll">Next</Link>
            </p>
          </div>
        </div>
      </section>
    );
}

export default HomeComponent;