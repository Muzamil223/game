// Fake Virus Alert
document.getElementById('fakeVirusButton').addEventListener('click', function() {
  alert("Warning: Your computer is infected with a virus!");
});

// Mysterious Button
document.getElementById('mysteriousButton').addEventListener('mouseover', function() {
  var button = document.getElementById('mysteriousButton');
  var x = Math.random() * (window.innerWidth - button.clientWidth);
  var y = Math.random() * (window.innerHeight - button.clientHeight);
  button.style.position = 'absolute';
  button.style.left = x + 'px';
  button.style.top = y + 'px';
});

// Text Confusion
document.getElementById('confusionTextBox').addEventListener('input', function() {
  var input = document.getElementById('confusionTextBox');
  input.value = input.value.split('').reverse().join('');
});