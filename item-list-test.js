function newItemListLengthCheck() {
  anItem = new Item('Hello')
  itemList = new ItemList
  itemList.addItem(anItem)
  assert.isTrue(itemList.getItems().length === 1)
}

function newItemListItemCheck() {
  anItem = new Item('Hello')
  itemList = new ItemList
  itemList.addItem(anItem)
  assert.isTrue(itemList.getItems()[0].text === 'Hello')
}

function newItemListAddNewItem() {
  itemList = new ItemList
  itemList.addNewItem('Hello')
  assert.isTrue(itemList.getItems()[0].text === 'Hello')
}

newItemListLengthCheck()
newItemListItemCheck()
newItemListAddNewItem()