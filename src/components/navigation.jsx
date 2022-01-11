import React, {useState}  from 'react';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import $ from 'jquery';
import { isMobile } from 'react-device-detect';
import './components.css';

function Globalnavigation (){

    const [visible, setVisible] = useState(true)
    const user = useSelector(state => state)

    let currentScrollPos = window.pageYOffset;

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > currentScrollPos && !isMobile){
            setVisible(false)
        }
        else if (scrolled <= currentScrollPos){
            setVisible(true)
        }
    };

    const collapseNav = ()=> {
        const parent = $('#navbarScroll').parent().children()[1];

        if(parent){
            parent.click();
        }
    }

    window.addEventListener('scroll', toggleVisible);

    console.log(!user.token)
    return(
        <Navbar 
            bg="304d73"
            expand="lg"
            variant="dark"
            className='drop-shadow'
            fixed='top'
            style={{top: visible ? '0' : '-85px'}}
        >
        <Container
            className="w-75 mx-auto"
            fluid
        >
            <Navbar.Brand href="#">
                <Col className='d-flex align-items-end'>
                    <Image
                        style={{ width: '90px' }} 
                        src='./assets/logo-white.png'>
                    </Image>
                    <p className='mb-0 ms-2'>Beta</p>
                </Col>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className={`ms-auto my-2 my-lg-0 ${isMobile? 'text-left':''}`}
                navbarScroll
            >
                <Nav.Link href={`${process.env.PUBLIC_URL}/`} className='mx-2' >Home</Nav.Link>
                <Nav.Link href={`${process.env.PUBLIC_URL}/careers`} disabled className='mx-2' style={{opacity:'0.7'}}>Careers</Nav.Link>
                {/* <Nav.Link href="/pricing" className='mx-2'>Pricing</Nav.Link> */}
                <a className='nav-link mx-2' href="#contact" onClick={() => collapseNav()}>Contact</a>
                <Nav.Link href={`${process.env.PUBLIC_URL}/about`} className='mx-2'>About</Nav.Link>
                {user.token?
                <Nav.Link href={`${process.env.PUBLIC_URL}/account-main`} className='prime-font mx-2'>{user.userInfo.BusinessName||user.userInfo.LastName+user.userInfo.FirstName}</Nav.Link>
                :
                // <Nav.Link href="/account" className='prime-font mx-2'>Sign-In</Nav.Link>
                <Nav.Link href='https://student.datapi.com' target='_blank' className='prime-font mx-2'>Login</Nav.Link>
                }
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Globalnavigation;