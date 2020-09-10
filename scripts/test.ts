import json from '../app/assets/gameData/zh_CN/gamedata/excel/character_table.json';
import _ from 'lodash';

console.log(
  _.map(json)
    .map((item) => item.description)
    .filter((str) => !str),
);
