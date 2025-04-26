// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./Token.sol";

contract TokenFactory {

    address[] public createdTokens;
    event createTokenEvent(address indexed owner, address indexed tokenAddress, uint256 totalSupply, uint8 iconId);

    function createToken(
        address initialOwner, 
        uint256 initialSupply, 
        string memory tokenName, 
        string memory tokenSymbol,
        uint8 iconId
    ) public returns (address) {
        require(iconId <= 6, "Icon ID must be between 0 and 6");
        
        Token newToken = new Token(initialOwner, initialSupply, tokenName, tokenSymbol, iconId);
        createdTokens.push(address(newToken));

        emit createTokenEvent(initialOwner, address(newToken), initialSupply, iconId);
        return address(newToken);
    }

    function getAllTokens() public view returns(address[] memory) {
        return createdTokens;
    }

    function getTokensCount() public view returns(uint256) {
        return createdTokens.length;
    }
}