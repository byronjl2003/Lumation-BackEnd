/* import {
    search as appleSearch
} from '../services/apple-search';
 */
const {
    appleSearch
} = require('../services/apple-search');

const {
    showSearch
} = require('../services/show-search');

const {
    soapSearch
} = require('../services/soap-search');

var search = async(req, res) => {

    var query = req.query.query;
    var limit = req.query.limit;
    console.log(`......${req.query}...........`);
    console.log(`......${query}...........`);
    console.log(`......${limit}...........`);
    const resp0 = await soapSearch(query);
    const resp1 = await appleSearch(limit, query);
    const resp2 = await showSearch(limit, query);

    const r = [...resp0, ...resp1, ...resp2];

    //console.log(rep)
    res.status(200).json(r);
}

module.exports = search;