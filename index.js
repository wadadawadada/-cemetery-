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




function showMintWindow() {
  // создаем элементы формы
  let form = document.createElement('div');
  form.innerHTML = `
 
<html>
<head>
    
  <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.4-rc.1/web3.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/web3@1.5.2/dist/web3.min.js"></script>
  <script src="/mumbai.js" defer></script>
</head>


<body>
  

 <div id="mint">
       <div>
        <label for="occupant">Occupant:</label>
        <input type="text" id="occupant" name="occupant" required>&nbsp;&nbsp;<br>
   
        <label for="epitaph">Epitaph:</label>
        <input type="text" id="epitaph" name="epitaph" required>&nbsp;&nbsp;<br>
        
        <label for="metadata">Metadata:</label>
        <input type="text" id="metadata" name="metadata" required>&nbsp;&nbsp;<br>
        <button id="mintNFTButton">Mint NFT</button>
        <p id="status"></p>
      </div>
      
      
      </div>

</body>
</html>

  `;
  form.id = 'mint';

  // создаем фоновый элемент для затемнения фона
  let overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  overlay.style.zIndex = '9999';
  overlay.appendChild(form);
  // добавляем обработчик нажатия на кнопку "Mint NFT"
  let mintNFTButton = form.querySelector('#mintNFTButton');
  mintNFTButton.addEventListener('click', function() {
    // добавляем код для создания NFT
  });

  // добавляем элементы на страницу
  document.body.appendChild(overlay);
}


