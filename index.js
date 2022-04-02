const Web3 = require("web3");
const NameAbi = require("./build/contracts/Name.json");

let web3 = new Web3(
  new Web3.providers.HttpProvider("http://172.22.208.1:7545")
);

var x = new web3.eth.Contract(
  NameAbi.abi,
  "0xaAdF658315020977e6802466Cd3850c9f473aeFf",
  {
    from: "0x1287975e21663001C1A7dbBbadC4C83321160b92",
    gasPrice: "20000000000",
  }
);

const tes = async () => {
  await x.methods.setName("am hastam").send();
  var name = await x.methods.getName().call();
  console.log(name);
};
tes();
