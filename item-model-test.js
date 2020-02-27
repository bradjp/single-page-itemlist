function newItemsGetSequentialIDs(){
  itemZero = new Item('Zero');
  itemOne = new Item('One');
  
  assert.isTrue(itemZero.id === 0)
  assert.isTrue(itemOne.id === 1)
};
newItemsGetSequentialIDs()

function newItem(){
  anItem = new Item('Hello');
  assert.isTrue(anItem.getText() === 'Hello')
};
newItem()