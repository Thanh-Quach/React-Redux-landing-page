import { useState } from "react";
import { Button,Form,ToggleButton,Dropdown } from "react-bootstrap";
import { isTablet,isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

function Register() {
    const [radioValue, setRadioValue] = useState(null);
    const [role, setRole] = useState(false);
    const [gender, setGender] = useState();

    const radios = [
      { name: 'Student', value: '1' },
      { name: 'Teacher', value: '2' },
    ];

    const genders = [
        {name:'Male' , value:'m'},
        {name:'Female' , value:'f'},
    ]
    
    const Gender = genders.map((item, index)=>
        <Dropdown.Item key={index} className='' onClick={()=>{setGender(item)}}>{item.name}</Dropdown.Item>
    )

    const handleChange = ((e) => {
        setRadioValue(e.currentTarget.value)
        setRole(true)
    })

    const StudentField = () => {
    if(radioValue){
        if(radios[radioValue-1].name === 'Student')
            {return(
            <Form.Group className="col-lg-6 col-md-6 col-12 mb-1">
                <Form.Control type="text" placeholder="Class ID (Optional)" />
            </Form.Group>)}
            return false
        }
    }
    
    return(
        <div className={`${isTablet? '':`${isMobile? 'mt-4':'pt-5 vh-100'}`}`} style={{background:'#A5BCC9'}}>
            <div className={`bg-100 row col-lg-8 col-md-10 bg-light drop-shadow mx-auto text-dark align-items-center seccond-font f-14pt ${isMobile?'min-vh-100 py-5':'h-100'}`}>
                <div className='col-lg-6 col-md-10 mx-auto mt-4'>
                    <h1 className='mb-4'>Sign Up</h1>
                    <div className='d-flex justify-content-start align-items-center mb-3'>
                        <h4 className='my-0 me-2'>I am a</h4>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                name="radio"
                                disabled={radioValue === radio.value}
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => handleChange(e)}
                                className='my-3 mx-1 px-4 bg-304d73 border-0'
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </div>
                    <div className='text-left'>
                        <p className='mb-2'>
                            <b>Student</b> is an individual account. Purchased books will only be for individual use.
                        </p>
                        <p>
                            <b>Teacher</b> have option to manage classes, students, and distribution of resources.
                        </p>
                    </div>
                    {role?
                    <div>
                    <Form className='mx-auto mt-5 text-left'>
                        <div className='row mb-2'>
                        <Form.Group className="col-lg-6 col-md-6 col-12 mb-1">
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group className="col-lg-6 col-md-6 col-12 mb-1">
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                        </div>
                        <div className='row mb-2'>
                        <Dropdown className='col-lg-6 col-md-6 col-12 mb-1'>
                            <Dropdown.Toggle className='border w-100 text-left bg-white' variant="light">
                                {!gender? 'Gender': gender.name}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className=''>
                                {Gender}
                            </Dropdown.Menu>
                        </Dropdown>
                        <StudentField/>
                        </div>
                        <div className='my-3 py-3'></div>
                        <div className='row mb-2'>
                        <Form.Group className="col-lg-6 col-md-6 col-12 mb-1">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="col-lg-6 col-md-6 col-12 mb-1">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        </div>
                        <div className='row mb-2'>
                        <Form.Group className="col-lg-6 col-md-6 col-12 mb-1">
                           
                        </Form.Group>
                        <Form.Group className="col-lg-6 col-md-6 col-12 mb-1">
                            <Form.Control type="password" placeholder="Comfirm Password" />
                        </Form.Group>
                        </div>
                    </Form>
                    <div className='d-flex'>
                        <Button className='my-3 px-4 border-0' type="submit" variant="danger" disabled>
                                Coming Soon
                        </Button>
                        <Button className='my-3 px-4 mx-2 ' variant='outline-dark' type="submit">
                                Clear Form
                        </Button>

                        <Link to='/account'>
                            <Button className='my-3 px-4' variant='outline-dark' type="submit" >
                                Cancel
                            </Button>
                        </Link>
                    </div>
                    </div>:''
                    }
                </div>
            </div>
        </div>
    );
}

export default Register