function ItemListViewTest(){
  itemLV = new ItemList
  itemLV.addNewItem('Hello')
  itemLV = new ItemListView(itemLV)
  assert.isTrue(itemLV.toHTML() === '<ul><li><div><a href="#items/6">Hello</a></div></li></ul>')
  
}

ItemListViewTest()

function ItemListViewTestFirstTwenty(){
  itemListV = new ItemList
  itemListV.addNewItem('A shiny new coffee machine')
  itemListV = new ItemListView(itemListV)
  assert.isTrue(itemListV.toHTML() === '<ul><li><div><a href="#items/7">A shiny new coffee m...</a></div></li></ul>')
}

ItemListViewTestFirstTwenty()

//<a href="#tiger">Tiger</a>
