// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCharacter from '../../../app/controller/character';

declare module 'egg' {
  interface IController {
    character: ExportCharacter;
  }
}
