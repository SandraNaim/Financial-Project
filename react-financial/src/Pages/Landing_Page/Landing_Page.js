import React from 'react';
import './Landing_Page.css';
import Landing_Navbar from '../../Components/Landing_Navbar/Landing_Navbar';
import Pic1 from '../../IMAGES/Pic1.svg';
class Landing_Page extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div >
                <header>
                    <Landing_Navbar />
                </header>

                <body>
                    <br />
                    <br />
                


                    <section id="landing" className="section-padding about-section">

                        <div className="container" >
                            <h1>money team</h1>
                            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active imgsize_landingpage">
                                        <img className="imgsize_landingpage"  src="https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2015/11/ft.jpg" className="d-block w-100" alt="..."/>
                                            <div className="carousel-caption d-none d-md-block">
                                               
                                            </div>
    </div>
                                        <div className="carousel-item imgsize_landingpage">
                                            <img className="imgsize_landingpage" src="https://image.opencart.com/cache/5bf5a6a28a776-resize-710x380.jpg" className="d-block w-100" alt="..."/>
                                               
    </div>
                                            <div className="carousel-item imgsize_landingpage">
                                                <img className="imgsize_landingpage"  src={Pic1} alt="..."/>
                                                  
    </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>
                                       <br/>
                                       <br/>
                                       <br/>
                                       <br/>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="section_title ">
                                                    <div className="section_subtitle section_title_about">About Us</div>
                                                    <h2 className="section_main_title section_main_about">WE ARE <strong>MONEY</strong></h2>

                                                </div>
                                                <div className="about-item">
                                                    <p>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;S&K, the worlds largest Financial APP and one of the world’s
                                                            largest and safest institutions, offers an extensive
                                                            range of tailor-made solutions, and services,
                                                            to provide an euphoric experience. Through its strategic offerings,
                                                            it looks to meet the saving needs of customers across the
                                                            world via its market-leading Corporate and
                                                            Investment Banking and Personal Banking franchises.
                            </p>
                                                    <p>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;S&K continually invests in people and technology
                                                            to create the mostcustomer-friendly Financial
                                                            experiences well as supporting the growth
                                                            ambitions of its Corporate users.
                            </p>
                                                    <div className="hgt-2o"></div>
                                                    <div className="home-button"><br />
                                                        <a href="" className="btn-color-background btn-color-background_about">Read More</a>

                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-sm-4  col-sm-offset-2 margin2_about">
                                                <div className="about-box about_box_about">
                                                    <div className="box-overlay box_overlay_about"></div>
                                                    <a href="https://www.youtube.com/watch?v=l-v_f4zO4_o"
                                                        className="videopopup videopopup_about">
                                                        <img
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiUqrWpSCmh9QKBEbNnv_TQU7Eiz0tEjEWRr3EJYxKp0J5_UQJ&usqp=CAU" />
                                                        <span className="sonar-wrapper sonar_wrapper_about">
                                                            <span className="sonar-emitter">
                                                                <i className="fa fa-play sonar_emitter_I_about"></i>
                                                                <div className="sonar-wave sonar_wave_about"></div>


                                                            </span>
                                                        </span>
                                                    </a>

                                                </div>



                                            </div>
                                        </div>
                                    </div>

                        </section>






                    </body>



                        </div>
                        )
                    }
                }
export default Landing_Page;