import React from 'react'
import "../styles/Contact.css"

function Contact() {

    return (

        <div className="container contact" style={{height: "900px"}}>
            <div className="row">
                <div className="col-md-3">
                    <div className="contact-info">
                        <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image" />
                        <h2>Contact Us</h2>
                        <h4>We would love to contact with you!</h4>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="contact-form">
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="name">Name:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="name" placeholder="Enter Name" name="fname" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="number">Email:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="number" placeholder="9682xxxxxx" name="number" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="email">Email:</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="message">Message:</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" rows="5" id="message"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-success my-3" id="submit_btn">Submit</button>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <p id="msg_shown_on_screen" style={{font: "bolder"}}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Contact;


