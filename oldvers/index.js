let table = document.createElement('table');

// создаем тело таблицы
let tableBody = document.createElement('tbody');

// создаем ячейки таблицы
for (let i = 0; i < 8; i++) {
  // создаем строку
  let row = document.createElement('tr');
  for (let j = 0; j < 8; j++) {
    // создаем ячейку
    let cell = document.createElement('td');

    // создаем символ черепа
    let skull = document.createTextNode('☠');

 

    // получаем номер кошелька из смарт-контракта
    let walletNumber = i * 8 + j + 1;
    let wallet = "0x..." + walletNumber.toString(16) + "9e8"; // заменяем уникальный текст ссылки на кошелек

    // создаем ссылку на кошелек
    let link;
if (i < 1 && j < 15) {
  // создаем кнопку "BURY"
  link = document.createElement('button');
  link.textContent = "BURY";
  link.addEventListener('click', function() {
    // показываем окно
    showMintWindow();
  });
} else {
  // создаем ссылку на кошелек
  link = document.createElement('a');
  link.href = 'https://etherscan.io/address/' + wallet;
  link.appendChild(document.createTextNode(wallet));
  link.setAttribute('target', '_blank');
}

    // добавляем символ и ссылку в ячейку
    cell.appendChild(skull);
    cell.appendChild(document.createElement('br')); // добавляем перенос строки
    cell.appendChild(link);

    // добавляем ячейку в строку
    row.appendChild(cell);
  }
  // добавляем строку в тело таблицы
  tableBody.appendChild(row);
}

// добавляем тело таблицы в таблицу
table.appendChild(tableBody);

// добавляем таблицу в контейнер
document.getElementById('container').appendChild(table);

// задаем стиль для ячеек таблицы
let cells = document.querySelectorAll('td');
for (let i = 0; i < cells.length; i++) {
  cells[i].style.border = '1px dashed white';
}

// задаем стиль для горизонтальных линий
let rows = document.querySelectorAll('tr');
for (let i = 0; i < rows.length; i++) {
  rows[i].style.borderBottom = '1px dashed white';
}

// задаем стиль для вертикальных линий
for (let i = 0; i < 8; i++) {
  cells[i].style.borderLeft = '1px dashed white';
}




// добавляем стили через тег style
let style = document.createElement('style');
style.innerHTML = `
td {
  font-size: 28px;
  
}

td > a {
  font-size: 10px;
}

td:hover {
  background-color: green;
}
`;
document.head.appendChild(style);

// добавляем функцию для вывода номера кошелька из смарт-контракта
function getWalletNumber(position) {
  return "0x..." + position.toString(16) + "9e8";
}







let link = document.createElement('a');
link.href = '#';
link.textContent = 'BURY';
link.addEventListener('click', function(e) {
  e.preventDefault();
  // показываем окно
  showMintWindow();
});




function showMintWindow() {
  window.open('mint.html', 'Mint', 'width=400, height=300');
}

function showMintWindow() {
  // create a new div element
  let mintDiv = document.createElement('div');
  mintDiv.style.position = 'absolute';
  mintDiv.style.top = '0';
  mintDiv.style.left = '0';
  mintDiv.style.width = '100%';
  mintDiv.style.height = '100%';
  mintDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // semi-transparent black color
  mintDiv.style.zIndex = '100'; // set z-index to be above the canvas

  // load the content of mint.html into the div
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'mint.html', true);
  xhr.onload = function() {
    if (this.status == 200) {
      mintDiv.innerHTML = this.responseText;
    }
  };
  xhr.send();

  // append the div to the document body
  document.body.appendChild(mintDiv);
}


let mintBtn = document.getElementById('mintNFTButton');

mintBtn.addEventListener('click', function() {
  // отправляем запрос на сервер
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/mint.html', true);
  xhr.onload = function() {
    if (this.status == 200) {
      // выводим сообщение об успешной майнтинге
      alert('NFT успешно создан!');
    } else {
      // выводим сообщение об ошибке
      alert('Произошла ошибка: ' + this.statusText);
    }
  };
  xhr.send();
});



