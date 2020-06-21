import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import img1 from "./img1.jpg";

export class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div title='About' id='section1'>
                    <div className='float-right'>
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
                        <img src={img1} alt='Image' className='float-left' />
                    </div>
                </div>

                <footer> &copy;2020</footer>
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
