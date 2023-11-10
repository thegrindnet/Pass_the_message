const messageInputer = document.getElementById("message-input"); 

messageInputer.addEventListener("keydown", function(event){
  if(event.key =="Enter")
    getMessage();
})

function getMessage(){
  document.getElementById("message-output").innerHTML = messageInputer.value;
  messageInputer.value = "";
}