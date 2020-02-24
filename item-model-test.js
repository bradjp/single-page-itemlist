function newItem(){
  anItem = new Item('Hello');
  assert.isTrue(anItem.getText() === 'Hello')
};
newItem()