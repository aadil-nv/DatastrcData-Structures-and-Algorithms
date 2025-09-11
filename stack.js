class stack {
    constructor() {
        this.stack = []
    }

    push(element) {
        this.stack.push(element)
    }
    pop() {
        if (this.isEmpty()) {
            console.log("stack is Empty");
            return
        }
        return this.stack.pop()
    }
    peek() {
        if (this.isEmpty()) {
            console.log("stack is Empty");
            return
        }
        return this.stack[this.stack.length - 1]

    }
    size() {
        return this.stack.length
    }
    isEmpty() {
        return this.stack.length === 0
    }
   reverseString(str){
    if (this.isEmpty()) {
        console.log("stack is Empty");
        return
    }
    let rvStack = new stack()
    for(let i=0;i<str.length;i++){
        rvStack.push(str[i])
    }
    let rvstring=''
    while(!rvStack.isEmpty()){
        rvstring+= rvStack.pop()
    }
    return rvstring
   }
    printStack() {
        if (this.isEmpty()) {
            console.log("stack is Empty");
            return
        } else {
            for (let i = this.stack.length - 1; i >= 0; i--) {
                console.log(this.stack[i])
            }
        }

    }
}

let newStack = new stack()

newStack.push(5)
newStack.push(4)
newStack.push(7)
newStack.push(2)
console.log("reversed string "+newStack.reverseString("true"));
newStack.pop()
console.log("stack size is  :" + newStack.size());
console.log("stack is Empty :" + newStack.isEmpty());
newStack.peek()
newStack.printStack()