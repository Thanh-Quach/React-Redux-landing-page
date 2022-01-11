import { isMobile, isTablet } from "react-device-detect"


function Footer() {
    return(
        <div id='contact' className='bg-304d73 text-white pt-5 position-relative' style={{zIndex:100}}>
            <div className='pt-5 pb-3'>
                <div className={` col-lg-4 col-md-8 col-sm-11 shadow ${isMobile&&!isTablet? 'py-5 mx-2':'p-5 mx-auto'}`} style={{backgroundColor:'rgba(0,0,0,0.4)'}}>
                <h1 id="contact-header" className=" text-center delay300 pb-4">Contact Us</h1>
                    <ul className="p-0 mx-auto w-90 pt-1 text-left">
                        <li><h5>Email: admin@epenclass.com</h5></li><br/>
                        <li><h5>Phone:</h5></li>
                        <li><h5>English / Tiếng Việt: (604) 418-8347</h5></li>
                        <li><h5>中文: (604) 707-0398</h5></li>
                    </ul>
                </div>
            </div>
            <div id="footer"><p className="text-center m-0 py-3">© 2021 EpenClass. Powered by <b>DataPi Learning Inc</b>. All right Reserved.</p></div>
        </div>
    )
}

export default Footer