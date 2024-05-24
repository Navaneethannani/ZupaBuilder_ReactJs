import React from 'react'
import './services.css'


function Services() {
    return (
        <>
            <div id="services">
                <div className="container5">
                    <div className="about-us">
                        <h3>About us</h3>
                        <hr className="hr-line" />
                        <p>
                            Mauris blandit accumsan lorem eget pretium.
                            Duis vestibu- lum, metus eget sagittis mattis,
                            est quam fringilla diam, vitae hendrerit libero
                            lorem nec ex. Fusce ac suscipit purus. 
                            In ullamcorper mauris nisl, quis posuere
                            nisl varius at
                        </p>
                        <div className="abt-icons">
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-google-plus-g"></i>
                            <i className="fa-brands fa-behance"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                    <div className="instagram-widget">
                        <h3>Instagram widget</h3>
                        <hr className="hr-line" />
                        <div className="insta-pics">
                            <div className="pic-change">
                                <img src="src/assets/images/insta-img1.png" className="pic-box"/>
                                <div className="floatDiv"></div>
                            </div>
                            <div className="pic-change">
                                <img src="src/assets/images/insta-img2.png" className="pic-box"/>
                                <div className="floatDiv"></div>
                            </div>
                            <div className="pic-change">         
                                <img src="src/assets/images/insta-img3.png" className="pic-box"/>  
                                <div className="floatDiv"></div>             
                            </div>
                            <div className="pic-change">
                                <img src="src/assets/images/emp-3.png" className="pic-box"/>
                                <div className="floatDiv"></div>
                            </div>                                   
                            <div className="pic-change">
                                <img src="src/assets/images/insta-img5.png" className="pic-box"/>
                                <div className="floatDiv"></div>
                            </div>
                            <div className="pic-change">
                                <img src="src/assets/images/insta-img6.png" className="pic-box" / >
                                <div className="floatDiv"></div>
                            </div>
                                
                            
                        </div>
                    </div>
                    <div className="twitter-posts">
                        <h3>Twitter posts</h3>
                        <hr className="hr-line" />
                        <div className="twitter-para">
                            <i className="fa-brands fa-twitter"></i>
                            <p>Donec nunc elit, ultrices vitae semper
                                vitae, tincidunt <span className="span">http://bit.ly/0998958</span>
                                <br /><span className="span" id="time">12 hours ago</span>
                            </p>
                        </div>
                        <hr className="design" />
                        <div className="twitter-para">
                            <i className="fa-brands fa-twitter"></i>
                            <p>Donec nunc elit, ultrices vitae semper
                                vitae, tincidunt <span className="span">http://bit.ly/0998958</span>
                                <br /><span className="span" id="time">12 hours ago</span>
                            </p>
                        </div>
                    </div>
                    <div className="short-nav">
                        <h3>Short navigation</h3>
                        <hr className="hr-line" />
                        <div className="back-top">
                            <ul>
                                <li><a href="#home">&gt; &emsp; Home</a></li>
                                <li><a href="#experts">&gt; &emsp; Experts</a></li>
                                <li><a href="#portfolio">&gt; &emsp; Portfolio</a></li>
                                <li><a href="#blog">&gt; &emsp; Blog</a></li>
                                <li><a href="#services">&gt; &emsp; Services</a></li>
                                <li><a href="#contact">&gt; &emsp; Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services