#This project provides the setup for asset management system using blockchain on a ubuntu machine


##1. Ethereum installation instructions on ubuntu:

sudo apt-get install software-properties-common
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum


##2. Installing Solidity Compiler for smart contracts:
git clone --recursive https://github.com/ethereum/solidity.git
cd solidity
git submodule update --init --recursive
./scripts/install_deps.sh
mkdir build
cd build
cmake .. && make


##3. To initialize the blockchain
	A. launch "initializeChain.sh" file. It contains all the parameters to host a private blockchain with a unique genesis block.
	B. launch "launchChain.sh" This launches the private chain's 1st node.
	
You can perform above 3 steps on each of the node to make them capable of forming a chain.
##4. Launch miners
	S. Use "launchminer.sh" to launch a mining node.

##5. Add nodes to each other to form a chain
	A. In the console that is shown on each node, find each node's address using 
		"admin.nodeInfo.enode"
	B. Use output of above to serve the input of admin.addPeer() function
	like,admin.addPeer("enode://58f61fafa1423514b9eb66e97e4e1cbdd452a653493690ff33f56e829ed387ebdae1e106e03e2fff583ed8d979069d50adbb783fe3db0ac4902d0cc85b200e05@192.168.101.134:30303")



geth console commands

##Create an account
personal.newAccount()

##Print current accounts: Guide at: https://github.com/ethereum/go-ethereum/wiki/Managing-your-accounts
eth.accounts

##Print Account Balance:
primary = eth.accounts[0];
balance = web3.fromWei(eth.getBalance(primary), "ether");
balance = web3.fromWei(eth.getBalance(ballot_sol_token.address), "ether");
loadScript("checkBalance.js")
checkAllBalances()


##adding a peer
admin.nodeInfo.enode
admin.addPeer("enode://58f61fafa1423514b9eb66e97e4e1cbdd452a653493690ff33f56e829ed387ebdae1e106e03e2fff583ed8d979069d50adbb783fe3db0ac4902d0cc85b200e05@192.168.101.134:30303")
admin.addPeer("enode://d80f79aedbdf1b0ca325e46fa56d6413228bb134d5733df3334af1e2f708bfcc3a0a6434d523904a90efb7053c0648c989eeb248de7867e6480cbcbdc9dedb21@[::]:30303")
admin.addPeer("enode://76c2ea523e7832eef546a3cdf0b6a3e364eb04691d1105e2c8e002cffa29791b1d6fb6eac294f87995848688679c4babd8b9b3578de80245eb709fd4b8df9bc3@[::]:30307")

##printing peerlist
admin.peers

##starting miner: Guide: https://github.com/ethereum/go-ethereum/wiki/Mining##
miner.setEtherbase(eth.accounts[0])
miner.start(countofthreads)
miner.stop()


##transfer money
personal.unlockAccount(eth.accounts[0])
var sender = eth.accounts[0];
var receiver = eth.accounts[1];
var receiver = ballot_sol_token.address
var amount = web3.toWei(220.07, "ether")
eth.sendTransaction({from:sender, to:receiver, value: amount})

#Test contract after installation of solidity
eth.getCompilers()
var source = "contract test { function multiply(uint a) returns(uint d) { return a * 7; } }";
var compiled = web3.eth.compile.solidity(source);
console.log(JSON.stringify(compiled));

##Using the contract Hello WOrld##
var greeterSource = 'contract mortal { address owner; function mortal() { owner = msg.sender; } function kill() { if (msg.sender == owner) selfdestruct(owner); } } contract greeter is mortal { string greeting; function greeter(string _greeting) public { greeting = _greeting; } function greet() constant returns (string) { return greeting; } function() payable { } }'

var greeterCompiled = web3.eth.compile.solidity(greeterSource)


var _greeting = "Hello World!"
var greeterContract = web3.eth.contract(greeterCompiled["<stdin>:greeter"].info.abiDefinition);

var greeter = greeterContract.new(_greeting,{from:web3.eth.accounts[0], data: greeterCompiled["<stdin>:greeter"]["code"], gas: 300000}, function(e, contract){
    if(!e) {

      if(!contract.address) {
        console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");

      } else {
        console.log("Contract mined! Address: " + contract.address);
        console.log(contract);
      }

    }
})


##using the online compiled version: https://ethereum.github.io/browser-solidity/
1. run personal.unlockAccount(eth.accounts[0])
2. Run the contract code in online browser
3. Save the output in a file
4. Load the file:loadScript("greetercontractcompiled.js")


##Finding Address of contract
ballot_sol_greeter.addresspersonal.unlockAccount(eth.accounts[0])

##calling functions
ballot_sol_greeter.greet()


##Adding contract to other node
ABI=[{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"inputs":[{"name":"_greeting","type":"string"}],"payable":false,"type":"constructor"}]
ADDRESS="0xa6441964b490dff8ee1700fe67d72c118bdd3f64"
var greeter = eth.contract(ABI).at(ADDRESS);



##ethereum check if a transaction has been mined

eth.getTransaction("0xacbf125fe124e681b0b9f374981eba578690c47822292e2d4b13a9bb144406f0") and eth.getTransactionReceipt("{txhash}") will provide you with the details.

##The asset management contracts have been stored at token.sol and ballot.sol


