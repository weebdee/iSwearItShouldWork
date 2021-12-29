// TASK ONE
class Proger {
    constructor(name, stack) {
        this.name = name;
        this.stack = stack;
    }
    // методы с маленькой пишутся
    Learn() {
        return `Proger named ${this.name} is learning ${this.stack}`;
    }
}

const programmer = new Proger('SOMEONE', ['EVERYRHING'])
console.log(programmer);
console.log(programmer.Learn())

// TASK TWO
class Student extends Proger {
    constructor(name, stack) {
        super(name, stack);
    }
    Learn(newStack) {
        return this.stack.push(newStack);
    }
}

const student = new Student('Student', ['React'])
student.Learn('Vue')
console.log(student);

// TASK THREE
class Mentor extends Proger {
    constructor(name, stack) {
        super(name, stack);
    }
    Learn(newStack) {
        return this.stack.push(...newStack);
    }
    // по условию метод принимает не сам стэк, а его владельца:
    // teach(proger, tech) {...} 
    Teach(someoneStack, tech) {
        return someoneStack.push(tech)
    }
}

const mentor = new Mentor('InsertName', ['React'])
mentor.Learn(['JS', 'Angular']);
// лучше будет с
mentor.Teach(mentor.stack, 'Vue')
console.log(mentor);

// TASK FOUR 
class Teacher extends Proger {
    constructor(name, stack) {
        super(name, stack);
    }
    Learn(newStack) {
        return this.stack.push(...newStack);
    }
    Teach() {
        return `Mr ${this.name} can teach ${this.stack}`
    }
}

const teacher = new Teacher('Adilet', ['JS'])
// Я не такой быстрый, чтоб всё за раз выучить)
teacher.Learn(['React', 'Vue', 'Angular'])
console.log(teacher);
console.log(teacher.Teach());


