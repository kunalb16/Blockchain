var deadLine = 15;
var distributor1 = 0x38c5d0c5d54cae63b375e220ba648d295e3c5784/* var of type address here */ ;
var distributor2 = 0xeba67c226b5f499c847192371515c6a293d90c6b/* var of type address here */ ;
var distributor3 = 0x31dd6d609b29d360a57e7a9a994b5a322808f5b9/* var of type address here */ ;
var minbid = 100/* var of type uint256 here */ ;
var ballot_sol_tokenContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"withdrawRefund","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"deadline","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"distribute","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"deadLine","type":"uint256"},{"name":"distributor1","type":"address"},{"name":"distributor2","type":"address"},{"name":"distributor3","type":"address"},{"name":"minbid","type":"uint256"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"}]);
var ballot_sol_token = ballot_sol_tokenContract.new(
   deadLine,
   distributor1,
   distributor2,
   distributor3,
   minbid,
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000c57fe5b60405160a0806104b7833981016040528080519060200190919080519060200190919080519060200190919080519060200190919080519060200190919050505b603c8502420160008190555083600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806003819055505b50505050505b61037e806101396000396000f30060606040523615610055576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063110f88741461017757806329dcb0cf14610189578063e4fc6b6d146101af575b6101755b60005442111515610172576002543410156100745760006000fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561012857600254600a6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550346002819055505b5b5b565b005b341561017f57fe5b6101876101c1565b005b341561019157fe5b6101996102d1565b6040518082815260200191505060405180910390f35b34156101b757fe5b6101bf6102d7565b005b6000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051809050600060405180830381858888f1935050505015156102cd5780600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b5b50565b60005481565b6000544210151561034f5760035460025410151561034d57600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6002549081150290604051809050600060405180830381858888f19350505050505b5b5b5b5600a165627a7a7230582015decd88b382e1fcd37f8c2faa3b056409cce9cc9d3d5eca700cec76574faa3d0029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
