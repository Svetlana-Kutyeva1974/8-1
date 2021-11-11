import Character from '../Character.js';
import Team from '../Team.js';

test('test error toThrow', () => {
  expect(() => {
    const p1 = new Character('hero', 'Magician');
    const obj1 = new Team();
    obj1.add(p1);
    obj1.add(p1);
  }).toThrow(/Персонаж уже входит в команду/);
});

test('test добавление персонажа в команду', () => {
  expect(() => {
  // eslint-disable-next-line no-unused-vars
    const p3 = new Character('hero', 'Magician');
    console.log('новый персонаж', p3);
    const p4 = new Character('hero1', 'Bowman');
    console.log('новый персонаж', p4);
    const obj2 = new Team();
    obj2.add(p3);
    obj2.add(p4);
    expect(obj2.members.size).toBe(2);
    console.log('rasmer', obj2.members.size);
  }).toBeTruthy();
});
/*
test('test create', () => {
  const p1 = new Character('hero', 'Magician');
  console.log('новый персонаж', p1);
  const p2 = new Character('hero1', 'Bowman');
  console.log('новый персонаж', p2);
  const p3 = new Character('hero2', 'Daemon');
  console.log('новый персонаж', p3);
  const obj = new Team();
  obj.add(p1);
  obj.add(p2);
  obj.add(p3);
  console.log('comands2n test3---:', obj);
  expect(obj).toEqual({
    Set {
      {
        name: 'hero',
        type: 'Magician',
        health: 100,
        level: 1
      },
      {
        name: 'hero1',
        type: 'Bowman',
        health: 100,
        level: 1
      },
      {
        name: 'hero2',
        type: 'Daemon',
        health: 100,
        level: 1
      }
    }
  });
});
*/

test('test успешное добавление', () => {
  const p = new Character('hero', 'Magician');
  console.log('новый персонаж', p);
  const p0 = new Character('hero1', 'Bowman');
  console.log('новый персонаж', p0);
  const t = new Team();
  t.add(p);
  t.add(p0);
  expect(t).toMatchObject(new Team([p, p0]).members);
});

test('test преобразование в массив', () => {
  // eslint-disable-next-line no-unused-vars
  const p1 = new Character('hero', 'Magician');
  const p2 = new Character('hero1', 'Bowman');
  const team = new Team();
  team.add(p1);
  team.add(p2);
  expect(team.toArray()).toStrictEqual([...team.members]);
});

test('test успешное добавление', () => {
  const p = new Character('hero', 'Magician');
  console.log('новый персонаж', p);
  const p0 = new Character('hero1', 'Bowman');
  console.log('новый персонаж', p0);
  const t = new Team();
  t.addAll(p, p0);
  expect(t).toMatchObject(new Team([p, p0]).members);
});
