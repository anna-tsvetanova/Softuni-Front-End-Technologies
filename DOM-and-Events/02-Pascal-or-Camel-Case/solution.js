function solve() {
  let input = document.getElementById('text').value.toLowerCase();
  let currentCase = document.getElementById('naming-convention').value;
  let resultSpan = document.getElementById('result');

  let splited = input.split(' ');
  let resultString = '';

  if (currentCase == 'Camel Case') {
    resultString += splited[0];
    for (let i = 1; i < splited.length; i++) {
      resultString += splited[i][0].toUpperCase() + splited[i].slice(1, splited[i].length);
      resultSpan.textContent = resultString;
    }

  } else if (currentCase == 'Pascal Case') {
    for (let i = 0; i < splited.length; i++) {
      resultString += splited[i][0].toUpperCase() + splited[i].slice(1, splited[i].length);
      resultSpan.textContent = resultString;
    }
  } else {
    resultSpan.textContent = 'Error!';
  }

}
