function singleItemViewToHtml(){
  i = new Item('New watch');
  siv = new SingleItemView(i);
  assert.isTrue(siv.getHTML() === '<div>New watch</div>')
}

singleItemViewToHtml()