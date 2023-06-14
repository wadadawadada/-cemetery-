DEPLOYED ON POLYGON
0xce896C526d0baFD33b15457992aC0a7Ef14c258a
https://polygonscan.com/address/0xce896c526d0bafd33b15457992ac0a7ef14c258a


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
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Crypt0C0ffin is ERC1155, Ownable, ReentrancyGuard {
    using Strings for uint256;
    using SafeMath for uint256;

    uint256 private _c0ffinId = 1;
    uint256 public c0ffinCost = 0.1 ether;
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
        uint256 c0ffinId,
        string occupant,
        uint256 dateBorn,
        string epitaph,
        string mediaUrl
    );

    constructor() ERC1155("crypt0cemetry_alpha") {}

    function cemeteryGate() external onlyOwner {
        require(msg.sender == owner(), "Y0u d0nt have the skelet0n key");
        gates0pen = !gates0pen;
    }

    function bury(
        string memory occupant,
        uint256 dateBorn,
        string memory epitaph,
        string memory mediaUrl,
        string memory metadata
    ) external payable nonReentrant {
        require(gates0pen, "The cemetery is cl0sed");
        require(msg.value >= c0ffinCost, "Insufficient payment for c0ffin");
        uint256 c0ffinId = _c0ffinId++;

        _mint(msg.sender, c0ffinId, 1, bytes(metadata));
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
            mediaUrl
        );
    }

    function readC0ffin(uint256 c0ffinId)
        external
        view
        returns (
            string memory occupant,
            uint256 dateBorn,
            string memory epitaph,
            string memory mediaUrl,
            string memory metadata,
            address minter,
            uint256 dateBuried
        )
    {
        require(_exists(c0ffinId), "C0ffin does not exist");
        C0ffin storage c0ffin = _c0ffins[c0ffinId];
        c0ffinId = c0ffin.c0ffinId;
        occupant = c0ffin.occupant;
        dateBorn = c0ffin.dateBorn;
        epitaph = c0ffin.epitaph;
        mediaUrl = c0ffin.mediaUrl;
        metadata = c0ffin.metadata;
        minter = c0ffin.minter;
        dateBuried = c0ffin.dateBuried;
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
                abi.encodePacked(super.uri(c0ffinId), "_c0ffin_", c0ffinId.toString())
            );
    }

    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");
        payable(owner()).transfer(balance);
    }

    function _exists(uint256 c0ffinId) internal view returns (bool) {
        return c0ffinId > 0 && c0ffinId < _c0ffinId;
    }
}
