function displaydata(data){
    result.value=result.value+data
}
function allclear(){
    result.value=""
}
function output(){ 
    result.value=eval(result.value) //eval is an inbult for evaluating exprerssion and give answer  
}
function backspace(){
    data=result.value
    result.value=data.slice(0,-1) // refer introduction slicing part
}
