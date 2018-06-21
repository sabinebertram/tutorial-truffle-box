var Ownable = artifacts.require("./Ownable.sol");
var SafeMath = artifacts.require("./SafeMath.sol");
var ZombieFactory = artifacts.require("./ZombieFactory.sol");
var ZombieFeeding = artifacts.require("./ZombieFeeding.sol");
var ZombieHelper = artifacts.require("./ZombieHelper.sol");
var ZombieAttack = artifacts.require("./ZombieAttack.sol");
var ZombieOwnership = artifacts.require("./ZombieOwnership.sol");

module.exports = function(deployer) {
    deployer.deploy(Ownable);
    deployer.deploy(SafeMath);
    deployer.deploy(ZombieFactory);
    deployer.deploy(ZombieFeeding);
    deployer.deploy(ZombieHelper);
    deployer.deploy(ZombieAttack);
    deployer.deploy(ZombieOwnership);
};