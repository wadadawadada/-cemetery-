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

// Add HTML button element
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

// File picker function
function openFilePicker() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*, application/json';
  input.addEventListener('change', handleFileSelect);
  input.click();
}

// Handle file select function
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

    let lineBreak1 = document.createElement('br');
    container.appendChild(lineBreak1);
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
    

	let lineBreak2 = document.createElement('br');
    container.appendChild(lineBreak2);
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