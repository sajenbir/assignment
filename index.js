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

async_await_read_array(userName);




let name = {
    'name': 'sajen',
    'age': 23,
    'address': 'Newroad',
    'college' : 'IIMS'
}

function promiseReadObject(name){
    return new Promise((resolve, reject)=>{
        if(name){
            resolve(name)
        }
        else{
            reject("Empty");
        }
    })
}

promiseReadObject(name)
    .then(result=>console.log(result))
    .catch(error=>console.log(error));



let fs = require('fs');

// function to read file/files and return a promise.
function readJsonFile(file, encoding){
    return new Promise((resolve,reject)=>{
        fs.readFile(file, encoding, (err, data)=>{
            if(data){
                resolve(data)
            }
            else{
                reject(err)
            }
        })
    })
}

// To handle the returned promise using then and catch
readJsonFile('./test_file/user.json', 'utf8')
    .then(result => {
        let data = JSON.parse(result);
        let time = 1000;
        data.forEach((d,i)=>{
            setTimeout(()=>{
                console.log(`${i+1}) Name: ${d.name}, Username: ${d.username}, Email: ${d.email}`)
            }, time);
            time += 1000;
        })
    })
    .catch(error=>{
        console.log(error);
    })


// using async and await to handle promise.
let readJsonFileAsync =  async (file,encoding) => {
    try {
        let readJsonFileResult = await readJsonFile(file, encoding);
        let data = JSON.parse(readJsonFileResult);
        let time = 1000;
        console.log('Using async and await');
        data.forEach((d,i)=>{
            setTimeout(()=>{
                console.log(`${i+1}) Name: ${d.name}, Username: ${d.username}, Email: ${d.email}`)
            }, time);
            time += 1000;
        })
    } catch (error) {
      console.log(error)   
    }  
}

readJsonFileAsync('./test_file/user.json', 'utf8');


//Read multiple file using Promise.all()

Promise.all([readJsonFile('./test_file/user.json', 'utf8'), readJsonFile('./test_file/file2.txt', 'utf8')])
    .then(result=>{
        let data = JSON.parse(result[0]);
        console.log(data)
    }).catch(error=>{
        console.log(error);
    })

let async_await = async () => {

    let readFiles = await Promise.all([readJsonFile('./test_file/user.json', 'utf8'), readJsonFile('./test_file/file2.txt', 'utf8')]);
    console.log(readFiles)
}

async_await()




