document.addEventListener('DOMContentLoaded', function () {
    // Create the container div
    var containerDiv = document.createElement('div');
    containerDiv.className = 'container';

    // Create the calculator div
    var calculatorDiv = document.createElement('div');
    calculatorDiv.className = 'calculator';

    // Create the input element
    var inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.placeholder = '0';
    inputElement.id = 'output-screen';

    // Append the input element to the calculator div
    calculatorDiv.appendChild(inputElement);

    // Array of button labels
    var buttonLabels = ['C', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '.', '0', '='];

    // Function to create and append buttons
    function createButton(label, clickHandler) {
      var button = document.createElement('button');
      button.textContent = label;
      button.onclick = clickHandler;
      calculatorDiv.appendChild(button);
    }

    // Create buttons using the buttonLabels array
    for (var i = 0; i < buttonLabels.length; i++) {
      if (buttonLabels[i] === 'C') {
        createButton('C', Clear);
      } else if (buttonLabels[i] === 'DEL') {
        createButton('DEL', del);
      } else if (buttonLabels[i] === '=') {
        createButton('=', Calculate);
      } else {
        createButton(buttonLabels[i], function () {
          display(this.textContent);
        });
      }
    }

    // Append the calculator div to the container div
    containerDiv.appendChild(calculatorDiv);

    // Append the container div to the body
    document.body.appendChild(containerDiv);
  });

  // Placeholder functions
  function Clear() {
    var outputScreen = document.getElementById("output-screen");
    outputScreen.value = "";
  }

  function del() {
    var outputScreen = document.getElementById("output-screen");
    outputScreen.value = outputScreen.value.slice(0, -1);
  }

  function display(num) {
    var outputScreen = document.getElementById("output-screen");
    outputScreen.value += num;
  }

  function Calculate() {
    var outputScreen = document.getElementById("output-screen");
    try {
      outputScreen.value = eval(outputScreen.value);
    } catch (error) {
      alert("Invalid");
    }
  }