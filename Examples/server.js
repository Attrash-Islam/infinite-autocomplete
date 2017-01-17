var express = require('express');
var app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
    console.log('ready on port ' + app.get('port'));
});

app.get('/data', function(req, res) {
    var data = [
        { text: 'ine', value: 1},
        { text: 'iwo', value: 2},
        { text: 'ihree', value: 3},
        { text: 'iour', value: 4},
        { text: 'iive', value: 5},
        { text: 'iix', value: 6},
        { text: 'ieven', value: 7},
        { text: 'iight', value: 8},
        { text: 'iine', value: 9},
        { text: 'ien', value: 10},
        { text: 'islam', value: 11},
        { text: 'iabel', value: 12},
        { text: 'iife', value: '13'},
        { text: 'iodeing', value: '14'},
        { text: 'iove', value: '15'},
        { text: 'iike', value: '16'},
        { text: 'iumans', value: null},
        { text: 'iomething', value: 17},
        { text: 'iypescript', value: 'whooo? whoo?'},
        { text: 'iinux', value: [1,2,3]},
        { text: 'iernel', value: {object: true}},
        { text: 'what!', value: 'what'}
    ];
    var page = parseInt(req.query.page);
    var fetchSize = parseInt(req.query.fetchSize);

    var from = (page - 1) * fetchSize;
    var to = (fetchSize * (page - 1)) + fetchSize;
    console.log('from:' + from + ' , to:' + to);

    res.send(data
        .filter(option => option.text.toLowerCase().indexOf(req.query.text.toLowerCase()) !== -1)
    .slice(from, to));
});
