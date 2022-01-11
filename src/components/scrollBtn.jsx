function ScrollBtn (props) {
    
    const scrollFurther = () => setTimeout(() => {
        window.scrollTo({
            top: props.height*2,
            behavior: 'smooth'
            });
    },100)

    return (
        <div className='w-100 text-center'><div href='#' className='animated-flash' style={{textDecoration: 'none', cursor: 'pointer'}} onClick={scrollFurther}>
        <p className='text-dark'>View More</p>
        <i
            className="fas fa-chevron-circle-down text-dark" 
            style={{
                fontSize:'36pt',
            }}>
        </i></div></div>
    )
}

export default ScrollBtn;