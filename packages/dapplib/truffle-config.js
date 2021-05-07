require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remember honey grid glove fox turn'; 
let testAccounts = [
"0xbb5e289feab4bbf207113f995568347abdcf5603939c48abc1460ac86b5fe3fc",
"0x6a99f8e1585c443b6991f1af6191a4016d890976b2fc242578cecf4ee5832cf2",
"0xc5d01e1b7b3c511d90bcb076bb8026e7b383738ac84d1f40a375e9f242a3fac5",
"0x1b8cf5e1a3226283359206d22ef5cbfec997163419f663531459529c1e7b7bd7",
"0x529cc087bc3f811a10ff05f94d32658c864da90efebc5a9f031d1747818345e0",
"0x3a0f954d73018cf4df6d503f28ee9a82251cb32178ae2653d31a6440ca03bc9a",
"0x8fb1fbad47dd9e48bec13a1c3fb32a32707ca76728951867df16a6253ac9e986",
"0x4b2d9aeb142940d387dd9c958f523cf5fcdd1d08b09972a8bf74f56387929c47",
"0xd214bccef262390554d6fb62e3adb5fd24891408b357663a1320cbaba0a516ab",
"0x51499bef8421f349a8c9a8a603bbb7c8885c097fa150370e5195d05780dbaba1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
