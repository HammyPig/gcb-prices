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
  
  var screenTypes = {"f": "Fly Screen", "s": "7mm Diamond Grill Safety Screen", "3": "7mm Diamond Grill Safety Screen", "i": "Invisi-Gard Stainless Steel Screen"};
  var lockTypes = {"f": "", "s": "Lock Type: Single Lock\n", "3": "Lock Type: Triple Lock (Australian Compliant)\n", "i": "Lock Type: Interlock, Top & Bottom Rollers\nand Triple Lock, "};
  var productCode = "Custom Order";

  for (var screenCode in screenTypes) {
    
    for (var i = 28; i < 32; i++) {
      var product = getProductInfo(i);
      var price = 0
      switch (screenCode) {
        case "f":
          price = product.flyScreen;
          break;
        case "s":
          price = product.securityScreen;
          break;
        case "3":
          price = product.tripleLock;
          break;
      }

      var opening = product.opening;
      opening = opening.split("/");
      for (var j = 0; j < opening.length; j++) {
        var desc = screenTypes[screenCode] + " to suit:\nAluminium " + product.name + "\n" + lockTypes[screenCode] + "Opening: " + opening[j] + ", Colour: ";
        for (var colour in colours) {
          var description = desc + colours[colour];
          if (screenCode == "i") {
            description += "\n(No Warranty Included)";
          }
          legacyProducts[row] = ["d" + screenCode + "-" + product.id + opening[j].toLowerCase() + "-" + colour, description, productCode, "", "", "", "", "", "", price];
          row++;
        }
      }
    }
    legacyProducts[row] = new Array(10);
    row++;

    if (screenCode == "3") {
      continue;
    }

    for (var i = 6; i < 28; i++) {
      var product = getProductInfo(i);
      var price = 0
      switch (screenCode) {
        case "f":
          price = product.flyScreen;
          break;
        case "s":
          price = product.securityScreen;
          break;
      }

      var desc = screenTypes[screenCode] + " to suit:\nAluminium " + product.name + "\nColour: ";
      
      for (var colour in colours) {
        legacyProducts[row] = ["w" + screenCode + "-" + product.id + "-" + colour, desc + colours[colour], productCode, "", "", "", "", "", "", price];
        row++;
      }
    }
    legacyProducts[row] = new Array(10);
    row++;
  }
  
  
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