Crypto Coffin is currently deployed:
Mumbai: 0x8887b0C690aD14529C7066f9E475a44AEba36Bd7

resurrectTime is always stored as UTC unixtimestamp, not local client time.

// v0.8
// crypt0-c0ffin crypt0-c0ffin crypt0-c0ffin crypt0-c0ffin
//         ▐█╩╩███▒▒▒▒▒╢▓╢╢▓╢▒▓▀-░░ └---████╩▀█`
//         ▐█  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█▀▀█▀▀█▀▀▀▀═ ▐█`
//        ▄▌▀,██▄                         ▄██ ▀▄▄
//        █▌ ███▌                        ▐████ ██
//      ██- ╔██             ▐█U          " ███ `▐█`
//      ██ ▐███              █U            ████░▐█
//     ▄█▀ ▐█▀▀  ,▄▄▄▄▄▄▄▄▄▄▄█▌▄▄▄▄▄▄▄▄▄▓▄ ▀▀██▄▄▀▄,
//    ▐█╫ ▄██    '▀▀▀▀▀▀▀▀▀▀▀█▌▀▀▀▀▀▀▀▀▀██   ████ ██
//    ▐█║ ███`    `          █▌     '``"`▀  ─████ ██
//    ▐▀╢╖█▌                 █▌                ██▄▀▀▌
//   █▌ ███▌                 ▀                 ███  █▌
//   █████   ╙        '      █U     "       *   ▐████▌
//    ▐███   ,   ,,,██      ¬█▌      ▐█,,       ▐███,
//   ██▒██  m█▌.ƒ'▀▀         ▀         ▀`V ▄██  ▐█▀▐█▌
//    ▐█  █▌   █▌                         ▄µ "─█▌ ██
//    ▐█∩m▀▀   █▌  ▄▄▄▄▄▄▄█▄▄ ▄▄▄▄▄██▄▄  ▐█▌   ▀▀ ██
//    ▐█▒▒█▌ ██,,▐███▌,-;▄███ ███▌▒▒▒████,,██ ,██ ██
//    ▐█▒▒▀▒%▀▀▀██▀▀▀▀▀░▀▀███ ███▀-"▀▀▀▀██▀▀▀ ▀▀▀ ██
//      ████████▌`  ███████▌   ▐█████▌ ███████  ▐█`
//      ╟▄ ╒▄▄▄▄ ▐█▄▄█████*██▄██∞█████▄██▀▄▄▄▄█  ▄
//      ██ ▐█▀`` '``▐▀```` █████ ```````'ß░░░██ ▐█U
//      ██ ╒▄▀▀██▄▄▄    ╛ ██████▄      ▄▄▄██▌▄▄ ▐█U
//      '▀█▌▀  ▀▀████▌    ███████    ▐████`!'▀`██`
//        █▌ ██" ╠'████.   ╛       ▐███╝╜▒ ███⌐██
//        ▄⌐ ▄▄    ▄▄█▀  ▄ ,, ,  ,.╘▀█▄    ▄▄▄ ▄▄
//        ▀██▀█▄   ███░,▐█░██░█▌ ██ ▒██    ██▀█▀▀
//         ▐█ ██   ███▀▀▀███████▄██▀▀██   ]█▌▐█
//         ╟╙ ██ ╚ ███████░██ █▌ ██████`ⁿ ,█▌▐█-
//         ▐█N¬█▌  ▀██▄╢▐█'▀█░▀▌ █▌`▄██  ▐█Ü █
//         ▐▀  █▌    ▀██▄▄       ▄▄██▌   ╘█U ▀
//         ▐█  █▌     '▀█████▄█████▀  ,  ]█╖▐█
//           ██ ██                      ██ ██
//           ██ ██                      ██ ██
//           ██ ██████████████████████████ ██
//           ██,██▄▄▄▄▄▄▌▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄██▄██
//            ████,,`,,,`,▄,,,,,▐,, ▒,└ ███▌
//             █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▌
//
//
// SPDX-License-Identifier: GNU AGPLv3
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Crypt0C0ffin is ERC1155, Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    uint256 private _currentCoffinId = 1;
    uint256 public coffinCost = 0.001 ether;

    struct Coffin {
        uint256 tokenId;
        string occupant;
        uint256 dateBorn;
        string epitaph;
        string mediaUrl;
        string metadata;
        bool isOpen;
        address minter;
        uint256 dateBuried;
        uint256 resurrectTime;
        address beneficiary;
        address currentOwner;
        bool isUpdated;
        uint256 buriedCounter;
    }

    mapping(uint256 => Coffin) private _coffins;

    event Buried(
        uint256 tokenId,
        string occupant,
        uint256 dateBorn,
        string epitaph,
        string mediaUrl,
        uint256 dateBuried,
        uint256 resurrectTime
    );
    event Resurrected(uint256 tokenId);
    event Buried_Again(
        uint256 tokenId,
        uint256 newResurrectTime,
        address newBeneficiary
    );

    constructor() ERC1155("") {}

    function mint(
        string memory occupant,
        uint256 dateBorn,
        string memory epitaph,
        string memory mediaUrl,
        string memory metadata,
        uint256 resurrectTime,
        address beneficiary
    ) external payable nonReentrant {
        require(msg.value >= coffinCost, "Insufficient payment for coffin");
        require(beneficiary != address(0), "Beneficiary address is required");
        uint256 tokenId = _currentCoffinId++;
        _mint(msg.sender, tokenId, 1, "");
        _coffins[tokenId] = Coffin(
            tokenId,
            occupant,
            dateBorn,
            epitaph,
            mediaUrl,
            metadata,
            false,
            msg.sender,
            block.timestamp,
            resurrectTime,
            beneficiary,
            msg.sender,
            false,
            1
        );

        emit Buried(
            tokenId,
            occupant,
            dateBorn,
            epitaph,
            mediaUrl,
            block.timestamp,
            resurrectTime
        );
    }

    function tokenDetails(uint256 tokenId)
        external
        view
        returns (
            uint256 id,
            string memory occupant,
            uint256 dateBorn,
            string memory epitaph,
            string memory mediaUrl,
            bool isOpen,
            address minter,
            uint256 dateBuried,
            uint256 resurrectTime,
            address beneficiary,
            address currentOwner,
            uint256 buriedCounter
        )
    {
        require(_exists(tokenId), "Coffin does not exist");
        Coffin storage coffin = _coffins[tokenId];
        id = coffin.tokenId;
        occupant = coffin.occupant;
        dateBorn = coffin.dateBorn;
        epitaph = coffin.epitaph;
        mediaUrl = coffin.mediaUrl;
        isOpen = coffin.isOpen;
        minter = coffin.minter;
        dateBuried = coffin.dateBuried;
        resurrectTime = coffin.resurrectTime;
        beneficiary = coffin.beneficiary;
        currentOwner = coffin.currentOwner;
        buriedCounter = coffin.buriedCounter;
    }

    function unlockMetadata(uint256 tokenId) external {
        require(_exists(tokenId), "Coffin does not exist");
        Coffin storage coffin = _coffins[tokenId];
        require(
            msg.sender == coffin.currentOwner,
            "Only Owner can unlock Metadata"
        );
        coffin.isOpen = true;
    }

    function exposeMetadata(uint256 tokenId)
        public
        view
        returns (string memory metadata)
    {
        require(_exists(tokenId), "Coffin does not exist");
        Coffin storage coffin = _coffins[tokenId];
        require(
            msg.sender == coffin.currentOwner,
            "Only Owner can unlock Metadata"
        );
        require(coffin.isOpen == true, "Metadata is still locked");
        return coffin.metadata;
    }

    function totalSupply() public view returns (uint256) {
        return _currentCoffinId - 1;
    }

    function _exists(uint256 tokenId) internal view returns (bool) {
        return tokenId > 0 && tokenId < _currentCoffinId;
    }

    function checkForResurrectionAndTransfer(uint256 tokenId) external {
        Coffin storage coffin = _coffins[tokenId];
        require(
            coffin.resurrectTime <= block.timestamp,
            "Incorrect time for resurrection"
        );
        require(
            msg.sender == coffin.beneficiary,
            "Only Beneficiary can Resurrect"
        );
        emit Resurrected(tokenId);
        safeTransferFrom(
            coffin.currentOwner,
            coffin.beneficiary,
            tokenId,
            1,
            ""
        );
        coffin.currentOwner = msg.sender;
        coffin.isUpdated = false;
    }

    function updateCoffin(
        uint256 tokenId,
        uint256 newResurrectTime,
        address newBeneficiary
    ) external {
        require(
            newBeneficiary != address(0),
            "Beneficiary address is required"
        );
        Coffin storage coffin = _coffins[tokenId];
        require(
            msg.sender == coffin.beneficiary,
            "Only Beneficiary can update"
        );
        require(!coffin.isUpdated, "Coffin is already buried");
        coffin.resurrectTime = newResurrectTime;
        coffin.beneficiary = newBeneficiary;
        coffin.dateBuried = block.timestamp;
        coffin.isUpdated = true;
        coffin.buriedCounter++;
        emit Buried_Again(tokenId, newResurrectTime, newBeneficiary);
    }

    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");
        payable(owner()).transfer(balance);
    }
}
