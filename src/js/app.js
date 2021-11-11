// TODO: write your code here
import Character from './Character.js';
import Team from './Team.js';
// eslint-disable-next-line no-unused-vars
const p1 = new Character('hero', 'Magician');
const p2 = new Character('hero1', 'Bowman');
const p3 = new Character('hero2', 'Daemon');
const obj1 = new Team();
obj1.add(p1);
obj1.addAll(p1, p2, p3);
console.log('comands2:', obj1);
obj1.toArray();
