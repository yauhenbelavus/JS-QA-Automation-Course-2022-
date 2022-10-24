**_ Task 1 _**
Написать объект любой реальной сущности на 30+ свойств и методов

**_ Task 2 _**

```
let object = {
    method() {
        console.log(this);
    }
}

function fn(cb) {
    cb() // что выведет console???
}


fn(object.method)
```

**_ Task 3 _**

```
let object = {
    x: 40,
    method() {
        return this.x
    }
}

function fn(cb) {
    return cb()
}


let result = fn(object.method) // чему равен result?
```
