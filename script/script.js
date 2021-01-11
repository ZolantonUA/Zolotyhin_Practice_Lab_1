function butrd(){
  confirm('Are you ready?');
}

function butag(){
  let age = prompt("What is your age?", '');
  if(age >= 18){
    alert("Good Luck!");
  }
  else{
    alert("Are allowed to continue but I take no responsibility");
  }
}

function SqrtNumber(){
  const inputN = document.getElementById("inputNumber").value;
  alert(Math.sqrt(inputN));
}
