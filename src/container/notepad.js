import React,{Component} from 'react'
import { TextBox } from '../components/textbox';
import { Buttons } from '../components/buttons';
import { ID } from '../components/id';
import {Date} from '../components/date'
import { List } from '../components/list';
import {AutoGenid} from '../models/autogenid'
import { itemoperations } from '../models/ItemOperations';
import moment from 'moment';


export class NotePad extends Component{
    constructor(){
        super();
        this.itemArr=[];
        this.noteObj={};
        this.tempnoteObj={};
        this.count=0;
        this.state={items:this.itemArr,note:this.noteObj,tempnote:this.tempnoteObj,isMarked:false};
    }

    componentDidMount(){
       // alert("Component Did Mount");
 
    //      var todaysdate = new Date();
 
    //     var dd = todaysdate.getDate();
    //     var mm = todaysdate.getMonth()+1;
    //     var yyyy = todaysdate.getFullYear();
 
    //     if (dd < 10) {
    //      dd = '0' + dd;
    //    }
       
    //    if (mm < 10) {
    //      mm = '0' + mm;
    //    }
 
    //     var date = yyyy+"-"+mm+"-"+dd;//2019-02-13

        var date1=(moment().format().split('T'))[0]
        if(localStorage.questions){
            //alert("Hi")
           //  var date = new Date();
            var notes = JSON.parse(localStorage.questions);
            var arr = notes.filter(itemObject=>itemObject.remainder==date1);
 
            if(arr.length>0){
                alert("A Gentle Remainder on "+arr[0].notes);

            }
        }
     }

    markasdelete(){
        this.setState({...this.state,isMarked:true});
    }
    sort(event){

        itemoperations.sort(event.target.value);
        this.setState({...this.state,items:itemoperations.items});

    }
    editdata(id){
        var noteArr = itemoperations.getitemarr();
        var noteObject = noteArr.find(item => item.id == id);
        // this.noteObj=noteObject;
        this.tempnoteObj=noteObject;
        console.log("After noteObject",this.noteObj)
        this.setState({...this.state,tempnote:this.tempnoteObj,note:noteObject});
       console.log("Edit Data Called",this.state.note);
    }
    deleteselectedrecords(){
        itemoperations.delete();
        this.setState({...this.state,items:itemoperations.getitemarr()})
    }
    updatedata(){
        //console.log("Update Data called",this.noteObj);
        var noteArr = itemoperations.getitemarr();
        var noteobct = noteArr.find(item=>item.id==this.noteObj.id);
        var a = noteArr.indexOf(noteobct);
        console.log("Index is ",a);
        
        
    }

    takeinputs(event,key){
        if(event.target.options){
            this.noteObj.type=event.target.options[event.target.selectedIndex].text
        }
        else{
            this.noteObj[key]=event.target.value;
          //  console.log("take inputs key ",this.noteObj[key]);
        }
        this.setState({...this.state,note:this.noteObj})
        //console.log("Take inputs Called",this.state.note)
    }
    addinputs(){
      itemoperations.add(this.noteObj);    
     var itemArray = itemoperations.getitemarr();
    
     console.log("Add Inputs Field Start",this.noteObj,this.state.note)
     this.setState({...this.state,items:itemArray,note:this.noteObj});
     this.clearallfields();
     console.log("Add Inputs Field End",this.noteObj,this.state.note)
    }

    clearallfields(){
        console.log("Clear All Field Start",this.noteObj,this.state.note)
            this.noteObj.id = this.counter.next().value;
            this.noteObj.date ='';
            this.noteObj.notes = '';
            this.noteObj.remainder = '';
            this.noteObj.type = '';    
            console.log("Claer All Field End",this.noteObj,this.state.note)    
    }

    componentWillMount() {
        this.counter = AutoGenid();
        this.noteObj["id"] = this.counter.next().value;
    }
    savedata(event){
        if(localStorage){

            let data_1=itemoperations.items;

            localStorage.setItem("questions", JSON.stringify(data_1));
           //let data = JSON.stringify(data_1);

           //localStorage.questions=data;
            alert("Record Saved");
        }
    }
    render(){
        return(
            
            <div className='container'>
                <h1 className="alert-info text-center">NotePad</h1>
                <ID value={this.state.note.id}></ID>
                <TextBox item={this.takeinputs.bind(this)} value={this.state.note.notes} count={this.state.counts}></TextBox>
                <Date date={this.takeinputs.bind(this)}
                 datevalue={this.state.note.date} 
                remaindervalue={this.state.note.remainder}
                typevalue={this.state.note.type}
                remainder={this.takeinputs.bind(this)} 
                type={this.takeinputs.bind(this)}></Date>
                <Buttons update={this.updatedata.bind(this)} sort={this.sort.bind(this)} delete={this.deleteselectedrecords.bind(this)} id={this.state.id}
                
                 save={this.savedata.bind(this)} add={this.addinputs.bind(this)}></Buttons>
                <br></br>
                <List
                edit={this.editdata.bind(this)}
                 delete={this.markasdelete.bind(this)} item={this.state.items}></List>
                 
            </div>
            
        );
    }
}