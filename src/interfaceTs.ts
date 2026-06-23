type ChaiOrder = {
    type:string;
    sugar: number;
    strong: boolean;
}


function makeChai(order: ChaiOrder){
    console.log(order);
    
}

function serveChai(order: ChaiOrder){
    console.log(order);
    
}

type TeaRecipe = {
    water: number;
    milk: number;
}

class MasalaChai implements TeaRecipe{
    water = 100;
    milk = 50;
}

// type CupSize = "small" | "large"
// // implements can only be done with interface or object shaped types
// // both defines an object strutcture so class can only implements them
// class Chai implements CupSize{

// }


interface CupSize {
    size: "small" | "large";
}

class Chai implements CupSize{
    size: "small" | "large" = "large";
}

// type Response = {ok: true} | { ok: false};

// class myRes implements Response{
//     ok:boolean = true;
// }

type TeaType = "masala" | "ginger" | "green";

function orderChai(t: TeaType){
    console.log(t);
    
}

type BaseChai = { teaLeaves: number}
type Extra = {masala: number}

type GingerTea = BaseChai & Extra

const cup: GingerTea = {
    teaLeaves:2,
    masala: 1 
}