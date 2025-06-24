import React from 'react'
import logo from './Logo.png'
import landlf1 from './Traveller 1.png'
import l1 from './plane (1).png'
import demo from './Play Demo.png'
import card1 from './Group 48.png'
import card2 from './Group 49.png'
import card3 from './Group 50.png'
import card4 from './Group 51.png'
import img2 from './image2.jpg'
import img3 from './image3.png'
import img4 from './Image.png'
import img5 from './navigation 1.png'
import img6 from './Group 64.png'
import img7 from './image 27.png'
import img8 from './image 28.png'
import img9 from './image 29.png'
import img10 from './image 30.png'
import img11 from './image 31.png'
import img12 from './Group 61.png'
import img13 from './Group 7.png'
import img14 from './Group 11.png'
import img15 from './Group 12.png'
import img16 from './Jadoo..png'
import img17 from './Outbound.png'
import img18 from './Decore (2).png'
import img19 from './Group 4.png'
import img20 from './Rectangle 157.png'
import img21 from './Group 5.png'
import img22 from './Group 77.png'
import img23 from './spring.png'
import img24 from './Rectangle 164.png'
import img25 from './Group 42.png'
import img26 from './Mask Group.png'
const Header = () => {
    return (
        <div>
            <div className='nav'>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand" href="#"><img src={logo} alt="logo"></img></a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className='bar'>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Desitnations </a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Hotels</a>
                            </li>

                            <li class="nav-item active">
                                <a class="nav-link">Flights</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Login</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Location</a>
                            </li>
                            <div className='sign'>
                                <button>Signup</button></div>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Language</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
            <div className='land1 '>
                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-6'>
                            <div className='l1'>
                                <h5>BEST DESTINATIONS AROUND THE WORLD</h5>
                                <h1>Travel,enjoy and live a new and full life</h1>
                                <p>Built Wicket longer admire do barton vanity itself do in it. preferred to sportsmen it engrossed listening.Pack gate sell they west hard for the</p>
                                <button className='btn'><h6>find out more</h6></button>
                                <img src={demo} alt="logo" width="30%"></img>
                                <div className='core'>
                                <img src={img18} alt="logo" width="50%"></img></div>
                               
                            </div></div>

                        <div className='col-lg-6'> 
                            <img src={l1} alt="logo" width="30%"></img>
                            <img src={landlf1} alt="logo" width="100%"></img>
                            <div className='plane'>
                            <img src={l1} alt="logo" width="30%"></img></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fourc'>
                <div className='container'>
                <p className='p1'>CATEGORY</p>
                    <div className='row'>

                        <h1 className='cardh'>We Offer Best Services</h1>
                        <div className='up'><img src={img19} alt="logo" width="10%"></img></div>
                        <div className='cardc1'>
                        <div class="card-deck">
                            
                            <div class="card">
                                <div class="card-body text-center">
                                    <img src={card1} alt="logo" width="60%"></img>
                                    <h6>Calculated Weather</h6>
                                    <p class="card-text">Bulit Wicket longer admire do barton vanity itself do in it</p>
                                </div>
                            </div>
                            
                            <div class="card">
                                <div class="card-body text-center">
                                    <img src={card2} alt="logo" width="60%"></img>
                                    <h6>Best Flights</h6>
                                    <p class="card-text">Engrossed listening park gate sell they west hard for the</p>
                                </div>

                            </div>
                            <div class="card">
                                <div class="card-body text-center">
                                    <img src={card3} alt="logo" width="50%"></img>
                                    <h6>Local Events</h6>
                                    <p class="card-text">Barton vanity itself do in it.preferred to men it engrossed listening</p>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body text-center">
                                    <img src={card4} alt="logo" width="60%"></img>
                                    <h6>Customization</h6>
                                    <p class="card-text">We deliver outsourced aviation Services for military customers</p>
                                </div>
                                
                            </div>
                        </div></div></div>
                </div></div>
                <div className='back'><img src={img20} alt="logo" width="8%"></img></div>
            <div className='place'>
                <p>Top Selling</p><br>
                </br>
                <h2>Top Destinations</h2>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            
                                <div class="card">
                                    <img src={img3} alt="ogo" width="100%"></img>
                                    <h6><b> Rome,Italy</b></h6>
                                    <p1 class="card-text"><img src={img5} alt="ogo" width="6%"></img>    10Days Trip</p1>
<h6 className='plh'>$5,42k</h6>
                                </div></div>

                        <div className='col-lg-4'>
                            <div className='card'>
                                <img src={img2} alt="ogo" width="100%"></img>
                                <h6><b> Landon, UK</b></h6>
                                <h6 className='plh'>$4,2k</h6>
                                <p1 class="card-text"><img src={img5} alt="ogo" width="6%"></img>    12Days Trip</p1>
                            </div></div>
                        <div className='col-lg-4'>
                            <div className='card'>
                                <img src={img3} alt="ogo" width="100%" height='10%'></img>
                                <h6><b> Full Europe</b></h6>
                                <h6 className='plh'>$12k</h6>
                                <p1 class="card-text"><img src={img5} alt="ogo" width="6%"></img>    28Days Trip</p1>

                            </div>
                        </div>
                    </div>
                    <div className='sp'>
                    <img src={img23} alt="ogo" width="100%"></img></div>
                </div></div>


            <div className='land4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <p>Easy and Fast</p>
                            <h1>Book Your Next Trip In 3 Easy Steps</h1>
                            <div className='image'>

                                <div className='im1'>

                                    <img src={img13} alt="ogo" width='10%' height='10%'></img>
                                    <div className='con'>
                                        <h6>Choose Destination </h6> <p> Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Urna, tortor tempus.</p>
                                    </div></div>


                            </div>
                            <div className='im2'>
                                <img src={img14} alt="ogo" width='10%' height='10%'></img>
                                <div className='con1'>
                                    <h6>ChooseDestination </h6>
                                    <p> Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Urna, tortor tempus.</p>
                                </div></div>
                            <div className='im3'>
                                <img src={img15} alt="ogo" width='10%' height='10%'></img>
                                <div className='con2'>
                                    <h6>Choose Destination </h6> <p> Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Urna, tortor tempus.</p>
                                </div></div>
                        </div>
                        <div className='col-lg-6'>
                            <img src={img4} alt="ogo" width="100%"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='land5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='ld1'>
                                <p><b>TESTIMONIALS</b></p>
                                <h1>What People Say About Us</h1>
                                <img src={img12} alt="ogo" width="10%"></img>
                            </div></div>
                        <div className='col-lg-6'>
                            <img src={img6} alt="ogo" width="100%"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='land6'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 my-auto'>

                            <img src={img7} alt="ogo" width="80%"></img>
                        </div>
                        <div className='col-lg-2 my-auto'>
                            <img src={img8} alt="ogo" width="100%"></img>
                        </div>
                        <div className='col-lg-2 my-auto'>
                            <img src={img9} alt="ogo" width="100%"></img>
                        </div>
                        <div className='col-lg-2 my-auto'>
                            <img src={img10} alt="ogo" width="100%"></img>
                        </div>
                        <div className='col-lg-3 my-auto'>
                            <img src={img11} alt="ogo" width="80%"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='land7'>
                <div className='container'>
                <div className='row'>
                    <div className='l7b'>
                    <img src={img24} alt="ogo" width="100%" height='100%'></img>
                    <div className='l1c'>
                    <img src={img22} alt="ogo" width="4%"></img>
                    </div>
                    <div className='l2c'>
                    <img src={img25} alt="ogo" width="20%"></img>
                    </div>
                    <div className='l3c'>
                    <img src={img26} alt="ogo" width="20%"></img>
                    </div>
                    <div className='l4c'>
                    <img src={img21} alt="ogo" width="10%"></img>
                    </div>
                </div>
                <h1 className='lh1'>Subscribe to get information, latest news and <br></br>other
                            interesting offers about Jadoo</h1>

                      
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='container'>
                    <div className='row'>
<div className='col-lg-3'>
<img src={img16} alt="ogo" width="50%"></img>
<p>Book your trip in minute, get full Control for much longer.</p>
</div>
<div className='col-lg-2'>
<h6><b>Company</b></h6>
<p>About</p>
<p>Careers</p>
<p>Mobile</p>
</div>
<div className='col-lg-2'>
    <h6><b>Contact</b></h6>
    <p>Help/FAQ</p>
    <p>Press</p>
    <p>Affilates</p>
</div>
<div className='col-lg-2'>
<h6><b>More</b></h6>
<p>Airlinefees</p>
<p>Airline</p>
<p>Low fare tips</p>
</div>
<div className='col-lg-3'>
<img src={img17} alt="ogo" width="80%"></img>
</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
