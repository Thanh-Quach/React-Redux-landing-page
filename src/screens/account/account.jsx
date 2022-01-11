import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Api from "../../api/api";

function Account (props) {
    
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = (e) => {
        e.preventDefault();
        if (!username || username === "") {
            alert("Username is required");
            return;
        }
      
        if (!password || password === "") {
           alert("Password is required");
            return;
        }
        Api.login(username, password).then((response) => {
            if(response.status === 200){
                if(response.data.responseStatusCode === 200){
                    dispatch({ type: 'SET_TOKEN', payload: response.data.content.tokenId })
                    Api.getAccountInfo(response.data.content.tokenId).then((response) => {
                        dispatch({ type: 'SET_ROLE', payload: response.data.Data.Role[0] })
                        dispatch({ type: 'SET_INFO', payload: response.data.Data.DetailUserInfo })
                        dispatch({ type: 'SET_PAGE', payload: 'Profile' })

                        props.history.replace('/account-main')
                    }).catch(function (error) {
                        console.log(error);
                    })
                }else{
                    alert(response.data.responseStatusMessage)
                }
            }

        })
        .catch(function (error) {
            console.log(error);
        })
    }
    return(
        <div className='row justify-content-center align-items-center m-0 vh-100' style={{background:'#A5BCC9'}}>
            <div className='col-lg-6 col-md-11 h-75 mt-5 drop-shadow bg-light d-flex flex-column justify-content-center'>
                <h1>Welcome to EpenClass</h1>
                <Form className='col-lg-5 col-md-5 col-10 mx-auto mt-5 text-left' onSubmit={login}>
                    <Form.Group className="mb-2">
                        <Form.Control type="email" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <div className='w-100 d-flex justify-content-between'>
                            <Link to='#'>Forgot Password</Link>
                        </div>
                    </Form.Group>
                    <div className='d-flex flex-column text-center'>
                        <Button className='w-50 mx-auto my-3 prime-font' variant='outline-dark' type="submit">
                            Login
                        </Button>
                        <Link to='/register' className='mb-5' variant='light'>
                            Create new account
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Account