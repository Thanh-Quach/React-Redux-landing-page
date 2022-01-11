import { useState } from "react";
import { useSelector } from "react-redux";
import { Button,Form,Dropdown } from "react-bootstrap";

function Register() {

    const user = useSelector(state => state.userInfo)

    const [gender, setGender] = useState(user.Gender)
    const [firstName, setFirstName] = useState(user.FirstName)
    const [lastName, setLastName] = useState(user.LastName)
    const [email, setEmail] = useState(user.Email)

    const [changePassword, setChangePassword] = useState(false)
    const [password, setPassword] = useState()


    const genders = [
        {name:'Male' , value:'m'},
        {name:'Female' , value:'f'},
    ]
    
    console.log(user)
    const Gender = genders.map((item, index)=>
        <Dropdown.Item key={index} className='' onClick={()=>{setGender(item.name)}}>{item.name}</Dropdown.Item>
    )

    
    return(
                <div className='col-lg-6 col-md-10 mx-auto d-flex flex-column align-items-center justify-content-center h-100'>
                    <h1 className='mb-4'>My Profile</h1>

                    <div>
                    <Form className='mx-auto mt-5 text-left'>
                        <div className='row mb-2'>
                        <Form.Group className="col-lg-6 col-md-6 col-12 mb-1">
                            <Form.Control type="text" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="col-lg-6 col-md-6 col-12 mb-1">
                            <Form.Control type="text" placeholder="Last Name"  value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                        </Form.Group>
                        </div>
                        <div className='row mb-2'>
                        <Dropdown className='col-lg-6 col-md-6 col-12 mb-1'>
                            <Dropdown.Toggle className='border w-100 text-left bg-white' variant="light">
                                {gender}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className=''>
                                {Gender}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Group className="col-lg-6 col-md-6 col-12 mb-1">
                            <Form.Control type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </Form.Group>
                        </div>
                        <div className='my-3 py-3'></div>
                        {changePassword&&<div className='row mb-2'>
                            <Form.Group className="col-lg-6 col-md-6 col-12 mb-1">
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>
                            <Form.Group className="col-lg-6 col-md-6 col-12 mb-1">
                                <Form.Control type="password" placeholder="Comfirm Password" />
                            </Form.Group>
                        </div>}
                    </Form>
                    <div className='d-flex'>
                        <Button className='my-3 px-4 border-0 bg-304d73' type="submit">
                                Update
                        </Button>
                        <Button className='my-3 px-4 mx-2' variant='outline-dark' onClick={()=>{setChangePassword(!changePassword)}}>
                                Change Password
                        </Button>
                        <Button className='my-3 px-4' variant='outline-dark'>
                                Cancel Change
                        </Button>
                    </div>
                    </div>
                </div>
    );
}

export default Register