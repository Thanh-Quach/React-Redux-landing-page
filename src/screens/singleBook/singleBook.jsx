import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import {Button, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './singleBook.css';
import { isMobile, isTablet } from 'react-device-detect';


function SingleBook(props) {
    const [display, setDisplay] = useState(false);
    const [displayImg, setDisplayImg] = useState();
    const [yearly, setYearly] = useState(false);
    const [printing, setPrinting] = useState(false);

    const bookInfo = props.location.state.bookInfo;
    const zoomInView = (url) => {
        setDisplay(!display);
        setDisplayImg(url);
    };

    const previewPages = bookInfo.imgSrc;
        return (
            <div className={`position-relative ${isMobile&&!isTablet? '':'vh-100'}`} style={{background:'#A5BCC9'}}>
                <div className='w-100 h-100 shadow-overlay position-fixed row align-items-center justify-content-center m-0' style={{zIndex: display?2000 : -1, opacity:display? 1:0}} onClick={()=>setDisplay(!display)}>
                    <img src={displayImg} className='col-lg-4 col-md-10' alt=''/>
                </div>
                <div className='row mx-auto bg-white text-304d73 col-lg-8 col-md-12 h-100 align-items-center pt-5 drop-shadow'>
                    <div id='singleBook' className={`col-lg-4 col-md-4 col-12 d-flex align-items-center ${isMobile&&!isTablet? 'vh-100':'h-100'}`}>
                        <Carousel
                            showArrows={false}
                            showStatus={false}
                            showIndicators={false}
                            className='col-10 mx-auto'
                        >
                        {   
                            previewPages.map((url, index) =>
                            <div
                                key={index}
                                onClick={()=>zoomInView(url)}
                            >
                                <img
                                    src = {url}
                                    alt = ''
                                    className='bg-304d73 w-100'                                
                                />
                            </div>
                            )
                        }
                        </Carousel>
                    </div>
                    <div className={`col-lg-8 col-md-8 col-12 d-flex flex-column justify-content-around ${isMobile&&!isTablet? 'vh-100 align-items-center':'h-75'}`}>
                        <div className={`bg-304d73 w-90 h-75 border-radius-15 overflow-auto ${isMobile&&!isTablet? '':'ms-4'}`}>
                            <div className='text-white f-14pt px-5 py-4 text-left'>
                                <p className='m-0'><b>Title:</b> {bookInfo.title}</p>
                                <p className='m-0'><b>Grade:</b> {bookInfo.grade}</p>
                                <p className='m-0'><b>Author:</b> {bookInfo.author}</p>
                                <p className='m-0'><b>Publisher:</b> {bookInfo.publisher}</p>
                                <p className='m-0'><b>Solution:</b> Yes</p>
                                <br/>
                                <p className='m-0'><b>Description:</b> {bookInfo.desc}</p>
                            </div>
                        </div>
                        <div className={`${isMobile&&!isTablet? 'my-5':''}`}>
                            {!printing && <Form>
                                    <div className="my-3 f-14pt">
                                    <Form.Check
                                        inline
                                        label="Monthly"
                                        name="group1"
                                        checked={!yearly}
                                        type='checkbox'
                                        id={`inline-radio-1`}
                                        onClick={()=>{setYearly(!yearly)}}
                                    />
                                    <Form.Check
                                        inline
                                        label="Yearly"
                                        name="group1"
                                        type='checkbox'
                                        checked={yearly}
                                        id={`inline-radio-2`}
                                        onClick={()=>{setYearly(!yearly)}}
                                    />
                                    </div>
                
                            </Form>}
                            {printing?
                            <h2 className='prime-font mt-2'>${bookInfo.printingPrice} for {bookInfo.printinConLength} years</h2>:

                            <h2 className='prime-font mt-2'>${!yearly? bookInfo.priceMonthly:bookInfo.priceYearly}</h2>
                            }
                            <h5 className=''>per student</h5>
                            <Button className='bg-304d73 prime-font f-14pt my-3 px-4 py-2 border-0' disabled>Subscribe</Button>
                            <Link to='/epenstore'><Button className={`prime-font f-14pt px-4 py-2 ${isMobile&&!isTablet? 'm-0':'my-3 ms-2'}`} variant='outline-dark'>Continue Shopping</Button></Link>
                            <Form>
                                <Form.Check 
                                    type="switch"
                                    id="custom-switch"
                                    className='col-5 mx-auto mt-3'
                                    label={printing? 'Printing option enable':'Printing option disable '}
                                    checked={printing}
                                    onClick={()=>setPrinting(!printing)}
                                />
                            </Form>
                            <p className='text-danger'>Please sign-in before proceeding</p>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default SingleBook