import * as http  from "http";
let packageJson = require("../package.json");

class <%= name %> {

    public static get(callback) {
        console.log(callback);
        var request:http.ClientRequest = http.request({
            host: "localhost",
            port: 8888,
            path: '/' + packageJson.version + '<%= nameToLower %>',
            method: 'GET'
        });

        request.end();

        request.on('response', function (response) {
            console.log('STATUS: ' + response.statusCode);
            console.log('HEADERS: ' + JSON.stringify(response.headers));
            response.setEncoding('utf8');
            response.on('data', function (data) {
                console.log('BODY: ' + JSON.parse(data));
                callback(JSON.parse(data));
            });
        });
    }

    public static create(input, callback) {

        var postData = JSON.stringify(input);

        var request:http.ClientRequest = http.request({
            hostname: "localhost",
            port: 8888,
            path: '/' + packageJson.version + '<%= nameToLower %>',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(postData)
            }
        })

        request.end(postData)

        request.on('response', function (response) {
            console.log('STATUS: ' + response.statusCode);
            console.log('HEADERS: ' + JSON.stringify(response.headers));
            response.setEncoding('utf8');
            response.on('data', function (data) {
                console.log('BODY: ' + data);
                callback(JSON.parse(data));
            });
        });
    }

    public static getById(id, callback) {

        var request:http.ClientRequest = http.request({
            host: "localhost",
            port: 8888,
            path: '/' + packageJson.version + '<%= nameToLower %>' + id,
            method: 'GET'
        });

        request.end();

        request.on('response', function (response) {
            console.log('STATUS: ' + response.statusCode);
            console.log('HEADERS: ' + JSON.stringify(response.headers));
            response.setEncoding('utf8');
            response.on('data', function (data) {
                console.log('BODY: ' + JSON.parse(data));
                callback(JSON.parse(data));
            });
        });
    }

    public static update(id, input, callback) {

        var postData = JSON.stringify(input);

        var request:http.ClientRequest = http.request({
            hostname: "localhost",
            port: 8888,
            path: '/' + packageJson.version + '<%= nameToLower %>' + id,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(postData)
            }
        })

        request.end(postData)

        request.on('response', function (response) {
            console.log('STATUS: ' + response.statusCode);
            console.log('HEADERS: ' + JSON.stringify(response.headers));
            response.setEncoding('utf8');
            response.on('data', function (data) {
                console.log('BODY: ' + data);
                callback(JSON.parse(data));
            });
        });
    }

    public static delete(id, callback) {
        var request:http.ClientRequest = http.request({
            host: "localhost",
            port: 8888,
            path: '/' + packageJson.version + '<%= nameToLower %>' + id,
            method: 'DELETE'
        });

        request.end();

        request.on('response', function (response) {
            console.log('STATUS: ' + response.statusCode);
            console.log('HEADERS: ' + JSON.stringify(response.headers));
            response.setEncoding('utf8');
            response.on('data', function (data) {
                console.log('BODY: ' + JSON.parse(data));
                callback(JSON.parse(data));
            });
        });
    }
}

export { <%= name %> }
