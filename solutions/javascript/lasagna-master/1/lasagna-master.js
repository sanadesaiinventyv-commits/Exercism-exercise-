/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingtime){
  if(remainingtime === 0){
    return 'Lasagna is done.';
  }
  if(!remainingtime){
    return 'You forgot to set the timer.'
  }
  return 'Not done, please wait.';
}
export function preparationTime(layers,averagePreparationTime = 2){
  return layers.length*averagePreparationTime;
}
export function quantities(layers){
  let obj={
    noodles: 0,
    sauce: 0,
  }
  for(let i=0;i<=layers.length;i++){
    if(layers[i] == "noodles"){
      obj.noodles +=50;
    }else if (layers[i] == "sauce"){
      obj.sauce +=0.2;
    }
  }
  return obj;
}
export function addSecretIngredient (friendsList , mylist){
  mylist.push(friendsList[friendsList.length -1]);
}
export function scaleRecipe(recipe,portion){
  let newRecipe = {};
  for ( let key in recipe){
    newRecipe[key] = recipe[key] * (portion/2);
 }
  return newRecipe;
}