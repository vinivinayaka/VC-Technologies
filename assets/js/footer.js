let footertemp = ` <footer class="footer-area">
<div class="container pt-100 pb-70">
     <div class="row">
        <div class="col-lg-3 col-sm-6">
            <div class="footer-widget">
                <div class="footer-logo">
                    <a href="index.html">
                        <img src="/assets/images/logos/logo.png" alt="Images">
                    </a>
                </div>
                <p>
                "Discover top-rated courses on Visible Campus, where industry experts teach cutting-edge skills in demand. Elevate your career with our selection of popular courses today!"


                </p>
                <ul class="social-link">
                    <li class="social-title">Follow Us:</li>
                    <li>
                        <a href="https://www.facebook.com/" target="_blank">
                            <i class="ri-facebook-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="_blank">
                            <i class="ri-twitter-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/visiblecampus/" target="_blank">
                            <i class="ri-linkedin-fill"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="footer-widget ps-5">
                <h3>About us</h3>
                <ul class="footer-list">
                    <li>
                        <a href="#">
                            About Us
                        </a>
                    </li> 
                    <li>
                        <a href="signup.html">
                            Instructor registration
                        </a>
                    </li> 
                    <li>
                        <a href="#">
                            Instructors 
                        </a>
                    </li> 
                    <li>
                        <a href="#">
                            Our Event
                        </a>
                    </li> 
                    <li>
                        <a href="courses.html">
                            Courses List
                        </a>
                    </li> 
                </ul>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="footer-widget ps-5">
                <h3>Resources</h3>
                <ul class="footer-list">
                    <li>
                        <a href="index.html">
                            Home
                        </a>
                    </li> 
                    <li>
                        <a href="courses.html" >
                            Courses
                        </a>
                    </li> 
                    <li>
                        <a href="#">
                            Our Blog
                        </a>
                    </li> 
                    <li>
                        <a href="index.html">
                            Terms & conditions
                        </a>
                    </li> 
                    <li>
                        <a href="#">
                            Privacy Policy
                        </a>
                    </li> 
                </ul>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="footer-widget ps-5">
                <h3>Official Info</h3>
                <ul class="footer-contact">
                    <li>
                        <i class="ri-map-pin-2-fill"></i>
                        <div class="content">
                            <h4>Location:</h4>
                            <span>3rd Floor Beta block,  Sigma Tech Park, Bangalore - 560066</span>
                        </div>
                    </li>
                    <li>
                        <i class="ri-mail-fill"></i>
                        <div class="content">
                            <h4>Email:</h4>
                            <span><a href="mailto:contact@visiblecampus.com">contact@visiblecampus.com</a></span>
                        </div>
                    </li>
                    <li>
                        <i class="ri-phone-fill"></i>
                        <div class="content">
                            <h4>Phone:</h4>
                            <span><a href="tel:918884999188">+918884999188</a></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="copyright-area">
    <div class="container">
        <div class="copy-right-text text-center">
            <p>
            Copyrights @${new Date().getFullYear()} <a>VISIBLE CAMPUS TECHNOLOGY SOLUTIONS PVT LTD</a> All Rights Reserved 
            </p>
        </div>
    </div>
</div>
</footer>`;
document.getElementById('dy-footer').innerHTML = footertemp;