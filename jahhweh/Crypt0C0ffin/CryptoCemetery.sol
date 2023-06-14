DEPLOYED ON POLYGON
0xebc8f42c8e400109ba0f4d4baa609b662b5f42f6
https://polygonscan.com/address/0xebc8f42c8e400109ba0f4d4baa609b662b5f42f6

// v0.x
// crypt0-c0ff1n crypt0-c0ff1n crypt0-c0ff1n crypt0-c0ff1n
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
// Devs: jahhweh.eth, wadada.eth
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract CryptoCemetery is
    ERC1155,
    Ownable,
    ReentrancyGuard,
    ERC1155Burnable,
    ERC1155Supply
{
    using SafeERC20 for IERC20;

    uint256 private _c0ffin = 1;
    uint256 public immutable c0ffinCost = 0.001 ether;

    struct C0ffin {
        uint256 coffinId;
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

    mapping(uint256 => C0ffin) private _c0ffins;

    event Buried(
        uint256 coffinId,
        string occupant,
        uint256 dateBorn,
        string epitaph,
        string mediaUrl,
        uint256 dateBuried,
        uint256 resurrectTime
    );

    event Resurrected(uint256 coffinId);
    event Unlocked(
        string occupant,
        uint256 dateBorn,
        address beneficiary,
        string mediaUrl,
        string metadata
    );
    event Buried_Again(
        uint256 coffinId,
        uint256 newResurrectTime,
        address newBeneficiary
    );

    constructor()
        ERC1155(
            "https://ipfs.io/ipfs/QmUKb86dLwJg2hsfgv81BEd1eE3eRF4HNpaynaAAVBiqVh"
        )
    {}

    function mint(
        string memory occupant,
        uint256 dateBorn,
        string memory epitaph,
        string memory mediaUrl,
        string memory metadata,
        uint256 resurrectTime,
        address beneficiary
    ) external payable nonReentrant {
        require(msg.value >= c0ffinCost, "Insufficient payment for c0ffin");
        require(beneficiary != address(0), "Beneficiary address is required");
        uint256 coffinId = _c0ffin++;
        _mint(msg.sender, 1, 1, "");
        _c0ffins[coffinId] = C0ffin(
            coffinId,
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
            coffinId,
            occupant,
            dateBorn,
            epitaph,
            mediaUrl,
            block.timestamp,
            resurrectTime
        );
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function uri(uint256 _tokenid)
        public
        pure
        override
        returns (string memory)
    {
        return
            string(
                abi.encodePacked(
                    "https://ipfs.io/ipfs/QmUKb86dLwJg2hsfgv81BEd1eE3eRF4HNpaynaAAVBiqVh"
                )
            );
    }

    function tokenDetails(uint256 coffinId)
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
        require(_exists(coffinId), "C0ffin does not exist");
        C0ffin storage c0ffin = _c0ffins[coffinId];
        id = c0ffin.coffinId;
        occupant = c0ffin.occupant;
        dateBorn = c0ffin.dateBorn;
        epitaph = c0ffin.epitaph;
        mediaUrl = c0ffin.mediaUrl;
        isOpen = c0ffin.isOpen;
        minter = c0ffin.minter;
        dateBuried = c0ffin.dateBuried;
        resurrectTime = c0ffin.resurrectTime;
        beneficiary = c0ffin.beneficiary;
        currentOwner = c0ffin.currentOwner;
        buriedCounter = c0ffin.buriedCounter;
    }

    function unlockMetadata(uint256 coffinId) external {
        require(_exists(coffinId), "C0ffin does not exist");
        C0ffin storage c0ffin = _c0ffins[coffinId];
        require(
            msg.sender == c0ffin.currentOwner,
            "Only Owner can unlock Metadata"
        );
        require(
            msg.sender == c0ffin.beneficiary,
            "Only Beneficiary can unlock Metadata"
        );
        c0ffin.isOpen = true;
        emit Unlocked(
            c0ffin.occupant,
            c0ffin.dateBorn,
            c0ffin.beneficiary,
            c0ffin.mediaUrl,
            c0ffin.metadata
        );
    }

    function exposeMetadata(uint256 coffinId)
        public
        view
        returns (string memory metadata)
    {
        require(_exists(coffinId), "C0ffin does not exist");
        C0ffin storage c0ffin = _c0ffins[coffinId];
        require(c0ffin.isOpen == true, "Metadata is still locked");
        return c0ffin.metadata;
    }

    function totalSupply() public view returns (uint256) {
        return _c0ffin - 1;
    }

    function _exists(uint256 coffinId) internal view returns (bool) {
        return coffinId > 0 && coffinId < _c0ffin;
    }

    function checkForResurrectionAndTransfer(uint256 coffinId) external {
        C0ffin storage c0ffin = _c0ffins[coffinId];
        require(
            c0ffin.resurrectTime <= block.timestamp,
            "Not yet time for Resurrection"
        );
        require(
            msg.sender == c0ffin.beneficiary,
            "Only Beneficiary can Resurrect"
        );
        emit Resurrected(coffinId);
        safeTransferFrom(
            c0ffin.currentOwner,
            c0ffin.beneficiary,
            coffinId,
            1,
            ""
        );
        c0ffin.currentOwner = msg.sender;
        c0ffin.isUpdated = false;
    }

    function updateCoffin(
        uint256 coffinId,
        uint256 newResurrectTime,
        address newBeneficiary
    ) external {
        require(
            newBeneficiary != address(0),
            "Beneficiary address is required"
        );
        C0ffin storage c0ffin = _c0ffins[coffinId];
        require(
            msg.sender == c0ffin.beneficiary,
            "Only Beneficiary can update"
        );
        require(!c0ffin.isUpdated, "C0ffin is already buried");
        c0ffin.resurrectTime = newResurrectTime;
        c0ffin.beneficiary = newBeneficiary;
        c0ffin.dateBuried = block.timestamp;
        c0ffin.isUpdated = true;
        c0ffin.buriedCounter++;
        emit Buried_Again(coffinId, newResurrectTime, newBeneficiary);
    }

    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");
        payable(owner()).transfer(balance);
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override(ERC1155, ERC1155Supply) {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}
