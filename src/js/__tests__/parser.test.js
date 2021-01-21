import json from '../parser';
import GameSavingLoader from '../loader';

jest.mock('../parser');

beforeEach(() => {
  jest.resetAllMocks();
});

test('object GameSaving, error', () => {
  json.mockReturnValue({});
  const gameSaving = GameSavingLoader.load().then((saving) => saving, (error) => {
    throw new Error(error);
  });
  return expect(Promise.resolve(gameSaving)).rejects.toThrow();
});
