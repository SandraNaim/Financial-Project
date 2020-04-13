import React from 'react';
import './help.css';
import Image1 from '../../IMAGES/i4.png';
import Image2 from '../../IMAGES/Incomexd.png';
import Image4 from '../../IMAGES/add.png';
import Image3 from '../../IMAGES/button.png';
import Image5 from '../../IMAGES/report1.png';
import Image6 from '../../IMAGES/reports2.png';




class Help extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div style={{marginLeft:"60px", marginBottom:"10px"}}>
                <header>

                </header>
                <body>
                    <body>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />



                        <section  className="section-padding about-section">

                            <div className="container" >
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="section_title ">
                                            <div className="section_subtitle section_title_about">HOW IT WORKS</div>
                                            <h2 className="section_main_title section_main_about"><strong>WE ARE HERE TO HELP</strong></h2>

                                        </div>
                                        <div className="about-item">
                                            <p>
                                                &nbsp;&nbsp;&nbsp;&nbsp; With S&K things are made clean, we belive in simplicity, especially
                                                that we are dealing with your transaction and saving reports. Under this you can find our easy
                                                Steps to guide you in setting up your account.
                                            </p>


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
                                    <div>
                                        <hr style={{ backgroundColor: "#A8C2CA", border: "2px solid #darkblue", marginTop: "50px" }}></hr>
                                        <h2 id="howitworks_kek" ></h2>
                                    </div>

                                </div>
                                <br />
                                <br />
                                <br />
                                <hr className="hr_help"/>
                             
                                <br />
                                <br />
                                <br />
                                <h3 className="section_main_title section_main_about line_help">Using the Transaction/Saving tables</h3>
                                <br />
                                <br />
                                <div className="row">
                                    <div className="col-sm-1">
                                        
                                    </div>
                                    <div className="col-sm-6">
                                        <div class="shadow card sm-6 cardy_help ">
                                            <img src={Image1} class="card-img-top" />
                                            <div class="card-body">
                                                <h5 class="card-title">STEP 1</h5>
                                                <p class="card-text">Firstly  access one of the tables using the side nav bar.  </p>
                                                
                                            </div>

                                        </div>
                                    </div>
                                    
                                    

                                </div>
                                <br/>
                                <br/>
                                
                                <div className="row color_help ">
                                    
                                    <div className="col-sm-5">
                                        
                                    </div>
                                    <div className="col-sm-6">
                                        
                                        <div class="shadow card sm-6 cardy_help ">
                                            <img src={Image2} class="card-img-top" />
                                            <div class="card-body">
                                                <h5 class="card-title">Step 2</h5>
                                                <p class="card-text">Fill in all the required inputs depending on your income, if you wish to edit any of them, please click the edit button on the right side to do so..</p>
                                               
                                            </div>

                                        </div>
                                    </div>
                                    
                                    

                                </div>
                                <br/>
                                <br/>
                                
                                <div className="row">
                                    <div className="col-sm-1">
                                        
                                    </div>
                                    <div className="col-sm-6">
                                        <div class="shadow card sm-6 cardy_help ">
                                            <img src={Image3} class="card-img-top" />
                                            <div class="card-body">
                                                <h5 class="card-title">Step 3</h5>
                                                <p class="card-text">If you want to add a new card/row, you can find the add button of the bottom of the tabel.</p>
                                               
                                            </div>

                                        </div>
                                    </div>
                                    
                                    

                                </div>
                                <br/>
                                <br/>
                                <div className="row color_help ">
                                    <div className="col-sm-5">
                                        
                                    </div>
                                    <div className="col-sm-6">
                                        <div class="shadow card sm-6 cardy_help ">
                                            <img src={Image4} class="card-img-top" />
                                            <div class="card-body">
                                                <h5 class="card-title">Step 4</h5>
                                                <p class="card-text">After you have clicked the add button, a new card/row will apear,
                                                 next fill all criteria, once you have completed that please click the add button on the right, 
                                                if you wish to cancel your doing, you can find the cancel button under the add button.</p>
                                               
                                            </div>

                                        </div>
                                    </div>
                                    
                                    

                                </div>
                                <br/>
                                <br/>
                                <hr className="hr_help"/>
                                <br />
                                <br />
                                <h3 className="section_main_title section_main_about line_help">You can access your reports in the Dashboard</h3>
                                <br />
                                <br />
                                <div className="row">
                                    <div className="col-sm-1">
                                        
                                    </div>
                                    <div className="col-sm-6">
                                        <div class="shadow card sm-6 cardy_help ">
                                            <img src={Image5} class="card-img-top" />
                                            <div class="crd-body">
                                                <h5 class="card-title"></h5>
                                                <p class="card-text"></p>
                                               
                                            </div>

                                        </div>
                                    </div>
                                    
                                    

                                </div>
                                <br/>
                                <br/>
                                <div className="row color_help ">
                                    <div className="col-sm-5">
                                        
                                    </div>
                                    <div className="col-sm-6">
                                        <div class="shadow card sm-6 cardy_help ">
                                            <img src={Image6} class="card-img-top" />
                                            <div class="card-body">
                                                <h5 class="card-title"></h5>
                                                <p class="card-text">.</p>
                                               
                                            </div>

                                        </div>
                                    </div>
                                    
                                    

                                </div>
                              
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </section>






                    </body>

                </body>

            </div>
        )
    }
}
export default Help;