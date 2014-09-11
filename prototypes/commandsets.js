var underscore = require("underscore");
// var express = require("express");

function generateData(size){
    var result = [];
    for(var i =-1; ++i < size;){
        result.push(i);
    }
    return result;
}

function generateSet(size, source){
    result = [];
    for(var i =-1;++i<size;){
        n = Math.floor(Math.random()*source.length);
        result = result.concat(source.splice(n, 1));
    }
    return result;
}

function generateCommandSets(num, size, commands){
    var commandSets = [];
    for(var i =-1; ++i<num;){
        commandSets[i] = generateSet(6, commands);
    }
    return commandSets;
}

function generateLatinSquare(commandSets, interfaces){
    var conditions = [];
    //var count = 0;
    for(var i = -1;++i<commandSets.length;){
        for(var j = -1;++j<interfaces.length;){
            //count += 1;
            //conditions.push(count);
            conditions.push({commandSet: commandSets[i], interface: interfaces[j]});
        }
    }
    
    var n = conditions.length;
    var groups = [];
    for(var i = -1;++i<conditions.length;){
        var group = [];
        for(var j = -1;++j<conditions.length;){
            var rot = (j+i) % n;
            group.push(conditions[rot]);
        }
        groups.push(group);
    }
    return groups;
}

var commands = generateData(18);
var commandSets = generateCommandSets(3, 6, commands);
var interfaces = ["CommandMaps", "Ribbons"];

groups = generateLatinSquare(commandSets, interfaces);

/*
//groups.forEach(function(x){console.log(x)});
for(var i =-1;++i<groups[0].length;){
    console.log(groups[0][i]);
}
*/