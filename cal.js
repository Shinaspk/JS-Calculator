function display(num){
    Result.value+=num
}

function equal(){
    try{Result.value=eval(Result.value) }
    catch{
        Result.value='error'
        setTimeout(()=>{Result.value=''},1000)
    }
}
function clearall(){
    Result.value=""
}
function back(){
    Result.value=Result.value.slice(0,-1)  
}