SS = SpreadsheetApp.getActiveSpreadsheet();
PRODUCTS = SS.getSheetByName("Products");
LIST = SS.getSheetByName("List");
LEGACY = SS.getSheetByName("Legacy");
START_ID = 26000;
ROW = 0;

function main() {
  clear();
  var row = [];
  for (var i = 6; i < 33; i++) { 
    var product = getProductInfo(i);
    
    row[ROW] = getParentInfo(product);
    var parentID = START_ID + ROW;
    ROW++;
    
    row = getChildInfo(product, row, parentID);
    
  }
  
  LIST.getRange(2, 1, row.length, row[0].length).setValues(row);
}