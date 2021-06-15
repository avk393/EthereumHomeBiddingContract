// We import Chai to use its asserting functions here.
//const { expect } = require("chai");
const BidContract = artifacts.require("BidContract");

describe("BidContract contract", function () {

    //let Contract;
    //let hardhatContract;
    //let owner;
    //let addr1;
    //let addr2;
    //let addrs;

    // `beforeEach` will run before each test, re-deploying the contract every
    // time. It receives a callback, which can be async.
    before(async function() {
        accounts = await web3.eth.getAccounts();
    });

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            const bid = await BidContract.new("House");
            console.log(accounts);
            console.log(bid.owner);
            //await expect(bid.owner.to.equal(accounts))
        });
    });
    
    /*describe("Bidding", function () {
        it("Track highest bidder", async function () {

            await expect(hardhatContract.connect(addr1).placeBid(100))
            .to.emit(hardhatContract, 'BidInfo')
            .withArgs('You are currently the highest bidder :)');

            await expect(hardhatContract.connect(addr2).placeBid(100))
            .to.be.revertedWith("There is currently a higher bidder :(");  

            await expect(hardhatContract.connect(addrs[0]).placeBid(500))
            .to.emit(hardhatContract, 'BidInfo')
            .withArgs('You are currently the highest bidder :)');           
        });
    });

    describe("Closing Bidding", function () {
        it("Only allow contract creator to close bidding. Get correct winning bid. Disallow bids once final bid is accepted", async function () {

            const addr1Bid = 100;
            await expect(hardhatContract.connect(addr1).placeBid(addr1Bid))
            .to.emit(hardhatContract, 'BidInfo')
            .withArgs('You are currently the highest bidder :)');

            await expect(hardhatContract.connect(addr2).closeBid())
            .to.be.revertedWith("You are not the owner. Nice try!");

            await expect(hardhatContract.getBidWon())
            .to.be.revertedWith("This contract is still active");

            const address = await hardhatContract.closeBid();
            const winningBid = await hardhatContract.getBidWon();
            console.log(address);
            console.log(winningBid);
            console.log(addr1);
            //expect(winningBid).to.equal(addr1Bid);
            
            await expect(hardhatContract.connect(addr2).placeBid(100))
            .to.be.revertedWith("This contract is no longer taking bids, sorry!");
        });
    });*/

});