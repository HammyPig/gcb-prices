function legacyConvert() {
  var row = 0;
  var colours = {"b": "Black", "w": "Pearl White", "s": "Ultra Silver Gloss"};
  var legacyProducts = [];
  
  // Windows
  for (var i = 6; i < 28; i++) {
    var product = getProductInfo(i);
    var productCode = "ASW-" + product.height + "x" + product.width
    var desc = product.desc + "\nOpening: XO, Colour: "
    
    for (var colour in colours) {
      legacyProducts[row] = [product.id + "-" + colour, desc + colours[colour], productCode, product.height, product.width, colours[colour], product.opening, product.glassType, "", product.standardPrice];
      row++;
    }
    
    if (!isNaN(product.obscure) && product.obscure != 0) {
      for (var colour in colours) {
        legacyProducts[row] = [product.id + "ob-" + colour, desc + colours[colour], productCode + " obscure", product.height, product.width, colours[colour], product.opening, "4mm Obscure Glass", "", product.obscure];
        row++;
      }
    }
    
    if (!isNaN(product.frosted) && product.frosted != 0) {
      for (var colour in colours) {
        legacyProducts[row] = [product.id + "f-" + colour, desc + colours[colour], productCode + " frosted", product.height, product.width, colours[colour], product.opening, "6.38mm Translucent Laminated", "", product.frosted];
        row++;
      }
    }
  }
  
  legacyProducts[row] = new Array(10);
  row++;
  
  // Doors
  for (var i = 28; i < 33; i++) {
    var product = getProductInfo(i);
    var opening = product.opening;
    opening = opening.split("/");
    for (var j = 0; j < opening.length; j++) {
      var productCode = "ASD-" + product.height + "x" + product.width + " " + opening[j]
      var desc = product.desc + "\nOpening: " + opening[j] + ", Colour: "
      for (var colour in colours) { 
        legacyProducts[row] = [product.id + opening[j].toLowerCase() + "-" + colour, desc + colours[colour], productCode, product.height, product.width, colours[colour], opening[j], product.glassType, "", product.standardPrice];
        row++;
      }
    }
  }
  
  legacyProducts[row] = new Array(10);
  row++;
  
  // Window invisigard
  for (var i = 6; i < 28; i++) {
    var product = getProductInfo(i);
    var productCode = "Custom Order"
    var desc = "Invisi-Gard Stainless Steel Screen made for:\nAluminium " + product.name + "\nColour: ";
    
    for (var colour in colours) {
      legacyProducts[row] = ["wi-" + product.id + "-" + colour, desc + colours[colour], productCode, "", "", "", "", "", "", 0];
      row++;
    }
  }
  
  legacyProducts[row] = new Array(10);
  row++;
  
  // Door invisigard
  for (var i = 28; i < 32; i++) {
    var product = getProductInfo(i);
    var opening = product.opening;
    opening = opening.split("/");
    for (var j = 0; j < opening.length; j++) {
      var productCode = "Custom Order"
      var desc = "Invisi-Gard Stainless Steel Screen made for:\nAluminium " + product.name + "\nLock Type: Interlock, Top & Bottom Rollers\nand Triple Lock, Opening: " + opening[j] + ", Colour: ";
      for (var colour in colours) { 
        legacyProducts[row] = ["di-" + product.id + opening[j].toLowerCase() + "-" + colour, desc + colours[colour] + "\n(No Warranty Included)", productCode, "", "", "", "", "", "", 0];
        row++;
      }
    }
  }
  
  legacyProducts[row] = new Array(10);
  row++;
  
  var revealSize = ["80", "100", "116", "138"];
  var revealState = {"f": "Flat Pack", "i": "Installed"};
  
  // Window Reveals
  for (var j = 0; j < revealSize.length; j++) {
    for (var state in revealState) { 
      for (var i = 6; i < 28; i++) {
        var product = getProductInfo(i);
        legacyProducts[row] = ["wr" + state + revealSize[j] + "-" + product.id, revealSize[j] + "mm Window " + revealState[state] + " for:\nAluminium " + product.name, "", "", "", "", "", "", "", product.revealPrices[state][j]];
        row++;
        
        if (!isNaN(product.obscure) && product.obscure != 0) {
          legacyProducts[row] = ["wr" + state + revealSize[j] + "-" + product.id + "ob", revealSize[j] + "mm Window " + revealState[state] + " for:\nAluminium " + product.name, "", "", "", "", "", "", "", product.revealPrices[state][j]];
          row++;
        }
        
        if (!isNaN(product.frosted) && product.frosted != 0) {
          legacyProducts[row] = ["wr" + state + revealSize[j] + "-" + product.id + "f", revealSize[j] + "mm Window " + revealState[state] + " for:\nAluminium " + product.name, "", "", "", "", "", "", "", product.revealPrices[state][j]];
          row++;
        }
      }
      legacyProducts[row] = new Array(10);
      row++;
    }
  }
  
  // Door Reveals
  for (var j = 0; j < revealSize.length; j++) {
    for (var state in revealState) { 
      for (var i = 28; i < 33; i++) {
        var product = getProductInfo(i);
        legacyProducts[row] = ["dr" + state + revealSize[j] + "-" + product.id, revealSize[j] + "mm Door " + revealState[state] + " for:\nAluminium " + product.name, "", "", "", "", "", "", "", product.revealPrices[state][j]];
        row++;
      }
      legacyProducts[row] = new Array(10);
      row++;
    }
  }
  
  // Window
  
  LEGACY.getRange(1, 1, legacyProducts.length, legacyProducts[0].length).setValues(legacyProducts);
}