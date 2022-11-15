shopDrinks = [
    { name: "Coke", price: 1.00 },
    { name: "Tea", price: 1.50 },
    { name: "Coffee", price: 1.60 },
    { name: "Orange", price: 1.30 },  
    { name: "Milkshake", price: 1.00 },
    { name: "Water", price: 1.50 },
    { name: "Doughnut", price: 1.60 },
    { name: "Sandwhich", price: 1.30 }
]



class till {
    constructor(drinks) {
        this.drinks = drinks;
        this.display();
        this.addEvents();
        this.total = 0;
        this.cash = 0;
    }

    addEvents() {
        let buttons = document.getElementsByClassName("drink-button");
        let enquire = document.getElementById("enquire-price");
       
        console.log(buttons)
        Array.from(buttons, button => {
            button.addEventListener("click", () => {
                let drinkName = button.getElementsByTagName('p')[0].id;
                console.log("button clicked", drinkName);
                this.addPrice(drinkName);
            });
            button.addEventListener("mouseover",() => {
                let drinkName = button.getElementsByTagName('p')[0].id;
                enquire.innerHTML = (
                    drinkName
                    +" : "
                    + (this.getPrice(drinkName)).toFixed(2));
            });
            button.addEventListener("mouseout",() => {
                let drinkName = button.getElementsByTagName('p')[0].id;
                enquire.innerHTML =(0.00).toFixed(2);
            })
        });
    }
    getPrice(drinkName){
        let foundDrink = this.drinks.find(drink => drink.name === drinkName)
        console.table(foundDrink.price);
        return foundDrink.price
    }
    addPrice(drinkName) {
   
        let tillTotal = document.getElementById("till-total");
        tillTotal.innerHTML = (this.total += this.getPrice(drinkName)).toFixed(2);
    }
    display() {
        this.elemTill = document.getElementById("till-buttons");
        console.debug(".elemTill ", this.elemTill);
        this.drinks.forEach(drink => {
            let div = document.createElement("div");
            div.classList = "drink-button";
            let p = document.createElement('p');
            p.id = drink.name;
            p.textContent = drink.name;
            div.appendChild(p);
            this.elemTill.append(div);
        });


    }
    getPrice(drinkName) {
        let foundDrink = this.drinks.find(drink => drink.name === drinkName)

        console.debug(foundDrink)

        return foundDrink.price;
    }
}


const shopTill = new till(shopDrinks);
shopTill.getPrice("Coke")