////////////////
// jahhweh index.js inna version
////////////////

const contractAddress = "0xce896C526d0baFD33b15457992aC0a7Ef14c258a";
const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "occupant",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dateBorn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "epitaph",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "metadata",
        type: "string",
      },
    ],
    name: "Buried",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "occupant",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "dateBorn",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "epitaph",
        type: "string",
      },
      {
        internalType: "string",
        name: "metadata",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newURI",
        type: "string",
      },
    ],
    name: "setURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINT_COST",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenDetails",
    outputs: [
      {
        internalType: "string",
        name: "occupant",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "dateBorn",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "epitaph",
        type: "string",
      },
      {
        internalType: "string",
        name: "metadata",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

//////////

const table = document.createElement("table");
const tableBody = document.createElement("tbody");
table.appendChild(tableBody);
document.getElementById("container-jahhweh").appendChild(table);

const buttonsContainer = document.createElement("div");
const nextButton = document.createElement("button");
const prevButton = document.createElement("button");
const cemeteryNumber = document.createElement("span");
const goButton = document.createElement("button");
const cemeteryNumberInput = document.createElement("input");

nextButton.textContent = "NEXT";
prevButton.textContent = "PREV";
goButton.textContent = "GO";
cemeteryNumberInput.type = "number";
cemeteryNumberInput.min = 1;

buttonsContainer.appendChild(prevButton);
buttonsContainer.appendChild(cemeteryNumber);
buttonsContainer.appendChild(nextButton);
buttonsContainer.appendChild(cemeteryNumberInput);
buttonsContainer.appendChild(goButton);

document.getElementById("gravenav").appendChild(buttonsContainer);

const style = document.createElement("style");
style.innerHTML = `
    td, tr {
      border: 1px dashed white;
    }
    td {
      font-size: 28px;
      padding: 4px;
    }
    td > button {
      font-size: 10px;
    }
    .close-details-modal-button {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    .grave:hover {
      background-color: rgb(119, 2, 2);
    }
    .bury:hover {
      background-color: rgb(2, 10, 119);
    }
`;
document.head.appendChild(style);

setStatus("Waiting for a connection");

let startGraveNumber = 1;

async function loadWeb3() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });
  } else {
    alert("Please install MetaMask to use this site.");
  }
}

async function loadBlockchainData() {
  const web3 = window.web3;
  const accounts = await web3.eth.getAccounts();
  window.account = accounts[0];
  window.contract = new web3.eth.Contract(abi, contractAddress);
  document.getElementById(
    "address"
  ).textContent = `Connected Address: ${window.account}`;
  setStatus("Welcome to the cemetery");
  updateGraveNumbers();
}

async function getTotalSupply() {
  const totalSupply = await window.contract.methods.totalSupply().call();
  return totalSupply - 1;
}

function showModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  setStatus("Preparing to bury");
}

function hideModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function showDetailsModal() {
  const tokenDetailsModal = document.getElementById("tokenDetailsModal");
  tokenDetailsModal.style.display = "block";
}

function hideDetailsModal() {
  const tokenDetailsModal = document.getElementById("tokenDetailsModal");
  tokenDetailsModal.style.display = "none";
}

async function getNFTDetails(graveNumber) {
  console.log("graveNumber: ", graveNumber);

  try {
    const nftDetails = await window.contract.methods
      .tokenDetails(graveNumber)
      .call();

    const tokenDetailsElement = document.getElementById("tokenDetailsModal");
    tokenDetailsElement.innerHTML = "";
    const closeDetailsModalButton = document.createElement("div");
    closeDetailsModalButton.classList.add("close-details-modal-button");
    closeDetailsModalButton.innerText = "X";
    closeDetailsModalButton.addEventListener("click", closeDetailsModal);
    tokenDetailsElement.appendChild(closeDetailsModalButton);

    const occupant = document.createElement("div");
    occupant.innerText = `Occupant: ${nftDetails.occupant}`;
    tokenDetailsElement.appendChild(occupant);

	const dateBorn = document.createElement("div");

	// Extract year, month and day from the original date format
	const year = nftDetails.dateBorn.substring(0, 4);
	const month = nftDetails.dateBorn.substring(4, 6);
	const day = nftDetails.dateBorn.substring(6, 8);
	
	// Combine year, month, and day in the desired format
	const formattedDate = `${year}-${month}-${day}`;
	
	dateBorn.innerText = `Date Born: ${formattedDate}`;
	tokenDetailsElement.appendChild(dateBorn);

    const epitaph = document.createElement("div");
    epitaph.innerText = `Epitaph: ${nftDetails.epitaph}`;
    tokenDetailsElement.appendChild(epitaph);

    const metadata = document.createElement("div");
    metadata.innerText = `Metadata: ${nftDetails.metadata}`;
    tokenDetailsElement.appendChild(metadata);

    showDetailsModal();
    setStatus("Looking at graves");
  } catch (error) {
    console.error(error);
  }
}

async function mintNFT(occupant, birth, epitaph, metadata) {
  console.log("occupant: ", occupant);
  console.log("birth: ", birth);
  console.log("epitaph: ", epitaph);
  console.log("metadata: ", metadata);

  try {
    const MINT_COST = window.web3.utils.toWei("0.01", "ether");
    await window.contract.methods
      .mint(occupant, birth, epitaph, metadata)
      .send({ from: window.account, value: MINT_COST });
    setStatus("Successfully buried coffin");
    updateGraveNumbers();
  } catch (error) {
    console.error(error);
    setStatus("Something went terribly wrong");
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
  setStatus("Welcome to the cemetery");
}

function closeDetailsModal() {
  const tokenDetailsModal = document.getElementById("tokenDetailsModal");
  tokenDetailsModal.style.display = "none";
  setStatus("Welcome to the cemetery");
}

document.getElementById("submitModal").addEventListener("click", async () => {
  const occupant = document.getElementById("modalOccupant").value;
  const birth = document.getElementById("modalBirth").value;
  const epitaph = document.getElementById("modalEpitaph").value;
  const metadata = document.getElementById("modalMetadata").value;
  const nBirth = birth.replaceAll("-", "");

  if (occupant && nBirth && epitaph && metadata) {
    setStatus("Lowering coffin...");
    await mintNFT(occupant, nBirth, epitaph, metadata);
    hideModal();
  } else {
    setStatus("Please enter the occupant, epitaph, and metadata.");
  }
});

document.getElementById("closeModal").addEventListener("click", closeModal);
document
  .getElementById("closeDetailsModal")
  .addEventListener("click", closeDetailsModal);

window.addEventListener("click", (event) => {
  if (event.target == document.getElementById("modal-body")) {
    closeModal();
  }
});

async function updateGraveNumbers() {
	clearTableBody();
	const totalSupply = await getTotalSupply();
	let graveCounter = startGraveNumber;
	for (let i = 0; i < 8; i++) {
	  const row = document.createElement("tr");
	  for (let j = 0; j < 8; j++) {
		const cell = document.createElement("td");
		const skull = document.createTextNode("☠");
		const link = document.createElement("button");
		if (graveCounter <= totalSupply) {
		  const graveNumber = document.createTextNode(graveCounter);
		  cell.appendChild(graveNumber);
		  cell.appendChild(document.createElement("br"));
		  graveCounter++;
		}
		cell.appendChild(skull);
		cell.appendChild(document.createElement("br"));
		row.appendChild(cell);
  
		if (cell.textContent.length > 1) {
		  link.textContent = "GRAVE";
		  const graveNumber = cell.textContent.replace("☠", "");
		  console.log("updateGrave graveNumber: ", graveNumber);
		  link.addEventListener("click", () => getNFTDetails(graveNumber));
  
		  // Mouse over and mouse out event listeners for GRAVE cells
		  cell.addEventListener("mouseover", () => cell.classList.add("grave"));
		  cell.addEventListener("mouseout", () => cell.classList.remove("grave"));
		} else {
		  link.textContent = "BURY";
		  link.addEventListener("click", handleButtonClick);
  
		  // Mouse over and mouse out event listeners for BURY cells
		  cell.addEventListener("mouseover", () => cell.classList.add("bury"));
		  cell.addEventListener("mouseout", () => cell.classList.remove("bury"));
		}
		cell.appendChild(link);
	  }
	  tableBody.appendChild(row);
	}
	updateTableNumber();
  }

function clearTableBody() {
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
}

function updateTableNumber() {
  const tableIndex = Math.ceil(startGraveNumber / 64);
  cemeteryNumber.textContent = ` Cemetery ${tableIndex} `;
}

nextButton.addEventListener("click", async () => {
  startGraveNumber += 64;
  await updateGraveNumbers();
});

prevButton.addEventListener("click", async () => {
  startGraveNumber = Math.max(1, startGraveNumber - 64);
  await updateGraveNumbers();
});

goButton.addEventListener("click", async () => {
  const requestedTableNumber = parseInt(cemeteryNumberInput.value);
  if (requestedTableNumber > 0) {
    startGraveNumber = (requestedTableNumber - 1) * 64 + 1;
    await updateGraveNumbers();
  } else {
    requestedTableNumber = 0;
  }
});
