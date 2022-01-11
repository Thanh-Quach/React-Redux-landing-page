import Bgcustom from "../../../components/background-custom";
import { Image } from "react-bootstrap";
import { isMobile } from "react-device-detect";

function RMSContent() {

    return(
        <div className=' w-100 m-0 text-304d73 w-75 mx-auto position-relative overflow-hidden'>
                <Bgcustom/>
            {isMobile?
            <div className='w-75 py-5 mx-auto my-5 position-relative' style={{zIndex:1}}>
                <div className='row align-items-center justify-content-around py-5'>
                    <div className='col-12 mb-4'>
                        <Image src='./assets/teacher.png'  className='w-100'/>
                    </div>
                    <div className='col-12 text-left'>
                        <h3 className='prime-font ms-3'>Teachers</h3>
                        <p className='p-0 seccond-font m-0 f-14pt'>Assign worksheets to specific student(s) or the whole class;
                        Use prepaid contents or upload your own customized materials or Disable solution anytime.</p>
                    </div>
                </div>
                <div className='row align-items-center justify-content-around py-5'>
                    <div className='col-12 mb-4'>
                        <Image src='./assets/student.png' className='w-100' />
                    </div>
                    <div className='col-12 text-left'>
                        <h3 className='prime-font ms-3'>Students</h3>
                        <p className='p-0 seccond-font m-0 f-14pt'>Access teachers’ assigned work or Upload your own work for correction & feedback.</p> 
                    </div>
                </div>
                <div className='row align-items-center justify-content-around py-5'>
                    <div className='col-12 mb-4'>
                        <Image src='./assets/admin.png'  className='w-100'/>
                    </div>
                    <div className='col-12 text-left'>
                        <h3 className='prime-font ms-3'>Administrators</h3>
                        <p className='p-0 seccond-font m-0 f-14pt'>Swap the worksheet header with a school community message banner anytime.</p>
                    </div>
                </div>
            </div>
            :
            <div className='w-75 py-5 mx-auto my-5 position-relative' style={{zIndex:1}}>
                <div className='row align-items-center justify-content-around py-5'>
                    <div className='col-5 text-left'>
                        <h3 className='prime-font ms-3'>Teachers</h3>
                        <p className='p-0 seccond-font m-0 f-14pt'>Assign worksheets to specific student(s) or the whole class;
                        Use prepaid contents or upload your own customized materials or Disable solution anytime.</p>
                    </div>
                    <div className='col-6'>
                        <Image src='./assets/teacher.png'  className='w-75'/>
                    </div>
                </div>
                <div className='row align-items-center justify-content-around py-5'>
                    <div className='col-8'>
                        <Image src='./assets/student.png' className='w-75' />
                    </div>
                    <div className='col-4 ms-auto me-0 my-5 py-5 text-left'>
                        <h3 className='prime-font ms-3'>Students</h3>
                        <p className='p-0 seccond-font m-0 f-14pt'>Access teachers’ assigned work or Upload your own work for correction & feedback.</p> 
                    </div>
                </div>
                <div className='row align-items-center justify-content-around py-5'>
                    <div className='col-4 text-left'>
                        <h3 className='prime-font ms-3'>Administrators</h3>
                        <p className='p-0 seccond-font m-0 f-14pt'>Swap the worksheet header with a school community message banner anytime.</p>
                    </div>
                    <div className='col-8'>
                        <Image src='./assets/admin.png'  className='w-100'/>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}

export default RMSContent;