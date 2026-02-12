// Assignment 9: Access Modifiers
// Create a service class exposing only required public methods
// Keep internal data private
// Explain which members should be accessible and why
// Create a class with public, private, and protected members
// Try accessing them outside the class
// Which members should be exposed and why?

class Service {
  public services: string[];
  private users: string[];

  constructor() {
    this.services = [];
    this.users = [];
  }

  public addUser(user: string) {
    this.users.push(user);
    console.log("user added successfully");
  }

  public addService(service: string) {
    this.services.push(service);
    console.log("service added successfully");
  }

  protected getUsers() {
    return this.services;
  }
}

class ServiceManager extends Service {
  public showUsers() {
    const users = super.getUsers();
    users.forEach((user) => console.log(user + "\n"));
  }
}

const service = new Service();
service.addUser("kishan");
service.addService("cleaning");
// service.getService(); //can't use this because it is protected method only subclass able to use this
console.log(service.services);
// console.log(service.users); // can't use this because users is private field

const serviceManager = new ServiceManager();
serviceManager.showUsers();
