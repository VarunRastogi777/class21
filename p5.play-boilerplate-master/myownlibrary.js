function isTouching(object,object1){
    if(object.x-object1.x<object.width/2+object1.width/2 &&
      object1.x-object.x<object1.width/2+object.width/2 &&
      object.y-object1.y<object.height/2+object1.height/2 &&
      object1.y-object.y<object1.height/2+object.height/2){
      return true
    }else{
      return false
    }
  }
  function bounceOff(object3,object4){
    if (object3.x - object4.x < object4.width/2 + object3.width/2
      && object4.x - object3.x < object4.width/2 + object3.width/2) {
    object3.velocityX = object3.velocityX * (-1);
    object4.velocityX = object4.velocityX * (-1);
  }
  if (object3.y - object4.y < object4.height/2 + object3.height/2
    && object4.y - object3.y < object4.height/2 + object3.height/2){
    object3.velocityY = object3.velocityY * (-1);
    object4.velocityY = object4.velocityY * (-1);
  }
  }