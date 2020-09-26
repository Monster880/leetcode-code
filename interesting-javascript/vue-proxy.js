const p = new Proxy({},{
    get(target,propKey){
        return '哈哈，你被我拦截了';
    }
});

console.log(p.name);

let People = new Proxy({
    _name: 'zky'
},{
    get:function(target,prop,receiver){
        return Reflect.get(target,prop,receiver)
    }
})

let Man = {_name: 'zky_man',get name(){
    return this._name;
}}
Man.__proto__ = People
console.log(Man._name)
console.log(Man.name)