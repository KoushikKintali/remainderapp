import React from 'react'

export const ID=(props)=>{
    return(
       
        <div className="form-group">
            <label>ID:</label>
            <input readOnly={true} value={props.value} type="text" className="form-control"></input>
        </div>
    );
}