import { taskFirst, taskNext } from './0-constants.js';

describe('0-constants.js tests', () => {
  test('taskFirst returns the correct string', () => {
    expect(taskFirst()).toBe('I prefer const when I can.');
  });

  test('taskNext returns the correct string', () => {
    expect(taskNext()).toBe('But sometimes let is okay');
  });
});
