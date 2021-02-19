function clear() {
  var lastRow = LIST.getLastRow();
  if (lastRow > 1) {
    LIST.getRange(2, 1, lastRow - 1, LIST.getLastColumn()).clearContent();
  }
}