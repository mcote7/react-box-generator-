import React, { useState } from 'react';

const BoxForm = ({boxes, setBoxes}) => {
    const [color, setColor] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    // const [hasBeenSubmited, setHasBeenSubmited] = useState(false);


    const colorHandle = (e) => {
        setColor(e.target.value);
    }
    const heightHandle = (e) => {
        setHeight(e.target.value);
    }
    const widthHandle = (e) => {
        setWidth(e.target.value);
    }
    const createBox = (e) => {
        e.preventDefault();
        // setHasBeenSubmited( true );
        setBoxes( [...boxes, {
            backgroundColor: color,
            height: height,
            width: width,
            style: {
                display: "inline-block",
                backgroundColor: color,
                border: "1px solid black",
                height: height + "px",
                width: width + "px",
            }
        }]);
        setColor("");
        setHeight("");
        setWidth("");
    }

return(
    <form onSubmit={createBox} >
        <div className="row">
            <div className="col">
                <div className="inputcontainer">
                    <label>&nbsp; &bull; Color &bull; &nbsp;</label> <br/>
                    <input required type="text" value={color} placeholder="enter your favorite color" onChange={colorHandle}/>
                </div>
            </div>
            <div className="col" style={{borderLeft: "solid 1px darkgrey", paddingLeft: "25px"}}>
                <div className="inputcontainer">
                    <label>&nbsp; &bull; Height &bull; &nbsp;</label> <br/>
                    <input required type="text" value={height} placeholder="enter your size" onChange={heightHandle}/>
                </div>
            </div>
            <div className="col" style={{borderLeft: "solid 1px darkgrey", paddingLeft: "25px"}}>
                <div className="inputcontainer">
                    <label>&nbsp; &bull; Width &bull; &nbsp;</label> <br/>
                    <input required type="text" value={width} placeholder="enter your size" onChange={widthHandle}/>
                </div>
            </div>
        </div>
        <hr/>
        <div className="row">
            <button type="submit" value='create a box' className="btn btn-primary"> &bull; Create your Box! &bull; </button>
        </div>
        <hr/>
    </form>
);

};
export default BoxForm;

