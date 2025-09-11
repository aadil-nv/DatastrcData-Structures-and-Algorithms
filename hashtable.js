class hashTable{
    constructor(size){
        this.table= []
        this.size=size
    }

    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        const index = this.hash(key)
        const bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            const sameItem=bucket.find(item=>item[0]===key)
            if(sameItem){
                return sameItem[1]=value
            }else{
                bucket.push([key,value])
            }
        }
        return undefined
    }
    get (key,value){
        const index = this.hash(key)
        return this.table[index]
    }
    remove(key){
        const index= this.hash(key)
        this.table[index]=undefined
    }
    findDuplicates() {
        const seenValues = {};
        const duplicates = []; 
        for (const value of this.table) {
            if (value !== undefined) {
                if (seenValues[value]) {
                    duplicates.push(value); 
                } else {
                    seenValues[value] = true;
                }
            }
        }
        return duplicates;  
    }

    removeDuplicates() {
        const seenValues = {};
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                if (seenValues[this.table[i]]) {
                    this.table[i] = undefined;
                } else {
                    seenValues[this.table[i]] = true;
                }
            }
        }
    }
   
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const newTable = new hashTable(50)

newTable.set("name","muhammed aadil nv")
newTable.set("mane","muhammed")
newTable.set("miss","muhammed aadil nv")
newTable.set("age","25")

newTable.set("home","pallikkandy House")
newTable.remove("age")
newTable.display()