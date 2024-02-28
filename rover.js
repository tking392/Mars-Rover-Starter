class Rover {
   // Write code here! - Onward to victory!
   constructor(position) {
      this.position = position;
      if (!position) {
         throw Error('Rover position required.');
      }
      this.mode = 'NORMAL'
      this.generatorWatts = 110;
   }

   receiveMessage(message) {
      let respond = {
         message: message.name,
         results: []
      };

      for (let i = 0; i < message.commands.length; i++) {
         // respond.results.push(message.commands[i]); - used for Test 9 before updating code for Test 10+
         if (message.commands[i].commandType === 'STATUS_CHECK') {
            respond.results.push({
               completed: true,
               roverStatus: {
                  mode: this.mode,
                  generatorWatts: this.generatorWatts,
                  position: this.position
               }
            });
         } else if (message.commands[i].commandType === 'MODE_CHANGE') {
            this.mode = message.commands[i].value;
            respond.results.push({
               completed: true
            });
         } else if (message.commands[i].commandType === 'MOVE') {
            if (this.mode === 'LOW_POWER') {
               respond.results.push({
                  completed: false
               });
            } else {
               this.position = message.commands[i].value;
               respond.results.push({
                  completed: true
               });
            }
         } else { // code above used for Test 9 converted to fit into the if statement
            respond.results.push({
               completed: true
            });
         }
      }
      return respond;
   }
}

module.exports = Rover;