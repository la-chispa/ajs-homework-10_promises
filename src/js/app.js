import GameSavingLoader from './loader';

GameSavingLoader.load().then((saving) => saving, (error) => {
  throw new Error(error);
});
