// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Name {
    event SetName(string name);

    struct NameStruct {
        address add;
        string name;
    }

    mapping(address => string) public names;

    function getName() public view returns (string memory) {
        return names[msg.sender];
    }

    function setName(string memory _name) public {
        emit SetName(_name);
        names[msg.sender] = _name;
    }
}
