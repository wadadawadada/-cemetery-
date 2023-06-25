///////////////////////
// crypt0-cemetery  //
/////////////////////

const contractAddress = "0xebc8f42c8e400109ba0f4d4baa609b662b5f42f6";
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
				"name": "coffinId",
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
				"internalType": "uint256",
				"name": "dateBorn",
				"type": "uint256"
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
				"name": "mediaUrl",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "dateBuried",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "resurrectTime",
				"type": "uint256"
			}
		],
		"name": "Buried",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "coffinId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newResurrectTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "newBeneficiary",
				"type": "address"
			}
		],
		"name": "Buried_Again",
		"type": "event"
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "coffinId",
				"type": "uint256"
			}
		],
		"name": "Resurrected",
		"type": "event"
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "occupant",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "dateBorn",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "mediaUrl",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "metadata",
				"type": "string"
			}
		],
		"name": "Unlocked",
		"type": "event"
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
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "burn",
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
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "values",
				"type": "uint256[]"
			}
		],
		"name": "burnBatch",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "c0ffinCost",
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
				"internalType": "uint256",
				"name": "coffinId",
				"type": "uint256"
			}
		],
		"name": "checkForResurrectionAndTransfer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "exists",
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
				"name": "coffinId",
				"type": "uint256"
			}
		],
		"name": "exposeMetadata",
		"outputs": [
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
		"inputs": [
			{
				"internalType": "string",
				"name": "occupant",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "dateBorn",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "epitaph",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "mediaUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "metadata",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "resurrectTime",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
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
				"name": "newuri",
				"type": "string"
			}
		],
		"name": "setURI",
		"outputs": [],
		"stateMutability": "nonpayable",
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
				"name": "coffinId",
				"type": "uint256"
			}
		],
		"name": "tokenDetails",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "occupant",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "dateBorn",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "epitaph",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "mediaUrl",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isOpen",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "minter",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "dateBuried",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "resurrectTime",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "currentOwner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "buriedCounter",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
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
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "totalSupply",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "coffinId",
				"type": "uint256"
			}
		],
		"name": "unlockMetadata",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "coffinId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "newResurrectTime",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "newBeneficiary",
				"type": "address"
			}
		],
		"name": "updateCoffin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenid",
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
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

//////////

const CONTAINER_ID = "cemeteryContainer";
const GRAVENAV_ID = "gravenav";
const STATUS_ID = "status";
const CONNECT_BUTTON_ID = "connectBtn";
const ADDRESS_ID = "address";
const MODAL_ID = "modal";
const SUBMIT_MODAL_ID = "submitModal";
const CLOSE_MODAL_ID = "closeModal";
const TOKEN_DETAILS_MODAL_ID = "tokenDetailsModal";
const CLOSE_DETAILS_MODAL_ID = "closeDetailsModal";
const MODAL_GRAVENUMBER_ID = "modalGraveNumber";
const MODAL_OCCUPANT_ID = "modalOccupant";
const MODAL_BIRTH_ID = "modalBirth";
const MODAL_EPITAPH_ID = "modalEpitaph";
const MODAL_MEDIA_URL_ID = 'media_input';
const MODAL_METADATA_ID = 'metadata_input';
const MODAL_RESURRECTTIME_ID = "modalResurrectTime";
const MODAL_BENEFICIARY_ID = "modalBeneficiary";
const NEW_RESURRECTTIME_ID = "modalNewResurrectTime";
const NEW_BENEFICIARY_ID = "modalNewBeneficiary";
const RESURRECT_BUTTON_ID = "resurrectButton";
const BURY_AGAIN_BUTTON_ID = "buryAgainButton";
const UNLOCK_METADATA_BUTTON_ID = "unlockMetadataButton";
const EXPOSE_METADATA_BUTTON_ID = "exposeMetadataButton";

const statusBar = document.createElement("span");
statusBar.setAttribute("id", "statsign");
const statusTextNode = document.createTextNode("Status: ");
statusBar.appendChild(statusTextNode);
const innerSpan = document.createElement("span");
innerSpan.setAttribute("id", "status");
statusBar.appendChild(innerSpan);
statusBar.classList.add("statusBar")

const SKEL_GIF_ID = "skelGif";
const skelGif = document.createElement("img");
skelGif.src = "/img/connect.gif";
skelGif.id = SKEL_GIF_ID;
skelGif.style.position = "fixed";
skelGif.style.top = "50%";
skelGif.style.left = "50%";
skelGif.style.transform = "translate(-50%, -50%)";
skelGif.style.zIndex = 9999;
document.body.appendChild(skelGif);

const buttonsContainer = document.createElement("div");
const nextButton = document.createElement("button");
const prevButton = document.createElement("button");
const cemeteryNumber = document.createElement("span");
const goButton = document.createElement("button");
const cemeteryNumberInput = document.createElement("input");
const connectBtn = document.createElement("button");

buttonsContainer.classList.add("buttonsContainer")
nextButton.classList.add("nextButton")
prevButton.classList.add("prevButton")
cemeteryNumber.classList.add("cemeteryNumber")
goButton.classList.add("goButton")
cemeteryNumberInput.classList.add("cemeteryNumberInput")
connectBtn.classList.add("connectBtn")
nextButton.textContent = "NEXT";
prevButton.textContent = "PREV";
goButton.textContent = "GO";
cemeteryNumberInput.type = "number";
cemeteryNumberInput.min = 1;
connectBtn.textContent = "CONNECT";
connectBtn.id = CONNECT_BUTTON_ID;

buttonsContainer.appendChild(prevButton);
buttonsContainer.appendChild(cemeteryNumber);
buttonsContainer.appendChild(nextButton);
buttonsContainer.appendChild(cemeteryNumberInput);
buttonsContainer.appendChild(goButton);
buttonsContainer.appendChild(connectBtn);
document.getElementById("gravenav").appendChild(buttonsContainer);
document.getElementById("statusBar").appendChild(statusBar);
setStatus("Waiting for a connection");

const table = document.createElement("table");
const tableBody = document.createElement("tbody");
table.appendChild(tableBody);
document.getElementById("cemeteryContainer").appendChild(table);

let startGraveNumber = 1;

function setStatus(status) {
	document.getElementById("status").innerText = status;
}

document
	.getElementById(CONNECT_BUTTON_ID)
	.addEventListener("click", async () => {
		await window.ethereum.request({ method: "eth_requestAccounts" });
		await loadBlockchainData();
	});

document.getElementById(SUBMIT_MODAL_ID).addEventListener("click", async () => {
	const occupant = document.getElementById(MODAL_OCCUPANT_ID).value;
	const birth = document.getElementById(MODAL_BIRTH_ID).value;
	const epitaph = document.getElementById(MODAL_EPITAPH_ID).value;
	const mediaUrl = document.getElementById(MODAL_MEDIA_URL_ID).value;
	const metadata = document.getElementById(MODAL_METADATA_ID).value;
	const resurrectTime = document.getElementById(MODAL_RESURRECTTIME_ID).value;
	const UTCResurrectTime = Date.parse(resurrectTime) / 1000;
	const beneficiary = document.getElementById(MODAL_BENEFICIARY_ID).value;
	const nBirth = birth.replaceAll("-", "");
	console.log("MINTING DETAILS: ///////")
	console.log("occupant: ", occupant )
	console.log("birth: ", birth )
	console.log("epitaph: ", epitaph )
	console.log("mediaUrl: ", mediaUrl )
	console.log("metadata: ", metadata )

	if (
		occupant &&
		nBirth &&
		epitaph &&
		mediaUrl &&
		metadata &&
		UTCResurrectTime &&
		beneficiary
	) {
		setStatus("Lowering coffin...");
		await mintNFT(
			occupant,
			nBirth,
			epitaph,
			mediaUrl,
			metadata,
			UTCResurrectTime,
			beneficiary
		);
		try {
			setStatus("Approving Beneficiary...");
			await setApprovalForAll(beneficiary);
		} catch (e) {
			setStatus("Failed to set Beneficiary.");
		}

		setStatus("The coffin is buried.");
	} else {
		setStatus("Please enter coffin details.");
	}
});

document.getElementById(CLOSE_MODAL_ID).addEventListener("click", closeModal);
document
	.getElementById(CLOSE_DETAILS_MODAL_ID)
	.addEventListener("click", closeDetailsModal);

function createDivWithClass(className) {
	const div = document.createElement("div");
	div.classList.add(className);
	return div;
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatMetadataValue(value) {
	if (typeof value === 'object' && value !== null) {
		return '<pre>' + JSON.stringify(value, null, 2).replace(/^0+/, '') + '</pre>';
	} else {
		return value.toString().replace(/^0+/, '');
	}
}

function convertIpfsUrl(url) {
	if (url && url.startsWith("ipfs://")) {
		return url.replace("ipfs://", "https://ipfs.io/ipfs/");
	}
	return url;
}

function isMediaFile(value) {
	return /\.(mp4|webm|ogg|mp3|wav|flac|jpg|jpeg|png|gif|bmp|svg)$/i.test(value);
}

function isReadableFile(value) {
	return /\.(txt|md|html|css|js)$/i.test(value);
}

function appendTextInTokenDetailsElement(tokenDetailsElement, text) {
	const textNode = document.createTextNode(text);
	tokenDetailsElement.appendChild(textNode);
}

async function handleButtonClick(event) {
	showModal();
}

function removeConnectButton() {
	const connectBtn = document.getElementById(CONNECT_BUTTON_ID);
	const skelGif = document.getElementById(SKEL_GIF_ID);
	if (connectBtn) {
		connectBtn.parentNode.removeChild(connectBtn);
	}
	if (skelGif) {
		skelGif.parentNode.removeChild(skelGif);
	}
}

function toggleModal(modalId, isShow) {
	const modal = document.getElementById(modalId);
	modal.style.display = isShow ? "block" : "none";
	const statusBarContainer = isShow ? modal : document.getElementById("statusBar");
	statusBarContainer.insertBefore(statusBar, statusBarContainer.firstChild);
}

function showModal() {
	toggleModal(MODAL_ID, true);
	setStatus("Peering into an empty grave");
}

function closeModal() {
	toggleModal(MODAL_ID, false);
	setStatus("Welcome to the cemetery");
}

function showDetailsModal() {
	toggleModal(TOKEN_DETAILS_MODAL_ID, true);
	setStatus("Viewing tomb");
}

function closeDetailsModal() {
	toggleModal(TOKEN_DETAILS_MODAL_ID, false);
	setStatus("Welcome to the cemetery");
}

function clearTableBody() {
	while (tableBody.firstChild) {
		tableBody.removeChild(tableBody.firstChild);
	}
}

function updateTableNumber() {
	const tableIndex = Math.ceil(startGraveNumber / 40);
	cemeteryNumber.textContent = ` Cemetery ${tableIndex} `;
}

async function onNextButtonClick() {
	startGraveNumber += 40;
	await updateGraveNumbers();
}

async function onPrevButtonClick() {
	startGraveNumber = Math.max(1, startGraveNumber - 40);
	await updateGraveNumbers();
}

async function onGoButtonClick() {
	const requestedTableNumber = parseInt(cemeteryNumberInput.value);
	if (requestedTableNumber > 0) {
		startGraveNumber = (requestedTableNumber - 1) * 40 + 1;
		await updateGraveNumbers();
	} else {
		requestedTableNumber = 1;
	}
}

function addEventListeners(eventList) {
	eventList.forEach(([element, eventName, eventHandler]) => {
		element.addEventListener(eventName, eventHandler);
	});
}

addEventListeners([
	[nextButton, "click", onNextButtonClick],
	[prevButton, "click", onPrevButtonClick],
	[goButton, "click", onGoButtonClick],
]);


async function loadBlockchainData() {
	if (window.ethereum) {
		window.web3 = new Web3(window.ethereum);
		await window.ethereum.request({ method: "eth_requestAccounts" });
	} else {
		alert("Please install MetaMask to use this site.");
	}
	const accounts = await web3.eth.getAccounts();
	window.account = accounts[0];
	window.contract = new web3.eth.Contract(abi, contractAddress);
	document.getElementById("address").textContent = `Connected: ${window.account}`;

	const networkId = await web3.eth.net.getId();
	setStatus(networkId !== 137 ? "Switch to Polygon" : "Welcome to the cemetery");

	updateGraveNumbers();
	removeConnectButton();
}

async function initApp() {
	await loadBlockchainData();
}

async function getTotalSupply() {
	const totalSupply = await window.contract.methods.totalSupply().call();
	return totalSupply;
}

async function unlockCoffinMetadata(graveNumber) {
    const nonce = await window.web3.eth.getTransactionCount(window.account);
	const gasPrice = await window.web3.eth.getGasPrice();
    const tx = await window.contract.methods.unlockMetadata(graveNumber).send({ from: window.account, nonce, gasPrice });
    console.log(tx);
    return tx;
}

async function exposeCoffinMetadata(graveNumber) {
	const nonce = await window.web3.eth.getTransactionCount(window.account);
	const gasPrice = await window.web3.eth.getGasPrice();
    const tx = await window.contract.methods.exposeMetadata(graveNumber).call({ from: window.account, nonce, gasPrice });
    console.log(tx);
    return tx;
}

async function setApprovalForAll(beneficiary) {
    try {
        const userAddress = window.account;
		const nonce = await window.web3.eth.getTransactionCount(window.account);
		const gasPrice = await window.web3.eth.getGasPrice();
        const tx = await contract.methods.setApprovalForAll(beneficiary, true).send({ from: userAddress, nonce, gasPrice });
        console.log("Transaction:", tx);
        return tx;
    } catch (error) {
        console.error("Error setting approval for all", error);
        throw error;
    }
}

async function checkResurrectionAndTransfer(graveNumber) {
    setStatus("Attempting Resurrection");
    try {
        const nonce = await window.web3.eth.getTransactionCount(window.account);
		const gasPrice = await window.web3.eth.getGasPrice();
        const tx = await window.contract.methods.checkForResurrectionAndTransfer(graveNumber).send({ from: window.account, nonce, gasPrice });
        setStatus("Successfully resurrected coffin");
        console.log(tx);
    } catch (e) {
        setStatus("Failed to resurrect coffin");
        console.log(e);
    }
}

async function updateCoffin(graveNumber, resurrectTime, beneficiary) {
    try {
        setStatus("Approving new Beneficiary");
        await setApprovalForAll(beneficiary);
        setStatus("Lowering coffin...");
        const nonce = await window.web3.eth.getTransactionCount(window.account);
		const gasPrice = await window.web3.eth.getGasPrice();
        const tx = await window.contract.methods.updateCoffin(graveNumber, resurrectTime, beneficiary).send({ from: window.account, nonce, gasPrice });
        setStatus("Successfully buried coffin");
        console.log(tx);
    } catch (e) {
        setStatus("Failed to approve new Beneficiary");
        console.log(e);
    }
}

async function mintNFT(occupant, birth, epitaph, mediaUrl, metadata, resurrectTime, beneficiary) {
    try {
        const MINT_COST = window.web3.utils.toWei("0.001", "ether");
        const nonce = await window.web3.eth.getTransactionCount(window.account);
		const gasPrice = await window.web3.eth.getGasPrice();
        await window.contract.methods.mint(occupant, birth, epitaph, mediaUrl, metadata, resurrectTime, beneficiary).send({ from: window.account, value: MINT_COST, nonce, gasPrice });
        updateGraveNumbers();
    } catch (error) {
        console.error(error);
        setStatus("Something went terribly wrong");
    }
}

async function getNFTDetails(graveNumber) {
	try {
		const userAddress = (await window.ethereum.request({ method: 'eth_requestAccounts' }))[0];
		const nftDetails = await window.contract.methods
			.tokenDetails(graveNumber)
			.call();
		console.log(nftDetails);
		const isUserOwnerOrBeneficiary =
			userAddress === nftDetails.currentOwner ||
			userAddress === nftDetails.beneficiary;
		const tokenDetailsElement = document.getElementById("tokenDetailsModal");
		tokenDetailsElement.classList.add("token-details-modal");
		tokenDetailsElement.innerHTML = "";
		const topElements = [
			{
				class: "close-details-modal-button",
				text: "Back to Cemetery",
				onClick: closeDetailsModal,
			},
			{ class: "coffinId", text: `Grave #${graveNumber}` },
			{ class: "occupant", text: `${nftDetails.occupant}` },
		];

		topElements.forEach((el) => {
			const div = createDivWithClass(el.class);
			div.innerText = el.text;
			if (el.onClick) div.addEventListener("click", el.onClick);
			tokenDetailsElement.appendChild(div);
		});

		const bottomElements = [
			{ class: "epitaph", text: `${nftDetails.epitaph}` },
			{
				class: "dateBorn",
				text: `D.O.B.: ${nftDetails.dateBorn.substring(6, 8)}-${nftDetails.dateBorn.substring(4, 6)}-${nftDetails.dateBorn.substring(0, 4)}`,
			},
			{
				class: "coffinDateBuriedCheck",
				text: `Buried: ${new Date(
					nftDetails.dateBuried * 1000
				).toUTCString().replace("GMT", "UTC")}`,
			},
			{
				class: "resurrectTime",
				text: `Resurrection: ${new Date(
					nftDetails.resurrectTime * 1000
				).toUTCString().replace("GMT", "UTC")}`,
			},
			{
				class: "currentOwner",
				text: `Current Owner: ${nftDetails.currentOwner.slice(
					0,
					6
				)}...${nftDetails.currentOwner.slice(38, 42)}`,
			},
			{
				class: "beneficiary",
				text: `Beneficiary: ${nftDetails.beneficiary.slice(
					0,
					6
				)}...${nftDetails.beneficiary.slice(38, 42)}`,
			},
			{
				class: "coffinBuryCount",
				text: `This Coffin has been buried ${nftDetails.buriedCounter} times.`,
			},
		];

		if (nftDetails.mediaUrl.startsWith("ipfs://")) {

		const mediaUrl = `https://ipfs.io/ipfs/${nftDetails.mediaUrl.slice(7)}`;
		const tinyPFP = document.createElement("img");
		tinyPFP.id = MODAL_MEDIA_URL_ID;
		tinyPFP.classList.add("mediaUrl");

		tinyPFP.src = mediaUrl;
		tinyPFP.alt = "image";

		tinyPFP.classList.add("mediaElement");
		tinyPFP.style.maxWidth = "420px";
		tinyPFP.style.maxHeight = "420px";
		tinyPFP.style.display = "block";
		tinyPFP.style.margin = "0 auto";
		tinyPFP.style.marginTop = "20px";
		tinyPFP.style.marginBottom = "20px";
		tinyPFP.style.borderRadius = "5px";
		tinyPFP.style.filter = "sepia(30%)";

		tokenDetailsElement.appendChild(tinyPFP);
		tokenDetailsElement.appendChild(document.createElement("div"));
		}

		tokenDetailsElement.appendChild(document.createElement("br"))

		bottomElements.forEach((el) => {
			const div = createDivWithClass(el.class);
			div.innerText = el.text;
			if (el.onClick) div.addEventListener("click", el.onClick);
			tokenDetailsElement.appendChild(div);
		});



		appendTextInTokenDetailsElement(
			tokenDetailsElement,
			"Only the Beneficiary can Resurrect: "
		);

		const resurrectButton = document.createElement("button");
		resurrectButton.textContent = "RESURRECT";
		resurrectButton.id = RESURRECT_BUTTON_ID;
		resurrectButton.classList.add("resurrectButton");
		tokenDetailsElement.appendChild(resurrectButton);
		resurrectButton.disabled = !isUserOwnerOrBeneficiary;
		resurrectButton.addEventListener("click", () => {
			const graveNumberValue = graveNumber;
			checkResurrectionAndTransfer(graveNumberValue);
		});

		const buryAgainDiv = createDivWithClass("buryAgainDiv");
		tokenDetailsElement.appendChild(buryAgainDiv);
		appendTextInTokenDetailsElement(
			tokenDetailsElement,
			"After resurrection, the Beneficiary can bury the coffin again with a new Beneficiary and Resurrection Time: "
		);

		const br = document.createElement("br");
		tokenDetailsElement.appendChild(br);

		const newBeneficiary = document.createElement("input");
		newBeneficiary.id = NEW_BENEFICIARY_ID;
		newBeneficiary.type = "text";
		newBeneficiary.classList.add("newBeneficiary");

		const newResurrectTime = document.createElement("input");
		newResurrectTime.id = NEW_RESURRECTTIME_ID;
		newResurrectTime.type = "datetime-local";
		newResurrectTime.classList.add("newResurrectTime");

		tokenDetailsElement.appendChild(newBeneficiary);
		newBeneficiary.disabled = !isUserOwnerOrBeneficiary;
		tokenDetailsElement.appendChild(newResurrectTime);
		newResurrectTime.disabled = !isUserOwnerOrBeneficiary;

		const buryAgainButton = document.createElement("button");
		buryAgainButton.textContent = "BURY AGAIN";
		buryAgainButton.id = BURY_AGAIN_BUTTON_ID;
		buryAgainButton.classList.add("buryAgainButton");

		tokenDetailsElement.appendChild(buryAgainButton);
		buryAgainButton.disabled = !isUserOwnerOrBeneficiary;
		buryAgainButton.addEventListener("click", () => {
			const graveNumberValue = graveNumber;
			const newBeneficiaryValue = document.getElementById(NEW_BENEFICIARY_ID).value;
			const newResurrectTimeValue = document.getElementById(NEW_RESURRECTTIME_ID).value;
			const UTCNewResurrectTime = Date.parse(newResurrectTimeValue) / 1000;
			updateCoffin(graveNumberValue, UTCNewResurrectTime, newBeneficiaryValue);
		});

		const hr = document.createElement("hr");
		tokenDetailsElement.appendChild(hr);

		const mediaUrl = createDivWithClass("mediaUrl");
		mediaUrl.innerText = `Media: ${nftDetails.mediaUrl}`;
		tokenDetailsElement.appendChild(mediaUrl);

		const hr2 = document.createElement("hr");
		tokenDetailsElement.appendChild(hr2);

		const isOpen = document.createElement("div");
		isOpen.classList.add("isOpen");
		isOpen.innerText = `Metadata Exposed: ${nftDetails.isOpen}`;
		tokenDetailsElement.appendChild(isOpen);

		const metadataInstructions = document.createTextNode(
			"Each coffin contains locked metadata. Once unlocked, the metadata is forever exposed."
		);
		tokenDetailsElement.appendChild(metadataInstructions);

		const unlockMetadataButton = document.createElement("button");
		unlockMetadataButton.textContent = "UNLOCK METADATA";
		unlockMetadataButton.id = UNLOCK_METADATA_BUTTON_ID;
		unlockMetadataButton.classList.add("unlockMetadataButton");
		tokenDetailsElement.appendChild(unlockMetadataButton);
		unlockMetadataButton.disabled = !isUserOwnerOrBeneficiary;
		unlockMetadataButton.addEventListener("click", async () => {
			await unlockCoffinMetadata(graveNumber);
		});

		const exposeMetadataButton = document.createElement("button");
		exposeMetadataButton.textContent = "EXPOSE METADATA";
		exposeMetadataButton.id = EXPOSE_METADATA_BUTTON_ID;
		exposeMetadataButton.classList.add("exposeMetadataButton");
		tokenDetailsElement.appendChild(exposeMetadataButton);
		exposeMetadataButton.disabled = !isUserOwnerOrBeneficiary;

		try {
			const metadataUrl = `https://ipfs.io/ipfs/${nftDetails.metadata.slice(7)}`;
			displayMetadata(metadataUrl, tokenDetailsElement);
		} catch (e) {
			console.log(e);
		}

		showDetailsModal();
	} catch (error) {
		console.error("Error in getNFTDetails:", error);
	}
}

function displayMetadata(metadataUrl, tokenDetailsElement) {
    fetch(metadataUrl)
        .then(response => response.json())
        .then(jsonData => {
            const metadataList = document.createElement("dl");
            metadataList.classList.add("metadataList");
            metadataList.style.textAlign = "left";

            if (jsonData[0]) {
                jsonData = jsonData[0];
            }

            for (const key in jsonData) {
                const dtMetadataKey = document.createElement("dt");
                dtMetadataKey.textContent = capitalizeFirstLetter(key);
                metadataList.appendChild(dtMetadataKey);

                const ddMetadataValue = document.createElement("dd");
                let value = jsonData[key];

                value = convertIpfsUrl(value);

                if (isMediaFile(value) || isReadableFile(value)) {
                    if (isMediaFile(value)) {
                        const mediaElement = createMediaElement(value);
                        ddMetadataValue.appendChild(mediaElement);
                    } else if (isReadableFile(value)) {
                        const readableElement = createReadableElement(value);
                        ddMetadataValue.appendChild(readableElement);
                    }
                } else {
                    ddMetadataValue.innerHTML = formatMetadataValue(value);
                }

                metadataList.appendChild(ddMetadataValue);
            }

            const hr2 = document.createElement("hr");
            tokenDetailsElement.appendChild(hr2);

            const metadataUrlDiv = createDivWithClass("metadataUrl");
            metadataUrlDiv.innerText = `Metadata: `;

            tokenDetailsElement.appendChild(metadataUrlDiv);

            tokenDetailsElement.appendChild(metadataList);
        })
        .catch(error => {
            console.error("Error displaying metadata:", error);
        });
}

function createMediaElement(src) {
	const mediaElement = document.createElement("object");
	mediaElement.width = "100%";
	mediaElement.height = "100%";
	mediaElement.data = src;
	return mediaElement;
}

function createReadableElement(src) {
	const readableElement = document.createElement("iframe");
	readableElement.width = "100%";
	readableElement.height = "100%";
	readableElement.src = src;
	return readableElement;
}

function formatMetadataValue(value) {
	if (typeof value === "object") {
		return JSON.stringify(value, null, 2).replace(/[\{\}\"]/g, "");
	}
	return value;
}

function displayMedia(mediaUrl, tokenDetailsElement) {
	fetch(mediaUrl)
		.then((response) => {
			if (response.ok) {
				const contentType = response.headers.get("content-type");
				const mediaContainer = document.createElement("div");
				mediaContainer.classList.add("mediaContainer");
				mediaContainer.style.textAlign = "center";
				let mediaElement;

				if (contentType.startsWith("image")) {
					mediaElement = document.createElement("img");
					mediaElement.src = mediaUrl;
					mediaElement.alt = "image";
				} else if (contentType.startsWith("video")) {
					mediaElement = document.createElement("video");
					mediaElement.src = mediaUrl;
					mediaElement.controls = true;
				} else if (contentType.startsWith("audio")) {
					mediaElement = document.createElement("audio");
					mediaElement.src = mediaUrl;
					mediaElement.controls = true;
				} else {
					throw new Error("Unsupported media format");
				}

				mediaElement.classList.add("mediaElement");
				mediaElement.style.maxWidth = "420px";
				mediaElement.style.maxHeight = "420px";
				mediaElement.style.display = "block";
				mediaElement.style.margin = "0 auto";
				mediaElement.style.marginTop = "20px";
				mediaElement.style.marginBottom = "20px";
				mediaElement.style.borderRadius = "5px";
				mediaElement.style.filter = "sepia(30%)";
				mediaContainer.appendChild(mediaElement);
				tokenDetailsElement.appendChild(mediaContainer);
			} else {
				throw new Error("Error finding media");
			}

			console.log(mediaUrl)


		})
		.catch((error) => {
			console.error("Error displaying media:", error);
		});
}

async function getPFPDetails(graveNumber) {
	try {
		const pfpDetails = await window.contract.methods
			.tokenDetails(graveNumber)
			.call();
		return pfpDetails;
	} catch (error) {
		console.error(error);
	}
}

async function updateGraveNumbers() {
	clearTableBody();
	const totalSupply = await getTotalSupply();
	console.log("total supply: ", totalSupply);
	let graveCounter = startGraveNumber;
	for (let i = 0; i < 5; i++) {
		const row = document.createElement("tr");
		for (let j = 0; j < 8; j++) {
			const cell = document.createElement("td");

			const skullSpan = document.createElement("span");
			skullSpan.classList.add("skull");
			const tombDiv = document.createElement("div");
			tombDiv.classList.add("tomb");
			skullSpan.appendChild(tombDiv);

			const toolsSpan = document.createElement("span");
			toolsSpan.classList.add("tools");
			const tools = document.createTextNode("⚒");
			toolsSpan.appendChild(tools);

			const link = document.createElement("button");

			if (graveCounter <= totalSupply) {
				const graveNumberSpan = document.createElement("span");
				graveNumberSpan.classList.add("graveNumber");
				const graveNumber = document.createTextNode(graveCounter);
				graveNumberSpan.appendChild(graveNumber);

				const mediaContainer = document.createElement("div");
				mediaContainer.classList.add("mediaContainer");

				getPFPDetails(graveCounter).then((nftDetails) => {
					const mediaUrl = `https://ipfs.io/ipfs/${nftDetails.mediaUrl.slice(7)}`;
					let mediaElement = document.createElement("img");
					mediaElement.setAttribute("src", mediaUrl);
					mediaElement.classList.add("mediaElement");
					mediaElement.style.maxWidth = "50px";
					mediaElement.style.maxHeight = "50px";
					mediaElement.style.borderRadius = "5px";
					mediaElement.style.borderWidth = "0px";
					mediaElement.style.filter = "grayscale(100%) sepia(10%) contrast(95%) brightness(83%) hue-rotate(10deg)";

					mediaElement.onerror = () => {
						mediaElement.setAttribute("src", './img/pfp.gif');
					};

					mediaContainer.appendChild(mediaElement);
				})

				cell.appendChild(graveNumberSpan);
				tombDiv.appendChild(mediaContainer);
				cell.appendChild(document.createElement("br"));
				graveCounter++;
				cell.appendChild(skullSpan);
			} else {
				cell.appendChild(toolsSpan);
			}

			cell.appendChild(document.createElement("br"));
			row.appendChild(cell);

			if (cell.textContent != "⚒") {
				link.textContent = "GRAVE";
				link.classList.add("graveButton");
				const graveNumber = cell.textContent.replace("☠", "");
				console.log("updateGrave graveNumber: ", graveNumber);
				link.addEventListener("click", () => getNFTDetails(graveNumber));

				cell.addEventListener("mouseover", () => cell.classList.add("grave"));
				cell.addEventListener("mouseout", () => cell.classList.remove("grave"));
			} else {
				link.textContent = "BURY";
				link.classList.add("buryButton");
				link.addEventListener("click", handleButtonClick);

				cell.addEventListener("mouseover", () => cell.classList.add("bury"));
				cell.addEventListener("mouseout", () => cell.classList.remove("bury"));
			}

			cell.appendChild(link);
		}
		tableBody.appendChild(row);
	}
	updateTableNumber();
}

// drag and drop 
function mediaDropZone() {
  const dropZone = document.getElementById('media_drop_zone');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', async (e) => {
    const cid = await handleMediaDrop(e);
    const mediaUrlElement = document.getElementById(MODAL_MEDIA_URL_ID);
    if (mediaUrlElement) {
      mediaUrlElement.value = cid;
    }
  }, false);
}

function metadataDropZone() {
  const dropZone = document.getElementById('metadata_drop_zone');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', async (e) => {
    const cid = await handleMetadataDrop(e);
    const metadataElement = document.getElementById(MODAL_METADATA_ID);
    if (metadataElement) {
      metadataElement.value = cid;
    }
  }, false);
}

function initDropZone(dropZoneId, handleDrop) {
	const dropZone = document.getElementById(dropZoneId);
	dropZone.addEventListener('dragover', handleDragOver, false);
	dropZone.addEventListener('dragenter', handleDragEnter, false);
	dropZone.addEventListener('dragleave', handleDragLeave, false);
	dropZone.addEventListener('drop', handleDrop, false);
}

function handleDragOver(event) {
	event.stopPropagation();
	event.preventDefault();
	event.dataTransfer.dropEffect = 'copy';
}

function handleDragEnter(event) {
	event.target.classList.add('drag-over');
	event.target.classList.remove('drop-failure');
}

function handleDragLeave(event) {
	event.target.classList.remove('drag-over');
}

// file upload for mobile users
const mobileMediaDropZoneButton = document.createElement('button');
const mobileMediaDropZone = document.getElementById("media_drop_zone");
mobileMediaDropZoneButton.textContent = 'Select and Upload';
mobileMediaDropZoneButton.addEventListener('click', openFilePicker);
mobileMediaDropZone.appendChild(mobileMediaDropZoneButton);

const mobileMetadataDropZoneButton = document.createElement('button');
const mobileMetadataDropZone = document.getElementById("metadata_drop_zone");
mobileMetadataDropZoneButton.textContent = 'Select and Upload';
mobileMetadataDropZoneButton.addEventListener('click', openFilePicker);
mobileMetadataDropZone.appendChild(mobileMetadataDropZoneButton);

// file picker function
function openFilePicker() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*, application/json';
  input.addEventListener('change', handleFileSelect);
  input.click();
}

// handle file select function
async function handleFileSelect(event) {
  const file = event.target.files[0];
  if (!file) return;
  const buffer = await file.arrayBuffer();
  
  // Check file type
  if (file.type.startsWith('image/')) {
    const cid = await uploadFileToIPFS(buffer, file.type);
    const mediaUrlElement = document.getElementById(MODAL_MEDIA_URL_ID);
	const mediaUrlElementDopZone = document.getElementById("media_drop_zone");
    if (mediaUrlElement) {
      mediaUrlElement.value = cid;
	  mediaUrlElementDopZone.classList.add('drop-success');
    }
  } else if (file.type.startsWith('application/json')) {
    const cid = await uploadFileToIPFS(buffer, file.type);
    const metadataElement = document.getElementById(MODAL_METADATA_ID);
	const metadataElementDropZone = document.getElementById("metadata_drop_zone");

    if (metadataElement) {
      metadataElement.value = cid;
	  metadataElementDropZone.classList.add('drop-success');
    }
  } else {
	event.target.classList.add('drop-failure');
    alert('Invalid file type');
  }
}

async function handleMediaDrop(event) {
	event.stopPropagation();
	event.preventDefault();
	event.target.classList.remove('drag-over');

	const file = event.dataTransfer.files[0];
	if (!file.type.startsWith('image/')) {

		event.target.classList.add('drop-failure');
		return;
	}

	const buffer = await file.arrayBuffer();
	const cid = await uploadFileToIPFS(buffer, file.type);
	if (cid) {
		event.target.classList.add('drop-success');
	}
	return "ipfs://" + cid;
}

async function handleMetadataDrop(event) {
	event.stopPropagation();
	event.preventDefault();
	event.target.classList.remove('drag-over');

	const file = event.dataTransfer.files[0];
	if (!file.type.startsWith('application/json')) {
		event.target.classList.add('drop-failure');
		return;
	}

	const buffer = await file.arrayBuffer();
	const cid = await uploadFileToIPFS(buffer, file.type);
	if (cid) {
		event.target.classList.add('drop-success');
	}
	return "ipfs://" + cid;
}

async function uploadFileToIPFS(buffer, fileType) {
	const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
	const formData = new FormData();
	formData.append('file', new Blob([buffer], { type: fileType }));

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'pinata_api_key': '3edcfb989ad2b8a716f9',
			'pinata_secret_api_key': 'bdce1163f7b4acfaa9f4b7bc4f1885cea4f95753238cf18052aba3a295a9daf9'
		},
		body: formData,
	});

	if (response.ok) {
		const data = await response.json();
		const cid = data.IpfsHash;
		return cid;
	} else {
		alert('Error uploading file to IPFS.');
		return;
	}
}

initDropZone('media_drop_zone', handleMediaDrop);
initDropZone('metadata_drop_zone', handleMetadataDrop);
mediaDropZone();
metadataDropZone();

// key:value form to replace metadata drag and drop
document.getElementById('addKeyValueBtn').addEventListener('click', function () {
    const container = document.getElementById('customKeyValueContainer');
    const index = container.childElementCount;

    container.appendChild(document.createElement('br'));
    const keyLabel = document.createElement('label');
    keyLabel.setAttribute('for', `customKey${index}`);
    keyLabel.textContent = 'Key:';
    container.appendChild(keyLabel);

    const keyInput = document.createElement('input');
    keyInput.setAttribute('type', 'text');
    keyInput.setAttribute('id', `customKey${index}`);
    container.appendChild(keyInput);

    const valueLabel = document.createElement('label');
    valueLabel.setAttribute('for', `customValue${index}`);
    valueLabel.textContent = 'Value:';
    container.appendChild(valueLabel);

    const valueInput = document.createElement('input');
    valueInput.setAttribute('type', 'text');
    valueInput.setAttribute('id', `customValue${index}`);
    container.appendChild(valueInput);
    
    container.appendChild(document.createElement('br'));
});

document.getElementById('submitKeyValueBtn').addEventListener('click', async function () {
    const container = document.getElementById('customKeyValueContainer');
    if (!container) return;

    const numOfPairs = container.childElementCount / 10;
    let metadata = {};

    for (let i = 0; i < numOfPairs; i++) {
        const keyElement = document.getElementById(`customKey${i}`);
        const valueElement = document.getElementById(`customValue${i}`);

        if (!keyElement || !valueElement) continue;

        const key = keyElement.value;
        const value = valueElement.value;

        metadata[key] = value;
    }

    const jsonMetadata = new Blob([JSON.stringify(metadata)], { type: 'application/json' });

    const buffer = await new Response(jsonMetadata).arrayBuffer();

    const cid = await uploadFileToIPFS(buffer, 'application/json');
    const dropZone = document.getElementById('metadata_drop_zone');

    if (cid) {
        document.getElementById(MODAL_METADATA_ID).value = "ipfs://" + cid;
        dropZone.classList.add('drop-success');
    }
});

// metadata modal and form
function openMetadataModal() {
	document.getElementById("metadataModal").style.display = "block";
}

function closeMetadataModal() {
	document.getElementById("metadataModal").style.display = "none";
}

// create the main modal container
var metadataModal = document.createElement("div");
metadataModal.id = "metadataModal";
metadataModal.className = "metadata-modal";

// create the modal content container
var metadataModalContent = document.createElement("div");
metadataModalContent.className = "metadata-modal-content";

// create the close button
var closeBtn = document.createElement("span");
closeBtn.className = "metadata-modal-close";
closeBtn.textContent = "X";
closeBtn.onclick = closeMetadataModal;

// create the form container
var metadataModalForm = document.createElement("form");
metadataModalForm.id = "metadataModalForm";
metadataModalForm.className = "metadata-modal-form";

const personalityFormInto = document.createElement("p");
personalityFormInto.textContent = "oy";
metadataModalForm.appendChild(personalityFormInto);

// Memory Length
const memoryLabel = document.createElement("label");
memoryLabel.htmlFor = "memoryInput";
memoryLabel.textContent = "Memory Length: ";
metadataModalForm.appendChild(memoryLabel);
const memoryInput = document.createElement("input");
memoryInput.type = "number";
memoryInput.min = "1";
memoryInput.max = "20";
memoryInput.id = "memoryInput";
metadataModalForm.appendChild(memoryInput);


metadataModalForm.appendChild(document.createElement("br"));

// IQ
const metadataIQLabel = document.createElement("label");
metadataIQLabel.htmlFor = "metadataIQ";
metadataIQLabel.textContent = "IQ Score: ";
metadataModalForm.appendChild(metadataIQLabel);
const metadataIQ = document.createElement("input");
metadataIQ.type = "number";
metadataIQ.min = 10;
metadataIQ.max = 550;
metadataIQ.id = "metadataIQ"
metadataModalForm.appendChild(metadataIQ);

metadataModalForm.appendChild(document.createElement("br"));

// Age
const metadataAgeLabel = document.createElement("label");
metadataAgeLabel.htmlFor = "metadataAge";
metadataAgeLabel.textContent = "Age: ";
metadataModalForm.appendChild(metadataAgeLabel);
const metadataAge = document.createElement("input");
metadataAge.type = "number";
metadataAge.min = "1";
metadataAge.max = "150";
metadataAge.id = "metadataAge";
metadataModalForm.appendChild(metadataAge);

metadataModalForm.appendChild(document.createElement("br"));

// Location
const metadataLocationLabel = document.createElement("label");
metadataLocationLabel.htmlFor = "metadataLocation";
metadataLocationLabel.textContent = "Location: ";
metadataModalForm.appendChild(metadataLocationLabel);
const metadataLocation = document.createElement("input");
metadataLocation.type = "text";
metadataLocation.id = "metadataLocation";
metadataModalForm.appendChild(metadataLocation);

metadataModalForm.appendChild(document.createElement("br"));

// Job
const metadataJobLabel = document.createElement("label");
metadataJobLabel.htmlFor = "metadataJob";
metadataJobLabel.textContent = "Job: ";
metadataModalForm.appendChild(metadataJobLabel);
const metadataJob = document.createElement("input");
metadataJob.type = "text";
metadataJob.id = "metadataJob";
metadataModalForm.appendChild(metadataJob);

metadataModalForm.appendChild(document.createElement("br"));

// Hobby
const metadataHobbyLabel = document.createElement("label");
metadataHobbyLabel.htmlFor = "metadataHobby";
metadataHobbyLabel.textContent = "Hobby: ";
metadataModalForm.appendChild(metadataHobbyLabel);
const metadataHobby = document.createElement("input");
metadataHobby.type = "text";
metadataHobby.id = "metadataHobby";
metadataModalForm.appendChild(metadataHobby);

metadataModalForm.appendChild(document.createElement("br"));

// Mood
const metadataMoodLabel = document.createElement("label");
metadataMoodLabel.htmlFor = "metadataMood";
metadataMoodLabel.textContent = "Mood: ";
metadataModalForm.appendChild(metadataMoodLabel);
const metadataMood = document.createElement("input");
metadataMood.type = "text";
metadataMood.id = "metadataMood";
metadataModalForm.appendChild(metadataMood);

metadataModalForm.appendChild(document.createElement("br"));

// Gender
const metadataGenderLabel = document.createElement("label");
metadataGenderLabel.htmlFor = "metadataGender";
metadataGenderLabel.textContent = "Gender: ";
metadataModalForm.appendChild(metadataGenderLabel);
const metadataGender = document.createElement("select");
metadataGender.id = "metadataGender";

const gender1 = document.createElement("option");
gender1.value = "Male";
gender1.textContent = "Male";
metadataGender.appendChild(gender1);
const gender2 = document.createElement("option");
gender2.value = "Female";
gender2.textContent = "Female";
metadataGender.appendChild(gender2);
const gender3 = document.createElement("option");
gender3.value = "Non Binary";
gender3.textContent = "Non Binary";
metadataGender.appendChild(gender3);
const gender4 = document.createElement("option");
gender4.value = "Genderqueer";
gender4.textContent = "Genderqueer";
metadataGender.appendChild(gender4);
const gender5 = document.createElement("option");
gender5.value = "Agender";
gender5.textContent = "Agender";
metadataGender.appendChild(gender5);
const gender6 = document.createElement("option");
gender6.value = "Bigender";
gender6.textContent = "Bigender";
metadataGender.appendChild(gender6);
const gender7 = document.createElement("option");
gender7.value = "Genderfluid";
gender7.textContent = "Genderfluid";
metadataGender.appendChild(gender7);
const gender8 = document.createElement("option");
gender8.value = "Two Spirit";
gender8.textContent = "Two Spirit";
metadataGender.appendChild(gender8);
const gender9 = document.createElement("option");
gender9.value = "Androgynous";
gender9.textContent = "Androgynous";
metadataGender.appendChild(gender9);
const gender10 = document.createElement("option");
gender10.value = "Demigender";
gender10.textContent = "Demigender";
metadataGender.appendChild(gender10);
const gender11 = document.createElement("option");
gender11.value = "Neutrois";
gender11.textContent = "Neutrois";
metadataGender.appendChild(gender11);
const gender12 = document.createElement("option");
gender12.value = "Gender Questioning";
gender12.textContent = "Gender Questioning";
metadataGender.appendChild(gender12);
const gender13 = document.createElement("option")
gender13.value = "Gender Nonconforming";
gender13.textContent = "Gender Nonconforming";
metadataGender.appendChild(gender13);
const gender14 = document.createElement("option");
gender14.value = "Transgender";
gender14.textContent = "Transgender";
metadataGender.appendChild(gender14);
const gender15 = document.createElement("option");
gender15.value = "Cisgender";
gender15.textContent = "Cisgender";
metadataGender.appendChild(gender15);
const gender16 = document.createElement("option");
gender16.value = "Pangender";
gender16.textContent = "Pangender";
metadataGender.appendChild(gender16)
metadataModalForm.appendChild(metadataGender);

metadataModalForm.appendChild(document.createElement("br"));

// Zodiac
const metadataZodiacLabel = document.createElement("label");
metadataZodiacLabel.htmlFor = "metadataZodiac";
metadataZodiacLabel.textContent = "Zodiac: ";
metadataModalForm.appendChild(metadataZodiacLabel);
const metadataZodiac = document.createElement("select");
metadataZodiac.id = "metadataZodiac";

const zodiac1 = document.createElement("option");
zodiac1.value = "Aries";
zodiac1.textContent = "Aries: March 21 - April 19";
metadataZodiac.appendChild(zodiac1);
const zodiac2 = document.createElement("option");
zodiac2.value = "Taurus";
zodiac2.textContent = "Taurus: April 20 - May 20";
metadataZodiac.appendChild(zodiac2);
const zodiac3 = document.createElement("option");
zodiac3.value = "Gemini";
zodiac3.textContent = "Gemini: May 21 - June 20";
metadataZodiac.appendChild(zodiac3);
const zodiac4 = document.createElement("option");
zodiac4.value = "Cancer";
zodiac4.textContent = "Cancer: June 21 - July 22";
metadataZodiac.appendChild(zodiac4);
const zodiac5 = document.createElement("option");
zodiac5.value = "Leo";
zodiac5.textContent = "Leo: July 23 - August 22";
metadataZodiac.appendChild(zodiac5);
const zodiac6 = document.createElement("option");
zodiac6.value = "Virgo";
zodiac6.textContent = "Virgo: August 23 - September 22";
metadataZodiac.appendChild(zodiac6);
const zodiac7 = document.createElement("option");
zodiac7.value = "Libra";
zodiac7.textContent = "Libra: September 23 - October 22";
metadataZodiac.appendChild(zodiac7);
const zodiac8 = document.createElement("option");
zodiac8.value = "Scorpio";
zodiac8.textContent = "Scorpio: October 23 - November 21";
metadataZodiac.appendChild(zodiac8);
const zodiac9 = document.createElement("option");
zodiac9.value = "Sagittarius";
zodiac9.textContent = "Sagittarius: November 22 - December 21";
metadataZodiac.appendChild(zodiac9);
const zodiac10 = document.createElement("option");
zodiac10.value = "Capricorn";
zodiac10.textContent = "Capricorn: December 22 - January 19";
metadataZodiac.appendChild(zodiac10);
const zodiac11 = document.createElement("option");
zodiac11.value = "Aquarius";
zodiac11.textContent = "Aquarius: January 20 - February 18";
metadataZodiac.appendChild(zodiac11);
const zodiac12 = document.createElement("option");
zodiac12.value = "Pisces";
zodiac12.textContent = "Pisces: February 19 - March 20";
metadataZodiac.appendChild(zodiac12);
metadataModalForm.appendChild(metadataZodiac);

metadataModalForm.appendChild(document.createElement("br"));

// Personality
const metadataPersonalityLabel = document.createElement("label");
metadataPersonalityLabel.htmlFor = "metadataPersonality";
metadataPersonalityLabel.textContent = "Personality: ";
metadataModalForm.appendChild(metadataPersonalityLabel);

const metadataPersonality = document.createElement("select");
metadataPersonality.id = "metadataPersonality";

const personality1 = document.createElement("option");
personality1.value = "ISTJ";
personality1.textContent = "ISTJ: Introverted, Sensing, Thinking, Judging";
metadataPersonality.appendChild(personality1);

const personality2 = document.createElement("option");
personality2.value = "ISFJ";
personality2.textContent = "ISFJ: Introverted, Sensing, Feeling, Judging";
metadataPersonality.appendChild(personality2);

const personality3 = document.createElement("option");
personality3.value = "INFJ";
personality3.textContent = "INFJ: Introverted, Intuitive, Feeling, Judging";
metadataPersonality.appendChild(personality3);

const personality4 = document.createElement("option");
personality4.value = "INTJ";
personality4.textContent = "INTJ: Introverted, Intuitive, Thinking, Judging";
metadataPersonality.appendChild(personality4);

const personality5 = document.createElement("option");
personality5.value = "ISTP";
personality5.textContent = "ISTP: Introverted, Sensing, Thinking, Perceiving";
metadataPersonality.appendChild(personality5);

const personality6 = document.createElement("option");
personality6.value = "ISFP";
personality6.textContent = "ISFP: Introverted, Sensing, Feeling, Perceiving";
metadataPersonality.appendChild(personality6);

const personality7 = document.createElement("option");
personality7.value = "INFP";
personality7.textContent = "INFP: Introverted, Intuitive, Feeling, Perceiving";
metadataPersonality.appendChild(personality7);

const personality8 = document.createElement("option");
personality8.value = "INTP";
personality8.textContent = "INTP: Introverted, Intuitive, Thinking, Perceiving";
metadataPersonality.appendChild(personality8);

const personality9 = document.createElement("option");
personality9.value = "ESTP";
personality9.textContent = "ESTP: Extraverted, Sensing, Thinking, Perceiving";
metadataPersonality.appendChild(personality9);

const personality10 = document.createElement("option");
personality10.value = "ESFP";
personality10.textContent = "ESFP: Extraverted, Sensing, Feeling, Perceiving";
metadataPersonality.appendChild(personality10);

const personality11 = document.createElement("option");
personality11.value = "ENFP";
personality11.textContent = "ENFP: Extraverted, Intuitive, Feeling, Perceiving";
metadataPersonality.appendChild(personality11);

const personality12 = document.createElement("option");
personality12.value = "ENTP";
personality12.textContent = "ENTP: Extraverted, Intuitive, Thinking, Perceiving";
metadataPersonality.appendChild(personality12);

const personality13 = document.createElement("option");
personality13.value = "ESTJ";
personality13.textContent = "ESTJ: Extraverted, Sensing, Thinking, Judging";
metadataPersonality.appendChild(personality13);

const personality14 = document.createElement("option");
personality14.value = "ESFJ";
personality14.textContent = "ESFJ: Extraverted, Sensing, Feeling, Judging";
metadataPersonality.appendChild(personality14);

const personality15 = document.createElement("option");
personality15.value = "ENFJ";
personality15.textContent = "ENFJ: Extraverted, Intuitive, Feeling, Judging";
metadataPersonality.appendChild(personality15);

const personality16 = document.createElement("option");
personality16.value = "ENTJ";
personality16.textContent = "ENTJ: Extraverted, Intuitive, Thinking, Judging";
metadataPersonality.appendChild(personality16)

metadataModalForm.appendChild(metadataPersonality)

metadataModalForm.appendChild(document.createElement("br"));


// Enneagram
const metadataEnneagramLabel = document.createElement("label");
metadataEnneagramLabel.htmlFor = "metadataEnneagram";
metadataEnneagramLabel.textContent = "Enneagram: ";
metadataModalForm.appendChild(metadataEnneagramLabel);
const metadataEnneagram = document.createElement("select");
metadataEnneagram.id = "metadataEnneagram";

const enneagram1 = document.createElement("option");
enneagram1.value = "perfectionist";
enneagram1.textContent = "I strive for perfection and often criticize myself";
metadataEnneagram.appendChild(enneagram1);

const enneagram2 = document.createElement("option");
enneagram2.value = "helper";
enneagram2.textContent = "I seek to be helpful and maintain peace";
metadataEnneagram.appendChild(enneagram2);

const enneagram3 = document.createElement("option");
enneagram3.value = "achiever";
enneagram3.textContent = "I value achievement and success above all";
metadataEnneagram.appendChild(enneagram3);

const enneagram4 = document.createElement("option");
enneagram4.value = "individualist";
enneagram4.textContent = "I desire to be unique and individualistic";
metadataEnneagram.appendChild(enneagram4);

const enneagram5 = document.createElement("option");
enneagram5.value = "observer";
enneagram5.textContent = "I focus on knowledge and understanding";
metadataEnneagram.appendChild(enneagram5);

const enneagram6 = document.createElement("option");
enneagram6.value = "loyalist";
enneagram6.textContent = "I seek security and avoid conflict";
metadataEnneagram.appendChild(enneagram6);

const enneagram7 = document.createElement("option");
enneagram7.value = "enthusiast";
enneagram7.textContent = "I want to have an impact and be significant";
metadataEnneagram.appendChild(enneagram7);

const enneagram8 = document.createElement("option");
enneagram8.value = "challenger";
enneagram8.textContent = "I enjoy experiencing new things and seeking pleasure";
metadataEnneagram.appendChild(enneagram8);

const enneagram9 = document.createElement("option");
enneagram9.value = "peacemaker";
enneagram9.textContent = "I need to be in control and maintain independence";
metadataEnneagram.appendChild(enneagram9);

metadataModalForm.appendChild(metadataEnneagram);

metadataModalForm.appendChild(document.createElement("br"));


// Strength
const metadataStrengthLabel = document.createElement("label");
metadataStrengthLabel.htmlFor = "metadataStrength";
metadataStrengthLabel.textContent = "Strength: ";
metadataModalForm.appendChild(metadataStrengthLabel);
const metadataStrength = document.createElement("select");
metadataStrength.id = "metadataStrength";

const strength1 = document.createElement("option");
strength1.value = "enjoys taking charge and leading others";
strength1.textContent = "I enjoy taking charge and leading others";
metadataStrength.appendChild(strength1);

const strength2 = document.createElement("option");
strength2.value = "is skilled at finding creative solutions to problems";
strength2.textContent = "I am skilled at finding creative solutions to problems";
metadataStrength.appendChild(strength2);

const strength3 = document.createElement("option");
strength3.value = "has a natural ability to connect with and understand others";
strength3.textContent = "I have a natural ability to connect with and understand others";
metadataStrength.appendChild(strength3);

const strength4 = document.createElement("option");
strength4.value = "excels at organizing and creating order in their surroundings";
strength4.textContent = "I excel at organizing and creating order in my surroundings";
metadataStrength.appendChild(strength4);

const strength5 = document.createElement("option");
strength5.value = "is curious and constantly seeking knowledge and learning";
strength5.textContent = "I am curious and constantly seeking knowledge and learning";
metadataStrength.appendChild(strength5);

const strength6 = document.createElement("option");
strength6.value = "has a talent for inspiring and motivating others";
strength6.textContent = "I have a talent for inspiring and motivating others";
metadataStrength.appendChild(strength6);

const strength7 = document.createElement("option");
strength7.value = "is good at analyzing data and making logical decisions";
strength7.textContent = "I am good at analyzing data and making logical decisions";
metadataStrength.appendChild(strength7);

const strength8 = document.createElement("option");
strength8.value = "is adept at adapting to new situations and changes";
strength8.textContent = "I am adept at adapting to new situations and changes";
metadataStrength.appendChild(strength8);

const strength9 = document.createElement("option");
strength9.value = "has a strong work ethic and is dedicated to achieving goals";
strength9.textContent = "I have a strong work ethic and am dedicated to achieving goals";
metadataStrength.appendChild(strength9);

const strength10 = document.createElement("option");
strength10.value = "is skilled at expressing themself through various forms of art";
strength10.textContent = "I am skilled at expressing myself through various forms of art";
metadataStrength.appendChild(strength10);

const strength11 = document.createElement("option");
strength11.value = "possesses a talent for seeing the big picture and future possibilities";
strength11.textContent = "I possess a talent for seeing the big picture and future possibilities";
metadataStrength.appendChild(strength11);

const strength12 = document.createElement("option");
strength12.value = "is good at building and maintaining relationships";
strength12.textContent = "I am good at building and maintaining relationships";
metadataStrength.appendChild(strength12);

const strength13 = document.createElement("option");
strength13.value = "has a knack for identifying and solving complex problems";
strength13.textContent = "I have a knack for identifying and solving complex problems";
metadataStrength.appendChild(strength13);

const strength14 = document.createElement("option");
strength14.value = "is detail-oriented and pays careful attention to quality";
strength14.textContent = "I am detail-oriented and pay careful attention to quality";
metadataStrength.appendChild(strength14);

const strength15 = document.createElement("option");
strength15.value = "possesses a natural ability to communicate effectively";
strength15.textContent = "I possess a natural ability to communicate effectively";
metadataStrength.appendChild(strength15);

const strength16 = document.createElement("option");
strength16.value = "is able to remain calm and composed in stressful situations";
strength16.textContent = "I am able to remain calm and composed in stressful situations";
metadataStrength.appendChild(strength16);

const strength17 = document.createElement("option");
strength17.value = "has a talent for strategizing and planning for the future";
strength17.textContent = "I have a talent for strategizing and planning for the future";
metadataStrength.appendChild(strength17);

const strength18 = document.createElement("option");
strength18.value = "excels at identifying and seizing new opportunities";
strength18.textContent = "I excel at identifying and seizing new opportunities";
metadataStrength.appendChild(strength18);

const strength19 = document.createElement("option");
strength19.value = "is skilled at inspiring and leading teams towards a common goal";
strength19.textContent = "I am skilled at inspiring and leading teams towards a common goal";
metadataStrength.appendChild(strength19);

const strength20 = document.createElement("option");
strength20.value = "possesses a strong analytical mind and enjoy solving puzzles";
strength20.textContent = "I possess a strong analytical mind and enjoy solving puzzles";
metadataStrength.appendChild(strength20);

const strength21 = document.createElement("option");
strength21.value = "has a natural ability to empathize and understand others' emotions";
strength21.textContent = "I have a natural ability to empathize and understand others' emotions";
metadataStrength.appendChild(strength21);

const strength22 = document.createElement("option");
strength22.value = "is adept at identifying patterns and trends in data";
strength22.textContent = "I am adept at identifying patterns and trends in data";
metadataStrength.appendChild(strength22);

const strength23 = document.createElement("option");
strength23.value = "has a talent for coordinating and organizing events or projects";
strength23.textContent = "I have a talent for coordinating and organizing events or projects";
metadataStrength.appendChild(strength23);

const strength24 = document.createElement("option");
strength24.value = "excels at brainstorming ideas and thinking outside the box";
strength24.textContent = "I excel at brainstorming ideas and thinking outside the box";
metadataStrength.appendChild(strength24);

const strength25 = document.createElement("option");
strength25.value = "is good at mediating conflicts and finding resolutions";
strength25.textContent = "I am good at mediating conflicts and finding resolutions";
metadataStrength.appendChild(strength25);

const strength26 = document.createElement("option");
strength26.value = "possesses a strong attention to detail and precision";
strength26.textContent = "I possess a strong attention to detail and precision";
metadataStrength.appendChild(strength26);

const strength27 = document.createElement("option");
strength27.value = "has a natural ability to communicate persuasively";
strength27.textContent = "I have a natural ability to communicate persuasively";
metadataStrength.appendChild(strength27);

const strength28 = document.createElement("option");
strength28.value = "is skilled at remaining focused and committed to tasks";
strength28.textContent = "I am skilled at remaining focused and committed to tasks";
metadataStrength.appendChild(strength28);

const strength29 = document.createElement("option");
strength29.value = "possesses a talent for expressing themself through the written word";
strength29.textContent = "I possess a talent for expressing myself through the written word";
metadataStrength.appendChild(strength29);

const strength30 = document.createElement("option");
strength30.value = "is adept at envisioning and planning for the future";
strength30.textContent = "I am adept at envisioning and planning for the future";
metadataStrength.appendChild(strength30);

const strength31 = document.createElement("option");
strength31.value = "has a knack for building and nurturing collaborative relationships";
strength31.textContent = "I have a knack for building and nurturing collaborative relationships";
metadataStrength.appendChild(strength31);

const strength32 = document.createElement("option");
strength32.value = "is good at analyzing complex data and drawing insights";
strength32.textContent = "I am good at analyzing complex data and drawing insights";
metadataStrength.appendChild(strength32);

const strength33 = document.createElement("option");
strength33.value = "has a talent for creating structure and organization";
strength33.textContent = "I have a talent for creating structure and organization";
metadataStrength.appendChild(strength33);

const strength34 = document.createElement("option");
strength34.value = "excels at motivating and empowering others to reach their potential";
strength34.textContent = "I excel at motivating and empowering others to reach their potential";
metadataStrength.appendChild(strength34);

metadataModalForm.appendChild(metadataStrength);

metadataModalForm.appendChild(document.createElement("br"));


// DISC
const metadataDISCLabel = document.createElement("label");
metadataDISCLabel.htmlFor = "metadataDISC";
metadataDISCLabel.textContent = "DISC: ";
metadataModalForm.appendChild(metadataDISCLabel);
const metadataDISC = document.createElement("select");
metadataDISC.id = "metadataDISC";

const disc1 = document.createElement("option");
disc1.value = "assertive and results-oriented";
disc1.textContent = "Dominant: Assertive and Results-oriented";
metadataDISC.appendChild(disc1);

const disc2 = document.createElement("option");
disc2.value = "enthusiastic and people-oriented";
disc2.textContent = "Influential: Enthusiastic and People-oriented";
metadataDISC.appendChild(disc2);

const disc3 = document.createElement("option");
disc3.value = "supportive and harmony-oriented";
disc3.textContent = "Steady: Supportive and Harmony-oriented";
metadataDISC.appendChild(disc3);

const disc4 = document.createElement("option");
disc4.value = "analytical and detail-oriented";
disc4.textContent = "Conscientious: Analytical and Detail-oriented";
metadataDISC.appendChild(disc4);

metadataModalForm.appendChild(metadataDISC);

metadataModalForm.appendChild(document.createElement("br"));

// create submit button and event listener
const metadataFormSubmitButton = document.createElement("button");
metadataFormSubmitButton.textContent = "Submit";
metadataFormSubmitButton.id = "metadataFormSubmitButton";
metadataFormSubmitButton.type = "submit";
metadataModalForm.appendChild(metadataFormSubmitButton);

metadataModalForm.addEventListener('submit', async function(event) {
	event.preventDefault();
	const submitMemory = document.getElementById("memoryInput").value
	const submitIQ = document.getElementById("metadataIQ").value
	const submitAge = document.getElementById("metadataAge").value
	const submitLocation = document.getElementById("metadataLocation").value
	const submitJob = document.getElementById("metadataJob").value
	const submitHobby = document.getElementById("metadataHobby").value
	const submitMood = document.getElementById("metadataMood").value
	const submitGender = document.getElementById("metadataGender").value
	const submitZodiac = document.getElementById("metadataZodiac").value
	const submitPersonality = document.getElementById("metadataPersonality").value
	const submitEnneagram = document.getElementById("metadataEnneagram").value
	const submitStrength = document.getElementById("metadataStrength").value
	const submitDISC = document.getElementById("metadataDISC").value

	console.log('Memory Length: ', submitMemory)
	console.log("[][] Digital Persona [][]")
	console.log(`A ${submitMood} ${submitAge} year old ${submitGender} ${submitZodiac} ${submitJob} ${submitEnneagram} from ${submitLocation} with a ${submitPersonality} personality type, an IQ of ${submitIQ}, enjoys ${submitHobby}, is ${submitDISC} and ${submitStrength}.`)

	const metadata = {
		submitMemory,
		submitIQ,
		submitAge,
		submitLocation,
		submitJob,
		submitHobby,
		submitMood,
		submitGender,
		submitZodiac,
		submitPersonality,
		submitEnneagram,
		submitStrength,
		submitDISC
	  };
	
	  try {
		const cid = await uploadFileToIPFS(JSON.stringify(metadata), 'application/json');
		if (cid) {
			closeMetadataModal();
			document.getElementById(MODAL_METADATA_ID).value = "ipfs://" + cid;
			document.getElementById("metadata_drop_zone").classList.add('drop-success');
		}
		console.log('CID:', cid);
	  } catch (error) {
		alert('Error uploading file to IPFS.');
		console.error(error);
	  }

});

// append the close button and form to the modal content container
metadataModalContent.appendChild(closeBtn);
metadataModalContent.appendChild(metadataModalForm);

// append the modal content container to the main modal container
metadataModal.appendChild(metadataModalContent);

// append the main modal container to the body
document.body.appendChild(metadataModal);
