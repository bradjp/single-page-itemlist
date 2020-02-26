function ItemListViewTest(){
  itemLV = new ItemList
  itemLV.addNewItem('Hello')
  itemLV = new ItemListView(itemLV)
  assert.isTrue(itemLV.toHTML() === "<ul><li><div>Hello</div></li></ul>")
}

ItemListViewTest()