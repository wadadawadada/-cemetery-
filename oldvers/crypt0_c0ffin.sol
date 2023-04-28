Crypto Coffin is currently deployed:
Mumbai: 0xce896C526d0baFD33b15457992aC0a7Ef14c258a

//
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

contract crypt0c0ffin is ERC1155, Ownable, ReentrancyGuard {
    uint256 private _currentCoffinId = 0;
    uint256 public constant MINT_COST = 0.001 ether;

    mapping(uint256 => string) private _occupant;
    mapping(uint256 => uint256) private _dateBorn;
    mapping(uint256 => string) private _epitaph;
    mapping(uint256 => string) private _metadata;

    event Buried(uint256 tokenId, string occupant, uint256 dateBorn, string epitaph, string metadata);

    constructor() ERC1155("") {}

    function setURI(string memory newURI) external onlyOwner {
        _setURI(newURI);
    }

    function mint(string memory occupant, uint256 dateBorn, string memory epitaph, string memory metadata) 
        external 
        payable 
        nonReentrant 
    {
        require(msg.value >= MINT_COST, "Insufficient payment for coffin.");

        uint256 tokenId = _getNextTokenId();

        _mint(msg.sender, tokenId, 1, "");
        _occupant[tokenId] = occupant;
        _dateBorn[tokenId] = dateBorn;
        _epitaph[tokenId] = epitaph;
        _metadata[tokenId] = metadata;

        emit Buried(tokenId, occupant, dateBorn, epitaph, metadata);
        _incrementTokenId();
    }

    function tokenDetails(uint256 tokenId) 
        external 
        view 
        returns (
            string memory occupant, 
            uint256 dateBorn, 
            string memory epitaph, 
            string memory metadata
        ) 
    {
        require(_exists(tokenId), "Coffin does not exist");
        occupant = _occupant[tokenId];
        dateBorn = _dateBorn[tokenId];
        epitaph = _epitaph[tokenId];
        metadata = _metadata[tokenId];
    }

    function totalSupply() public view returns (uint256) {
        return _currentCoffinId;
    }

    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw.");
        Address.sendValue(payable(owner()), balance);
    }

    function _getNextTokenId() private view returns (uint256) {
        return _currentCoffinId;
    }

    function _incrementTokenId() private {
        _currentCoffinId++;
    }

    function _exists(uint256 tokenId) internal view returns (bool) {
        return bytes(_occupant[tokenId]).length > 0;
    }
}