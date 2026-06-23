class Chai{
    flavour: string;
    price: number;

    constructor(flavour: string, price: number){
        this.flavour = flavour;//this refers to the new object
        this.price = price;
    }
}

const masalaChai = new Chai("Ginger", 20);
masalaChai.flavour="masala";