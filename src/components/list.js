import React from 'react'
import { Item } from './item';

export const List=(props)=>{
   // console.log("lIST :::: ", props.item);
    //console.log("Type ",props.item instanceof Array);
    return(
        <div>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                <th>ID</th>
                    <th>Notes</th>
                    <th>Date</th>
                    <th>Remainder</th>
                    <th>Type</th>
                    <th>Operations</th>
                </tr>
                </thead>
                <tbody>
                {props.item.map(itemObject=><Item 
                delete={props.delete} edit={props.edit} key={itemObject.id} itemdisp={itemObject} ></Item>)}
                </tbody>
            </table>
        </div>
    );
}