import React from 'react'
import { itemoperations } from '../models/ItemOperations';

// import {FontAwesomeIcon} from '../../node_modules/react-fontawesome'

export const Item=(props)=>{
    // let styletbl=()=>{
    //     backgroundColor='red' ;
    //     //props.itemdisp.isMarked ?backgroundColor='red':backgroundColor='white'
    // }

    // let styletbl=()=>{
    //    console.log("Style tbl called");
    //    var x = props.itemdisp.isMarked
    //    console.log("asd",x)
    //     if(x){ 
    //         console.log("Alert Warning")
    //         return 'red';
    //     }
    //     console.log("Style tbl ended");
    // }
    let fn = ()=>{
        // backgroundColor:(props.itemdisp.isMarked)?'red':'white';
       // backgroundColor:'red';
       var x = props.itemdisp.isMarked;
    //    console.log("fn called",x);
       if(props.itemdisp.type==='Important'){
        //    console.log("Light Blue Called")
           let backgroundColor=x?'#FEEFB3':'lightblue';
            return backgroundColor;
       }
       else if(props.itemdisp.type==='Very Important'){
            //let backgroundColor='Orange';
            // console.log("Orange Called")
            let backgroundColor=x?'#FEEFB3':'Orange';
            return backgroundColor;
        }
        else if(props.itemdisp.type==='Light'){
            //let backgroundColor='lightgreen';
            let backgroundColor=x?'#FEEFB3':'lightgreen';
            return backgroundColor;
        }
        // if(x){ 
        //     console.log("Alert Warning")
        //     return 'red';
        // }
    }

    return(
        <tr  style={{backgroundColor:fn()}}>
            <td>{props.itemdisp.id}</td>
            <td>{props.itemdisp.notes}</td>
            <td>{props.itemdisp.date}</td>
            <td> {props.itemdisp.remainder}</td>
            <td>{props.itemdisp.type}</td>
            <td><i onClick={(e)=>{props.edit(props.itemdisp.id)}}
                 className="fa fa-edit mr-2"></i>  <i onClick={()=>{
                    itemoperations.mark(props.itemdisp.id);
                    {props.delete()}
                //  console.log("Delete button called",props.itemdisp.id)
            }} className="fa fa-trash"></i></td>
        </tr>
    );
}