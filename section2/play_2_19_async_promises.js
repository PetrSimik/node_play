//async and promises

const fetchData = callback => {
    setTimeout(()=>{
        callback('Done'); 
    },1500);
};


//asynchronous code = becayse it does not exec immediately = delay 
setTimeout(()=>{
    console.log('timer is done');
    fetchData(text => { 
        console.log (text);
    });
}, 2000);

//synchronous code = this I se before timer is done
console.log('helo!')
console.log('hi')

//nodejs does not block code, node recognises async code and continue execution 

//techniques to handle
//callback = odlest tech. 
//nested async calls = deeper from callback perspective 
//feature promises ; 3pp packages uses promises = will be done for yus
