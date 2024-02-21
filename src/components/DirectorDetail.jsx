import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const DirectorDetail = () => {
    return (
        <div>

            <NavBar />

            <div className="container-fluid">
                <div className="row justify-content">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Gareth_Edwards_by_Gage_Skidmore_2.jpg"
                                        className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body secondary"><br></br>
                                        <h5 className="card-title h1">Gareth Edwards</h5>
                                        <br></br>
                                            <p className="card-text h5">Gareth James Edwards was born on June 1, 1975 in the English town of Nuneaton,
                                                Warwickshire. Growing up, he admired movies such as the 1977 classic "Star Wars", and went on to
                                                pursue a film career. He even cites George Lucas and Steven Spielberg as his biggest influences.
                                                Edwards studied BA (Hons) Film & Video at the University for the Creative Arts in Farnham (formerly
                                                the Surrey Institute of Art & Design), graduating in 1996. In 2012, he received an honorary Master of
                                                Arts from UCA.Edwards got his start in special visual effects, working on visual f/x for programs that
                                                aired on networks such as PBS, BBC and the Discovery Channel. In 2008 he entered (and won) the
                                                Sci-Fi-London 48-hour film challenge, where a movie had to be created from start-to-finish in just two
                                                days, within certain criteria. Edwards wrote and directed his first full-length feature, "Monsters",
                                                which was shot in only three weeks. Edwards personally created the film's special effects by using
                                                off-the-shelf equipment. Asides from the two main actors (real-life couple Scoot McNairy and Whitney
                                                Able), the crew consisted of just five people. The $500,000 thriller received a riotous reception at
                                                the South by Southwest festival, and was released by Veritgo Films to great success.</p>
                                                <p className="card-text h5">
                                                    The success of "Monsters" resulted in Edwards getting offers from the major studios, especially Warner
                                                    Bros., who tapped him to direct an English-language reboot of the 1954 Japanese classic "Gojira".
                                                    Produced by Warner Bros. and Legendary Pictures, "Godzilla" began development in 2011 with Edwards at
                                                    the helm, and was released on May 16, 2014 to mixed reviews and tremendous box office success,
                                                    grossing $529 million worldwide against a $160 million budget.
                                                </p>
                                                <p className="card-text h5">Following the success of "Godzilla", producer Kathleen Kennedy tapped Edwards to
                                                    helm a spin-off of "Star Wars" for Lucasfilm Limited. In 2015, it was revealed that Edwards' "Star
                                                    Wars" spin-off, written Chris Weitz and Tony Gilroy, would be titled "Rogue One: A Star Wars Story",
                                                    set for release on December 16, 2016. The film boasts an ensemble cast including Felicity Jones,
                                                    Donnie Yen, Mad Mikkelsen and James Earl Jones among others.
                                                </p>

                                            </div>

                                    </div>
                                </div>
                            </div>

                            <h1>
                                Works
                            </h1>

                            <div className="row">
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                    <div className="card" ><Link to="/moviedetail">
                                        <img src="https://lumiere-a.akamaihd.net/v1/images/p_disney_thecreator_v1_2776_cc1a5f09.jpeg?region=0,0,540,810"
                                            className="card-img-top" alt="..." /></Link>

                                    </div>

                                </div>
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                    <div className="card" >
                                        <img src="https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_.jpg"
                                            className="card-img-top" alt="..." />

                                    </div>

                                </div>
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                    <div className="card" >
                                        <img src="https://m.media-amazon.com/images/M/MV5BZDFmYTM4NzAtNWM0ZC00MGJlLWEyYzQtYzA3ZTFiNzc1YjllXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg"
                                            className="card-img-top" alt="..." />

                                    </div>

                                </div>
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                    <div className="card" >
                                        <img src="https://m.media-amazon.com/images/M/MV5BMjE4MzMyNjExMl5BMl5BanBnXkFtZTcwMzI5NjM3Mw@@._V1_.jpg"
                                            className="card-img-top" alt="..." />

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            )
}

            export default DirectorDetail