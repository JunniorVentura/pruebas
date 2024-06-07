
const canVote = require('./canVote');

test('returns false for age less than 18', () => {
  expect(canVote(17, true)).toBe(false);
});

test('returns true for age 18 or older and registered', () => {
  expect(canVote(18, true)).toBe(true);
  expect(canVote(20, true)).toBe(true);
});

test('returns false for age 18 or older and not registered', () => {
  expect(canVote(18, false)).toBe(false);
  expect(canVote(20, false)).toBe(false);
});

/*Explicación de las Pruebas
Pruebas de Sentencia:

  1.  should return false for age less than 18: 
      Esta prueba asegura que la función devuelve false si la edad es menor de 18, 
      cubriendo así la primera sentencia del if.

  2.  should return true for age 18 or older and registered: 
      Esta prueba asegura que la función devuelve true si la edad es 18 o mayor y la persona está registrada, 
      cubriendo la segunda sentencia del if y la primera sentencia del else.

  3.  should return false for age 18 or older and not registered: 
      Esta prueba asegura que la función devuelve false si la edad es 18 o mayor y la persona no está registrada, 
      cubriendo la segunda sentencia del else.

Pruebas de Decisión:

  1.  should return false for age less than 18 regardless of registration: 
      Estas pruebas cubren ambas decisiones del if inicial donde la edad es menor de 18, 
      independientemente de si la persona está registrada.
  
  2.  should return true if age is 18 or older and registered: 
      Estas pruebas cubren la decisión donde la edad es 18 o mayor y la persona está registrada.
  
  3.  should return false if age is 18 or older but not registered: 
      Estas pruebas cubren la decisión donde la edad es 18 o mayor pero la persona no está registrada. */
