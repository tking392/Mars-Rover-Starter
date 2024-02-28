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
         result: []
      };
      return respond;
   } 
}

module.exports = Rover;