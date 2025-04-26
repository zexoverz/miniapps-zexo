// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20, Ownable {
    // State variable to store the token icon ID (0-7)
    uint8 private _iconId;

    constructor(
        address initialOwner,
        uint256 initialSupply,
        string memory tokenName,
        string memory tokenSymbol,
        uint8 initialIconId
    ) 
        ERC20(tokenName, tokenSymbol)
        Ownable(initialOwner)
    {
        require(initialIconId <= 6, "Icon ID must be between 0 and 6");
        
        _transferOwnership(initialOwner);
        _mint(initialOwner, initialSupply);
        _iconId = initialIconId;
    }

    function burnToken(uint256 burnAmount) public onlyOwner {
        require(balanceOf(msg.sender) >= burnAmount, "Error : you need more amount");
        _burn(msg.sender, burnAmount);
    }

    /**
     * @dev Returns the current icon ID of the token.
     */
    function iconId() public view returns (uint8) {
        return _iconId;
    }

    /**
     * @dev Changes the icon ID of the token.
     * Can only be called by the owner.
     * @param newIconId The new icon ID (must be between 0 and 7)
     */
    function setIconId(uint8 newIconId) public onlyOwner {
        require(newIconId <= 7, "Icon ID must be between 0 and 7");
        _iconId = newIconId;
    }
}