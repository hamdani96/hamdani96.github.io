import {Link} from 'react-router-dom';

const NavigationComponent = () => {
    return (
      <div className="main-menu">
        <ul className="js-clone-nav">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">Tentang Hamdani</Link></li>
          <li><Link to="/portfolio" className="nav-link">Portofolio</Link></li>
          {/* <li><Link to="" className="nav-link">Blog</Link></li> */}
          <li><Link to="/contact" className="nav-link">Kontak</Link></li>
        </ul>
        <ul className="social js-clone-nav">
          <li><a href="https://www.facebook.com/profile.php?id=100036879533951"><span className="icon-facebook"></span></a></li>
          <li><a href="https://www.instagram.com/hamdani6632/"><span className="icon-instagram"></span></a></li>
        </ul>
      </div>
    );
}

export default NavigationComponent;