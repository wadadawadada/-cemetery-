///////////////////////
// crypt0-cemetery  //
/////////////////////
// last version deployed to matic testnet

const contractAddress = "0xAca8337cD0E3c2426f280fF28aA323fc852253c8";
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
				"name": "tokenId",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Resurrected",
		"type": "event"
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "unlockMetadata",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
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
				"internalType": "uint256",
				"name": "tokenId",
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
		"inputs": [],
		"name": "coffinCost",
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
				"name": "tokenId",
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

//////////

const CONTAINER_ID = "container-jahhweh";
const GRAVENAV_ID = "gravenav";
const STATUS_ID = "status";
const ADDRESS_ID = "address";
const MODAL_ID = "modal";
const TOKEN_DETAILS_MODAL_ID = "tokenDetailsModal";
const SUBMIT_MODAL_ID = "submitModal";
const CLOSE_MODAL_ID = "closeModal";
const CLOSE_DETAILS_MODAL_ID = "closeDetailsModal";
const MODAL_OCCUPANT_ID = "modalOccupant";
const MODAL_BIRTH_ID = "modalBirth";
const MODAL_EPITAPH_ID = "modalEpitaph";
const MODAL_MEDIA_URL_ID = "modalMediaUrl";
const MODAL_METADATA_ID = "modalMetadata";
const MODAL_RESURRECTTIME_ID = "modalResurrectTime";
const MODAL_BENEFICIARY_ID = "modalBeneficiary";
const MODAL_GRAVENUMBER_ID = "modalGraveNumber";
const CONNECT_BUTTON_ID = "connectBtn";
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
document.getElementById("container-jahhweh").appendChild(table);

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
    setStatus(networkId !== 80001 ? "Switch to Mumbai" : "Welcome to the cemetery");

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
    const tx = await window.contract.methods.unlockMetadata(graveNumber).send({ from: window.account, nonce });
    console.log(tx);
    return tx;
}

async function exposeCoffinMetadata(graveNumber) {
    const nonce = await window.web3.eth.getTransactionCount(window.account);
    const tx = await window.contract.methods.exposeMetadata(graveNumber).call({ from: window.account, nonce });
    console.log(tx);
    return tx;
}

async function setApprovalForAll(beneficiary) {
    try {
        const userAddress = window.account;
        const tx = await contract.methods.setApprovalForAll(beneficiary, true).send({ from: userAddress });
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
        const tx = await window.contract.methods.checkForResurrectionAndTransfer(graveNumber).send({ from: window.account, nonce });
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
        const tx = await window.contract.methods.updateCoffin(graveNumber, resurrectTime, beneficiary).send({ from: window.account, nonce });
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
        await window.contract.methods.mint(occupant, birth, epitaph, mediaUrl, metadata, resurrectTime, beneficiary).send({ from: window.account, value: MINT_COST, nonce });
        updateGraveNumbers();
    } catch (error) {
        console.error(error);
        setStatus("Something went terribly wrong");
    }
}

async function getNFTDetails(graveNumber) {
	try {
		const userAddress = (await window.web3.eth.getAccounts())[0];
		const nftDetails = await window.contract.methods
			.tokenDetails(graveNumber)
			.call();

		const isUserOwnerOrBeneficiary =
			userAddress === nftDetails.currentOwner ||
			userAddress === nftDetails.beneficiary;

		const tokenDetailsElement = document.getElementById("tokenDetailsModal");
		tokenDetailsElement.classList.add("token-details-modal");
		tokenDetailsElement.innerHTML = "";

		const elements = [
			{
				class: "close-details-modal-button",
				text: "X",
				onClick: closeDetailsModal,
			},
			{ class: "coffinId", text: `Grave: ${nftDetails.id}` },
			{ class: "occupant", text: `Occupant: ${nftDetails.occupant}` },
			{ class: "epitaph", text: `Epitaph: ${nftDetails.epitaph}` },
			{
				class: "dateBorn",
				text: `Date Born: ${nftDetails.dateBorn.substring(0, 4)}-${nftDetails.dateBorn.substring(4, 6)}-${nftDetails.dateBorn.substring(6, 8)}`,
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

		elements.forEach((el) => {
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
		resurrectButton.classList.add("resurrectButton")
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
		buryAgainButton.classList.add("buryAgainButton")

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

		if (nftDetails.mediaUrl.startsWith("ipfs://")) {
			const mediaUrl = `https://ipfs.io/ipfs/${nftDetails.mediaUrl.slice(7)}`;
			displayMedia(mediaUrl, tokenDetailsElement);
		}

		const hr2 = document.createElement("hr");
		tokenDetailsElement.appendChild(hr2);
		const isOpen = document.createElement("div");
		isOpen.classList.add("isOpen")
		isOpen.innerText = `Metadata Exposed: ${nftDetails.isOpen}`;
		tokenDetailsElement.appendChild(isOpen);
		const metadataInstructions = document.createTextNode(
			"Each coffin contains locked metadata. Once unlocked, the metadata is forever exposed."
		);

		tokenDetailsElement.appendChild(metadataInstructions);

		const unlockMetadataButton = document.createElement("button");
		unlockMetadataButton.textContent = "UNLOCK METADATA";
		unlockMetadataButton.id = UNLOCK_METADATA_BUTTON_ID;
		unlockMetadataButton.classList.add("unlockMetadataButton")
		tokenDetailsElement.appendChild(unlockMetadataButton);
		unlockMetadataButton.disabled = !isUserOwnerOrBeneficiary;
		unlockMetadataButton.addEventListener("click", async () => {
			await unlockCoffinMetadata(graveNumber);
		});

		const exposeMetadataButton = document.createElement("button");
		exposeMetadataButton.textContent = "EXPOSE METADATA";
		exposeMetadataButton.id = EXPOSE_METADATA_BUTTON_ID;
		exposeMetadataButton.classList.add("exposeMetadataButton")
		tokenDetailsElement.appendChild(exposeMetadataButton);
		exposeMetadataButton.disabled = !isUserOwnerOrBeneficiary;
		exposeMetadataButton.addEventListener("click", async () => {
			const metadata = await exposeCoffinMetadata(graveNumber);
			displayMetadata.textContent = `Metadata: ${metadata}`;
		});

		const displayMetadata = document.createElement("div");
		displayMetadata.classList.add("displayMetadata")
		tokenDetailsElement.appendChild(displayMetadata);

		showDetailsModal();
	} catch (error) {
		console.error("Error in getNFTDetails:", error);
	}
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

				mediaContainer.appendChild(mediaElement);
				tokenDetailsElement.appendChild(mediaContainer);
			} else {
				throw new Error("Error finding media");
			}
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


					// Check if mediaElement is displayed as a broken icon
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