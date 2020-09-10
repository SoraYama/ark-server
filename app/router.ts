import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/character', controller.character.getCharacter);
};
