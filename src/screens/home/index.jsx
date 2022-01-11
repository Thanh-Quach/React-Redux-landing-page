import React, {useRef, useEffect, useState} from 'react';
import Slider from './slider';
import Bodytype1 from './bodytype1';
import { CSSProperties } from 'react';
import $ from 'jquery';
import { Carousel } from 'react-responsive-carousel';
import { isTablet, isMobile} from 'react-device-detect';


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './home.css';




function Home() {
    const [height, setHeight] = useState(0)
    const headerSlide = useRef(null)
  
    useEffect(() => {
      setHeight(headerSlide.current.offsetHeight)
    },[])

    const sildeInfo = [
        {
            id:1,
            title: 'Real-time Share Editing',
            desc: 'with premium editing tools that works across different devices',
            isLearnMore : true,
            linkTo:'RealTimeEditing',
            imgSrc:'./assets/realtime.gif',
        },
        {
            id:2,
            title: 'Instant Detailed Solution',
            desc: 'with a left-swipe',
            isLearnMore : false,
            imgSrc:'./assets/solution-swipe.gif',
        },
        {
            id:3,
            title: 'Make a Note',
            desc: 'with a right-swipe',
            isLearnMore : false,
            imgSrc:'./assets/note-swipe-2.gif',
        },
        {
            id:4,
            title: 'Resource Management System',
            desc: 'Assign - Grade - Save with different devices',
            isLearnMore : true,
            video: true,
            linkTo:'ResourceManagement',
            imgSrc:'./assets/manage.mp4',
        },
        // {
        //     id:5,
        //     title: 'Teacher Select - Student Pay',
        //     desc: '',
        //     isLearnMore :false,
        //     btnTitle: 'Browse Resources',
        //     linkTo: './epenstore',
        //     imgSrc:'./assets/browse.png',
        // },
    ]
    
    const indicatorStyles: CSSProperties = {
        backgroundColor: '#304d73',
        width: 16,
        height: 16,
        borderRadius: '50%',
        margin: '0 8px',
        boxShadow: '2px 2px 5px #000',
    };

    const scrollToTop = () =>{
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
        collapse()
    };
    const collapse = () => {
        const parent = $('.accordion-collapse.collapse.show').parent().children()[0]
        if(parent){
            $('#'+parent.id+' button').click();
        }
    };
        
    $('.carousel .control-dots').click(
        scrollToTop
    )

    return(
    <div>
        <div ref={headerSlide} className={`position-relative ${isMobile&&!isTablet?'pt-3':'pt-5'}`} style={{height: isMobile&&!isTablet?'90vh':'100vh'}} >
            <Carousel
                autoPlay
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                interval={8000}
                className={`d-flex h-100 ${isTablet || isMobile? 'align-items-center':'align-items-end'}`}
                renderIndicator={(onClickHandler, isSelected, index) => {
                    
                    if (isSelected) {
                        return (
                            <li
                                style={{...indicatorStyles, opacity:'0.6'}}
                            >
                            </li>
                        );
                    }
                    return (
                        <li
                            style={{...indicatorStyles}}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            key={index}
                            role="button"
                            tabIndex={0}
                        >
                        </li>
                    );
                }}
            >
            {
                sildeInfo.map((content) =>
                <Slider
                    key={content.id}
                    title={content.title}
                    blurb={content.desc} 
                    isLearnMore={content.isLearnMore}
                    btnTitle={content.btnTitle}
                    linkTo={content.linkTo}
                    imgSrc={content.imgSrc}
                    video={content.video}
                    headerSlide={height}
                />)
            }
            </Carousel>
        </div>
        <Bodytype1 
            style={{backgroundColor:'#fff'}}
            headerSlide={height}
        />
            
    </div>
    )
}

export default Home