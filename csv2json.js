'use strict'

var fs = require('fs')
var path = require('path')
var parse = require('csv-parse')
var parser = parse({delimiter: ';'}, function(err, data){

    var json = data.map(function(w){
        return {
            type: w[0],
            frequency: parseInt(w[1]),
            label: w[2]
        }
    }).sort(function(w1,w2){
        return w2.frequency - w1.frequency
    })

    fs.writeFile('frequence.json', JSON.stringify(json), function(){
        process.exit(0)
    })

})

fs.createReadStream(path.resolve('frequence.csv')).pipe(parser)