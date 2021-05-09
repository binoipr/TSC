class User {
  private name: string;
  private email: string;
  private age: number;
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log("User created " + this.name);
  }
  register() {
    console.log(this.name + " is registered");
  }
  payInvoice() {
    console.log(this.name + "invoice paid");
  }
}

class Member extends User {
  id: number;
  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }
  payInvoice() {
    super.payInvoice();
  }
}

let newUser = new Member(11, "John Doe", "john@gmail.com", 34);

newUser.payInvoice();
