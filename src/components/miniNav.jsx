import { Nav, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";

function MiniNav() {
    const dispatch = useDispatch();

    function switchView(currPage) {
        dispatch({ type: 'SET_PAGE', payload: currPage })
    }
    function clearAllData() {
        dispatch({ type: 'LOG_OUT'})
        window.location.replace('/account')
    }

    return(
    <Container className="h-25 w-100 shadow-overlay">
        <Nav className="flex-column text-left w-100 h-100 d-flex column-flex justify-content-around">
            <Nav.Link onClick={()=>switchView('Profile')}>Profile</Nav.Link>
            <Nav.Link onClick={()=>switchView('Billing')}>Billing</Nav.Link>
            <Nav.Link onClick={()=>switchView('Setting')}>Setting</Nav.Link>
            <Nav.Link onClick={()=>clearAllData()}><b>Log Out</b></Nav.Link>
        </Nav>
    </Container>
    )
}

export default MiniNav