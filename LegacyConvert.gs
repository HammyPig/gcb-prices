function legacyConvert() {
  var row = 0;
  var colours = {"b": "Black", "w": "Pearl White", "s": "Ultra Silver Gloss"};
  var legacyProducts = [];
  
  // Windows
  for (var i = 6; i < 28; i++) {
    var product = getProductInfo(i);
    for (var colour in colours) { 
      legacyProducts[row] = [product.id + "-" + colour, product.desc + colours[colour], product.height, product.width, colours[colour], product.handling, product.glassType, "", product.standardPrice];
      row++;
    }
  }
  
  legacyProducts[row] = new Array(9);
  row++;
  
  // Doors
  for (var i = 29; i < 33; i++) {
    var product = getProductInfo(i);
    var handling = product.handling;
    handling = handling.split("/");
    Logger.log(handling);
    for (var j = 0; j < handling.length; j++) {
      for (var colour in colours) { 
        legacyProducts[row] = [product.id + handling[j].toLowerCase() + "-" + colour, product.desc + colours[colour], product.height, product.width, colours[colour], handling[j], product.glassType, "", product.standardPrice];
        row++;
      }
    }
  }
  
  legacyProducts[row] = new Array(9);
  row++;
  
  var revealSize = ["80", "100", "116", "138"];
  var revealState = {"f": "Flat Pack", "i": "Installed"};
  
  // Window Reveals
  for (var j = 0; j < revealSize.length; j++) {
    for (var state in revealState) { 
      for (var i = 6; i < 28; i++) {
        var product = getProductInfo(i);
        legacyProducts[row] = ["wr" + state + revealSize[j] + "-" + product.id, revealSize[j] + "mm Window " + revealState[state] + " for:\nAluminium " + product.name, "", "", "", "", "", "", product.revealPrices[state][j]];
        row++;
        
        if (!isNaN(product.obscure) && product.obscure != 0) {
          legacyProducts[row] = ["wr" + state + revealSize[j] + "-" + product.id + "ob", revealSize[j] + "mm Window " + revealState[state] + " for:\nAluminium " + product.name, "", "", "", "", "", "", product.revealPrices[state][j]];
          row++;
        }
        
        if (!isNaN(product.frosted) && product.frosted != 0) {
          legacyProducts[row] = ["wr" + state + revealSize[j] + "-" + product.id + "f", revealSize[j] + "mm Window " + revealState[state] + " for:\nAluminium " + product.name, "", "", "", "", "", "", product.revealPrices[state][j]];
          row++;
        }
      }
      legacyProducts[row] = new Array(9);
      row++;
    }
  }
  
  // Door Reveals
  for (var j = 0; j < revealSize.length; j++) {
    for (var state in revealState) { 
      for (var i = 29; i < 33; i++) {
        var product = getProductInfo(i);
        legacyProducts[row] = ["dr" + state + revealSize[j] + "-" + product.id, revealSize[j] + "mm Door " + revealState[state] + " for:\nAluminium " + product.name, "", "", "", "", "", "", product.revealPrices[state][j]];
        row++;
      }
      legacyProducts[row] = new Array(9);
      row++;
    }
  }
  
  LEGACY.getRange(1, 1, legacyProducts.length, legacyProducts[0].length).setValues(legacyProducts);
}