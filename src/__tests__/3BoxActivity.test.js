const ThreeBoxActivity = require("../3BoxActivity");

describe("3boxActivity", () => {
  let address;

  beforeAll(async () => {
    address = "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe";
    jest.setTimeout(100000);
  });

  it("get() no address", async () => {
    await ThreeBoxActivity.get()
      .then(done => {
        fail("shouldn't return");
        done();
      })
      .catch(err => {
        expect(err.message).toEqual("no address");
      });
  });

  it("get() gets Activity of the address", async done => {
    ThreeBoxActivity.get(address).then(activity => {
      expect(activity.txs.length).toBeGreaterThanOrEqual(456);
      expect(activity.internal.length).toBeGreaterThanOrEqual(25);
      expect(activity.token.length).toBeGreaterThanOrEqual(100);
      done();
    });
  });
});
