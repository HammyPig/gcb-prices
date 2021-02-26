SS = SpreadsheetApp.getActiveSpreadsheet();
PRODUCTS = SS.getSheetByName("Products");
LIST = SS.getSheetByName("List");
LEGACY = SS.getSheetByName("Legacy");
START_ID = 3000;
ROW = 0;

function main() {
  clear();
  var row = [];
  // 33
  for (var i = 7; i < 33; i++) { 
    var product = getProductInfo(i);
    
    row[ROW] = getParentInfo(product);
    var parentID = START_ID + ROW;
    ROW++;
    
    row = getChildInfo(product, row, parentID);
    
  }
  
  LIST.getRange(2, 1, row.length, row[0].length).setValues(row);
}