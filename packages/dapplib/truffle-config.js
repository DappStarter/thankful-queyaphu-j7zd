require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remind concert grace slam foster speak'; 
let testAccounts = [
"0x2ef9f763ed075f41091613a81cad237cca1a110d537c3b03a4e97d40d93fa364",
"0x090786242d80ccc4c3e5a3ce5dc51a78f1fd43847a24542221432fcb7a54ad9c",
"0x7fa081bf40a589c8767ca49d69fe88ce157c5a46402b2a33cfb2d539b6684777",
"0xdc5a53ac1d7ae43bd875ecb12167a96100302af4d58ed77600fe3e5f264bf67c",
"0x8ba5d896a9b0e864495be4d8b7338f1305da43ee995d2129f563ea5b124f663d",
"0x9fad3ec83d45da86da57a63b1835ea7eb6227afc9203859b9909609b7e24a9da",
"0x04333f1d03941ceb69082e76a5a62370fe581c1943325fcc959dbb3ee4056fd6",
"0xaabfc7cd783b6ce3275f96abc73cbdc34f2bcf75906eb7d51693e20137125e84",
"0x8313311992841edfb7d2f5b341e0a984811c38abd6844d051ce5679eff4c3770",
"0x95084c71ce568001d3e26c3f9ad4f8b5e409792063d023cd12a566698cd28788"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

