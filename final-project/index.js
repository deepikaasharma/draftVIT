

var inventoryList= [tofu,salt,turmeric, oil,sugar, milk, almond ]
var recipeScrambledTofu= [tofu, peppers, eggs, honey, chocolate, salt, tumeric, oil]

function canCook(inventoryList, recipeScrambledTofu){

    for(let i = 0; i < recipeScrambledTofu.length; i++){
        const current = recipeScrambledTofu[i];
        if(!inventoryList.includes(current)){
            return false;
        }
    }
    return true;
}

console.log(canCook(inventoryList, recipeScrambledTofu))