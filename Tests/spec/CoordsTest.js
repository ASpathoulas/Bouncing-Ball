describe("Create Ball and Get Coords", function() {
  var ball;
  var result;
  
  ball = new Ball(1,2);
  //var ball = new Ball(1,2);
  var result = ball.getCoords();

  it("X Coord of ball", function() {
    expect(result[0]).toBe(1);
  });

  it("Y Coord of ball", function() {
    expect(result[1]).toBe(2);
  });
});


describe("Force on Ball", function() {
  var ball;
  var ball = new Ball(1,2);
  var forcesAfterTheFirstClick = [0,10*10];

  it("Correct Reolved Force is returned", function() {
    expect(ball.doForces()).toEqual(forcesAfterTheFirstClick);
  });
});


describe("Color of Ball", function() {
  var color = getRandomColor();

  it("Color is returned", function() {
    expect(color).not.toBe(null);
  });
});





// describe("Ball Move", function() {
//   var ball = new Ball(1,5);
//   var canvas = new Canvas();
//   canvas.main;
//   it("Color is ", function() {
//     spyOn(ball,"move");
    
//     expect(ball.move).toHaveBeenCalled();
//   });
// });
