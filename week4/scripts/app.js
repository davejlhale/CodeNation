shopDrinks = [
    { name: "Coke", price: 1.00 },
    { name: "Tea", price: 1.50 },
    { name: "Coffee", price: 1.60 },
    { name: "Orange", price: 1.30 },  
    { name: "Milkshake", price: 1.70 },
    { name: "Water", price: 0.80 },
    { name: "Doughnut", price: 1.60 },
    { name: "Sandwhich", price: 3.30 }
]

class Receipt {
    constructor(){
        this.items =[];
    }
    addItem(item){
        this.items.push(item);
    }
    printReciet(){
        let receipt = document.getElementById("receipt");
        
        let text="";
        console.table(this.items)

        this.items.forEach(item => {
            text += item.drinkName +" : "+item.price
        });
        console.log(text)
        receipt.innerHTML = text;
        this.startNew();
    }
    startNew(){
        this.items.forEach(item => {
            this.items.pop();
        })
    }
}

class Till {
    constructor(drinks) {
        this.drinks = drinks;
        this.display();
        this.addEvents();
        this.total = 0;
        this.cash = 0;
        this.tillTotal = document.getElementById("till-total");
        this.currentReceipt=new Receipt();
       
    }

    addEvents() {
        let buttons = document.getElementsByClassName("drink-button");
        let enquire = document.getElementById("enquire-price");
        let saleBtn = document.getElementById("sale");
        let clearBtn = document.getElementById("clear");
        
        console.log(buttons)
        Array.from(buttons, button => {
            button.addEventListener("click", () => {
                let drinkName = button.getElementsByTagName('p')[0].id;
                let price=this.addPrice(drinkName);
                this.currentReceipt.addItem( {drinkName,price})
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
            });
            saleBtn.addEventListener("click",() => {
               this.currentReceipt.printReciet();
               this.clearTotal();

            })
            clearBtn.addEventListener("click",() => {
                this.clearTotal();
            })
        });
    }
    clearTotal(){
        this.tillTotal.innerHTML = (0).toFixed(2);
        this.currentReceipt.startNew();
        this.total=0;
    }
    getPrice(drinkName){
        let foundDrink = this.drinks.find(drink => drink.name === drinkName)
        console.table(foundDrink.price);
        return foundDrink.price
    }
    addPrice(drinkName) {
        let price =  this.getPrice(drinkName);
        this.tillTotal.innerHTML = (this.total += price).toFixed(2);
        return price.toFixed(2);
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

}


const shopTill = new Till(shopDrinks);
