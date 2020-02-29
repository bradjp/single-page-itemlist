function canCreateItemController() {
  itemListTest = new ItemList
  itemListTest.addNewItem('Some stuff')
  itemC = new ItemController(itemListTest)
  assert.isTrue(itemC.itemList.items[0].text === 'Some stuff')
}

canCreateItemController()

// function canInsertHTMLIntoElement(){
//   document.body.innerHTML = '<div id="app">Hello</div>';
//   itemL = new ItemList
//   itemL.addNewItem('Some more stuff')
//   itemCon = new ItemController(itemL)
//   itemCon.insertHTML()
//   assert.isTrue(document.body.innerHTML === '<div id="app"><ul><li><div>Some more stuff</div></li><li><div>Some stuff</div></li></ul></div>')
// }

// canInsertHTMLIntoElement()
