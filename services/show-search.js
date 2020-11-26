var Axios = require('axios');

let requestOptions = {
    headers: {
        'Content-Type': 'application/json'
    }

};
var search = async(limit, query) => {
    const uri = `http://api.tvmaze.com/search/shows?q=${query}`;
    return Axios.get(uri, requestOptions).then(
        (res) => {
            //console.log(res.data);
            return res.data.map((it) => {
                let item = it.show;
                return ({
                    source: "TV-SHOWS",
                    tipo: "tv show - " + item.type,
                    img: item.image != null ? item.image.medium : "",
                    titulo: item.name,
                    descripcion: item.summary,
                })
            });
        }
    ).catch(err => {
        console.log(err);
        return null;
    });

}

module.exports.showSearch = search;