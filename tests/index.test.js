test('toEqual with arrays', (makeCounter) => {
   expect(makeCounter).toEqual(0); // Ок
  expect(makeCounter).toEqual(10); // Ошибка
  expect(colors).toContain(['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue']); // Ок
});
/* при запуске появляется ошибка"jest" не является внутренней или внешней
командой, исполняемой программой или пакетным файлом.*/

