function ItemListViewTest(){
  itemLVTest = new ItemList
  itemLVTest.addNewItem('Hello')
  itemLVTest = new ItemListView(itemLVTest)
  assert.isTrue(itemLVTest.toHTML() === '<ul><li><div><a href="#items/6">Hello</a></div></li></ul>')
  
}

ItemListViewTest()

function ItemListViewTestFirstTwenty(){
  itemListV = new ItemList
  itemListV.addNewItem('A shiny new coffee machine')
  itemListV = new ItemListView(itemListV)
  assert.isTrue(itemListV.toHTML() === '<ul><li><div><a href="#items/7">A shiny new coffee m...</a></div></li></ul>')
}

ItemListViewTestFirstTwenty()

