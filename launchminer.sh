#!/bin/bash

#Launch the blockchain with the console
geth --identity "KunalChain" --rpc --rpcport "8009" --rpccorsdomain "*" --datadir "~/Desktop/tmp/0" --port "30300" --nodiscover --ipcapi "admin,db,eth,debug,miner,net,shh,txpool,personal,web3" --rpcapi "db,eth,net,web3" --autodag --networkid 1790 --nat "any" --mine --minerthreads=1 console
