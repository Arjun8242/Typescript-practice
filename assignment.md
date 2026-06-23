# TypeScript Assignment: Tea Shop Order Management System

## Objective

Build a type-safe Tea Shop Order Management System using TypeScript.

The goal is to demonstrate your understanding of TypeScript fundamentals and your ability to design a small backend-style application.

---

## Problem Statement

A tea shop receives customer orders throughout the day.

Your task is to create a system that can:

* Create orders
* Update orders
* Delete orders
* Search orders
* Process orders
* Generate reports

All code must be written in TypeScript.

---

## Functional Requirements

### 1. Order Creation

Each order should contain:

* Order ID
* Customer Name
* Tea Type
* Cup Size
* Sugar Quantity
* Payment Method
* Optional Special Instructions

Example:

```json
{
  "id": 1,
  "customerName": "Arjun",
  "teaType": "masala",
  "size": "large",
  "sugar": 2,
  "paymentMethod": "UPI",
  "specialNote": "Extra hot"
}
```

---

### 2. Order Service

Create a service responsible for managing orders.

The service should support:

#### Create Order

Add a new order to the system.

#### Get Order By ID

Return a single order using its ID.

#### Get All Orders

Return all orders.

#### Update Order

Update any field of an existing order.

#### Delete Order

Remove an order from the system.

---

### 3. Search Features

Implement functions to:

* Get all orders of a specific tea type
* Get all large-size orders
* Get all orders with sugar greater than a given amount
* Get all orders placed by a specific customer

---

### 4. Order Processing

Implement logic for preparing tea.

Different tea types should be handled separately.

Examples:

* Masala Chai
* Ginger Chai
* Green Tea

Each tea type should generate a different preparation message.

Example:

```
Preparing large masala chai for Arjun
```

---

### 5. Validation

Before processing an order, validate that it is a valid order object.

Invalid data should be rejected.

Examples of invalid data:

```json
{
  "id": "1",
  "name": true
}
```

---

### 6. Payment Handling

Support multiple payment methods:

* Cash
* UPI
* Card

Generate a payment confirmation message.

Example:

```
Payment received via UPI
```

---

### 7. Reports

Generate the following reports:

#### Total Orders

Example:

```
Total Orders: 25
```

#### Orders By Tea Type

Example:

```
Masala: 10
Ginger: 8
Green: 7
```

#### Total Sugar Used

Example:

```
Total Sugar Used: 34
```

---

### 8. Async Operations

Simulate database operations.

Create an asynchronous function that returns all orders after a delay.

Example delay:

```
1000ms
```

The function should return a Promise.

---

## Technical Requirements

Use TypeScript features wherever appropriate.

Your solution should demonstrate:

* Type Aliases
* Interfaces
* Classes
* Union Types
* Literal Types
* Optional Properties
* Type Guards
* Enums
* Generics
* Utility Types
* Async/Await
* Arrays
* Strong Type Safety

---

## Bonus Tasks

### Generic API Response

Create a reusable API response type.

Example:

```ts
{
  success: true,
  data: ...
}
```

---

### Order Status Tracking

Track order status.

Possible statuses:

* Pending
* Preparing
* Ready
* Delivered

---

### Inventory Tracking

Track:

* Milk Available
* Water Available
* Sugar Available

Reject orders if ingredients are insufficient.

---

## Deliverables

Submit:

1. TypeScript source code
2. Instructions to run the project
3. Sample output

---

## Evaluation Criteria

You will be evaluated on:

* Correctness
* Type Safety
* Code Structure
* Use of TypeScript Features
* Readability
* Maintainability

---

## Difficulty

Intern / Junior Backend Developer Level

Expected Time: 2–4 Hours
