type Book = {
    name: string;
}
// type assertion
let bookString = '{"name" : "Atomic Habits"}';

let bookObject = JSON.parse(bookString) as Book

console.log(bookObject.name);

//
// type conversion

let response: any ="42";

let numericLength: number = (response as string).length

//any vs unknown

let value: any;

value = "chai";
value = 2.5;
value = [1,2,3];
value.toUpperCase();

let newValue: unknown;

newValue = "chai";
newValue = 2.5;
newValue = [1,2,3];

if(typeof newValue === "string"){
    console.log(newValue.toUpperCase());
}

// error instance of
try {
    
} catch (error) {
  if(error instanceof Error){
    console.log(error.message);
  }
}


// type never

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role:Role){
    if(role === "admin"){
        return "admin page";
    }
    if(role === "user"){
        return "user page";
    }
    role;
}