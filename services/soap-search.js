var search = async(query) => {
    var soap = require('soap');
    var url = 'http://www.crcind.com/csp/samples/SOAP.Demo.CLS?WSDL=1';
    var args = {
        name: query
    };
    console.log(`args: ${query}`);
    var r = await soap.createClientAsync(url).then((client) => {
        //console.log("--------")
        //console.log(client);
        //console.log("--------")
        return client.GetListByNameAsync(args);
    }).then((result) => {
        //console.log(result[0].GetListByNameResult.PersonIdentification);
        console.log(result);
        if (result[0] == null) {
            return [];
        } else
            return result[0].GetListByNameResult.PersonIdentification;
    });


    return r.map((item) => {

        return ({
            source: "People",
            tipo: "persona - " + item.ID,
            img: "",
            titulo: item.Name,
            descripcion: item.SSN + item.DOB,
        })
    });

}


module.exports.soapSearch = search;