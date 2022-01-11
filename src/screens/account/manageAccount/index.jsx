import MiniNav from "../../../components/miniNav";
import { Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import Profile from "./profile";
import Billing from "./billing";
import Setting from "./setting";


function Main() {
    const currPage = useSelector(state => state.currPage)

    return(
        <div className="vh-100 bg-a5bcc9">
            <div className="row m-0 h-100">
                <Navbar className="col-2 p-0 h-100 d-flex align-items-end position-relative" variant='dark'>
                    <MiniNav/>
                </Navbar>
                <div className="col-8 bg-white drop-shadow">
                    {currPage==='Profile' && <Profile/>}
                    {currPage==='Billing' && <Billing/>}
                    {currPage==='Setting' && <Setting/>}
                </div>
                <div className="col-2">

                </div>
            </div>
        </div>
    )
}

export default Main;