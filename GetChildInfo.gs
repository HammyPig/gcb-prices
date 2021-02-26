function getChildInfo(product, row, parentID) {
  var position = 0;
  var standardPrice = product.standardPrice;
  
  for (var i in product.attributes[0]) {
    var iPrice = product.attributes[0][i];
    for (var j in product.attributes[1]) {
      var jPrice = product.attributes[1][j];
      for (var k in product.attributes[2]) {
        var kPrice = product.attributes[2][k];
        for (var l in product.attributes[3]) {
          var lPrice = product.attributes[3][l];
          for (var m in product.attributes[4]) {
            var mPrice = product.attributes[4][m];
            var regularPrice = standardPrice + iPrice + jPrice + kPrice + lPrice + mPrice;
            position++;
            
            var col = new Array(65);
            col[0] = START_ID + ROW; // ID
            col[1] = "variation"; // Type
            col[2] = ""; // SKU
            col[3] = product.name; // Name
            col[4] = "1"; // Published
            col[5] = "0"; // Is featured?
            col[6] = "visible"; // Visibility
            col[7] = ""; // Short description
            col[8] = ""; // Description
            col[9] = ""; // Date sale starts
            col[10] = ""; // Date sale ends
            col[11] = "taxable"; // Tax status
            col[12] = "parent"; // Tax class
            col[13] = "1"; // In stock?
            col[14] = ""; // Stock
            col[15] = ""; // Low stock
            col[16] = "0"; // Backorders allowed?
            col[17] = "0"; // Sold individually?
            col[18] = ""; // Weight
            col[19] = ""; // Length
            col[20] = ""; // Width
            col[21] = ""; // Height
            col[22] = "0"; // Allow customer reviews?
            col[23] = ""; // Purchase note
            col[24] = ""; // Sale price
            col[25] = regularPrice; // Regular price
            col[26] = ""; // Categories
            col[27] = ""; // Tags
            col[28] = ""; // Shipping class
            col[29] = ""; // Images
            col[30] = ""; // Download limit
            col[31] = ""; // Download expiry days
            col[32] = `id:${parentID}`; // Parent
            col[33] = ""; // Grouped products
            col[34] = ""; //Upsells
            col[35] = ""; // Cross-sells
            col[36] = ""; // External URL
            col[37] = ""; // Button text
            col[38] = position;
            col[39] = ""; // Swatches
            
            var offset = 0;
            
            if (product.attributeNames[0] != "") {
              col[40 + offset] = product.attributeNames[0]; // Attribute 1 name
              col[41 + offset] = i; // Attribute 1 value(s)
              col[42 + offset] = ""; // Attribute 1 visible
              col[43 + offset] = "1"; // Attribute 1 global
              col[44 + offset] = ""; // Attribute 1 default
              offset += 5;
            }
            
            if (product.attributeNames[1] != "") {
              col[40 + offset] = product.attributeNames[1]; // Attribute 1 name
              col[41 + offset] = j; // Attribute 1 value(s)
              col[42 + offset] = ""; // Attribute 1 visible
              col[43 + offset] = "1"; // Attribute 1 global
              col[44 + offset] = ""; // Attribute 1 default
              offset += 5;
            }
            
            if (product.attributeNames[2] != "") {
              col[40 + offset] = product.attributeNames[2]; // Attribute 1 name
              col[41 + offset] = k; // Attribute 1 value(s)
              col[42 + offset] = ""; // Attribute 1 visible
              col[43 + offset] = "1"; // Attribute 1 global
              col[44 + offset] = ""; // Attribute 1 default
              offset += 5;
            }
            
            if (product.attributeNames[3] != "") {
              col[40 + offset] = product.attributeNames[3]; // Attribute 1 name
              col[41 + offset] = l; // Attribute 1 value(s)
              col[42 + offset] = ""; // Attribute 1 visible
              col[43 + offset] = "1"; // Attribute 1 global
              col[44 + offset] = ""; // Attribute 1 default
              offset += 5;
            }
            
            if (product.attributeNames[4] != "") {
              col[40 + offset] = product.attributeNames[4]; // Attribute 1 name
              col[41 + offset] = m; // Attribute 1 value(s)
              col[42 + offset] = ""; // Attribute 1 visible
              col[43 + offset] = "1"; // Attribute 1 global
              col[44 + offset] = ""; // Attribute 1 default
              offset += 5;
            }
            
            row[ROW] = col;
            ROW++;
          }
        }
      }
    }
  }
  
  return row;
}