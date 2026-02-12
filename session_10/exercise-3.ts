// Assignment 3: Union Types
// Add one more role (e.g. Guest ) to the User union
// Write a function that accepts User
// Use the role field to safely narrow the type
// Observe how TypeScript prevents invalid property access
// Create a union type for two different user roles using type
// Create another union using two interfaces
// Write a function that accepts the union and narrows the type safely

type Admin = {
  role: "admin";
  permission: string;
};

type User = {
  role: "user";
  orders: string;
};

type Guest = {
  role: "guest";
  login: boolean;
};

type Common = Admin | User | Guest;

//here in the function we need to use narrowing we can't able to access other properties without narrowing
// narrowing we can achieved through multiple ways union descrimination is one of the way we use here
function loggingUser(user: Common) {
  if (user.role === "admin") {
    console.log(user.permission);
  } else if (user.role === "user") {
    console.log(user.orders);
  } else {
    console.log(user.login);
  }
}

const admin: Admin = {
  role: "admin",
  permission: "all",
};

const user: User = {
  role: "user",
  orders: "all users orders",
};

const guest: Guest = {
  role: "guest",
  login: false,
};

loggingUser(admin);
loggingUser(user);
loggingUser(guest);

interface Student {
  studentId: number;
}

interface Teacher {
  subject: string;
}

type Person = Student | Teacher;

//this in operator is another way to achieve narrowing
function logPerson(person: Person) {
  if ("studentId" in person) {
    console.log(person.studentId);
  } else {
    console.log(person.subject);
  }
}

const student: Student = {
  studentId: 1234,
};

const teacher: Teacher = {
  subject: "Math",
};

logPerson(student);
logPerson(teacher);
