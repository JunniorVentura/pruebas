

/*La función se llama updateInventory y se utiliza para actualizar el inventario de productos. 
La función debe manejar diferentes situaciones, como agregar nuevos productos, 
actualizar la cantidad de productos existentes y manejar casos en los que el producto no está disponible.*/

function updateInventory(inventory, action) {
    const { type, product, quantity } = action;
  
    if (!product || quantity === undefined || quantity < 0) {
      return 'Invalid action';
    }
  
    const item = inventory.find(item => item.product === product);
  
    switch (type) {
      case 'add':
        if (item) {
          item.quantity += quantity;
        } else {
          inventory.push({ product, quantity });
        }
        break;
  
      case 'remove':
        if (item) {
          if (item.quantity >= quantity) {
            item.quantity -= quantity;
            if (item.quantity === 0) {
              inventory.splice(inventory.indexOf(item), 1);
            }
          } else {
            return 'Not enough quantity';
          }
        } else {
          return 'Product not found';
        }
        break;
  
      default:
        return 'Invalid action type';
    }
  
    return inventory;
  }
  
  module.exports = updateInventory;
