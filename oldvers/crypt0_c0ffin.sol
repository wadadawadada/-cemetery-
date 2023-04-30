Crypto Coffin is currently deployed:
Mumbai: 0x0646b6a796974A0E9Bea4c093e6a1B1acD6cf7BE

// v0.4
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
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Receiver.sol";

contract Crypt0C0ffin is ERC1155, Ownable, ReentrancyGuard {
    uint256 private _currentCoffinId = 1;
    uint256 public MINT_COST = 0.001 ether;
    uint256 public constant TWO_YEARS = 2 * 365 days;

    struct Coffin {
        string occupant;
        uint256 dateBorn;
        string epitaph;
        string metadata;
        address minter;
        uint256 dateBuried;
        uint256 resurrectTime;
        address beneficiary;
    }

    mapping(uint256 => Coffin) private _coffins;

    event Buried(
        uint256 tokenId,
        string occupant,
        uint256 dateBorn,
        string epitaph,
        string metadata,
        uint256 dateBuried,
        uint256 resurrectTime
    );
    event Resurrected(uint256 tokenId);

    constructor() ERC1155("") {}

    function setURI(string memory newURI) external onlyOwner {
        _setURI(newURI);
    }

    function mint(
        string memory occupant,
        uint256 dateBorn,
        string memory epitaph,
        string memory metadata,
        uint256 resurrectTime,
        address beneficiary
    ) external payable nonReentrant {
        require(msg.value >= MINT_COST, "Insufficient payment for coffin.");
        require(beneficiary != address(0), "Beneficiary address is required.");

        uint256 tokenId = _currentCoffinId++;

        _mint(msg.sender, tokenId, 1, "");
        _coffins[tokenId] = Coffin(
            occupant,
            dateBorn,
            epitaph,
            metadata,
            msg.sender,
            block.timestamp,
            resurrectTime,
            beneficiary
        );

        emit Buried(
            tokenId,
            occupant,
            dateBorn,
            epitaph,
            metadata,
            block.timestamp,
            resurrectTime
        );

        _checkForResurrectionAndTransfer(tokenId);
    }

    function tokenDetails(uint256 tokenId)
        external
        view
        returns (
            string memory occupant,
            uint256 dateBorn,
            string memory epitaph,
            string memory metadata,
            address minter,
            uint256 dateBuried,
            uint256 resurrectTime,
            address beneficiary
        )
    {
        require(_exists(tokenId), "Coffin does not exist");
        Coffin storage coffin = _coffins[tokenId];
        occupant = coffin.occupant;
        dateBorn = coffin.dateBorn;
        epitaph = coffin.epitaph;
        metadata = coffin.metadata;
        minter = coffin.minter;
        dateBuried = coffin.dateBuried;
        resurrectTime = coffin.resurrectTime;
        beneficiary = coffin.beneficiary;
    }

    function totalSupply() public view returns (uint256) {
        return _currentCoffinId - 1;
    }

    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw.");
        Address.sendValue(payable(owner()), balance);
    }

    function _exists(uint256 tokenId) internal view returns (bool) {
        return tokenId > 0 && tokenId < _currentCoffinId;
    }

    function _checkForResurrectionAndTransfer(uint256 tokenId) private {
        Coffin storage coffin = _coffins[tokenId];
        if (coffin.resurrectTime <= block.timestamp) {
            emit Resurrected(tokenId);
            safeTransferFrom(coffin.minter, coffin.beneficiary, tokenId, 1, "");
        }
    }

    function resurrectUnclaimedCoffin(uint256 tokenId) external {
        require(_exists(tokenId), "Coffin does not exist");
        Coffin storage coffin = _coffins[tokenId];
        require(
            block.timestamp >= coffin.resurrectTime + TWO_YEARS,
            "Cannot retrieve coffin, requires unclaimed by Beneficiary for 2 years."
        );
        safeTransferFrom(address(this), msg.sender, tokenId, 1, "");
    }
}