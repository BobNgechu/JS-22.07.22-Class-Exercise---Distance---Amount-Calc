function result() {
  const price = [100, 300, 500, 1000, 1200, 1500];
  const persons = parseInt(document.getElementById("personsTravelling").value);
  const distance = parseInt(document.getElementById("distanceCovered").value);
  const displayResults = document.getElementById("amountInput");

  if (persons >= 1) {
    const upto10 = distance >= 1 && distance <= 10;
    const upto50 = distance >= 11 && distance <= 50;
    const upto100 = distance >= 51 && distance <= 100;
    const upto200 = distance >= 101 && distance <= 200;
    const upto300 = distance >= 201 && distance <= 300;
    const upto400 = distance >= 301 && distance <= 400;
    switch (upto10 || upto50 || upto100 || upto200 || upto300 || upto400) {
      case upto10:
        displayResults.value = price[0] * persons;
        break;
      case upto50:
        displayResults.value = price[1] * persons;
        break;
      case upto100:
        displayResults.value = price[2] * persons;
        break;
      case upto200:
        displayResults.value = price[3] * persons;
        break;
      case upto300:
        displayResults.value = price[4] * persons;
        break;
      case upto400:
        displayResults.value = price[5] * persons;
        break;
      default:
        displayResults.value = "we do not go that far!";
    }

    // if (distance >= 1 && distance <= 10) {
    //   displayResults = price[0] * persons;
    // } else if (distance >= 11 && distance <= 50) {
    //   displayResults = price[1] * persons;
    // } else if (distance >= 51 && distance <= 100) {
    //   displayResults = price[2] * persons;
    // } else if (distance >= 101 && distance <= 200) {
    //   displayResults = price[3] * persons;
    // } else if (distance >= 201 && distance <= 300) {
    //   displayResults = price[4] * persons;
    // } else if (distance >= 301 && distance <= 400) {
    //   displayResults = price[5] * persons;
    // } else {
    // }
  } else {
    displayResults = "enter the number of people travelling";
  }
}
