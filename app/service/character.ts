import { Service } from 'egg';
import _ from 'lodash';
import characterJson from '../assets/gameData/zh_CN/gamedata/excel/character_table.json';
import { decodeFormat } from '../utils';

export default class Character extends Service {
  public async getList() {
    const list = _(characterJson)
      .map()
      .map((item) => ({
        ...item,
        description: decodeFormat(item.description),
      }))
      .value();

    return list;
  }

  public async getCharacterById(id: string) {
    const target = characterJson[id];
    return target || {};
  }

  public async getCharacterByName(name: string) {
    const list = await this.getList();
    return _(list).find({ name }) || {};
  }
}
