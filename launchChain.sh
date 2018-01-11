#!/bin/bash

#Launch the blockchain with the console
geth --identity "KunalChain" --rpc --rpcport "8000" --rpccorsdomain "*" --datadir "~/Desktop/tmp/2" --port "30303" --nodiscover --ipcapi "admin,db,eth,debug,miner,net,shh,txpool,personal,web3" --rpcapi "db,eth,net,web3" --autodag --networkid 1790 --nat "any" console
