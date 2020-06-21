import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import img1 from "./components/img1.jpg";
import img2 from "./components/img2.jpg";
import img3 from "./components/img3.jpg";
import img4 from "./components/img4.jpg";
import img5 from "./components/img5.jpg";

export class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div id='section1' className='section-content'>
                    <div className='float-right'>
                        <h2>About</h2>
                        <p>
                            Libertalia is planned to be a consultancy service of
                            Indian origin, which shall provide its services to
                            big renewable energy companies like TASMA-V2
                            (Tamilnadu Spinning Mills Association’s project
                            which is one of the biggest windmill cluster owners)
                        </p>
                        <p>
                            Our goal is to provide forecast and consultancy
                            services that helps companies in the renewable
                            energy sector to plan out their power grid
                            scheduling
                        </p>
                    </div>
                    <div className='float-left'>
                        <img src={img1} alt='Image' className='image' />
                    </div>
                </div>
                <div id='section2' className='section-content'>
                    <div className='float-right'>
                        <h2>The Problem</h2>
                        <p>
                            Due to fluctuations in weather patterns, the full
                            potential of renewable energy resources in our
                            country is not properly utilised in the power grid.
                            This statement complies with SDG-12
                        </p>
                        <p>
                            Intrahourly fluctuations in wind power generation
                            cause various technical and economic challenges for
                            wind farm integration. With increasing levels of
                            wind energy uptake, managing these fluctuations is
                            likely to require further attention.
                        </p>
                    </div>
                    <div className='float-left'>
                        <img src={img2} alt='Image' className='image' />
                    </div>
                </div>
                <div id='section3' className='section-content'>
                    <div className='float-right'>
                        <h2>Our Solution</h2>
                        <p>
                            Our goal is to provide forecast and consultancy
                            services that helps companies in the renewable
                            energy sector to plan out their power grid
                            scheduling.This will be based on statistical methods
                            and latest advancements in artificial intelligence
                        </p>
                        <p>
                            : We will use an adapted version of latest model to
                            provide high-resolution modeled virtual datasets for
                            anywhere in the world. Our WRF generates10-minute
                            realistic time series by using a nesting process
                            from ERA5 reanalysis to microscale resolution.
                        </p>
                    </div>
                    <div className='float-left'>
                        <img src={img3} alt='Image' className='image' />
                    </div>
                </div>
                <div id='section4' className='section-content'>
                    <div className='float-right'>
                        <h2>Marketing Approach</h2>
                        <p>
                            Spreading awareness of our idea and gathering
                            supporters from different files like environmental
                            activists, companies on the lookout for emerging
                            startups, government bodies interested in SDGs etc..
                        </p>
                        <p>
                            This is a virtually unexplored market by any single
                            Indian based organisation or service provider and
                            the only competitors are non-native organisations
                            which use outdated techniques to provide a
                            comparitively substandard service.
                        </p>
                        <p>
                            Examples of organisations which could use our
                            services are : NIWE, TASMA, IWPA, SLDC
                        </p>
                    </div>
                    <div className='float-left'>
                        <img src={img4} alt='Image' className='image' />
                    </div>
                </div>
                <div id='section5' className='section-content'>
                    <div className='float-right'>
                        <h2>The Future</h2>
                        <p>
                            Extending the reach of Libertalia to other renewable
                            energy sources like solar energy and incorporating
                            several sources to provide seamless scheduling for
                            optimizing the production to meet demands in real
                            time.
                        </p>
                        <p>
                            Improvements to our model as and when newer and
                            better technologies become available, and in time
                            even focus of developing new forecasting models.
                        </p>
                    </div>
                    <div className='float-left'>
                        <img src={img5} alt='Image' className='image' />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
/*
<Section title='Section 2' subtitle={dummyText} id='section2' />
    <Section title='Section 3' subtitle={dummyText} id='section3' />
    <Section title='Section 4' subtitle={dummyText} id='section4' />
    <Section title='Section 5' subtitle={dummyText} id='section5' />*/
