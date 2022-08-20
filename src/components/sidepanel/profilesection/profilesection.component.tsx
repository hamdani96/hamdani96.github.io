import { Link } from "react-router-dom"; 

const ProfileSectionComponent = () => {
    return (
      <div className="site-logo">
        <Link to="/"><img src="assets/images/icon-h-light.png" width="100px" alt="" /></Link>
      </div>
    
    // <div className="d-inline-block d-lg-none ml-md-0 ml-auto py-3" style="position: relative; top: 3px;"><a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></a></div>
    );
}

export default ProfileSectionComponent;