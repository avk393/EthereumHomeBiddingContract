const Greeter = artifacts.require("Greeter");

// Vanilla Mocha test. Increased compatibility with tools that integrate Mocha.
describe("Greeter contract", function() {
    let accounts;
  
    before(async function() {
      accounts = await web3.eth.getAccounts();
    });
  
    describe("Deployment", function() {
      it("Should deploy with the right greeting", async function() {
        const greeter = await Greeter.new(5);
        assert.equal(await greeter.greet(), 5);
  
        const greeter2 = await Greeter.new(10);
        assert.equal(await greeter2.greet(), 10);
      });
    });
  });