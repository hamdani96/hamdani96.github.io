
import { NavigationComponent } from "./navigationmenu"
import { ProfileSectionComponent } from "./profilesection"

 

const SidePanelSection = () => {
    return (
        <>
        <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
                <div className="site-mobile-menu-close mt-3">
                    <span className="icon-close2 js-menu-toggle"></span>
                </div>
            </div>
            <div className="site-mobile-menu-body"></div>
        </div>

        <header className="header-bar d-flex d-lg-block align-items-center site-navbar-target" data-aos="fade-right">
            <ProfileSectionComponent /> 
            <NavigationComponent />
        </header>
      
        </>
    );
}

export default SidePanelSection;