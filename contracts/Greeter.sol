pragma solidity ^0.7.0;

contract Greeter {

    uint256 greeting;

    constructor(uint256 _greeting) {
        greeting = _greeting;
    }

    function greet() public view returns (uint256) {
        return greeting;
    }

    function setGreeting(uint256 _greeting) public {
        greeting = _greeting;
    }

}