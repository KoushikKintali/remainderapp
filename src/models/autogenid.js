export function* AutoGenid(){
    var counter = 1;
    while(true){
        yield counter;
        counter++
    }
}