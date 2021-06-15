// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;


// This contract acts as a bidding mechanism for an account to list a product or service to be bid on for a designated amount of time.
// Other accounts can then place a bid, and once time runs out the account that had placed the highest bid would win. 
// *** what crypto do accounts bid in? ether? any token? how to identify the cryto they are bidding and compare to a different crypto?
// *** Make contract immutable once timer runs out?
contract BidContract {

    // Account listing the product/service.
    address public owner;
    // Details of item being listed.
    string public item;

    // These variables hold the information of the highest bidder and their bid info.
    // Once the timer expires for this contract, the address 
    address private maxBidder;
    uint256 private maxBid;
    bool private stillActive;

    /**
     * Contract initialization.
     */
    constructor(string memory _item) {
        owner = msg.sender;
        stillActive = true;
        item = _item;
    }

    function ItemInfo() public view returns (string memory){
        return item;
    }

    event BidInfo(string outbid);
    /**
     * A function to place a bid on the listed item.
     */
    function placeBid(uint256 bidAmount) external {
        // [TODO] how to check if bidder actually has this bidAmount?
        require(stillActive, "This contract is no longer taking bids, sorry!");

        // [TODO] check to make sure owner not bidding?
        require(bidAmount > maxBid, "There is currently a higher bidder :("); 
        maxBidder = msg.sender;
        maxBid = bidAmount;
        emit BidInfo("You are currently the highest bidder :)");
    }

    /**
     * Finalizes the bidding. For now, sends winning bid and address to owner.
     * To implement timer, for now contract creator will need to create a timer on client side
        and call this function once the timer expires.
     * [TODO] Call another contract which will create the transaction between the two accounts.
     * Can only be called by account that created contract.
     */
    function closeBid() external returns (address) {
        require(stillActive==true, "Bidding is no longer active on this contract");
        require(owner==msg.sender, "You are not the owner. Nice try!");

        // [TODO] notify winning bidder?
        stillActive = false;
        return maxBidder;
    }

    function getBidWon() external view returns (uint256) {
        require(!stillActive, "This contract is still active");
        require(owner==msg.sender, "Only contract creator has permission to see winning bid");

        return maxBid;
    }
}