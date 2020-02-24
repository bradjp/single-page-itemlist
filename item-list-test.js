function newItemList() {
  anItem = new Item('Hello')
  itemList = new ItemList
  itemList.addItem(anItem)
  assert.isTrue(itemList.getItems().length === 1)
}

newItemList()