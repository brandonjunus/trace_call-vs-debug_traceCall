import { providers } from "ethers";
import { transactions } from "./transactions.js";
import { repeat } from "./utils.js";

// used to actually log the transaction if needed
import util from "util";

const debug_traceCall = async () => {
  const provider = new providers.JsonRpcProvider(
    "https://eth-mainnet.g.alchemy.com/v2/demo"
  );
  const before = Date.now();
  const responses = await Promise.all(
    repeat(transactions, 50).map(async (tx) => {
      return await provider.send("debug_traceCall", [
        tx.transaction,
        tx.block,
        {
          tracer: "callTracer",
        },
      ]);
    })
  );

  // uncomment to see responses
  // console.log(
  //   "responses",
  //   util.inspect(responses, { showHidden: false, depth: null, colors: true })
  // );
  const after = Date.now();
  console.log("debug_traceCall- Elapsed Time", after - before);
};
await debug_traceCall();
// after running 5 times, average time of 943.2, around 7 percent faster
