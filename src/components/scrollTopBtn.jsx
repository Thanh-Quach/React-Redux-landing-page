import React, {useState} from 'react';
import {IoIosArrowUp} from 'react-icons/io';
import Button from 'react-bootstrap/Button';
import $ from 'jquery';


function ScrollButton() {

    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 50){
            setVisible(true)
        }
        else if (scrolled <= 50){
            setVisible(false)
        }
    };

    const collapse = () => setTimeout(() => {
        const parent = $('.accordion-collapse.collapse.show').parent().children()[0]
        if(parent){
            $('#'+parent.id+' button').click();
        }
    }, 500);

    const scrollToTop = async () =>{
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        await collapse()
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button
            style={{
                zIndex: 200,
                bottom:20,
                right:20,
                height:50,
                display: visible ? 'flex' : 'none',

            }}
            onClick={scrollToTop}
            className='position-fixed f-16pt align-items-center drop-shadow'
            variant="dark"
        >
            <IoIosArrowUp/>
        </Button>
    );
}

export default ScrollButton;
