const pixelBoard = document.getElementById('pixel-board')
function colorChart(n) {
  for (let i = 1; i <= n; i++) {
    const lines = document.createElement('div');
    lines.className = 'lines';
    pixelBoard.appendChild(lines);
    for (let j = 1; j <= n; j++) {
      const coluns = document.createElement('div');
      coluns.classList.add('pixel');
      lines.appendChild(coluns);
    }

  }
}

colorChart(5)

function selectedColor() {
  const cores = document.getElementById('color-palette').children;

  for (let i = 0; i < cores.length; i += 1) {
    cores[i].addEventListener('click', function (event) {
      const selecionadaAtual = document.querySelector('.selected');
      selecionadaAtual.classList.remove('selected');
      event.target.classList.add('selected');
    })
  }
}

selectedColor();

function changeColor() {
  const takePixels = document.querySelectorAll('.pixel');

  for (let i = 0; i < takePixels.length; i += 1) {
    takePixels[i].addEventListener('click', function (event) {
      const selectedColorCurrent = document.querySelector('.selected');
      const cor = getComputedStyle(selectedColorCurrent).backgroundColor;

      event.target.style.backgroundColor = cor;
    });
  }
}

changeColor();

const takeButton = document.getElementById('clear-board');
function clear() {
  const takePixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < takePixel.length; i += 1) {
    takePixel[i].style.backgroundColor = 'white';
    colorChart();
    changeColor();
  }
}

takeButton.addEventListener('click', clear);

