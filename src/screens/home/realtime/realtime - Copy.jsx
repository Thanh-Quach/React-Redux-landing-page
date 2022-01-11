import { Image } from 'react-bootstrap';
// import $ from 'jquery';
import Bgcustom from '../../../components/background-custom';
import { React } from 'react';
// import {useState, useEffect} from 'react';

import './style.css';

function RealtimeContent() {
    // const [activeCount, setActiveCount] = useState(0);

    // let count = 0;
    const Toolbar = (props) => {
        // let increaseCount = count++
        return(
        <div className='row text-white p-1 align-items-center'>
            <div className={'toolIcon '
                //  + setSelect(increaseCount)
            }>
                <i className={'text-center '+ props.toolIcon}></i>
                <span className="tooltiptext">{props.toolName}</span>
            </div>
        </div>
        )
    };
    // const setSelect = (count) => {
    //     if(count === activeCount)
    //     return('active');
    // }
    
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setActiveCount(activeCount + 1);
    //     }, 1500);
    //     if(activeCount >  $('.toolIcon').length*2){
    //         setActiveCount(0)
    //     }
    //     return () => clearInterval(interval);
    //   }, [activeCount]);


        return(
            <div className='text-304d73 w-100 m-0 position-relative overflow-hidden'>
                <Bgcustom/>
                <div className='row align-items-center text-left position-relative py-5 px-1 w-90 mx-auto' style={{zIndex:10}}>
                    <h3 className='prime-font py-5 text-center'>With Premium Tools</h3>
                    <div className='mx-auto d-flex justify-content-around'>
                        <div className='bg-black p-3 drop-shadow d-flex justify-content-around col-7'>
                            <Toolbar toolIcon='fas fa-mouse-pointer active' toolName='Pointer'/>
                            <Toolbar toolIcon='fas fa-pen' toolName='Pen'/>
                            <Toolbar toolIcon='fas fa-eraser' toolName='Eraser'/>
                            <Toolbar toolIcon='fas fa-highlighter' toolName='Highlighter'/>
                            <Toolbar toolIcon='fas fa-superscript' toolName='Formular Sheet'/>
                            <Toolbar toolIcon='fas fa-chart-line' toolName='Graphing Calculator'/>
                            <Toolbar toolIcon='fas fa-calculator' toolName='Scientific Calculator'/>
                            <Toolbar toolIcon='icon-textbox' toolName='TextBox'/>
                            <Toolbar toolIcon='fas fa-square-root-alt' toolName='Equation'/>
                            <Toolbar toolIcon='fas fa-shapes' toolName='Shape'/>
                            <Toolbar toolIcon='fas fa-undo' toolName='Undo'/>
                            <Toolbar toolIcon='fas fa-redo' toolName='Redo'/>
                            <Toolbar toolIcon='fas fa-file' toolName='New page'/>
                            <Toolbar toolIcon='fas fa-th' toolName='Note Style'/>
                        </div>
                        <div className='text-white prime-font col-5'>
                            <div className='w-50 h-100 d-flex align-items-center justify-content-center mx-auto' style={{background:'rgba(0,0,0,0.5)'}}>
                            <div className="d-flex align-items-center toolIcon tool-static"  style={{background:'rgba(0,0,0,0.7)'}}>
                                <button type="button" className="btn text-white">
                                    <i className="fas fa-play"></i>
                                </button>
                                <span className="font-Paytone px-2">0:00.00</span>
                                <span className="px-3">
                                    <i className="fas fa-stopwatch"></i>
                                </span>
                                <span className="tooltiptext">Stopwatch</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center justify-content-around text-left position-relative overflow-hidden py-5 px-1 w-90 mx-auto'  style={{zIndex:1}}>
                    <div className='col-7 my-5 py-5'>
                        <div className='mx-auto'>
                            <Image className='w-100 drop-shadow' src='./assets/hand-writting-benefit.jpg'/>
                        </div>
                    </div>
                    <div className='col-5'>
                    <div className='pt-5 h-100 ms-5'>
                            <h3 className='prime-font lh-base'>Benefits of Handwriting:</h3>
                            <ul style={{listStyleType:'disc'}} className='f-14pt'>
                                <li>Improve fine motor skills</li>
                                <li>Strengthen memory recalls</li>
                                <li>Raise the brain’s  cognitive functions</li>
                                <li>Good handwriting = improved academic performance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default RealtimeContent;