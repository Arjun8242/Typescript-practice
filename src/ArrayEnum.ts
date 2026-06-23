//array of objects

type Chai = {
    type:string;
    price:number;
}

const menu:Chai[]=[
    {type:'ginger',price:25},
    {type:'masala',price:20}
]

//tuple 
let t:[string, number] = ["chai", 10]
t.push("Masala");



//enum
//more like array but restrict the user choices
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

// const myCup = CupSize.LARGE;
const myCup = CupSize.LARGE;

enum STATUS {
    PENDING = 100,
    SERVED,
    CANCELLED
}

function getStatus(status: STATUS){
    if(status === STATUS.SERVED){
        return "chai served";
    }
    if(status === STATUS.CANCELLED){
        return "chai cancelled";
    }
    return "chai pending";
}
getStatus(STATUS.SERVED);