interface Chai{
    flavour: string;
    price: number;
}

const masala:Chai = {
    flavour: "masala",
    price: 20,
}
//interface design the structure of object

interface DiscountCalculator{
    (price: number): number;
}

//
const apply50: DiscountCalculator = (p) => p*0.5;

//
interface TeaMachine {
    start(): void,
    stop(): void
}

const machine: TeaMachine = {
    start(){
        console.log("start");
        
    },
    stop(){
        console.log("stop");
    }
}

//
interface User{
    name: string
}

interface User{
    age: number
}

interface UserData extends User, User{
    email: string
}

//interface merging
const u: User = {
    name: "Arjun",
    age: 22
}

console.log(u);


/////// GENERICS //////

function wrapInArray<T> (item: T): T[]{
    return [item];
}

wrapInArray<string>("hello");

//generic interface

interface Box<T> {
    content: T
}

const numberBox: Box<number> = {
    content: 10
}

const stringBox: Box<string> = {
    content: "hello"
}

//use cases of generic are in API responses, form state in react
//generics help us write reusable code

interface ApiResponse<T> {
    data: T,
    status: number
}

const res: ApiResponse<{name: string, age: number}> = {
    data: {name: "arjun", age: 22},
    status: 200
}

console.log(res);