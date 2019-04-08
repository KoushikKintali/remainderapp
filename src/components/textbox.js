import React from 'react'

export const TextBox =(props)=>{
    return(
        <div>
            <div className="form-group">
            <label>Notes :</label>
                <textarea maxLength={500} value={props.value} onChange={(e)=>{props.item(e,'notes')}}
                 className="form-control" rows="5"></textarea>
                {/* <label>Remaining Characters : {props.count}</label> */}
            </div>
        </div>
        
    );
}