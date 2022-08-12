function distanceFromHqInBlocks(x){
      if (x > 42) {
        return (x - 42); }

        else {return (42 - x)}
      }

     
function distanceFromHqInFeet(x){
    if (x > 42) {
      return (x - 42)*264; }

      else {return (42 - x)*264}
    }
      
function distanceTravelledInFeet(x,y){

    if (x>y) {

        return (x-y)*264;
    
    }else {   
        return(y-x)*264;
    }

}
     
function calculatesFarePrice(start, destination){
    let x= distanceTravelledInFeet(start,destination)


    if (x <= 400) {

        return 0;
    }

    else if (x > 400 && x <=2000) {

    return (x - 400) * 0.02;
    
    }else if (x > 2000 && x < 2500) {
    return 25; 
}
    else { return "cannot travel that far";
    
}
}
