//async and promises
//in callback we no
const fetchData = () => {
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Done'); //async return after delay
        },1500);    
    });
    return promise; //synchronous return immediately
};


//asynchronous code = becayse it does not exec immediately = delay 
setTimeout(()=>{
    console.log('timer is done');
    //.then callable on promise allow definne
    fetchData()
    .then(text => {
        console.log(text);
        return fetchData(); //another promise ; more readable 
    })
    .then(text2 => {
        console.log(text2);
    })     
}, 2000);

//synchronous code = this I se before timer is done
console.log('helo!')
console.log('hi')

//nodejs does not block code, node recognises async code and continue execution 

//techniques to handle
//callback = odlest tech. 
//nested async calls = deeper from callback perspective 
//feature promises ; 3pp packages uses promises = will be done for yus
