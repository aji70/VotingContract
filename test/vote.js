// Import required libraries
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("inec", function () {
  let inec;
  let owner;
  let voter1;
  let voter2;

  before(async function () {
    // Deploy the contract
    const inecFactory = await ethers.getContractFactory("inec");
    inec = await inecFactory.deploy();
    
    // Wait for the contract to be deployed and get the instance
    await inec.deployed();
    inec = await ethers.getContractAt("inec", inec.address);
  
  });

  it("Should allow voters to cast votes", async function () {
    // Check initial vote counts
    const initialPeterObiVotes = await inec._Peter_Obi();
    const initialAtikuVotes = await inec.Atiku_Abubakar_PDP();
    const initialTinubuVotes = await inec.Bola_Tinubu_APC();

    // Voter 1 casts a vote for Peter Obi
    await inec.connect(voter1).LP__Peter_Obi();
    
    // Voter 2 casts a vote for Atiku Abubakar
    await inec.connect(voter2).PDP__Atiku_Abubakar();

    // Check updated vote counts
    const updatedPeterObiVotes = await inec._Peter_Obi();
    const updatedAtikuVotes = await inec.Atiku_Abubakar_PDP();
    const updatedTinubuVotes = await inec.Bola_Tinubu_APC();

    // Assert that the vote counts have increased
    expect(updatedPeterObiVotes).to.equal(initialPeterObiVotes + 1);
    expect(updatedAtikuVotes).to.equal(initialAtikuVotes + 1);
    expect(updatedTinubuVotes).to.equal(initialTinubuVotes);

    // Ensure that the voters are marked as having voted
    expect(await inec.hasVoted(voter1.address)).to.equal(true);
    expect(await inec.hasVoted(voter2.address)).to.equal(true);
  });

  it("Should prevent voters from voting twice", async function () {
    // Voter 1 tries to vote for Peter Obi again (should fail)
    await expect(inec.connect(voter1).LP__Peter_Obi()).to.be.revertedWith(
      "You have voted"
    );
    
    // Voter 2 tries to vote for Atiku Abubakar again (should fail)
    await expect(inec.connect(voter2).PDP__Atiku_Abubakar()).to.be.revertedWith(
      "You have voted"
    );
  });
});
