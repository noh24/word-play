function userInput(e) {
  e.preventDefault();
  const userInput = document.getElementById("user-sentence").value;
  const userInputArray = userInput.split(" ");

  const newArray = userInputArray.filter(function(word) {
    return word.length >= 3;
  });
  
  const reverseArray = newArray.reverse();
  const joinArray = reverseArray.join(" ");

  const p = document.createElement("p");
  p.append(joinArray);
  document.body.append(p);
}


document.querySelector("form").addEventListener("submit", userInput);