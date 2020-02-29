(function (exports){
  function ItemController(itemList){
    this.itemList = itemList
    itemLV = new ItemListView(itemList)    
    this.itemLV = itemLV

  }
  ItemController.prototype.insertHTML = function(){
    html = this.itemLV.toHTML();    
    var element = document.getElementById('app');
    element.innerHTML = html
  }

  function makeUrlChangeShowItemForCurrentPage() {
    window.addEventListener("hashchange", showItemForCurrentPage);
  };

  function showItemForCurrentPage() {
    showItem(getItemFromUrl(window.location));
  };

  function getItemFromUrl(location) {
    x = location.hash.split("#")[1];
    return x = x.split('/')[1]
  };

  function showItem(Item) {
    x = search(Number(Item), this.controller.itemList.items)
    document
      .getElementById("app")
      .innerHTML = x.text
      
  };

  function search(IDKey, arr){
    for (var i=0; i < arr.length; i++) {
        if (arr[i].id === IDKey) {
            return arr[i];
        }
    }
}

  window.addEventListener('submit', function(event) {
    text = event.target[0].value
    event.preventDefault();
    controller.itemList.addNewItem(text)
    controller.insertHTML()
  
  });
  controller = new ItemController(new ItemList)

  makeUrlChangeShowItemForCurrentPage()

  exports.ItemController = ItemController
  exports.makeUrlChangeShowItemForCurrentPage = makeUrlChangeShowItemForCurrentPage
  exports.search = search
})(this)

// adds a new note to the note list and updates the app element to show the note list as HTML.