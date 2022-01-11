import Bgcustom from '../../../components/background-custom';
import { React } from 'react';
import './style.css';
import { isMobile, isTablet } from 'react-device-detect';

// import ScrollBtn from '../../../components/scrollBtn';


function RealtimeContent(props) {

    const Toolbar = (props) => {
        return(
        <div className={`text-white p-1 ${isMobile&&!isTablet? 'col-3':'col'}`}>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <i className={'text-center text-dark f-16pt  '+ props.toolIcon}></i>
                <p className="text-dark text-center f-12pt">{props.toolName}</p>
            </div>
        </div>
        )
    };

        return(
            <div className='text-304d73 w-100 m-0 position-relative overflow-hidden'>
                <div className='d-flex flex-column justify-content-center position-relative' style={{height: isMobile&&!isTablet? '':'90vh', zIndex:1}}>
                    <Bgcustom/>
                    <div className={`d-flex flex-column justify-content-center text-left ${isMobile&&!isTablet?'my-5 py-5':''}`} style={{zIndex:10}}>
                        <h3 className='prime-font text-center'>With Premium Tools</h3>
                        <p className='text-center f-14pt'>That works accross Ipad, Desktop, or even Phone of any size</p>
                        <div className={`mx-auto w-100 ${isMobile&&!isTablet? '':'my-5'}`}>
                            <div className='w-75 my-5 mx-auto'>
                                <div className='row justify-content-center'>
                                <Toolbar toolIcon='fas fa-mouse-pointer active' toolName='Pointer'/>
                                <Toolbar toolIcon='fas fa-pen' toolName='Pen'/>
                                <Toolbar toolIcon='fas fa-eraser' toolName='Eraser'/>
                                <Toolbar toolIcon='fas fa-highlighter' toolName='Highlighter'/>
                                <Toolbar toolIcon='fas fa-superscript' toolName='Formular Sheet'/>
                                <Toolbar toolIcon='fas fa-chart-line' toolName='Graphing Calculator'/>
                                <Toolbar toolIcon='fas fa-calculator' toolName='Scientific Calculator'/>
                                </div>
                                <div className='row my-5 justify-content-center'>
                                <Toolbar toolIcon='fas fa-font' toolName='TextBox'/>
                                <Toolbar toolIcon='fas fa-square-root-alt' toolName='Equation'/>
                                <Toolbar toolIcon='fas fa-shapes' toolName='Shape'/>
                                <Toolbar toolIcon='fas fa-undo' toolName='Undo'/>
                                <Toolbar toolIcon='fas fa-redo' toolName='Redo'/>
                                <Toolbar toolIcon='fas fa-file' toolName='New page'/>
                                <Toolbar toolIcon='fas fa-th' toolName='Note Style'/>
                                </div>
                            </div>
                            <div className='text-white prime-font'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <div className="d-flex align-items-center mx-3"  style={{background:'rgba(0,0,0,0.7)'}}>
                                        <button type="button" className="btn text-white">
                                            <i className="fas fa-play"></i>
                                        </button>
                                        <span className="font-Paytone px-2">0:00.00</span>
                                        <span className="px-3">
                                            <i className="fas fa-stopwatch"></i>
                                        </span>
                                    </div>
                                    <p className="text-dark f-12pt m-0">Stopwatch</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div
                    className='position-relative d-flex align-items-center justify-content-center'
                    style={{
                        height: '90vh',
                        zIndex:10,
                        // backgroundImage:'url("./assets/hand-writting-benefit.gif"), url("./assets/hand-writting-benefit.jpg")',
                        // backgroundRepeat:'no-repeat',
                        // backgroundSize:'cover',
                        // backgroundPosition:'center',
                    }}
                >

                    
                    {/* <ScrollBtn height={props.height}/> */}
                    <div 
                        className={`h-100 w-100 position-absolute d-flex ${isTablet? 'justify-content-end align-items-center':`${isMobile? 'p-0 m-0':'justify-content-end align-items-end p-5'}`}`}
                        style={{zIndex:10}}
                    >
                        <div className={`text-white shadow-overlay d-flex justify-content-center align-items-center ${isMobile&&!isTablet? 'm-0':`p-5 m-5 h-auto w-auto`}`}>
                            <div className={`${isMobile&&!isTablet? 'mx-4':''}`}>
                            <h3 className={`prime-font lh-base ${isMobile&&!isTablet? 'text-center':''}`}>Benefits of Handwriting:</h3>
                            <ul style={{listStyleType:'disc'}} className='f-14pt seccond-font text-left'>
                                <li>Improve fine motor skills</li>
                                <li>Strengthen memory recalls</li>
                                <li>Raise the brain’s  cognitive functions</li>
                                <li>Good handwriting = improved academic performance</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <video autoPlay muted loop playsInline  type='video/mp4' className={`p-0 m-0 position-absolute`} style={{top:0, left:0, zIndex:1, width: isMobile? 'auto' : '100%', height: isMobile? '100%' : 'auto'}}>s
                        <source src='./assets/hand-writting-benefit.mp4'/>
                    </video>
                </div>
            </div>
        );
}

export default RealtimeContent;