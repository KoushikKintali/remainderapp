import React from 'react'

export const Buttons=(props)=>{
    return(
        <div>
            <button onClick={props.add} className="btn btn-success mr-2">Add</button>       
            <button onClick={props.delete} className="btn btn-warning mr-2">Delete</button>
            <button className="btn btn-primary mr-2">Search</button>
            <button onClick={props.update}  className="btn btn-secondary mr-2">Update</button>
            <button onClick={props.save} className="btn btn-info mr-2">Save</button>
            <button className="btn btn-danger mr-2">SavetoServer</button>
            <button onClick={props.sort} value="Important" className="btn btn-success mr-2">ByImportant</button>
            <button onClick={props.sort} value="Light" className="btn btn-warning">ByLight</button>
            
        </div>
    );
}