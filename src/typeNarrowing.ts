function getChai(kind:string | number){
    if(typeof kind === 'string'){
        return `here's your ${kind} chai `
    }
    return `here's your ${kind} cups of chai`;
}

function serveChai(msg?: string){
    if(msg){
        return `here's your chai with the message  ${msg}`
    }
    return `here's your chai`;
}

function orderChai(size: "medium" | "large" | "small" | number){
    if(size === "medium"){
        return 150;
    }
    if(size === "large"){
        return 200;
    }
    return size;
}

class kulhad{
    serve(){
        return `Serving kulhad chai`
    }
}

class cuttingChai{
    serve(){
        return `Serving cutting chai`
    }
}

function getVessel(kind:  kulhad | cuttingChai){
    if(kind instanceof kulhad){
        return new kulhad();
    }
    if(kind instanceof cuttingChai){
        return new cuttingChai();
    }
    return `Serving paper cup chai`;
}

type chaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any): obj is chaiOrder{
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: chaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar}`
    }
    return `Serving ${item}`;
}

type MasalaChai = {
    type: "masala";
    spicelevel: number
};

type GingerChai = {
    type: "ginger";
    gingerLevel: number
}

type GreenTea = {
    type: "green";
    herbal: boolean
}

type chai = MasalaChai | GingerChai | GreenTea;

function MakeChai(order: chai){
    switch (order.type){
        case "masala":
            return `Serving Masala chai with ${order.spicelevel}`;
        case "ginger":
            return `Serving Ginger chai with ${order.gingerLevel}`;
        case "green":
            return `Serving Green tea with ${order.herbal}`;
    }
}

function brew(order: MasalaChai | GingerChai){
    if("spicelevel" in order){
        return order.spicelevel * 10;
    }
    return order.gingerLevel;
}
