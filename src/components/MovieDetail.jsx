import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const MovieDetail = () => {
  return (
    <div>

    <NavBar/>

    <div className="container-fluid">
        <div className="row justify-content">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://lumiere-a.akamaihd.net/v1/images/p_disney_thecreator_v1_2776_cc1a5f09.jpeg?region=0,0,540,810"
                                className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body secondary"><br></br>
                                <h5 className="card-title h1">The Creator</h5>
                                <p className="card-title"><small className="text-body-secondary">2023 | PG-13 | 2h 13m</small>
                                </p>
                                <br></br>
                                <p className="card-text h5">Amidst a future war between the human race and the forces of
                                    artificial intelligence, Joshua (Washington), a hardened ex-special forces agent
                                    grieving the disappearance of his wife (Chan), is recruited to hunt down and kill
                                    the Creator, the elusive architect of advanced AI who has developed a mysterious
                                    weapon with the power to end the war… and mankind itself. Joshua and his team of
                                    elite operatives journey across enemy lines, into the dark heart of AI-occupied
                                    territory… only to discover the world-ending weapon he’s been instructed to destroy
                                    is an AI in the form of a young child.
                                </p>
                                <p className="card-text h5"> Directed By <br></br><small className="text-body-secondary"><Link to="/directordetail">Gareth Edwards</Link></small></p><br></br>
                                <p className="card-text h5">Screenplay By <br></br><small className="text-body-secondary">Gareth Edwards, Chris Weitz</small></p><br></br>
                                <p className="card-text h5">Produced By <br></br><small className="text-body-secondary">Gareth Edwards, p.g.a., Kiri Hart, Jim Spencer, p.g.a., Arnon Milchan</small></p><br></br>
                                <p className="card-text h5">Cast <br></br><small className="text-body-secondary">John David Washington, Gemma Chan, Ken Watanabe, Sturgill Simpson, Madeleine Yuna Voyles, Allison Janney</small></p><br></br>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    </div>
  )
}

export default MovieDetail