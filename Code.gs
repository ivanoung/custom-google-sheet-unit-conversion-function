function roundoff(value){
  return Number(Math.round(value+'e'+2)+'e-'+2);
}



function ml2(value) {
//Converting from ml
  if (value>=1000){
    return roundoff(value*0.035) +"fl.oz/" + value/1000+"L";
  }else{
    return roundoff(value*0.035) +"fl.oz/" + value+"ml";
  }

  
}



function gram2(value){
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
  




//Start of conversion function
  
function convunit(amt,unit){
 var unit= String(unit);
  
  switch (unit){
    case 'ml':
      if (amt>=1000){
        return roundoff(amt*0.035) +"fl.oz/" + amt/1000+"L";
      }
      else{
        return roundoff(amt*0.035) +"fl.oz/" + amt+"ml";
          }
      
      
      
      
      
      
    case 'g':
      if (amt>=1000){
        var standard = amt/1000+"kg";
      }
      else{
        var standard = amt+"g";
      }
      var imperial = amt*0.04;
      if (imperial>=16){
        imperial = imperial/16+"lbs";
      }
      else{
        imperial = imperial+"oz";
      }
      
  
  
  
  return imperial+"/"+standard;
  }
  
      
      
}

//End of Conversion function

