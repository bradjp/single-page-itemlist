(function(exports){
  var ItemListView = function(itemList){
    this.itemList = itemList
  }

  ItemListView.prototype.toHTML = function(){
    html = '<ul>'
    for (let i = 0; i < this.itemList.items.length; i++) {
      if (this.itemList.items[i].text.length > 20) {
     html = html + '<li><div>' + '<a href="#items/' + this.itemList.items[i].id + '">' + this.itemList.items[i].text.substring(0, 20) + '...</a></div></li>'
    } else {
     html = html + '<li><div>' + '<a href="#items/' + this.itemList.items[i].id + '">' + this.itemList.items[i].text + '</a></div></li>' 
    }
  }
    return html + '</ul>';
  }

  exports.ItemListView = ItemListView
})(this)
