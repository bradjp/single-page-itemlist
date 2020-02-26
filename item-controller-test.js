function canCreateItemController() {
  itemList = new ItemList
  itemList.addNewItem('Some stuff')
  itemC = new ItemController(itemList)
  assert.isTrue(itemC.itemList.items[0].text === 'Some stuff')
}

canCreateItemController()