function ml2backup(value) {
//Converting from ml
  if (value>=1000){
    return value*0.035 +"fl.oz/" + value/1000+"L";
  }else{
    return value*0.035 +"fl.oz/" + value+"ml";
  }

  
}




function gram2backup(value){
  // Converting from g
  
  if (value>=1000){
    var standard = value/1000+"kg";
  }else{
    var standard = value+"g";
  }

  var imperial = value*0.04;
  
  if (imperial>=16){
    imperial = imperial/16+"lbs";
  }else{
    imperial = imperial+"oz";
  }
  
  
  
  return imperial+"/"+standard;
}