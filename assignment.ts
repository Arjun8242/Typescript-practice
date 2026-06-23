type ChaiOrder = {
    id: number;
    customerName: string;
    size: "small" | "medium" | "large";
    type: "masala" | "ginger" | "green";
    sugar: number;
    paymentMethod: PaymentMethod;
    specialNote?: string;
}

enum PaymentMethod {
    CASH,
    UPI,
    CARD
}

type ApiResponse<T> = {
    success: boolean;
    data: T;
    message: string;
}


//few orders

const order1: ChaiOrder = {
    id: 1,
    customerName: "Arjun",
    size: "small",
    type: "masala",
    sugar: 10,
    paymentMethod: PaymentMethod.UPI,
}

const order2: ChaiOrder = {
    id: 2,
    customerName: "kh",
    size: "small",
    type: "green",
    sugar: 20,
    paymentMethod: PaymentMethod.CARD,
}

const order3: ChaiOrder = {
    id: 3,
    customerName: "ad",
    size: "medium",
    type: "ginger",
    sugar: 5,
    paymentMethod: PaymentMethod.CASH,
}

class OrderService{
    private orders: ChaiOrder[] = [];

    isValidChaiOrder(order: unknown): order is ChaiOrder {
    if (
        typeof order !== "object" ||
        order === null
    ) {
        return false;
    }

    const obj = order as Record<string, any>;

    return (
        typeof obj.id === "number" &&
        typeof obj.customerName === "string" &&
        typeof obj.size === "string" &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number" &&
        typeof obj.paymentMethod === "number"
    );
}

    createOrder(order: ChaiOrder): boolean{
        if(!this.isValidChaiOrder(order)){
            return false;
        }
        const exists = this.orders.some(o => o.id === order.id)
        if(exists){
            return false;
        }
        this.orders.push(order);
        return true;
    }

    getAllOrders(): ChaiOrder[]{
        return [...this.orders];
    }

    getOrderById(id: number): ChaiOrder | undefined{
        const order = this.orders.find(
            order => order.id === id
        );
        return order;
    }

    deleteOrder(id: number): boolean{
        const index = this.orders.findIndex(
            order => order.id === id
        );

        if(index === -1){
            return false;
        }

        this.orders.splice(index,1);
        
        return true;
    }

    updateOrder(id: number, updates: Partial<ChaiOrder>): boolean{
        const existingOrder = this.orders.find(
            order => order.id === id
        )

        if(!existingOrder){
            return false;

        }
        Object.assign(existingOrder, updates);
        
        return true;
    }

    getOrdersByType(type: ChaiOrder["type"]):ChaiOrder[]{
        return this.orders.filter(order => order.type === type);
    }

    getLargeOrders():ChaiOrder[]{
        return this.orders.filter(order => order.size === "large");
    }

    getOrdersByCustomer(customerName:string): ChaiOrder[]{
        return this.orders.filter(order => order.customerName === customerName);
    }

    getAllOrdersWithSugarGreaterThan(sugar:ChaiOrder["sugar"]): ChaiOrder[]{
        return this.orders.filter(order => order.sugar > sugar);
    }

    calculateTotalSugar(): number{
        return this.orders.reduce((total, order) => total + order.sugar, 0)
    }
    
    processOrder(order:ChaiOrder): string{
        switch(order.type){
            case "masala":{
                return `Preparing ${order.size} masala chai for ${order.customerName}`;
                
            }
            case "ginger":{
                return `Preparing ${order.size} ginger chai for ${order.customerName}`;
                
            }
            case "green":{
                return `Preparing ${order.size} green tea for ${order.customerName}`;
                
            }
            default:
                return "Invalid order type";
                
        }
    }

    async fetchOrders(): Promise<ChaiOrder[]>{
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([...this.orders]);
            },1000);
        })
    }

    getResponse(): ApiResponse<ChaiOrder[]> {
        return {
            success: true,
            data: this.orders,
            message: "Orders fetched successfully"
        };
    }

}

const service = new OrderService();

service.createOrder(order1);
service.createOrder(order2);
service.createOrder(order3);

console.log(service.getAllOrders());

console.log(service.getOrderById(2));

console.log(service.calculateTotalSugar());

console.log(service.processOrder(order1));

    