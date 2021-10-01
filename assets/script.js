// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Robert Drabant" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
// let gb = 0      // Ginger bread
// let cc = 0      // Chocolate Chip
// let sugar = 0   // Sugar Sprinkle

let localStore = window.localStorage;

let gb = localStore.getItem('gb');
let cc = localStore.getItem('cc');
let sugar = localStore.getItem('sugar');

if(gb == null){
    localStore.setItem('gb', 0);
}else{
    gb = parseInt(gb);
    if(isNaN(gb)){
        gb = 0;
    }
}

if(cc == null){
    localStore.setItem('cc', 0);
}else{
    cc = parseInt(cc);
    if(isNaN(cc)){
        cc = 0;
    }
}

if(sugar == null){
    localStore.setItem('sugar', 0);
}else{
    sugar = parseInt(sugar);
    if(isNaN(cc)){
        sugar = 0;
    }
}

 
document.getElementById('qty-gb').textContent = gb;
document.getElementById('qty-cc').textContent = cc;
document.getElementById('qty-sugar').textContent = sugar;
document.getElementById('qty-total').textContent = gb + cc + sugar;

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    // console.log('Ginger bread + button was clicked!')
    gb++;
    updateTotals();
})

document.getElementById('minus-gb').addEventListener('click', function() {

    if(gb <= 0){
        window.alert("Knock it off!!!");
    }else{
        gb--;
        updateTotals();
    }
})

document.getElementById('minus-cc').addEventListener('click', function() {
    if(cc <= 0){
        window.alert("Knock it off!!!");
    }else{
        cc--;
       updateTotals();
    }
    
})

document.getElementById('add-cc').addEventListener('click', function() {
    cc++;
    updateTotals();
})

document.getElementById('minus-sugar').addEventListener('click', function() {

    if(sugar <= 0){
        window.alert("Knock it off!!!");
    }else{
        sugar--;
        updateTotals();
    }
    
})

document.getElementById('add-sugar').addEventListener('click', function() {
    sugar++;
    updateTotals();
})
// TODO: Hook up event listeners for the rest of the buttons



function updateTotals(){

    console.log('Totals gb / cc / sugar ' + gb + " / " + cc + " / " + sugar + " = " + (gb+cc+sugar));
     
    document.getElementById('qty-gb').textContent = gb;
    document.getElementById('qty-cc').textContent = cc;
    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent = gb + cc + sugar;

    localStore.setItem('gb', gb);
    localStore.setItem('cc', cc);
    localStore.setItem('sugar', sugar);

}