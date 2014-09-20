    define([
        "data/CommandSet1",
        "data/CommandSet2"],
        function (cmdSet1, cmdSet2) {
            
            function testTrials(task){
                var trials = task.trials;
                var ok = true;
                var commandMap = {};
                for(var i =-1;++i<task.commandSet.length;){
                    var command = task.commandSet[i];
                    if(command.type != "command"){
                        continue;
                    }
                    commandMap[command.name] = 0;
                }

                if(task.block == "familiarize"){
                    if(trials.length != 30){
                        console.log("wrong trial length", task);
                    }
                    for(var j =-1;++j<trials.length;){
                        commandMap[trials[j].name] += 1;
                    }
                    console.log("testing", task.block, "commandMap", commandMap);
                    for(var key in commandMap){
                        if(commandMap[key] != 5){
                            console.log("wrong # trials for", key, "in", task.block, "found", commandMap[key], "expecting", 5);
                        }
                    }
                }
                
                if(task.block == "perform"){
                    if(trials.length != 90){
                        console.log("wrong trial length", task);
                    }
                    for(var j =-1;++j<trials.length;){
                        commandMap[trials[j].name] += 1;
                    }
                    console.log("testing", task.block, "commandMap", commandMap);
                    for(var key in commandMap){
                        if(commandMap[key] != 15){
                            console.log("wrong # trials for", key, "in", task.block, "found", commandMap[key], "expecting", 15);
                        }
                    }
                }
                
            }
            
            return {
                init: function(groupNum){
                    var cmBlock = {interface: "CommandMaps", commandSet: cmdSet1};
                    var rBlock = {interface: "Ribbons", commandSet: cmdSet2};

                    var groups =[
                        [cmBlock, rBlock],
                        [rBlock, cmBlock]
                    ];

                    function getTrials(num, commandSet){
                        //var _=require("underscore");

                        var H = Array.apply(null, new Array(num/2)).map(Number.prototype.valueOf,0);
                        var I = Array.apply(null, new Array(num/3)).map(Number.prototype.valueOf,1);
                        var V = Array.apply(null, new Array(num/6)).map(Number.prototype.valueOf,2);

                        var HI = H.concat(I);
                        var HIV = HI.concat(V);

                        var perm_HIV = [1, 1];
                        var counter = 0;
                        //var perm_HIV = shuffle(HIV);
                        //generate series of tabs with 50% tab switch
                        while (counter < perm_HIV.length/2){
                            var counter = 0
                            var perm_HIV = shuffle(HIV);
                            for (var i=0; i< perm_HIV.length-1; i++){
                                if (perm_HIV[i] - perm_HIV[i+1] != 0){
                                    counter++;
                                }
                            }
                        }

                        //assign commands to tabs
                        var Hcounter = 0;
                        var Icounter = 0;
                        
                        var commandNum = parseInt(num/6);
                        
                        var result = [];
                        var tabs = _.filter(commandSet, function(item){return item.type == "tabs"});
                        var commands = _.filter(commandSet, function(item){return item.type == "command"});
                        for (var i=0; i< perm_HIV.length; i++){
                            if (perm_HIV[i] == 0){
                                if (Hcounter < commandNum){
                                    var cmd = commands[0];
                                    Hcounter++;
                                }else if (Hcounter < commandNum*2){
                                    var cmd = commands[1];
                                    Hcounter++;
                                }  else{
                                    var cmd = commands[2];
                                    Hcounter++;
                                }
                            }
                            else if (perm_HIV[i] == 1){
                                if (Icounter < commandNum){
                                    var cmd = commands[3];
                                    Icounter++;
                                } else{
                                    var cmd = commands[4];
                                    Icounter++;
                                }
                            }
                            else {
                                var cmd = commands[5];
                            }

                            result.push(cmd);
                        }

                        return result;


                        /*
                         var result = [];
                         var tabs = _.filter(commandSet, function(item){return item.type == "tabs"});
                         var commands = _.filter(commandSet, function(item){return item.type == "command"});
                         for (var i =-1;++i<num;){
                         var randomCommand = parseInt(Math.random()*commands.length);
                         var cmd = commands[randomCommand];
                         result.push(cmd);
                         }
                         return result;*/

                    }

                    function shuffle(array) {
                        var currentIndex = array.length, temporaryValue, randomIndex ;

                        // While there remain elements to shuffle...
                        while (0 !== currentIndex) {

                            // Pick a remaining element...
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;

                            // And swap it with the current element.
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }

                    function getTask(value, seedBlock, numTrials){
                        var task = _.clone(seedBlock);
                        task.block = value;
                        task.trials = getTrials(numTrials, seedBlock.commandSet);
                        return task;
                    }

                    var group = groups[groupNum];

                    var tasks = [];
                    for(var i =-1; ++i<group.length;){
                        var block = group[i];
                        tasks.push(getTask("familiarize", block, 30));
                        tasks.push(getTask("perform", block, 90));
                    }
                    
                    testTrials(tasks[0]);
                    testTrials(tasks[1]);
                    testTrials(tasks[2]);
                    testTrials(tasks[3]);
                    
                    console.log(tasks);

                    var data = {};
                    data['tasks'] = tasks;
                    return data;
                }
            }
    });