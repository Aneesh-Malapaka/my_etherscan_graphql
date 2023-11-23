const { RESTDataSource } = require("apollo-datasource-rest");
// Import RESTDataSource from apollo-datasource-rest

//Vitalik's Ethereum Address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
// Define constant eth_address with a specific Ethereum address value

//Etherscan Data Source Class
class EtherDataSource extends RESTDataSource {
  constructor() {
    super();
    // Call super constructor
    this.baseURL = "https://api.etherscan.io/api";
    // Set base URL for API calls
  }

  async etherBalanceByAddress() {
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
    // Make API call to get Ether balance for the defined address
  }

  async totalSupplyOfEther() {
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
    // Make API call to get total Ether supply
  }

  //Gets the latest Ethereum price
  async getLatestEthereumPrice() {
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
    // Make API call to get latest Ether price
  }

  //Gets the average block confirmation time
  async getBlockConfirmationTime() {
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
    // Make API call to get average block confirmation time
  }
}

module.exports = EtherDataSource;
// Export EtherDataSource class
