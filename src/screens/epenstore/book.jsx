import { useState } from "react";
import { Image, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

function Book(props) {
    const [opacity, setOpactiy] = useState(0);

    return(
        <Link
            to={{
                pathname: `./book`,
                state: { bookInfo: props }
            }}
            className='col-lg-3 col-md-3 col-6 px-4 my-3'
            style={{textDecoration: 'none'}}
        >
            <div
                className='position-relative'
                onMouseEnter={()=>setOpactiy(1)}
                onMouseLeave={()=>setOpactiy(0)}

            >
                <div className='h-100 w-100 position-absolute shadow-overlay d-flex flex-column justify-content-center prime-font text-left px-3' style={{opacity: `${opacity}`}}>
                    <h5 className='m-0 text-center'>{props.title}</h5>
                    <h5 className='mb-4 mt-2 seccond-font text-center'>{props.blurb}</h5>
                    {props.grade !== '13'? <p className='m-0'>Grade: {props.grade}</p>:''}
                    <p className='m-0'>Subject: {props.subject}</p>
                    <p className='m-0'>Author: {props.author}</p>
                </div>
                <Image src={props.imgSrc[0]} className='drop-shadow w-100'/>
            </div>
            <div className='my-4'>
                <Button variant='outline-dark px-3'>${props.priceMonthly}</Button>
            </div>
        </Link>
    )
}
export default Book