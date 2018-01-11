#!/bin/bash


geth --identity "KunalChain" --datadir "~/Desktop/tmp/3" init genesis.json

#Launch the blockchain with the console
geth --identity "KunalChain" --rpc --rpcport "8001" --rpccorsdomain "*" --datadir "~/Desktop/tmp/3" --port "30304" --nodiscover --ipcapi "admin,db,eth,debug,miner,net,shh,txpool,personal,web3" --rpcapi "db,eth,net,web3" --autodag --networkid 1790 --nat "any" console
