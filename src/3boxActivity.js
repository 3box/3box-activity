const etherscanAPI = require("etherscan-api").init(
  "T17Z92YN5TTT61T4XT2A85K2KEXICP1XUQ"
);

class ThreeBoxActivity {
  /**
   * Gets the activity of a given ethereum address
   *
   * @param     {String}    address                 an ethereum address
   * @return    {Object}                         A collection of tx activities associated to that hash
   *
   * The returned object has the following structure:
   *
   */

  static async get(address) {
    if (!address) throw new Error("no address");
    let internal = { result: [] };
    let txs = { result: [] };
    let tokens = { result: [] };

    try {
      internal = await etherscanAPI.account.txlistinternal(null, address);
      txs = await etherscanAPI.account.txlist(address);
      tokens = await etherscanAPI.account.tokentx(address);
    } catch (err) {
      if (err !== "No transactions found") throw err;
    }

    return {
      txs: txs.result,
      internal: internal.result,
      token: tokens.result
    };
  }
}

module.exports = ThreeBoxActivity;
