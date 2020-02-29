function newItemListLengthCheck() {
  anItemTest = new Item('Hello')
  itemListTest = new ItemList
  itemListTest.addItem(anItemTest)
  assert.isTrue(itemListTest.getItems().length === 1)
}

function newItemListItemCheck() {
  anItemTest = new Item('Hello')
  itemListTest = new ItemList
  itemListTest.addItem(anItemTest)
  assert.isTrue(itemListTest.getItems()[0].text === 'Hello')
}

function newItemListAddNewItem() {
  itemListTest = new ItemList
  itemListTest.addNewItem('Hello')
  assert.isTrue(itemListTest.getItems()[0].text === 'Hello')
}

newItemListLengthCheck()
newItemListItemCheck()
newItemListAddNewItem()