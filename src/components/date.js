import React from 'react'

export const Date=(props)=>{
    return(
        <>
        <div className="form-group">
            <label>Date :</label>
            <input onChange={(e)=>{
                props.date(e,'date')
            }} value={props.datevalue} type="date" className="form-control"></input>
        </div>
        <div className="form-group">
            <label>Remainder :</label>
            <input onChange={(e)=>{
            props.remainder(e,'remainder')
            }} value={props.remaindervalue} type="date" className="form-control"></input>
        </div>
        <div className="form-group">
            <label>Type :</label>
            <select value={props.typevalue} onChange={(e)=>{
                props.type(e,'type')
            }} className="form-control">
            
                {/* <option value="Blue">Important</option>
                <option value="Orange">Very Important</option>
                <option value="Green">Light</option> */}
                <option value='--Select--'>--Select--</option>
                <option value="Important">Important</option>
                <option value="Very Important">Very Important</option>
                <option value="Light">Light</option>

            </select>
        </div>
        </>
    );
}