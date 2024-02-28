const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
  // 7 tests here!

  //Test 7 - test for Rover position
  it('constructor sets position and default values for mode and generatorWatts', function () {
    expect( function() { new Rover();}).toThrow(new Error('Rover position required.'));
  });  

  //Test 8 - receiveMessage Message Name test
  it('response returned by receiveMessage contains the name of the message', function () {
    let testCommandsArr = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command ('MOVE', 1234)];
    let testMessage = new Message('Test 8 Message', testCommandsArr);
    let testRover = new Rover(9001);
    let testResponse = testRover.receiveMessage(testMessage).message;
    expect(testResponse).toBe(testMessage.name);
  });


  //Test 9 - receiveMessage is receving commands correctly
  it('response returned by receiveMessage includes two results if two commands are sent in the message', function () {
    let testCommandsArr = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command ('MOVE', 1234)];
    let testMessage = new Message('Test 9 Message', testCommandsArr);
    let testRover = new Rover(9001);
    let testResponse = testRover.receiveMessage(testMessage);
    expect(testResponse.results.length).toBe(testCommandsArr.length);
  });

  //Test 10 - Status Check command is working when input into Rover
  it('responds correctly to the status check command', function () {
    let testCommandsArr = [new Command('STATUS_CHECK')];
    let testMessage = new Message('Test 10 Status Check Working?', testCommandsArr);
    let testRover = new Rover(9001);
    let testResponse = testRover.receiveMessage(testMessage).results[0];
    let testAnswers = {
      completed: true,
      roverStatus: {
        mode: 'NORMAL',
        generatorWatts: 110,
        position: 9001
      }
    }
    expect(testResponse).toEqual(testAnswers);
  });


  //Test 11 - Mode Change command is working when input into Rover
  it('responds correctly to the mode change command', function () {
    let testCommandsArr = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let testMessage = new Message('Test 11 Mode Change Working?', testCommandsArr);
    let testRover = new Rover(9001);
    let testResponse = testRover.receiveMessage(testMessage); // looking for MODE_CHANGE to LOW_POWER
    expect(testRover.mode).toBe('LOW_POWER'); //looking at first command result to come back true from changing MODES
    expect(testResponse.results[0].completed).toBeTrue;
  });

  //Test 12 - testing Move command to make sure rover doesn't move while in LOW_POWER mode
  it('responds with a false completed value when attempting to move in LOW_POWER mode', function () {
    let testCommandsArr = [new Command('MODE_CHANGE', 'LOW_POWER'), ('MOVE', 360)];
    let testMessage = new Message('Test 12 will it MOVE while in LOW_POWER?', testCommandsArr);
    let testRover = new Rover(9001);
    let testResponse = testRover.receiveMessage(testMessage);
    expect(testRover.mode).toBe('LOW_POWER'); // looking for MODE_CHANGE to LOW_POWER
    expect(testResponse.results[0].completed).toBeTrue; //looking at first command result to come back true from changing MODES
    expect(testRover.position).toBe(9001); // confirming that the position hasn't changed
    expect(testResponse.results[1].completed).toBeFalse; // will make sure that the rover hasn't moved when trying to move while in LOW_POWER
  });


  //Test 13 - testing to see if rover will move to new postion with MOVE command
  it('responds with the position for the move command', function () {
    let testCommandsArr = [new Command('MOVE', 360)];
    let testMessage = new Message('Test 13 - Will. It. Move?!', testCommandsArr);
    let testRover = new Rover(9001);
    testRover.receiveMessage(testMessage); // excecutes the receiveMessage function to move the rover position for testing
    expect(testRover.position).toBe(360);
  });
  
});
