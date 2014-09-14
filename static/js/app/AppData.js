define([
    "data/CommandSet1",
    "data/CommandSet2"],
    function (cmdSet1, cmdSet2) {

        var cmBlock = {interface: "CommandMaps", commandSet: cmdSet1};
        var rBlock = {interface: "Ribbons", commandSet: cmdSet2};

        var group1 = [cmBlock, rBlock];
        var group2 = [rBlock, cmBlock];

        function getTrials(num, commandSet){
            var result = [];
            var tabs = _.filter(commandSet, function(item){return item.type == "tabs"});
            var commands = _.filter(commandSet, function(item){return item.type == "command"});
            for (var i =-1;++i<num;){
                var randomCommand = parseInt(Math.random()*commands.length);
                var cmd = commands[randomCommand];
                result.push(cmd);
            }
            return result;
        }

        function getTask(value, seedBlock, numTrials){
            var task = _.clone(seedBlock);
            task.block = value;
            task.trials = getTrials(numTrials, seedBlock.commandSet);
            return task;
        }

        var group = group1;

        var tasks = [];
        for(var i =-1; ++i<group.length;){
            var block = group[i];
            tasks.push(getTask("familiarize", block, 30));
            tasks.push(getTask("perform", block, 90));
        }

        var data = {};
        data['tasks'] = tasks;
        return data;

});
