////////////////
// jahhweh index.js inna version
////////////////

const contractAddress = "0x0a1c9d130f3852ef0e03265027661B47cb878268";
const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "occupant",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "epitaph",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "metadata",
				"type": "string"
			}
		],
		"name": "Buried",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "occupant",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "epitaph",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "metadata",
				"type": "string"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeBatchTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newURI",
				"type": "string"
			}
		],
		"name": "setURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "values",
				"type": "uint256[]"
			}
		],
		"name": "TransferBatch",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "TransferSingle",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "value",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "URI",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "accounts",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			}
		],
		"name": "balanceOfBatch",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MINT_COST",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "occupant",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "epitaph",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "metadata",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "uri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const table = document.createElement("table");
const tableBody = document.createElement("tbody");
table.appendChild(tableBody);
document.getElementById("container").appendChild(table);

function getWalletNumber(position) {
  return "0x..." + position.toString(16) + "9e8";
}

async function loadWeb3() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  } else {
    alert("Please install MetaMask to use this site.");
  }
}

async function loadBlockchainData() {
  const web3 = window.web3;
  const accounts = await web3.eth.getAccounts();
  window.account = accounts[0];
  window.contract = new web3.eth.Contract(abi, contractAddress);

  document.getElementById("address").textContent = `Connected Address: ${window.account}`;
}

function showModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}

function hideModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

async function mintNFT(occupant, epitaph, metadata) {
  try {
    const MINT_COST = window.web3.utils.toWei("0.01", "ether");
    await window.contract.methods.mint(occupant, epitaph, metadata)
      .send({ from: window.account, value: MINT_COST });

    setStatus("Successfully minted NFT!");
  } catch (error) {
    console.error(error);
    setStatus("Error minting NFT.");
  }
}

function setStatus(message) {
  const status = document.getElementById("status");
  status.innerHTML = message;
}

async function initApp() {
  await loadWeb3();
  await loadBlockchainData();
}

initApp();

async function handleButtonClick(event) {
  showModal();
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

document.getElementById("submitModal").addEventListener("click", async () => {
  const occupant = document.getElementById("modalOccupant").value;
  const epitaph = document.getElementById("modalEpitaph").value;
  const metadata = document.getElementById("modalMetadata").value;

  if (occupant && epitaph && metadata) {
    setStatus("Minting NFT...");
    await mintNFT(window.account, occupant, epitaph, metadata);
    hideModal();
  } else {
    setStatus("Please enter the occupant, epitaph, and metadata.");
  }
});

document.getElementById("closeModal").addEventListener("click", closeModal);

window.addEventListener('click', (event) => {
  if (event.target == document.getElementById('modal-body')) {
    closeModal();
  }
});

// Create and append table
function createAndAppendTable() {
  for (let i = 0; i < 8; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 8; j++) {
      const cell = document.createElement("td");
      const skull = document.createTextNode("☠");
      const walletNumber = i * 8 + j + 1;
      const wallet = getWalletNumber(walletNumber);

      let link;
      if (i < 1 && j < 15) {
        link = document.createElement("button");
        link.textContent = "BURY";
        link.addEventListener("click", handleButtonClick);
      } else {
        link = document.createElement("a");
        link.href = "https://etherscan.io/address/" + wallet;
        link.appendChild(document.createTextNode(wallet));
        link.setAttribute("target", "_blank");
      }

      cell.appendChild(skull);
      cell.appendChild(document.createElement("br"));
      cell.appendChild(link);
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }
}

createAndAppendTable();

const cells = document.querySelectorAll("td");
cells.forEach((cell) => {
  cell.style.border = "1px dashed white";
});

const rows = document.querySelectorAll("tr");
rows.forEach((row) => {
  row.style.borderBottom = "1px dashed white";
});

for (let i = 0; i < 8; i++) {
  cells[i].style.borderLeft = "1px dashed white";
}

const style = document.createElement("style");
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