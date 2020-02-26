function newItemsGetSequentialIDs(){
  itemZero = new Item('Zero');
  itemOne = new Item('One');
  console.log(itemZero.id);
  console.log(itemOne.id);
  
  assert.isTrue(itemZero.id === 0)
  assert.isTrue(itemOne.id === 1)
};
newItemsGetSequentialIDs()

function newItem(){
  anItem = new Item('Hello');
  assert.isTrue(anItem.getText() === 'Hello')
};
newItem()