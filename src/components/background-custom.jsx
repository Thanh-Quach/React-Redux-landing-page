import { CSSProperties } from "react";


function Bgcustom(props){
    let fillColor;
    if (props.theme === 'blue') {
        fillColor = '#fff'
    }else{
        fillColor = '#304d73'
    }
    const customShape: CSSProperties = {
        position: 'absolute',
        opacity: 0.1,
        zIndex: 0
    };
    const triangle: CSSProperties = {
        width: 0,
        height: 0
    };
    const rectangle: CSSProperties = {
        width: '1500px',
        height: '200px',
        top: '300px',
        right: '-680px',
        transform: 'rotate(45deg)'
    };
    const bottomLeft: CSSProperties = {
        bottom: 0,
        left: 0
    };
    const topRight: CSSProperties = {
        top: 0,
        right: 0
    };
    return(
        <div>
            <div style={{...customShape, ...triangle, ...bottomLeft, borderBottom: '300px solid '+fillColor, borderRight:'300px solid transparent'}}></div>
            <div style={{...customShape, ...rectangle, background: fillColor}}></div>
            <div style={{...customShape, ...triangle, ...topRight, borderTop: '300px solid '+fillColor, borderLeft: '300px solid transparent'}}></div>
        </div>
    )
}

export default Bgcustom;