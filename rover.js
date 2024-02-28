class Rover {
   // Write code here! - Onward to victory!
   constructor (position) {
      this.position = position;
      if(!position) {
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
         respond.results.push(message.commands[i]);
      }

      return respond;   
   } 
}


module.exports = Rover;