'use strict';

const axios = require('axios');

module.exports.main = async (event) => {
    resolve({
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST"
        },
        body: {"prueba":"OK"}
    }); 
};
