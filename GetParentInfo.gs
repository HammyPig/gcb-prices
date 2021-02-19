function getParentInfo(product) {
  var col = new Array(65);
  col[0] = START_ID + ROW; // ID
  col[1] = "variable"; // Type
  col[2] = ""; // SKU
  col[3] = product.name; // Name
  col[4] = "1"; // Published
  col[5] = "0"; // Is featured?
  col[6] = "visible"; // Visibility
  col[7] = product.shortDesc; // Short description
  col[8] = product.longDesc; // Description
  col[9] = ""; // Date sale starts
  col[10] = ""; // Date sale ends
  col[11] = "taxable"; // Tax status
  col[12] = ""; // Tax class
  col[13] = "1"; // In stock?
  col[14] = ""; // Stock
  col[15] = ""; // Low stock
  col[16] = "0"; // Backorders allowed?
  col[17] = "0"; // Sold individually?
  col[18] = ""; // Weight
  col[19] = ""; // Length
  col[20] = ""; // Width
  col[21] = ""; // Height
  col[22] = "1"; // Allow customer reviews?
  col[23] = ""; // Purchase note
  col[24] = ""; // Sale price
  col[25] = ""; // Regular price
  col[26] = product.category; // Categories
  col[27] = ""; // Tags
  col[28] = ""; // Shipping class
  col[29] = product.images; // Images
  col[30] = ""; // Download limit
  col[31] = ""; // Download expiry days
  col[32] = ""; // Parent
  col[33] = ""; // Grouped products
  col[34] = ""; //Upsells
  col[35] = ""; // Cross-sells
  col[36] = ""; // External URL
  col[37] = ""; // Button text
  col[38] = "0"; // Position
  col[39] = product.swatches; // Swatches
  var offset = 0;
  for (var i = 0; i < product.attributes.length; i++) {
    var name = product.attributeNames[i];
    
    if (name == "") {
      continue;
    }
    
    var attribute = product.attributes[i];
    col[40 + offset] = name;
    attribute = Object.keys(attribute);

    col[41 + offset] = attribute.toString();
    col[42 + offset] = "1";
    col[43 + offset] = "1";
    col[44 + offset] = attribute[0];
    
    offset += 5;
  }
  
  return col;
}