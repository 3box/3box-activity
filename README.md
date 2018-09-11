# 3box-activity

**Warning:** This project is under active development, APIs are subject to change.


An API for dapps to create an Ethereum activity feed


## Usage
Simply install using npm
```
$ npm install 3box-activity
```
and then import into your project
```js
const ThreeBoxActivity = require('3box-activity')
```

## Classes

<dl>
<dt><a href="#ThreeBoxActivity">ThreeBoxActivity</a></dt>
<dd></dd>
</dl>

<a name="ThreeBox"></a>

## ThreeBoxActivity
**Kind**: global class

* [ThreeBoxActivity](#ThreeBox)
    * _static_
        * [.get(address)](#ThreeBox.getProfile) ⇒ <code>Object</code>


### ThreeBoxActivity.get(address) ⇒ <code>Object</code>
Get the activity (transaction) of the given ethereum address

**Kind**: static method of [<code>ThreeBoxActivity</code>](#ThreeBoxActivity)

**Returns**: <code>Object</code> - a list of activities the address has on the blockchain

The returned object has the following structure:
```
{
    txs: <array of transactions>,
    internal: <array of internal transactions>,
    tokens: <array of token transfers>
}
```

A `transaction` object has the following structure:

```
{
    blockNumber: '54092',
    timeStamp: '1439048640',
    hash: '0x9c81f44c29ff0226f835cd0a8a2f2a7eca6db52a711f8211b566fd15d3e0e8d4',
    nonce: '0',
    blockHash: '0xd3cabad6adab0b52eb632c386ea194036805713682c62cb589b5abcd76de2159',
    transactionIndex: '0',
    from: '0x5abfec25f74cd88437631a7731906932776356f9',
    to: '',
    value: '11901464239480000000000000',
    gas: '2000000',
    gasPrice: '10000000000000',
    isError: '0',
    txreceipt_status: '',
    input: '0x6060...',
    contractAddress: '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae',
    cumulativeGasUsed: '1436963',
    gasUsed: '1436963',
    confirmations: '6258536'
    }
```

An `internal transaction` object has the following structure:

```
{
    blockNumber: '92038',
    timeStamp: '1439665825',
    hash: '0x0da5bba6e4d8503985aec506c965a5fd3aeeed197ebf268750f65c3d50ad64a4',
    from: '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae',
    to: '0xb2d7e6cd1b25f591e2e630ba65dac638e6cd4c8e',
    value: '3091982000000000000000000',
    contractAddress: '',
    input: '',
    type: 'call',
    gas: '11674',
    gasUsed: '0',
    traceId: '0',
    isError: '1',
    errCode: ''
}
```

A `token transfer` object has the following structure:
```
{
    blockNumber: '4041874',
    timeStamp: '1500430428',
    hash: '0x8bcfce9af53f1c318aff183cd14a491aae68b0dd14172a3f40f83ee9cc452e68',
    nonce: '123',
    blockHash: '0x5467eba473d443d81e7841f8557e953079f9428cff72c4def556f9303907eaf9',
    from: '0x77744a927271f12dc5b9b8887064f07c37648829',
    contractAddress: '0xc63e7b1dece63a77ed7e4aeef5efb3b05c81438d',
    to: '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae',
    value: '696900',
    tokenName: 'Generictoken',
    tokenSymbol: 'TKN',
    tokenDecimal: '4',
    transactionIndex: '84',
    gas: '51810',
    gasPrice: '4000000000',
    gasUsed: '51809',
    cumulativeGasUsed: '3548636',
    input: '0xa9059...',
    confirmations: '2270754'
}
```
