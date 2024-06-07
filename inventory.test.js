
const updateInventory = require('./inventory');

test('should add a new product if it does not exist', () => {
  const inventory = [];
  const action = { type: 'add', product: 'apple', quantity: 10 };
  const updatedInventory = updateInventory(inventory, action);
  expect(updatedInventory).toEqual([{ product: 'apple', quantity: 10 }]);
});

test('should update the quantity of an existing product', () => {
  const inventory = [{ product: 'apple', quantity: 10 }];
  const action = { type: 'add', product: 'apple', quantity: 5 };
  const updatedInventory = updateInventory(inventory, action);
  expect(updatedInventory).toEqual([{ product: 'apple', quantity: 15 }]);
});

test('should remove a product if the quantity becomes zero', () => {
  const inventory = [{ product: 'apple', quantity: 10 }];
  const action = { type: 'remove', product: 'apple', quantity: 10 };
  const updatedInventory = updateInventory(inventory, action);
  expect(updatedInventory).toEqual([]);
});

test('should decrease the quantity of a product', () => {
  const inventory = [{ product: 'apple', quantity: 10 }];
  const action = { type: 'remove', product: 'apple', quantity: 5 };
  const updatedInventory = updateInventory(inventory, action);
  expect(updatedInventory).toEqual([{ product: 'apple', quantity: 5 }]);
});

test('should return "Not enough quantity" if trying to remove more than available', () => {
  const inventory = [{ product: 'apple', quantity: 10 }];
  const action = { type: 'remove', product: 'apple', quantity: 15 };
  const result = updateInventory(inventory, action);
  expect(result).toBe('Not enough quantity');
});

test('should return "Product not found" if trying to remove a non-existing product', () => {
  const inventory = [{ product: 'apple', quantity: 10 }];
  const action = { type: 'remove', product: 'banana', quantity: 5 };
  const result = updateInventory(inventory, action);
  expect(result).toBe('Product not found');
});

test('should return "Invalid action type" for an unknown action type', () => {
  const inventory = [{ product: 'apple', quantity: 10 }];
  const action = { type: 'unknown', product: 'apple', quantity: 5 };
  const result = updateInventory(inventory, action);
  expect(result).toBe('Invalid action type');
});

test('should return "Invalid action" for invalid product or quantity', () => {
  const inventory = [{ product: 'apple', quantity: 10 }];
  let action = { type: 'add', product: '', quantity: 5 };
  let result = updateInventory(inventory, action);
  expect(result).toBe('Invalid action');

  action = { type: 'add', product: 'apple', quantity: -1 };
  result = updateInventory(inventory, action);
  expect(result).toBe('Invalid action');

  action = { type: 'add', product: 'apple' };
  result = updateInventory(inventory, action);
  expect(result).toBe('Invalid action');
});

  /*
  Explicación de las Pruebas
Pruebas de Sentencia:

  1.  Agregar un nuevo producto si no existe:
      Esta prueba verifica que un nuevo producto se agrega correctamente al inventario si no está presente.

  2.  Actualizar la cantidad de un producto existente:
      Esta prueba asegura que la cantidad de un producto existente se actualiza correctamente 
      cuando se agrega más del mismo producto.

  3.  Eliminar un producto si la cantidad se vuelve cero:
      Verifica que un producto se elimina del inventario si la cantidad se reduce a cero.

  4.  Disminuir la cantidad de un producto:
      Esta prueba verifica que la cantidad de un producto se reduce correctamente 
      cuando se elimina una parte de su cantidad.

Pruebas de Decisión:

  1.  Retornar "Not enough quantity" si se intenta eliminar más de lo disponible:
      Asegura que la función maneja correctamente el caso en el que se intenta eliminar más cantidad 
      de la que está disponible en el inventario.

  2.  Retornar "Product not found" si se intenta eliminar un producto no existente:
      Verifica que la función maneja correctamente el caso en el que se intenta eliminar un producto 
      que no existe en el inventario.

  3.  Retornar "Invalid action type" para un tipo de acción desconocido:
      Asegura que la función maneja correctamente tipos de acción desconocidos.

  4.  Retornar "Invalid action" para productos o cantidades inválidas:
      Verifica que la función maneja correctamente acciones con productos o cantidades inválidas, 
      como productos vacíos o cantidades negativas.
    */
    