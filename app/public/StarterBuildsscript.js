function showDetails(buildType) {
  let instructions = {
    car: "For the Mini Lego Car, you will need a few small pieces: 2 small wheels, a 2x4 brick, 2x2 plates, and some small blocks for the roof.",
    house:
      "For the Lego House, you will need: 4x 2x4 blocks for the walls, a 2x4 roof plate, and some additional smaller pieces for the door and window.",
    rocket:
      "To build the Lego Rocket, you will need: 1x 2x2 round plate for the base, 2x 2x3 blocks for the body, and some small cones for the rocket's top.",
  };

  alert("Instructions for " + buildType + ": " + instructions[buildType]);
}
