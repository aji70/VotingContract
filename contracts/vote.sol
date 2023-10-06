// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract Inec {
    //struct candidate
    address owner = msg.sender;
    uint ownerCount = 0;
    uint public _Peter_Obi = 0;
    uint public Atiku_Abubakar_PDP = 0;
    uint public Bola_Tinubu_APC = 0;

    //mapping(address => bool) votestatus;
    // struct Candidate{
    //    string name;
    //    string party;
    //    uint voteCount;
    // }
    //mapping candidate to vote count
    //mapping(string => uint) public noOfVote;
    //Array of Candidates
    //Candidate[] public candidates;

    //voter struct
    // struct Voter {
    //     string name;
    //     address voterid;
    //     bool votersStatus;
    //     string email;
    //     uint voterCount;
    // }
    // Array of voters
    //Voter[] public voters;
    //mapping voters to their id votingStatus
    mapping(address => bool) hasVoted;
    
    
    //Creating a voter
    // function VoterRegistration(string memory _name, string memory _email) public  {
    //     Voter memory newVoter;
    //     newVoter.name = _name;
    //     newVoter.voterid = msg.sender;
    //     newVoter.votersStatus = false;
    //     newVoter.email = _email;
    //     newVoter.voterCount = 0;
    //     voters.push(newVoter);
        
    // }

    function Peter_Obi() private {
         _Peter_Obi += 1;
         hasVoted[msg.sender] = true;
    }

    function Atiku_Abubakar() private {
         Atiku_Abubakar_PDP += 1;
          hasVoted[msg.sender] = true;
    }

    function Bola_Tinubu() private {
         Bola_Tinubu_APC += 1;
         hasVoted[msg.sender] = true;
    }
    
    function LP__Peter_Obi() public {
        require(!hasVoted[msg.sender], "You have voted");
        Peter_Obi();
    }

     function PDP__Atiku_Abubakar() public {
        require(!hasVoted[msg.sender], "You have voted");
        Atiku_Abubakar();
    }

     function APC__Bola_Tinubu() public {
        require(!hasVoted[msg.sender], "You have voted");
        Bola_Tinubu();
    }


}