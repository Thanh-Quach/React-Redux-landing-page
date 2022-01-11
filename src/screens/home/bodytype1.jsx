import Accordion from 'react-bootstrap/Accordion';

import RealtimeContent from './realtime/realtime';
import RMSContent from './RMS/rms';


function Bodytype1(props) {
        return (
            <Accordion id='learnMore' className=''>
                <Accordion.Item eventKey="0" style={props.style}>
                    <Accordion.Header id='RealTimeEditing' className='d-none'></Accordion.Header>
                    <Accordion.Body className='p-0'>
                        <RealtimeContent height={props.headerSlide}/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1"  style={props.style}>
                    <Accordion.Header id='ResourceManagement' className='d-none'></Accordion.Header>
                    <Accordion.Body className='p-0'>
                        <RMSContent />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        );
}

export default Bodytype1;