///////////////////////
// crypt0-cemetery  //
/////////////////////

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
const UNLOCK_METADATA_BUTTON_ID = "unlockMetadataButton"
const EXPOSE_METADATA_BUTTON_ID = "exposeMetadataButton";

const resurrectButton = document.createElement("button");
resurrectButton.textContent = "RESURRECT";
resurrectButton.id = RESURRECT_BUTTON_ID;
resurrectButton.classList.add("resurrectButton")

const buryAgainButton = document.createElement("button");
buryAgainButton.textContent = "BURY AGAIN";
buryAgainButton.id = BURY_AGAIN_BUTTON_ID;
buryAgainButton.classList.add("buryAgainButton")

const unlockMetadataButton = document.createElement("button");
unlockMetadataButton.textContent = "UNLOCK METADATA";
unlockMetadataButton.id = UNLOCK_METADATA_BUTTON_ID;
unlockMetadataButton.classList.add("unlockMetadataButton")

const exposeMetadataButton = document.createElement("button");
exposeMetadataButton.textContent = "EXPOSE METADATA";
exposeMetadataButton.id = EXPOSE_METADATA_BUTTON_ID;
exposeMetadataButton.classList.add("exposeMetadataButton")

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

async function loadWeb3() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });
  } else {
    alert("Please install MetaMask to use this site.");
  }
}

async function loadBlockchainData() {
  window.web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.getAccounts();
  window.account = accounts[0];
  window.contract = new web3.eth.Contract(abi, contractAddress);
  document.getElementById(
    "address"
  ).textContent = `Connected: ${window.account}`;
  const networkId = await web3.eth.net.getId();
  if (networkId !== 80001) {
    setStatus("Switch to Mumbai");
  } else {
    setStatus("Welcome to the cemetery");
  }
  updateGraveNumbers();
  removeConnectButton();
}

async function initApp() {
  await loadWeb3();
  await loadBlockchainData();
}

async function getTotalSupply() {
  const totalSupply = await window.contract.methods.totalSupply().call();
  return totalSupply;
}

async function unlockCoffinMetadata(graveNumber) {
  const tx = await window.contract.methods
    .unlockMetadata(graveNumber)
    .send({ from: window.account });
  console.log(tx);
  return tx;
}

async function exposeCoffinMetadata(graveNumber) {
  const tx2 = await window.contract.methods
    .exposeMetadata(graveNumber)
    .call({ from: window.account });
  console.log(tx2);
  return tx2;
}

async function setApprovalForAll(beneficiary) {
  try {
    const userAddress = window.account;
    const tx = await contract.methods
      .setApprovalForAll(beneficiary, true)
      .send({
        from: userAddress,
      });

    console.log("Transaction:", tx);
    return tx;
  } catch (error) {
    console.error("Error setting approval for all", error);
    throw error;
  }
}

async function getNFTDetails(graveNumber) {
  try {
    setStatus("Looking at a grave");
    const nftDetails = await window.contract.methods
      .tokenDetails(graveNumber)
      .call();

    const tokenDetailsElement = document.getElementById("tokenDetailsModal");
    tokenDetailsElement.classList.add("token-details-modal");
    tokenDetailsElement.innerHTML = "";

    const closeDetailsModalButton = document.createElement("div");
    closeDetailsModalButton.classList.add("close-details-modal-button");
    closeDetailsModalButton.innerText = "X";
    closeDetailsModalButton.addEventListener("click", closeDetailsModal);
    tokenDetailsElement.appendChild(closeDetailsModalButton);

    const coffinId = document.createElement("div");
	coffinId.classList.add("coffinId");
    coffinId.innerText = `Grave: ${nftDetails.id}`;
    tokenDetailsElement.appendChild(coffinId);

    const occupant = document.createElement("div");
	occupant.classList.add("occupant")
    occupant.innerText = `Occupant: ${nftDetails.occupant}`;
    tokenDetailsElement.appendChild(occupant);

    const epitaph = document.createElement("div");
	epitaph.classList.add("epitaph")
    epitaph.innerText = `Epitaph: ${nftDetails.epitaph}`;
    tokenDetailsElement.appendChild(epitaph);

    const dateBorn = document.createElement("div");
	dateBorn.classList.add("dateBorn")
    const year = nftDetails.dateBorn.substring(0, 4);
    const month = nftDetails.dateBorn.substring(4, 6);
    const day = nftDetails.dateBorn.substring(6, 8);
    const formattedDate = `${year}-${month}-${day}`;
	formattedDate.classList.add("formattedDate");
    dateBorn.innerText = `Date Born: ${formattedDate}`;
    tokenDetailsElement.appendChild(dateBorn);

    const coffinDateBuriedCheck = document.createElement("div");
	coffinDateBuriedCheck.classList.add("coffinDateBuriedCheck");
    const gmtIndex = Date(nftDetails.dateBuried).indexOf("GMT");
    const gmtFormatted = Date(nftDetails.dateBuried).slice(0, gmtIndex) + "UTC";
	gmtFormatted.classList.add("gmtFormatted");
    coffinDateBuriedCheck.innerText = `Buried: ${gmtFormatted}`;
    tokenDetailsElement.appendChild(coffinDateBuriedCheck);

    const resurrectTime = document.createElement("div");
	resurrectTime.classList.add("resurrectTime");
    const date = new Date(nftDetails.resurrectTime * 1000);
    const dateString = date.toUTCString().replace("GMT", "UTC");
	dateString.classList.add("dateString");
    resurrectTime.innerText = `Resurrection: ${dateString}`;
    tokenDetailsElement.appendChild(resurrectTime);

    const currentOwner = document.createElement("div");
	currentOwner.classList.add("currentOwner");
    currentOwner.innerText = `Current Owner: ${nftDetails.currentOwner.slice(0,6) + '...' + nftDetails.currentOwner.slice(38,42)}`;
    tokenDetailsElement.appendChild(currentOwner);

    const beneficiary = document.createElement("div");
	beneficiary.classList.add("beneficiary");
    beneficiary.innerText = `Beneficiary: ${nftDetails.beneficiary.slice(0,6) + '...' + nftDetails.beneficiary.slice(38,42)}`;
    tokenDetailsElement.appendChild(beneficiary);

    const coffinBuryCount = document.createElement("div");
	coffinBuryCount.classList.add("coffinBuryCount");
    coffinBuryCount.innerText = `This Coffin has been buried ${nftDetails.buriedCounter} times.`;
    tokenDetailsElement.appendChild(coffinBuryCount);

    const resInstructions = document.createTextNode(
      "Only the Beneficiary can Resurrect: "
    );
	resInstructions.classList.add("resInstructions")
    tokenDetailsElement.appendChild(resInstructions);

    tokenDetailsElement.appendChild(resurrectButton);
    resurrectButton.addEventListener("click", () => {
      const graveNumberValue = graveNumber;
      checkResurrectionAndTransfer(graveNumberValue);
    });
    const buryAgainDiv = document.createElement("div");
    tokenDetailsElement.appendChild(buryAgainDiv);
    const buryAgainInstructions = document.createTextNode(
      "After resurrection, the Beneficiary can bury the coffin again with a new Beneficiary and Resurrection Time: "
    );
    tokenDetailsElement.appendChild(buryAgainInstructions);

    const br = document.createElement("br");
    tokenDetailsElement.appendChild(br);

    const newBeneficiary = document.createElement("input");
    newBeneficiary.id = NEW_BENEFICIARY_ID;
    newBeneficiary.type = "text";
	newBeneficiary.classList.add("newBeneficiary")
    const newResurrectTime = document.createElement("input");
    newResurrectTime.id = NEW_RESURRECTTIME_ID;
    newResurrectTime.type = "datetime-local";
	newResurrectTime.classList.add("newResurrectTime")

    tokenDetailsElement.appendChild(newBeneficiary);
    tokenDetailsElement.appendChild(newResurrectTime);
    tokenDetailsElement.appendChild(buryAgainButton);
    buryAgainButton.addEventListener("click", () => {
      const graveNumberValue = graveNumber;
      const newBeneficiaryValue =
        document.getElementById(NEW_BENEFICIARY_ID).value;
      const newResurrectTimeValue =
        document.getElementById(NEW_RESURRECTTIME_ID).value;
      const UTCNewResurrectTime = Date.parse(newResurrectTimeValue) / 1000;
      updateCoffin(graveNumberValue, UTCNewResurrectTime, newBeneficiaryValue);
    });


    const hr = document.createElement("hr");
    tokenDetailsElement.appendChild(hr);

    const mediaUrl = document.createElement("div");
	mediaUrl.classList.add("mediaUrl")
    mediaUrl.innerText = `Media: ${nftDetails.mediaUrl}`;
    tokenDetailsElement.appendChild(mediaUrl);

    if (nftDetails.mediaUrl.endsWith(".json")) {
      fetch("https://ipfs.io/ipfs/" + nftDetails.mediaUrl.slice(7))
        .then((response) => response.json())
        .then((jsonData) => {
          for (const [key, value] of Object.entries(jsonData)) {
            const dataElement = document.createElement("div");
			dataElement.classList.add("dataElement")

            if (key === "image") {
              const imgElement = document.createElement("img");
			  imgElement.classList.add("imgElement")
              imgElement.src = "https://ipfs.io/ipfs/" + value.slice(7);
              imgElement.alt = "image";
              imgElement.style.maxWidth = "420px";
              imgElement.style.maxHeight = "420px";
              imgElement.style.display = "block";
              imgElement.style.margin = "0 auto";
              dataElement.appendChild(imgElement);
            } else {
              dataElement.innerText = `${key}: ${value}`;
            }

            tokenDetailsElement.appendChild(dataElement);
          }
        })
        .catch((error) => {
          console.error("Error fetching JSON data:", error);
        });
    }

    if (nftDetails.mediaUrl.startsWith("ipfs://")) {
      const mediaContainer = document.createElement("div");
      mediaContainer.classList.add("mediaContainer");
      mediaContainer.style.textAlign = "center";
      const mediaUrl = `https://ipfs.io/ipfs/${nftDetails.mediaUrl.slice(7)}`;
      const mediaType = mediaUrl.split(".").pop().toLowerCase();
      let mediaElement;

      if (["mp4", "webm", "ogv"].includes(mediaType)) {
        mediaElement = document.createElement("video");
        mediaElement.setAttribute("controls", "");
      } else if (["mp3", "wav", "ogg"].includes(mediaType)) {
        mediaElement = document.createElement("audio");
        mediaElement.setAttribute("controls", "");
      } else {
        mediaElement = document.createElement("img");
        mediaElement.setAttribute("alt", "-->Error finding media ");
      }

      mediaElement.setAttribute("src", mediaUrl);
      mediaElement.classList.add("mediaElement");
      mediaElement.style.maxWidth = "420px";
      mediaElement.style.maxHeight = "420px";
      mediaElement.style.display = "block";
      mediaElement.style.margin = "0 auto";

      mediaContainer.appendChild(mediaElement);
      tokenDetailsElement.appendChild(mediaContainer);
    }

      // try to get metadata
    const hr2 = document.createElement("hr");
    tokenDetailsElement.appendChild(hr2);
        // check if metadata has been exposed
    const isOpen = document.createElement("div");
	isOpen.classList.add("isOpen")
    isOpen.innerText = `Metadata Exposed: ${nftDetails.isOpen}`;
    tokenDetailsElement.appendChild(isOpen);
    const metadataInstructions = document.createTextNode(
      "Each coffin contains locked metadata. Once unlocked, the metadata is forever exposed."
    );
	metadataInstructions.classList.add("metadataInstructions")
    tokenDetailsElement.appendChild(metadataInstructions);
        // add metadata button and listener
        tokenDetailsElement.appendChild(unlockMetadataButton);
        unlockMetadataButton.addEventListener("click", async () => {
        
          await unlockCoffinMetadata(graveNumber);
          
        });

        tokenDetailsElement.appendChild(exposeMetadataButton);
        exposeMetadataButton.addEventListener("click", async () => {
          const metadata = await exposeCoffinMetadata(graveNumber);
          displayMetadata.textContent = `Metadata: ${metadata}`;
        });

        const displayMetadata = document.createElement("div");
		displayMetadata.classList.add("displayMetadata")
        tokenDetailsElement.appendChild(displayMetadata);

    
    showDetailsModal();
  } catch (error) {
    console.error(error);
  }
}

async function checkResurrectionAndTransfer(graveNumber) {
  setStatus("Attempting Resurrection");
  try {
    const result = await window.contract.methods
      .checkForResurrectionAndTransfer(graveNumber)
      .send({ from: window.account });
    setStatus("Successfully resurrected coffin");
    console.log(result);
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
    const result = await window.contract.methods
      .updateCoffin(graveNumber, resurrectTime, beneficiary)
      .send({ from: window.account });
    setStatus("Successfully buried coffin");
    console.log(result);
  } catch (e) {
    setStatus("Failed to approve new Beneficiary");
    console.log(e);
  }
}

async function mintNFT(
  occupant,
  birth,
  epitaph,
  mediaUrl,
  metadata,
  resurrectTime,
  beneficiary
) {
  try {
    const MINT_COST = window.web3.utils.toWei("0.001", "ether");
    await window.contract.methods
      .mint(occupant, birth, epitaph, mediaUrl, metadata, resurrectTime, beneficiary)
      .send({ from: window.account, value: MINT_COST });
    updateGraveNumbers();
  } catch (error) {
    console.error(error);
    setStatus("Something went terribly wrong");
  }
}

async function updateGraveNumbers() {
  clearTableBody();
  const totalSupply = await getTotalSupply();
  console.log("total supply: ", totalSupply);
  let graveCounter = startGraveNumber;
  for (let i = 0; i < 8; i++) {
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

        cell.appendChild(graveNumberSpan);
        cell.appendChild(document.createElement("br"));
        graveCounter++;
        cell.appendChild(skullSpan);
      } else {
        cell.appendChild(toolsSpan);
      }

      cell.appendChild(document.createElement("br"));
      row.appendChild(cell);
      //////////////////////////////////////////////////////
      if (cell.textContent != "⚒") {
        link.textContent = "GRAVE";
        link.classList.add("graveButton"); // Add the graveButton CSS class
        const graveNumber = cell.textContent.replace("☠", "");
        console.log("updateGrave graveNumber: ", graveNumber);
        link.addEventListener("click", () => getNFTDetails(graveNumber));

        cell.addEventListener("mouseover", () => cell.classList.add("grave"));
        cell.addEventListener("mouseout", () => cell.classList.remove("grave"));
      } else {
        link.textContent = "BURY";
        link.classList.add("buryButton"); // Add the buryButton CSS class
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
    } catch(e) {
      setStatus("Failed to set Beneficiary.");
    }
    setStatus("The coffin is buried.");
  } else {
    setStatus("Please enter coffin details.");
  }
});

document.getElementById(CLOSE_MODAL_ID).addEventListener("click", closeModal);
document.getElementById(CLOSE_DETAILS_MODAL_ID).addEventListener("click", closeDetailsModal);

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

function showModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  modal.insertBefore(statusBar, modal.firstChild);
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  document.getElementById("statusBar").appendChild(statusBar);
  setStatus("Welcome to the cemetery");
}

function showDetailsModal() {
  const tokenDetailsModal = document.getElementById("tokenDetailsModal");
  tokenDetailsModal.style.display = "block";
  tokenDetailsModal.insertBefore(statusBar, tokenDetailsModal.firstChild);
}

function closeDetailsModal() {
  const tokenDetailsModal = document.getElementById("tokenDetailsModal");
  tokenDetailsModal.style.display = "none";
  document.getElementById("statusBar").appendChild(statusBar);
  setStatus("Welcome to the cemetery");
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
    requestedTableNumber = 1;
  }
});
