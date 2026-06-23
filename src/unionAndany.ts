let subs:number|string='1M';//union

let apirequeststatus: 'pending'| 'sucess'| 'error' = 'pending';

apirequeststatus = 'sucess';

const orders = ['12', '28', '20', '42'];

let currentOrder:string| undefined;

for(let order of orders){
    if(order === '28'){
        currentOrder = order;
        break;
    }
    
}

console.log(currentOrder);




