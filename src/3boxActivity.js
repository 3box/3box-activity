const etherscanAPI = require("etherscan-api").init(
  "T17Z92YN5TTT61T4XT2A85K2KEXICP1XUQ"
);

class ThreeBoxActivity {
  /**
   * Instantiates a threeBox
   *
   * @param     {MuPort}        muportDID                   A MuPort DID instance
   * @param     {Web3Provider}  web3provider                A Web3 provider
   * @param     {Object}        opts                        Optional parameters
   * @param     {IPFS}          opts.ipfs                   A custom ipfs instance
   * @return    {ThreeBox}                                  self
   */

  /**
   * Get the public profile of the given address
   *
   * @param     {String}    address                 an ethereum address
   * @return    {Object}                         A collection of tx activities associated to that hash
   */
  static async getActivity(address) {
    if (!address) throw new Error("no address");
    let internal = { result: [] };
    let txs = { result: [] };
    let tokens = { result: [] };

    try {
      internal = await etherscanAPI.account.txlistinternal(null, address);
    } catch (err) {
      console.log("no internal txs");
    }
    try {
      txs = await etherscanAPI.account.txlist(address);
    } catch (err) {
      console.log("no transactions");
    }

    try {
      tokens = await etherscanAPI.account.tokentx(address);
    } catch (err) {
      console.log("no token transfers");
    }

    return {
      txs: txs.result,
      internal: internal.result,
      token: tokens.result
    };
  }
}

module.exports = ThreeBoxActivity;
