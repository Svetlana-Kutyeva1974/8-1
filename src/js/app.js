// TODO: write your code here
import Character from './Character.js';
import Team from './Team.js';
// eslint-disable-next-line no-unused-vars
const p1 = new Character('hero', 'Magician');
console.log('новый персонаж', p1);
const p2 = new Character('hero1', 'Bowman');
console.log('новый персонаж', p2);
const p3 = new Character('hero2', 'Daemon');
console.log('новый персонаж', p3);
// eslint-disable-next-line no-unused-vars
const obj1 = new Team();
obj1.add(p1);
// eslint-disable-next-line no-unused-vars
obj1.addAll(p1, p2, p3);
console.log('comands2:', obj1);
obj1.toArray();
