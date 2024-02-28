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
    let testMessage = new Message('Test Message', testCommandsArr);
    let testRover = new Rover(9001);
    let testResponse = testRover.receiveMessage(testMessage).message;
    expect(testResponse).toBe(testMessage.name);
  });


  //Test 9
  it('response returned by receiveMessage includes two results if two commands are sent in the message', function () {
    let testCommandsArr = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command ('MOVE', 1234)];
    let testMessage = new Message('Test Message', testCommandsArr);
    let testRover = new Rover(9001);
    let testResponse = testRover.receiveMessage(testMessage);
    expect(testResponse.results.length).toBe(testCommandsArr.length);
  });

  //Test 10
  it('responds correctly to the status check command', function () {
    let testCommandsArr = [new Command('STATUS_CHECK')];
    let testMessage = new Message('Test Message', testCommandsArr);
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


  // it("responds correctly to status check command", function() {
  //   let commands = [new Command('STATUS_CHECK')]
  //   let message = new Message('test 10 name', commands)
  //   let rover = new Rover(2000);
  //   let actual = rover.receiveMessage(message).results[0];
  //   let expected = {
  //     completed: true,
  //     roverStatus: {
  //       mode: 'NORMAL',
  //       generatorWatts: 110,
  //       position: 2000
  //     }
  //   }
  //   expect(actual).toEqual(expected);
  // });

  //Test 11

  //Test 12

  //Test 13

});
