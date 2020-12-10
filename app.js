
/**
 * This is an object function implemented using the getter and setter 
 * @param function takes in object value and return the result after execution
 */




function NewObj(){

    let name;
    let age;

    Object.defineProperty(this,"name",{
        get: () => {return name},
        set: (user) => {
            if(Number.isInteger(+(user.charAt(0)))){
                throw new Error(`the name entered is not valid: ${this.name}`);
            }

            if(user.length <= 2){
                throw new Error(`Name too short: ${this.name}`);
            }

            name = user;
        }
    })


    Object.defineProperty(this,"age",{
        get: () => {return name},
        set: (userAge) => {
            if(!Number.isInteger(userAge)){
                throw new Error(`User Age must be a number: ${this.age}`);
            }

            if(userAge >= 120){
                throw new Error(`You are older than this: ${this.age}`);
            }
            age = userAge;
        }
    })
}

const validUser = new NewObj();
validUser.name = 'king'
console.log(validUser.name);

