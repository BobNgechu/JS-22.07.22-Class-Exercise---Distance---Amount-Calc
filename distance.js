function result() {
  const price = [100, 300, 500, 1000, 1200, 1500];
  const persons = parseInt(document.getElementById("personsTravelling").value);
  const distance = parseInt(document.getElementById("distanceCovered").value);

  if (persons >= 1) {
    if (distance >= 1 && distance <= 10) {
      document.getElementById("amountInput").value = price[0] * persons;
    } else if (distance >= 11 && distance <= 50) {
      document.getElementById("amountInput").value = price[1] * persons;
    } else if (distance >= 51 && distance <= 100) {
      document.getElementById("amountInput").value = price[2] * persons;
    } else if (distance >= 101 && distance <= 200) {
      document.getElementById("amountInput").value = price[3] * persons;
    } else if (distance >= 201 && distance <= 300) {
      document.getElementById("amountInput").value = price[4] * persons;
    } else if (distance >= 301 && distance <= 400) {
      document.getElementById("amountInput").value = price[5] * persons;
    } else {
      alert("we do not go that far!");
    }
  } else {
    alert("enter the number of people travelling");
  }
}

// function addNumbers() {
//     //   console.log(num1);
//     var num1 = parseInt(document.getElementById("num1").value);
//     var num2 = parseInt(document.getElementById("num2").value);
//     if (num1.toString()) {
//       alert(num1);
//     } else {
//       alert("false value");
//     }

//     document.getElementById("answer").value = num1 + num2;
//   }
