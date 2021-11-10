import Character from '../Character.js';
import Team from '../Team.js';
// eslint-disable-next-line no-unused-vars
/*
const p1 = new Character('hero', 'Magician');
console.log('новый персонаж', p1);
const p2 = new Character('hero1', 'Bowman');
console.log('новый персонаж', p2);
*/

test('test error toThrow', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const p1 = new Character('hero', 'Magician');
    const p2 = new Character('hero', 'Magician');
    const obj1 = new Team();
    obj1.add(p1);
    obj1.add(p2);
    /*
    expect(obj1.name).toMatch(/undefined/);
    */
  }).toThrow(/Персонаж уже входит в команду/);
});

test('test начало строки', () => {
    // eslint-disable-next-line no-unused-vars
    const p1 = new Character('hero', 'Magician');
    console.log('новый персонаж', p1);
    const p2 = new Character('hero1', 'Bowman');
    console.log('новый персонаж', p2);
    const p3 = new Character('hero2', 'Daemon');
    console.log('новый персонаж', p3);
    const obj1 = new Team();
    obj1.addAll(p1, p2, p3);
    console.log('comands2:', obj1);
});

test('test name create in basic', () => {
  const p1 = new Character('hero', 'Magician');
    console.log('новый персонаж', p1);
    const p2 = new Character('hero1', 'Bowman');
    console.log('новый персонаж', p2);
    const p3 = new Character('hero2', 'Daemon');
    console.log('новый персонаж', p3);
    const obj1 = new Team();
    obj1.addAll(p1, p2, p3);
    console.log('comands2:', obj1);
    obj1.toArray();
});
