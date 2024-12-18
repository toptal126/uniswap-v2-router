import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.6.6",
  networks: {
    hardhat: {
      forking: {
        url: "https://rpc.ankr.com/eth_holesky",
      },
    },
  },
};

export default config;
