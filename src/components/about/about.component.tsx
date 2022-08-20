import { Link } from "react-router-dom";

const AboutComponent = () => {
    return (
      <section className="site-section darken-bg" id="section-bio">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="heading text-uppercase text-white">Tentang Hamdani</h2>
            <figure className="mb-5" data-aos="fade-up"><img src="assets/images/profile.png" alt="Image" className="img-fluid w-50 rounded" /></figure>
            <div data-aos="fade-up"  data-aos-delay="100">
            <h2 className="text-white">Hai Saya Hamdani</h2>
            <p>Seorang Web Developer</p>

            <h3 className="text-white mt-5">Tentang Saya</h3>
            <p>Saya Hamdani seorang web developer yang sudah berpengalaman lebih dari 2 tahun di dunia kerja. Saya punya keinginan belajar yang tinggi dalam dunia programing.</p>
            <ul>
              <li>Email : hamdani.hams456@gmail.com</li>
              <li>Whatsapp : 089619456428</li>
            </ul>
            <div className="d-block d-md-flex mt-5">
              <div className="mr-md-auto mr-2">
                <h6 className="text-white font-weight-bold">Back End</h6>
                <ul className="ul-check list-unstyled success">
                  <li>Laravel</li>
                  <li>PHP</li>
                  <li>API</li>
                  {/* <li>Node Js</li> */}
                </ul>
              </div>
              <div className="mr-md-auto">
                <h6 className="text-white font-weight-bold">Front End</h6>
                <ul className="ul-check list-unstyled success">
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>Jquery</li>
                  <li>React Js</li>
                </ul>
              </div>

            </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p data-aos="fade-up" data-aos-delay="100">
              <Link to="/portfolio" className="btn btn-primary btn-md smoothscroll">Next</Link>
          </p>
        </div>
      </div>
    </section>
    );
}

export default AboutComponent;