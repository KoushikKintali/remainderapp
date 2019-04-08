export class item{
    constructor(id,notes,date,remainder,type){
        this.id=id;
        this.notes=notes;
        this.date=date;
        this.remainder = remainder;
        this.type=type;
        this.isMarked=false;
    }
    toggle(){
        this.isMarked=!this.isMarked;
    }
}