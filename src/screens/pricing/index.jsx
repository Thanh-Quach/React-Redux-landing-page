import * as UrlConst from '../../api/UrlConst';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import Api from '../../api/api';

function Pricing() {
    const [products, setProducts] = useState([]);
    const [prices, setPrice] = useState([]);
    const [disabled, setDisabled] = useState(false)

    const [recurring, setRecurring] = useState('month');

    useEffect(()=>{ 
        Api.getPrice()
        .then(function (response) {
            setPrice(response.data.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])
    
    useEffect(()=>{ 
        axios.get(UrlConst.StripeDomain + UrlConst.Products,{
            headers: {
                'Access-Control-Allow-Origin': '*',
                'content-type':'application/json',
            },
        })
        .then(function (response) {
            setProducts(response.data.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])

    function scrolltoBttom() {
        window.scrollTo(0,document.body.scrollHeight);
    }

    return(
        <div className={`${isMobile?'my-5 py-5':'vh-100'} d-flex align-items-center`}>
        <div className="row m-0 align-items-center justify-content-center px-5" style={{height:'60%'}}>
	    <h1 className="col-12 text-center text-304d73 my-4">Upgrade your app NOW</h1>
            <div>
                <Button className='mx-1 bg-304d73 border-0' onClick={()=>{setRecurring('month'); setDisabled(!disabled)}} disabled={!disabled} >Monthly</Button>
                <Button className='mx-1 bg-304d73 border-0' onClick={()=>{setRecurring('year'); setDisabled(!disabled)}} disabled={disabled}>Yearly</Button>
            </div>
            {prices.filter(items => items.recurring.interval === recurring).reverse().map((items, index)=>{
                console.log(products)
            return (
                <div key={index} className="bg-white col-lg-3 col-md-5 col-10 my-2 text-center">
                    <div className="drop-shadow py-3">
                    <h1 className="bg-304d73 m-0 text-white p-3 f-16pt">{products.length>0&&products[products.length-1-index].name}</h1>
                    <h1 className="p-3">${items.unit_amount/100}</h1>
                    <p>{products.length>0&&products[products.length-1-index].description}</p>
                    <button type="button" className="btn w-75 mx-auto mt-2 bg-304d73 prime-font text-white">Upgrade</button>
                    </div>
                </div>
            )
            })}
                <div className="bg-white col-lg-3 col-md-5 col-10 text-center">
                    <div className="drop-shadow py-3">
                    <h1 className="bg-304d73 m-0 text-white p-3 f-16pt">School</h1>
                    <h1 className="p-3">Contact Us</h1>
                    <p>to make a quote</p>
                    <button type="button" className="btn w-75 mx-auto mt-2 bg-304d73 prime-font text-white" onClick={()=>scrolltoBttom()}>Contact</button>
                    </div>
                </div>
        </div>
        </div>

    )
}

export default Pricing;