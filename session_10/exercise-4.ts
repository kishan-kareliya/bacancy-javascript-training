// Assignment 4: Intersection Types
// Create an Order using intersection ( & )
// Create the same model using interfaces and extends
// Remove one required property and observe the compiler error
// Decide which approach feels clearer and why
// Create two small object types and combine them using intersection ( & )
// Create the same structure using interfaces and extends
// Try removing a required property and observe the compiler error
// Identify when intersection is better than union

type OrderBase = {
  orderId: number;
  amount: number;
};

type Auditable = {
  createdAt: Date;
  createdBy: string;
};

type Order = OrderBase & Auditable;

interface BaseOrder {
  orderId: number;
  amount: number;
}

interface AuditedOrder extends BaseOrder {
  createdAt: Date;
  createdBy: string;
}

/* 
  interface is better then union because we can easily understand the structure of the data and also we can easily extend the interface in future if needed using declaration merging
*/
