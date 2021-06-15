function promiseReduce(asyncFunctions, reduce, initialValue) {    

    asyncFunctions.map((fn) => {
        return fn().then(data => {
            return reduce(data, initialValue)  
        }).then(data2 => { console.log('data2:', data2);});
    })

}

const fn1 = () => {
    console.log('fn1');
    return Promise.resolve(1)
}

const fn2 = () => new Promise(resolve => {
    console.log('fn2')  
    setTimeout(() => resolve(2), 1000)
})
 promiseReduce([fn1, fn2], (memo, value) => memo * value, 2);
