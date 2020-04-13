import React from 'react';
import "./About.css";

class About extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div style={{marginLeft:"60px", marginBottom:"7%"}}>


                <body>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />



                    <section id="about" className="section-padding about-section">

                        <div className="container" >
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="section_title ">
                                        <div className="section_subtitle section_title_about">About Us</div>
                                        <h2 className="section_main_title section_main_about"><strong>WE ARE MONEY</strong></h2>

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
                                        &nbsp;&nbsp;&nbsp;&nbsp;S&K, the worlds largest Financial APP and one of the world’s
                                                            largest and safest institutions, offers an extensive
                                                            range of tailor-made solutions, and services,
                                                            to provide an euphoric experience. Through its strategic offerings,
                                                            it looks to meet the saving needs of customers across the
                                                            world via its market-leading Corporate and
                                                            Investment Banking and Personal Banking franchises.
                                        <div className="hgt-2o"></div>
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
export default About;