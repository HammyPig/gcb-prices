function getProductInfo(row) {
  var productInfo = PRODUCTS.getRange(row, 1, 1, 23).getValues()[0];
  var product = {};
  
  product.id = productInfo[0];
  product.category = productInfo[1];
  product.glassType = productInfo[2];
  product.opening = productInfo[3];
  product.height = productInfo[4];
  product.width = productInfo[5];
  
  product.standardPrice = Number(productInfo[7]);
  product.reveal80 = productInfo[12];
  product.reveal100 = productInfo[13];
  product.reveal116 = productInfo[14];
  product.reveal138 = productInfo[15];
  product.flyScreen = productInfo[16];
  product.securityScreen = productInfo[17];
  product.tripleLock = productInfo[18];
  product.invisiGard = productInfo[19];
  product.obscure = productInfo[20];
  product.frosted = productInfo[21];
  product.images = productInfo[22];
  
  product.revealPrices = {"f": [productInfo[8], productInfo[9], productInfo[10], productInfo[11]], "i": [product.reveal80, product.reveal100, product.reveal116, product.reveal138]};
  
  var attributeInfo = getAttributes(product);
  product.attributeNames = attributeInfo[0];
  product.attributes = attributeInfo[1];
  product.swatches = getSwatches(product);
  
  type = product.category.slice(0, -1)
  product.name = `${type} ${product.height} H x ${product.width} W`;
  product.desc = `Aluminium ${type} ${product.height} H x ${product.width} W\nGlass Type: ${product.glassType}`;
  product.shortDesc = `Aluminium ${type} ${product.height} H x ${product.width} W\nStandard Glass Type: ${product.glassType}\nOpening: ${product.opening}`;
   
  product.longDesc = "";
  
  /*
  if (product.category == "Sliding Windows") {
    product.longDesc = '<span style="font-weight: 400;">Our aluminium sliding window range is designed to meet all the requirements of the modern home, including security, strength, reliability and expansive views. As the name suggests, they are opened and closed by sliding the moving sash or sashes horizontally, left or right. They are perhaps the most common window type found in Australian homes.</span>';
  } else if (product.category == "Sliding Doors") {
    product.longDesc = '<span style="font-weight: 400;">No matter what the context or purpose may be, we have an aluminium sliding door to suit. Sliding doors are one of the most common types of glass doors and form the main entrance to most backyards across Australia. They are sometimes referred to as “stacker doors” or “stacking doors”.</span>';
  }
  */
  
  return product;
}

function getSwatches(product) {
  var swatches = "{";

  for (var i = 0; i < product.attributes.length; i++) {
    var attribute = product.attributes[i];
    var name = product.attributeNames[i];
    
    if (name == "") {
      continue;
    }
    
    if (name == "Colour") {
      swatches += `"${name}":{"name":"${name}","type":"color","terms":{`
      swatches += '"Black":{"name":"Black","color":"#000000","image":"","show_tooltip":"","tooltip_text":"","tooltip_image":"","image_size":""},"Pearl White":{"name":"Pearl White","color":"#ffffff","image":"","show_tooltip":"","tooltip_text":"","tooltip_image":"","image_size":""},"Ultra Silver Gloss":{"name":"Ultra Silver Gloss","color":"#a7a7a7","image":"","show_tooltip":"","tooltip_text":"","tooltip_image":"","image_size":""}';    
    } else {
      swatches += `"${name}":{"name":"${name}","type":"button","terms":{`
      for (var key in attribute) {
        if (key == "name") {
          continue;
        }
        swatches += `"${key}":{"name":"${key}","color":"","image":"","show_tooltip":"","tooltip_text":"","tooltip_image":"","image_size":""},`
      }
      swatches = swatches.slice(0, -1);
    }
    swatches += "}},";
  }
  swatches = swatches.slice(0, -1);
  swatches += "}";  
  
  return swatches;
}