console.log("MEOW");
let abi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "arr",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "giveVote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "returnVote",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getWinner",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];
let contractAddress = "0x19c3E38524BD2000aF94047704F2914F580a7780";
const accounts = ethereum.request({
    method: 'eth_requestAccounts',
  });
const web3 = new Web3(window.ethereum);
var contract = new web3.eth.Contract(abi, contractAddress);

function voteDog(){
    contract.methods.giveVote(0)
    .send({
        from: "0x8122F221aa5Ae3e9A0eCfaC53Bcc31fCFD2dA0D7",
    })
    .then((result)=>{
        console.log(result);
        contract.methods.returnVote(0)
        .call()
        .then((result) =>{
        document.getElementById("0").innerHTML = result;
        console.log(result);
        })
    })

}

function voteDuck(){
    contract.methods.giveVote(1)
    .send({
        from: "0x8122F221aa5Ae3e9A0eCfaC53Bcc31fCFD2dA0D7",
    })
    .then((result)=>{
        console.log(result);
        contract.methods.returnVote(1)
        .call()
        .then((result) =>{
        document.getElementById("1").innerHTML = result;
        console.log(result);
        })
    })
}

function voteCat(){
    contract.methods.giveVote(2)
    .send({
        from: "0x8122F221aa5Ae3e9A0eCfaC53Bcc31fCFD2dA0D7",
    })
    .then((result)=>{
        console.log(result);
        contract.methods.returnVote(2)
        .call()
        .then((result) =>{
        document.getElementById("2").innerHTML = result;
        console.log(result);
        })
    })
    
}