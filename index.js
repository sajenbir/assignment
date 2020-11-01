let userName = ['Sajen', 'Maharjan'];

function promiseReadArray(userName){
    return new Promise((resolve, reject)=>{
        if (userName.length > 0){
            resolve('userName is Ok')
        }
        else{
            reject('please enter data')
        }
    })
}

promiseReadArray(userName).then(result => {
    console.log(`The user names are: `);
    let time = 1000;
    result.forEach((r,i)=>{
        setTimeout(()=>{
            console.log(`${i+1}) ${r}`);  
        }, time);
        time += 3000;
    })
}).catch(error=>{
    console.log(error);
})

// using async and await
let async_await_read_array = async (userName) => {
    try {
        let readArray = await promiseReadArray(userName);
        console.log(`Using async and await...`)  
        let time = 1000;
        readArray.forEach((r,i)=>{
            setTimeout(()=>{
                console.log(`${i+1}-${r}`)
            }, time);
            time += 3000;
        })
    } catch (error) {
        console.log("Error is: ");
        console.log(error);
    }
    
}

async_await_read_array(userName)