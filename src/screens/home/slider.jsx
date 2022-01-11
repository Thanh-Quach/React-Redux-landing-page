import Image from 'react-bootstrap/Image';
import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { isMobile, isTablet } from 'react-device-detect';

function Slider(props){
    let LearnMoreBtn;
    if (!props.isLearnMore && props.btnTitle){
        LearnMoreBtn = () => <Link to={props.linkTo}>
                                <button type="button" className={`btn btn-outline-dark f-14pt ms-3`}>{props.btnTitle}</button>
                            </Link>
    }else if(!props.isLearnMore) {
        LearnMoreBtn = () => ''
    }else if(props.isLearnMore) {
        LearnMoreBtn = () => <button type="button" className={`btn btn-outline-dark f-14pt ms-3`} onClick={() => handleClick(props.linkTo)}>Learn More</button>
    }
    
    async function handleClick(e){
        $('#'+e+' button').click();
        await scrollFurther()
    }

    const scrollFurther = () => setTimeout(() => {
        window.scrollTo({
            top: props.headerSlide,
            behavior: 'smooth'
            });
    },100)

    return (
        <div className={`w-100 p-0 m-0 ${isTablet || isMobile? '':'row h-100 align-items-center justify-content-around'}`}>
            <div className="col-lg-8 row align-items-end h-100 p-0 m-0">
                <div className="d-flex justify-content-end col-12 row p-0 m-0">
                {props.video?                
                    <video autoPlay muted loop className='overflow-hidden p-0 m-0 position-relative' style={{top:0, left:0,}}>
                        <source src={props.imgSrc}/>
                    </video>:
                    <div className="w-100 overflow-hidden p-0 m-0 position-relative">
                        <Image src={props.imgSrc} className="slide-img w-100"/>
                    </div>
                }
                </div>
            </div>
            <div className="col-lg-4 d-flex flex-column justify-content-start p-0 h-50">
                <div className={`w-100 px-2 ${isTablet || isMobile? 'text-center my-5':'mb-4 '}`} style={{textAlign:'left', width: '85%'}}>
                    <h3 className="text-304d73 p-0 prime-font">{props.title}</h3>
                    <p className={`f-14pt text-304d73 ${isMobile? '':'pe-5'}`}>{props.blurb}</p>
                </div>
                <div className={`d-flex align-items-center ${isTablet || isMobile? 'mx-auto':''}`}>
                    <Link to='#'><button type="button" className="btn border-0 bg-304d73 text-white f-14pt">Sign-Up for Free</button></Link>
                    <LearnMoreBtn/>
                </div>
            </div>
        </div>
);

}

export default Slider