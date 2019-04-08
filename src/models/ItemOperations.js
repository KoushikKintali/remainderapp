import { item } from "./Item";


export const itemoperations={
    itemArray:[],
    add(itemObj){
        let itemobj = new item(itemObj.id,itemObj.notes,itemObj.date,itemObj.remainder,itemObj.type) 
        //let item = new item(itemObj.id, itemObj.notes, itemObj.date, itemObj.remainder, itemObj.type);
        this.itemArray.push(itemobj);
        //console.log("Add Ended ",this.itemArray instanceof Array)
    },
    getitemarr() {
        //console.log("get Item array ", this.itemArray instanceof Array)
        return this.itemArray;
    },
    mark(id){
        var objectFound=this.itemArray.find(questionObject=>questionObject.id==id);
        //console.log("Id is",id)
        objectFound.toggle();
    },
    delete(){
       // console.log("Delete Inside called");
            this.itemArray=this.itemArray.filter(itemObject=>itemObject.isMarked==false);
        //console.log("Delete Inside called ended ",this.itemArray);
    },
    sort(type){
        //console.log("Item Operations Sort Called",this.itemArray instanceof Array)
        if(type=='Important'){
            return this.itemArray = this.itemArray.sort((first,second)=>first["type"].localeCompare(second["type"]));
        }
        else{
            return this.itemArray = this.itemArray.sort((first,second)=>second["type"].localeCompare(first["type"]));
        }
        
    }
}