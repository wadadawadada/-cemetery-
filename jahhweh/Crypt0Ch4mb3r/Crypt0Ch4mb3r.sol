// v1.0
// crypt0-ch4mb3r crypt0-ch4mb3r crypt0-ch4mb3r crypt0-ch4mb3r
//                                   .          .  ,
//                ═4═,║`Ü├      j⌐   ║╓══=~,    Ü  │  ¬L
//          (^j ▓╠  #$╢`]╫┐,╖¬∞╫╢▄▄-▐┼╣Φ╓⌐╓╓Åw╥╗╬,,▐,.╔L
//  ╔rß╫║Θ@▀Ñ$▓@╣Ü╬╝ARΦ▄╣m╣╢╢╬Ç╫$▒╢╢╣▐╟╣╬ÑÑ╬Ñ╟╢▓Φ╩╫m▒▐╢╢▓Ü▓Ñ,.,
// `]╖&@╫╣▓Q╬▀▓▒▒▀▓W@╣╨▄▓║▐╨m▒║▓╢▌╢╬╬▓▓╩╩▓╫▓▒▀▀╢▐▌╩M▓▓▌╣▓@▀╫@º≈
// ╥╢▒Φ@▓▌J╫▓╣▒▀▌╫╬▓▒▀D╫▓▄Ü▀▓▓▓▓▓▓▓▓▓▓▓Ñ╫▓▒▐█▀N╬╣╨▄▄ß▓N║╫▐╬▒⌐
//   [▄▌φN╢║╥▓HÑ▒▓▓█║▓╬▓▓▓╣▓╬╟▓▓▓▓▓▀▓▓▓╣╫█▓$Ñ╫╬▓▓Ñ▓▓╢▐¥▓Φ▓╣╟w,
//   ║╥╢M@&▓╢▓W╨▓▓▌╢▐╢╣▓█▓▓▓▓▓▓██▌║▓▓▓╫██▒╬R▌▓╣▓Q▒▒▓▒▄▓╣▓@▐╬Ü "
//  ^╟Ü▀╬╢▓▓▓████▓███╟██▀▀▀████ 0010 ██████████████▓╢╣╬▓Ñ▓╟▒▒╫▒╢`
// y4║▓▌▐▀▓██████████╟▀     ▀██ 1001 █████████▀   j▓▓▓Ñ▌▓Ñ╣╢╢Ü╓c
//  ╟╢▓▓▓█╟████▓████▀  ,▄Ç   ╙██████▀▀▀, `▀▀     j▓▓▓▄╣▓▓╣║▓╓╓╢
//   M╙╫▓▐▓▌ç█▀▀▀▀▀ ╗█████µ    ╟▄▄▄═^"        - ┌╫▓║▄▓▌╣▄Ñ╢╫"s
//  jÑÜR▓▓╢/`▓███▄.████████                   █▓▓▓▐▒▐▌▓╫╫╫╫╬╬╬╬
//  j▒▓╬▓▓▓|  ▀▀▀▀▀▀▀-                   ▄▄▀" █Ñ▓▐B╣@╫Φ▓╣Ñ▓▌ ═╬
//  ]▒▓▓▓█▒████▄▄▄╖~╖g▄▄▄▄▄▄▄, ,▄███▓▀▀▀▀╓▄▄███▓▓▐██╣╫▓▀Ü╫▄╣╙╙▒
//  jΩÑ╣╬╬╣▓╢▓▓▓▀▀▀▀▀▓▓▓▀▀▓▓▓▓▓▓▓▓▓▓╣╢╫▓▄▐▐▓█▌▓╣╬╞╢╟▓║▓▒▒π▒É▒╨▒
// W╣]╣╬║╣╢╢g▒▓&▓▓▓▓▓▓▓╜▓╙▀▓╬▓$╩Ñ╫╝╨Φ▓╣╣▓Ñ▓▓╬g▓╬╨▐▓▓╩▀▀▀µ▓╬ ╞ª^
// ══j▐▓╢%╬Ñ$O║▄▄▐▒J╢▓╫φ╫▄d▐▓╬▐╙╢╢╦╥╢▓╟▀▓▓▓▀║▓▓$▓╫▓▓╖===▀▀ÑUQ╞Q
// π#j▓╣╣╬▌@▐║▓█▌▀▌$▓▀▒▓▓╫▓▌╟▐▓Ñ█╫▓▓▓▓▓▓╣▓█Ñ▓╣0▓╪ÑW▓M▓▓▓▓▓▒=╘y(
// =╙]▓▓╬╬▌Ü▓L╢▓╝╣╬╢▀▓╠▌╬╫É╣▓▓▓╬▓╬╬▓╫▓▓▓▒Ñ▓▒▒▒Φ▓▌╜██¬Φ▄▓╢▓Ñ*^╙B
// SPDX-License-Identifier: GNU AGPLv3
// Devs: jahhweh.eth, wadada.eth
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Crypt0Ch4mb3r is ERC1155, Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    uint256 private _ch4mb3r = 1;
    uint256 public immutable ch4mb3rCost = 0.001 ether;

    struct Ch4mb3r {
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

    mapping(uint256 => Ch4mb3r) private _ch4mb3r5;

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
    event Unlocked(string occupant, uint256 dateBorn, address beneficiary, string mediaUrl, string metadata);
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
        require(msg.value >= ch4mb3rCost, "Insufficient payment for ch4mb3r");
        require(beneficiary != address(0), "Beneficiary address is required");
        uint256 tokenId = _ch4mb3r++;
        _mint(msg.sender, tokenId, 1, "");
        _ch4mb3r5[tokenId] = Ch4mb3r(
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
        require(_exists(tokenId), "Ch4mb3r does not exist");
        Ch4mb3r storage ch4mb3r = _ch4mb3r5[tokenId];
        id = ch4mb3r.tokenId;
        occupant = ch4mb3r.occupant;
        dateBorn = ch4mb3r.dateBorn;
        epitaph = ch4mb3r.epitaph;
        mediaUrl = ch4mb3r.mediaUrl;
        isOpen = ch4mb3r.isOpen;
        minter = ch4mb3r.minter;
        dateBuried = ch4mb3r.dateBuried;
        resurrectTime = ch4mb3r.resurrectTime;
        beneficiary = ch4mb3r.beneficiary;
        currentOwner = ch4mb3r.currentOwner;
        buriedCounter = ch4mb3r.buriedCounter;
    }

    function unlockMetadata(uint256 tokenId) external {
        require(_exists(tokenId), "Ch4mb3r does not exist");
        Ch4mb3r storage ch4mb3r = _ch4mb3r5[tokenId];
        require(
            msg.sender == ch4mb3r.currentOwner,
            "Only Owner can unlock Metadata"
        );
        require(
            msg.sender == ch4mb3r.beneficiary,
            "Only Beneficiary can unlock Metadata"
        );
        ch4mb3r.isOpen = true;
        emit Unlocked(ch4mb3r.occupant, ch4mb3r.dateBorn, ch4mb3r.beneficiary, ch4mb3r.mediaUrl, ch4mb3r.metadata);
    }

    function exposeMetadata(uint256 tokenId)
        public
        view
        returns (string memory metadata)
    {
        require(_exists(tokenId), "Ch4mb3r does not exist");
        Ch4mb3r storage ch4mb3r = _ch4mb3r5[tokenId];
        require(ch4mb3r.isOpen == true, "Metadata is still locked");
        return ch4mb3r.metadata;
    }

    function totalSupply() public view returns (uint256) {
        return _ch4mb3r - 1;
    }

    function _exists(uint256 tokenId) internal view returns (bool) {
        return tokenId > 0 && tokenId < _ch4mb3r;
    }

    function checkForResurrectionAndTransfer(uint256 tokenId) external {
        Ch4mb3r storage ch4mb3r = _ch4mb3r5[tokenId];
        require(
            ch4mb3r.resurrectTime <= block.timestamp,
            "Not yet time for Resurrection"
        );
        require(
            msg.sender == ch4mb3r.beneficiary,
            "Only Beneficiary can Resurrect"
        );
        emit Resurrected(tokenId);
        safeTransferFrom(
            ch4mb3r.currentOwner,
            ch4mb3r.beneficiary,
            tokenId,
            1,
            ""
        );
        ch4mb3r.currentOwner = msg.sender;
        ch4mb3r.isUpdated = false;
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
        Ch4mb3r storage ch4mb3r = _ch4mb3r5[tokenId];
        require(
            msg.sender == ch4mb3r.beneficiary,
            "Only Beneficiary can update"
        );
        require(!ch4mb3r.isUpdated, "Ch4mb3r is already buried");
        ch4mb3r.resurrectTime = newResurrectTime;
        ch4mb3r.beneficiary = newBeneficiary;
        ch4mb3r.dateBuried = block.timestamp;
        ch4mb3r.isUpdated = true;
        ch4mb3r.buriedCounter++;
        emit Buried_Again(tokenId, newResurrectTime, newBeneficiary);
    }

    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");
        payable(owner()).transfer(balance);
    }
}
