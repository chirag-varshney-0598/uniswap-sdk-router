import { SupportedChainId, Token } from "@uniswap/sdk-core";
import { FeeAmount } from "@uniswap/v3-sdk";
export const WETH_TOKEN = new Token(
  1,
  "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  18,
  "WETH",
  "Wrapped Ether"
);

export const USDC_TOKEN = new Token(
  1,
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  6,
  "USDC",
  "USD//C"
);

export const CurrentConfig = {
  rpc: {
    local: "https://goerli.infura.io/v3/5464e19c79c644dbb56cb99b8db93178",
    mainnet: "https://mainnet.infura.io/v3/e6240dd18ccc4f36a0443cb9c39d3059",
  },
  tokens: {
    in: USDC_TOKEN,
    amountIn: 1000,
    out: WETH_TOKEN,
    poolFee: FeeAmount.MEDIUM,
  },
};
