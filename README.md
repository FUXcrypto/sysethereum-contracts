# Sysethereum contracts

[![Build Status](https://travis-ci.org/syscoin/sysethereum/sysethereum-contracts.svg?branch=master)](https://travis-ci.org/syscoin/sysethereum/sysethereum-contracts)

Ethereum contracts for the Syscoin <=> Ethereum bridge.

If you are new to the Syscoin <=> Ethereum bridge, please check the [docs](https://github.com/syscoin/sysethereum/docs) repository first.

## Core components
* [SyscoinSuperblocks contract](contracts/SyscoinSuperblocks.sol)
  * Keeps a copy of the Syscoin Superblockchain
  * Informs [SyscoinToken contract](contracts/token/SyscoinToken.sol) when a Syscoin transaction locked or unlocked funds.
  * It's kind of a Syscoin version of [BtcRelay](https://github.com/ethereum/btcrelay) but using Superblocks instead of blocks.
* [SyscoinToken contract](contracts/token/SyscoinToken.sol)
  * An ERC20 contract where 1 token is worth 1 Syscoin.
  * Tokens are minted when coins are locked on the Syscoin blockchain.
  * Tokens are destroyed when coins should go back to the Syscoin blockchain.
* [SyscoinClaimManager contract](contracts/SyscoinClaimManager.sol)
  * Manages the interactive (challenge/response) validation of Superblocks.
* [SyscoinMessageLibrary](contracts/SyscoinParser/SyscoinMessageLibrary.sol)
  - Library for parsing/working with Syscoin blocks, txs and merkle trees 


## Running the Tests

* Install prerequisites
  * [nodejs](https://nodejs.org) v9.2.0 or above.
  * [truffle](http://truffleframework.com/) v4.1.3 or above.
  * [ganache-cli](https://github.com/trufflesuite/ganache-cli) v6.1.0 or above.
* Clone this repo.
* Install npm dependencies.
  * cd to the directory where the repo is cloned.
  ```
    npm install
  ```
* Run tests:
  ```
    # first start ganache-cli
    ganache-cli --gasLimit 4000000000000

    # run tests
    truffle test
  ```

## Deployment

To deploy the contracts

### Requirements

* A Rinkeby client running with rpc enabled

### Deployment

* Run `truffle migrate --network rinkeby`

## License

MIT License<br/>
Copyright (c) 2018 Blockchain Foundry Inc<br/>
[License](LICENSE)

