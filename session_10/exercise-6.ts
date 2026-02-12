// Assignment 6: Interfaces
// Create Admin and Customer interfaces using a common base
// Extend the base interface to add role-specific properties
// Write a function that accepts BaseUser
// Pass both Admin and Customer objects to the function

interface BaseUser {
  id: string;
  email: string;
}

interface MyAdmin extends BaseUser {
  permissions: string;
}

interface Customer extends BaseUser {
  orders: string;
}

function logBaseUser(user: BaseUser) {
  console.log(`User ID: ${user.id}, Email: ${user.email}`);
}

const kishanAdmin: MyAdmin = {
  id: "admin-001",
  email: "kishan@gmail.com",
  permissions: "full-access",
};

const rahulCustomer: Customer = {
  id: "C-001",
  email: "rahul@gmail.com",
  orders: "order-123",
};

logBaseUser(kishanAdmin);
logBaseUser(rahulCustomer);

// Design an interface for an API response object
// Create a function that accepts this interface as a parameter
// Extend the interface and reuse it
interface ApiResponse {
  status: number;
  data: any;
  message: string;
}

function handleApiResponse(response: ApiResponse) {
  console.log(`Status: ${response.status}, Message: ${response.message}`);
}

interface ExtendedApiResponse extends ApiResponse {
  timestamp: Date;
}

// Create an interface for a Product
// Create a variable that follows this interface

interface Product {
  id: string;
  name: string;
  price: number;
}

const product: Product = {
  id: "P001",
  name: "Laptop",
  price: 525,
};
