// Random digit create
document.getElementById('generate-btn').addEventListener("click", function(){
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    // const previousNumber = 0;
    // const generatePin = previousNumber + randomNumber;
    document.getElementById('generate-display').value =randomNumber; 
});

// submit btn
// document.getElementById('submit-display-input').addEventListener("click", function(){
//     let submitDisplayInput = document.getElementById('submit-display-input').value;   
// });
function getVerification(){
    const pin = document.getElementById('generate-display').value;
    const typeNumber = document.getElementById('submit-display-input').value;
   const successMessage = document.getElementById('notify-succuss');
   const failMessage = document.getElementById('notify-faild');
    if(pin == typeNumber){
        successMessage.style.display='block';
        failMessage.style.display='none';
        
    }else{
      
        failMessage.style.display='block';
        successMessage.style.display='none';
        actionLeft()
    }
}



var count = 3;
function actionLeft(){
  
    if( count > 0) {
        count -= 1;
        document.getElementById('action-left').innerHTML=count;
    }else if(count == 0){
        let button =document.getElementById('submit-btn');
        button.disabled=true;
        button.style.backgroundColor='red';
        button.style.cursor='not-allowed';
    }

    // console.log(count);
}