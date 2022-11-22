import { providers } from "ethers";
import { transactions } from "./transactions.js";
import { repeat } from "./utils.js";

// used to actually log the transaction if needed
import util from "util";

const trace_call = async () => {
  const before = Date.now();

  const provider = new providers.JsonRpcProvider(
    "https://eth-mainnet.g.alchemy.com/v2/demo"
  );

  const responses = await Promise.all(
    repeat(transactions, 50).map(async (tx) => {
      return await provider.send("trace_call", [
        tx.transaction,
        ["trace"],
        tx.block,
      ]);
    })
  );

  // uncomment to see responses
  // console.log(
  //   "responses",
  //   util.inspect(responses, { showHidden: false, depth: null, colors: true })
  // );

  const after = Date.now();
  console.log("trace_call- Elapsed Time", after - before);
};

await trace_call();
// after running 5 times, average time of 1010.8
