Crypto Coffin is currently deployed:
Mumbai: 0xb18F2B1e791956fab26E7341C7DebFeF91222f9f

resurrectTime is always stored as UTC unixtimestamp, not local client time.

// v0.5
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
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Crypt0C0ffin is ERC1155, Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    uint256 private _currentCoffinId = 1;
    uint256 public MINT_COST = 0.001 ether;

    struct Coffin {
        uint256 tokenId;
        string occupant;
        uint256 dateBorn;
        string epitaph;
        string metadata;
        address minter;
        uint256 dateBuried;
        uint256 resurrectTime;
        address beneficiary;
        bool isUpdated;
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
    event Buried_Again(uint256 tokenId, uint256 newResurrectTime, address newBeneficiary);

    constructor() ERC1155("") {}

    function mint(
        string memory occupant,
        uint256 dateBorn,
        string memory epitaph,
        string memory metadata,
        uint256 resurrectTime,
        address beneficiary
    ) external payable nonReentrant {
        require(msg.value >= MINT_COST, "Insufficient payment for coffin");
        require(beneficiary != address(0), "Beneficiary address is required");

        uint256 tokenId = _currentCoffinId++;

        _mint(msg.sender, tokenId, 1, "");
        _coffins[tokenId] = Coffin(
            tokenId,
            occupant,
            dateBorn,
            epitaph,
            metadata,
            msg.sender,
            block.timestamp,
            resurrectTime,
            beneficiary,
            false
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
    }

    function tokenDetails(uint256 tokenId)
        external
        view
        returns (
            uint256 id,
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
        id = coffin.tokenId;
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

    function _exists(uint256 tokenId) internal view returns (bool) {
        return tokenId > 0 && tokenId < _currentCoffinId;
    }

    function checkForResurrectionAndTransfer(uint256 tokenId) external {
        Coffin storage coffin = _coffins[tokenId];
        require(
            coffin.resurrectTime <= block.timestamp,
            "Incorrect time for resurrection"
        );
        emit Resurrected(tokenId);
        safeTransferFrom(coffin.minter, coffin.beneficiary, tokenId, 1, "");
    }

    function updateCoffin(uint256 tokenId, uint256 newResurrectTime, address newBeneficiary) external {
        require(newBeneficiary != address(0), "Beneficiary address is required");
        Coffin storage coffin = _coffins[tokenId];
        require(msg.sender == coffin.beneficiary, "Only Beneficiary can update");
        require(!coffin.isUpdated, "Coffin is buried");

        coffin.resurrectTime = newResurrectTime;
        coffin.beneficiary = newBeneficiary;
        coffin.isUpdated = true;

        emit Buried_Again(tokenId, newResurrectTime, newBeneficiary);
    }

    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");
        payable(owner()).transfer(balance);
    }
}