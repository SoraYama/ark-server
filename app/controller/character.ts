import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async getCharacter() {
    const { ctx } = this;
    const { id, name } = ctx.query;
    if (id) {
      ctx.body = await ctx.service.character.getCharacterById(id);
    } else if (name) {
      ctx.body = await ctx.service.character.getCharacterByName(name);
    } else {
      ctx.body = await ctx.service.character.getList();
    }
  }
}
