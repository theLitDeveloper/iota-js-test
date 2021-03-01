const Iota = require('@iota/core');
const Extract = require('@iota/extract-json');

const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443',
});

// Pass here the bundle hash from console after executing index.js
// You should see 'Hello IOTA world'
const tailTransactionHash =
    'GDSLP9FAOBLUKJVFZATUPBORQRIAPIXTHVGARQTTUDIU9I9HZZPKVLYNRILMIEXVPYXBTCNADEMKIH999';

iota.getBundle(tailTransactionHash)
    .then((bundle) => {
        console.log(JSON.parse(Extract.extractJson(bundle)));
    })
    .catch((err) => {
        console.error(err);
    });
