// v0.x
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
// Devs: jahhweh.eth, wadada.eth
// SPDX-License-Identifier: GNU AGPLv3

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Crypt0C0ffin is ERC1155, Ownable, ReentrancyGuard {
    using Strings for uint256;
    using SafeMath for uint256;

    uint256 private _c0ffinId = 1;
    uint256 public c0ffinCost = 0.01 ether;
    bool public gates0pen = true;

    struct C0ffin {
        uint256 c0ffinId;
        string occupant;
        uint256 dateBorn;
        string epitaph;
        string mediaUrl;
        string metadata;
        address minter;
        uint256 dateBuried;
    }

    mapping(uint256 => C0ffin) private _c0ffins;

    event Buried(
        uint256 indexed c0ffinId,
        string occupant,
        uint256 dateBorn,
        string epitaph,
        string mediaUrl,
        uint256 dateBuried
    );

    constructor(string memory crypt) ERC1155(crypt) {}

    function cemeteryGate() external onlyOwner {
        gates0pen = !gates0pen;
    }

    function mint(
        string memory occupant,
        uint256 dateBorn,
        string memory epitaph,
        string memory mediaUrl,
        string memory metadata
    ) external payable nonReentrant {
        require(gates0pen, "The cemetery is cl0sed");
        require(msg.value >= c0ffinCost, "Insufficient payment for c0ffin");
        require(bytes(occupant).length > 0, "0ccupant name is required");

        uint256 c0ffinId = _c0ffinId.add(1);

        _mint(msg.sender, c0ffinId, 1, "");
        _c0ffins[c0ffinId] = C0ffin(
            c0ffinId,
            occupant,
            dateBorn,
            epitaph,
            mediaUrl,
            metadata,
            msg.sender,
            block.timestamp
        );

        emit Buried(
            c0ffinId,
            occupant,
            dateBorn,
            epitaph,
            mediaUrl,
            block.timestamp
        );
    }

    function setC0ffinCost(uint256 newC0ffinCost) external onlyOwner {
        c0ffinCost = newC0ffinCost;
    }

    function totalSupply() public view returns (uint256) {
        return _c0ffinId - 1;
    }

    function uri(uint256 c0ffinId)
        public
        view
        override
        returns (string memory)
    {
        require(_exists(c0ffinId), "C0ffin d0es n0t exist");
        return
            string(
                abi.encodePacked(super.uri(c0ffinId), "/", c0ffinId.toString())
            );
    }

    function viewC0ffin(uint256 c0ffinId) public view returns (C0ffin memory) {
        require(_exists(c0ffinId), "C0ffin d0es n0t exist");
        return _c0ffins[c0ffinId];
    }

    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "c0ffers empty");
        payable(owner()).transfer(balance);
    }

    function _exists(uint256 c0ffinId) private view returns (bool) {
        return c0ffinId > 0 && c0ffinId < _c0ffinId;
    }
}