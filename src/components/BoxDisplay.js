import React from 'react';

const hideBox = (e) => {
    e.target.style = "display: none";
}

const BoxDisplay = ({boxes}) => {
    return (
        <>
        <br/>
        <div>
        { boxes.map((val, i) =>
            <div className="blocks" onClick={hideBox} key={i} style={val.style}></div>
        )}
        </div>
        </>
    )
}

export default BoxDisplay;