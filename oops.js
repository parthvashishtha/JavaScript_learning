// Constructor Function

function person(fname,lname,dob){
    this.fname=fname;
    this.lname=lname;
    this.dob=dob;

    // In the below written code getBirthYear is a function 
    // declard by us using this keyword

    this.getBirthYear = function(){
        return this.dob;
    }

    this.getFullname = function(){
        return `${this.fname} ${this.lname}`
    }

    // Here is another way of declaring function using 
    // prototype

    person.prototype.getFnameonly = function(){
        return this.fname;
    }
}

// Object initiation

const person1 = new person('Parth','Sharma','29-05-2002')

console.log(person1);
// console.log(person1.getBirthYear());
// console.log(person1.getFullname())
// console.log(person1.getFnameonly());