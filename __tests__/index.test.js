const updateScoreboard = require('../index');

describe('#updateScoreboard', () => {
  test('accepts a board and returns it if no name given', () => {
    const testBoard = {
      doug: 1,
      poonam: 1,
      sal: 1,
      joey: 1
    };

    expect(updateScoreboard(testBoard)).toEqual({
      doug: 1,
      poonam: 1,
      sal: 1,
      joey: 1
    });
  });

  test('when provided a board and a name, increments the score of that person and returns the updated board', () => {
    const testBoard = {
      doug: 1,
      poonam: 1,
      sal: 1,
      joey: 1
    };

    expect(updateScoreboard(testBoard, 'poonam')).toEqual({
      doug: 1,
      poonam: 2,
      sal: 1,
      joey: 1
    })
  });
});
