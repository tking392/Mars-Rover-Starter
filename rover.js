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
      this.message = new Message (name, commands);
      let results = [];
   }  
}

module.exports = Rover;