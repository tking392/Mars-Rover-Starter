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
         } else { // new code to satisfy Test 9 
            respond.results.push({
               completed: true
            });
         }
      }
      return respond;
   }
}

module.exports = Rover;