let billAmount = document.getElementById("billAmount");
let tip = document.getElementById("tip");
let peopleNo = document.getElementById("peopleNo");
let myBtn = document.getElementById("myBtn");
let myResult = document.getElementById("myResult");

myBtn.addEventListener("click", function () {
  let bill = Number(billAmount.value);
  let myTip = Number(tip.value);
  let people = Number(peopleNo.value);
  //   let result = Number(myResult.value);
  if (isNaN(bill) || isNaN(myTip) || isNaN(people)) {
    alert("only numbers please");
    return
  }
  if (people <= 0) {
  alert("Number of people must be at least 1");
  return;
}


  let total = (bill + bill * (myTip * 0.01)) / people;

  myResult.innerText = `your total is $${total.toFixed(2)}`;
  
});
