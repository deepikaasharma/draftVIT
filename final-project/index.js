

var inventoryList= ["Fettucine Pasta", "Alfredo Sauce", "Olive Oil", "Salt", "Italian Seasoning", "Black Pepper", "Spinach","Broccoli"]
var recipeFettucineAlfredo= ["Fettucine Pasta", "Alfredo Sauce", "Olive Oil", "Salt", "Italian Seasoning", "Black Pepper", "Spinach","Broccoli"]
var recipeSushi=["Sushi Rice", "Seaweed Wrap", "Pickled Ginger", "Cream Cheese", "Soy Sauce", "Nori Kami Furikake Seasoning", "Cucumber", "Avocado", "Bread Crumbs"]

function canCook(inventoryList, recipeFettucineAlfredo){
    for(let i = 0; i < recipeFettucineAlfredo.length; i++){
        const current = recipeFettucineAlfredo[i];
        if(!inventoryList.includes(current)){
            return false;
        }
    }
    return true;
}

console.log(canCook(inventoryList, recipeFettucineAlfredo));