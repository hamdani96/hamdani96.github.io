 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { AboutComponent } from '../about';
import { ContactInfoComponent } from '../contact';
import { HomeComponent } from '../home';
import { PortfolioComponent } from '../portfolio';
import { ResumeComponent } from '../resume';
import { ServicesSectionComponent } from '../services';
import { SidePanelSection } from '../sidepanel';
 
const MainComponent = () => {
    return (
        <Router> 
            <Switch> 
                <Route path ="/" exact >
                    <>
                        <SidePanelSection />
                        <div className="site-wrap">
                            <main className="main-content">
                                <HomeComponent />      
                            </main>
                        </div>
                    </>
                </Route>

                <Route path ="/about" exact >
                    <>
                        <SidePanelSection />
                        <div className="site-wrap">
                            <main className="main-content">
                                <div className="container-fluid">
                                    <AboutComponent />
                                </div>
                            </main>
                        </div>
                    </>
                </Route>

                <Route path ="/portfolio" exact >
                    <>
                        <SidePanelSection />
                        <div className="site-wrap">
                            <main className="main-content">
                                <div className="container-fluid">
                                    <PortfolioComponent />      
                                </div>
                            </main>
                        </div>
                    </>
                </Route>

                <Route path ="/contact" exact >
                    <>
                        <SidePanelSection />
                        <div className="site-wrap">
                            <main className="main-content">
                                <div className="container-fluid">
                                <ContactInfoComponent /> 
                                </div>
                            </main>
                        </div>
                    </>
                </Route>

            </Switch>   
        </Router>
    );
}

export default MainComponent;