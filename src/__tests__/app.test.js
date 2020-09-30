import healthCondition from '../js/app'; // здесь и в некоторых других местах исправил в угоду линтера (пока лень самому конфигурировать на свой вкус)

test.each([
  ['Health = 14', { name: 'Лёха', health: 14 }, 'critical'],
  ['Health = 15', { name: 'Лёха', health: 15 }, 'wounded'],
  ['Health = 50', { name: 'Лёха', health: 50 }, 'wounded'],
  ['Health = 51', { name: 'Лёха', health: 51 }, 'healthy'],
])('%s', (title, char, expected) => {
  const result = healthCondition(char);
  expect(result).toBe(expected);
});
