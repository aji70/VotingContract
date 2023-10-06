const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");

  describe ("inec", function() {
    async function Votersapp() {
    var owner = msg.sender;
    var ownerCount = 0;
    var _Peter_Obi = 0;
    var Atiku_Abubakar_PDP = 0;
    var Bola_Tinubu_APC = 0;
    
    const [owner, otherAccount] = await ethers.getSigners();
    const Inec = await ethers.getContractFactory("Inec");
    return { APC__Bola_Tinubu, PDP__Atiku_Abubakar, LP__Peter_Obi, _Peter_Obi, Atiku_Abubakar_PDP,Bola_Tinubu_APC };
}

    describe("Deployment", function () {
        it("Should increase number of pdp votes", async function(){
            const{ }
        })
    })

  })