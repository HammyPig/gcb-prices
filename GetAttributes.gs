function getAttributes(product) {
  var attributes = [{"null":0}, {"null":0}, {"null":0}, {"null":0}, {"null":0}];
  var attributeNames = ["", "", "", "", ""];
  
  var colours = {
    "Black": 0,
    "Pearl White": 0,
    "Ultra Silver Gloss": 0,
  };
  
  attributeNames[0] = "Colour";
  attributes[0] = colours;
  
  var handling = product.handling.split("/");
  if (handling.length != 1) {
    var handling = handling.reduce((acc,curr)=> (acc[curr]=0,acc),{});
    attributeNames[1] = "Handling";
    attributes[1] = handling;
  }
  
  var reveals = {
    "None": "0",
    "80mm": product.reveal80,
    "100mm": product.reveal100,
    "116mm": product.reveal116,
    "138mm": product.reveal138
  };
  
  reveals = removeNulls(reveals);
  if (Object.keys(reveals).length != 1) {
    attributeNames[2] = "Reveal Installed (At Additional Cost)";
    attributes[2] = reveals;
  }
  
  var screens = {
    "None": "0",
    "Fly Screen": product.flyScreen,
    "Security Screen": product.securityScreen,
    "Triple Lock": product.tripleLock,
    "Invisi-Gard": product.invisiGard
  };
  
  screens = removeNulls(screens);
  if (Object.keys(screens).length != 1) {
    attributeNames[3] = "Screen Installed (At Additional Cost)";
    attributes[3] = screens;
  }

  var glassTypes = {
    "None": product.standardPrice,
    "4mm Obscure": product.obscure,
    "6.38mm Translucent Laminated": product.frosted
  };
  
  glassTypes = removeNulls(glassTypes);
  if (Object.keys(glassTypes).length != 1) {
    for (var glass in glassTypes) {
       glassTypes[glass] -= product.standardPrice; // remove standard price from glass cost
    }
    
    attributeNames[4] = "Frosted Glass (At Additional Cost)";
    attributes[4] = glassTypes;
  }
  
  return [attributeNames, attributes];
}