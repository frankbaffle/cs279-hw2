    var _=require("underscore");

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

    var nrepeat = 5;
    var H = Array.apply(null, new Array(nrepeat*3)).map(Number.prototype.valueOf,0);
    var I = Array.apply(null, new Array(nrepeat*2)).map(Number.prototype.valueOf,1);
    var V = Array.apply(null, new Array(nrepeat*1)).map(Number.prototype.valueOf,2);

    var HI = H.concat(I);
    var HIV = HI.concat(V);

    var perm_HIV = shuffle(HIV);


    var counter = 0;
    while (counter < perm_HIV.length/2){
    	counter = 0;
    for (i=0; i< perm_HIV.length-1; i++){
    	if (perm_HIV[i] - perm_HIV[i+1] != 0){
    		counter++;
    	}
    }
    }

    //copy perm_HIV to command_perm (for this we need var _=require("underscore"); above)
    var command_perm = _.clone(perm_HIV);
    Hcounter = 0;
    Icounter = 0;

    var result = [];
                //var tabs = _.filter(commandSet, function(item){return item.type == "tabs"});
                //var commands = _.filter(commandSet, function(item){return item.type == "command"});
                var commands = ['bold', 'sort', 'borders', 'picture', 'chart', 'zoom'];
                for (i=0; i< perm_HIV.length; i++){
                    if (perm_HIV[i] == 0){
                        if (Hcounter < 5){
                            command_perm[i] = 1;
                            var cmd = commands[0];
                            Hcounter++;
                        }else if (Hcounter < 10){
                            command_perm[i] = 2;
                            var cmd = commands[1];
                            Hcounter++;
                        }  else{
                            command_perm[i] = 3;
                            var cmd = commands[2];
                            Hcounter++;
                        }
                    }
                    else if (perm_HIV[i] == 1){
                        if (Icounter < 5){
                          command_perm[i] = 4;
                            var cmd = commands[3];
                            Icounter++;
                        } else{
                          command_perm[i] = 5;
                            var cmd = commands[4];
                            Icounter++;
                        }
                    }
                    else{
                      command_perm[i] = 6;
                        var cmd = commands[5];
                    } 

                    result.push(cmd);
                }

    /*for (i=0; i< perm_HIV.length; i++){
      //home - 1,2,3
      if (perm_HIV[i] == 0){
        if (Hcounter < 5){
          command_perm[i] = 1;
          Hcounter++;
        }else if (Hcounter < 10){
          command_perm[i] = 2;
          Hcounter++;
        }  else{
          command_perm[i] = 3;
          Hcounter++;
        }
      }
      //insert - 4,5
      if (perm_HIV[i] == 1){
        if (Icounter < 5){
          command_perm[i] = 4;
          Icounter++;
         } else{
            command_perm[i] = 5;
            Icounter++;
          }
      }
      //view - 6
      if (perm_HIV[i] == 2){
        command_perm[i] = 6;
       } 
    }*/



    console.log(perm_HIV);
    console.log(counter);
    console.log(command_perm);
    console.log(result);

