function removeNulls(object) {
  for (var key in object) {
    if (object[key] == "" || isNaN(object[key])) {
      delete object[key];
    } else {
      object[key] = Number(object[key]);
    }
  }
  
  return object;
}