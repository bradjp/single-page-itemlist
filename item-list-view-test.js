function ItemListViewTest(){
  itemLV = new ItemList
  itemLV.addNewItem('Hello')
  itemLV = new ItemListView(itemLV)
  assert.isTrue(itemLV.toHTML() === "<ul><li><div>Hello</div></li></ul>")
}

ItemListViewTest()

function ItemListViewTestFirstTwenty(){
  itemListV = new ItemList
  itemListV.addNewItem('A shiny new coffee machine')
  itemListV = new ItemListView(itemListV)
  assert.isTrue(itemListV.toHTML() === "<ul><li><div>A shiny new coffee m</div></li></ul>")
}

ItemListViewTestFirstTwenty()