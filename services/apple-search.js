//"use strict";

/* import {
    Axios
} from 'axios'; */
var Axios = require('axios');

let requestOptions = {
    headers: {
        'Content-Type': 'application/json'
    }

};
var search = async(limit, query) => {
    const uri = `https://itunes.apple.com/search?term=${query}&limit=${limit}`;
    return Axios.get(uri, requestOptions).then(
        (res) => {
            //console.log(res.data);
            return res.data.results.map((item) => {

                let tipo = item.wrapperType;
                if (typeof item.kind === 'undefined')
                    tipo = tipo + '-' + item.kind;

                let descripcion = typeof item.artistName !== 'undefined' ? `Artista:${item.artistName}.` : ``;
                console.log("Descripcion: ", descripcion);
                descripcion = descripcion + (typeof item.longDescription !== 'undefined' ? `Descripcion:${item.longDescription}.` : ``);

                return ({
                    source: "Apple-Itunes",
                    tipo,
                    img: item.artworkUrl100,
                    titulo: item.trackName,
                    descripcion,
                })
            });
        }
    ).catch(err => {
        console.log(err);
        return null;
    });

}

module.exports.appleSearch = search;