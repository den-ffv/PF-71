import React from "react";

const Title = ({title}) => {
    return (
        <div>
            <div style={{fontSize: 70, fontWeight: 'bold', lineHeight: 1, marginTop: 100}}>
                <h1>{title}</h1>
            </div>
        </div>
    );
}

export default Title;