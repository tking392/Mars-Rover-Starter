class Command {
   constructor(commandType, value) {
     this.commandType = commandType; // commandType will be one of the following: MODE_CHANGE, MOVE, or STATUS_CHECK
     if (!commandType) { 
       throw Error("Command type required.");
     }
     this.value = value; // related to the type of commmand
   }
 
 }
 
 module.exports = Command;