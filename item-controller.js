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

  makeUrlChangeShowItemForCurrentPage()

  exports.ItemController = ItemController
  exports.makeUrlChangeShowItemForCurrentPage = makeUrlChangeShowItemForCurrentPage
  exports.search = search
})(this)
