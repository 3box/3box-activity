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

**Returns**: <code>Array</code> - a list of activities the address has on the blockchain


| Param | Type | Description |
| --- | --- | --- |
| address | <code>String</code> | an ethereum address |
