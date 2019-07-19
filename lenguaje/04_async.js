function asincOriginal (callback) {

    setTimeout ( () => {

        let data = 'Datos';

        callback(data);

    }, 2000);
}

asincOriginal( (res) => {
    //Procesamiento de datos
    console.log(res);
})

// ES6 incorporación de promesas nativas JS

function asyncPromise () {
    return new Promise( (resolve, reject) => {        

        setTimeout(() => {
            let i = Math.random();
            if( i < 0.7 ) {
                // Todo OK
                resolve(i);
            }
            else {
                // Error
                reject(new Error(i));
            }
        }, 2000);
    });
}

// Si la promesa se resuelve correctamente
asyncPromise().then (
 (res) => {console.log('Datos ' + res)}
)
// Si la promesa NO se resuelve correctamente
asyncPromise().catch (
 (Error) => {console.log('Error ' + Error.message)}
);


// ES8 (ES2017) async / await

(async () => {
    try 
    {
        let res = await asyncPromise()
        console.log('Datos 2: ' + res)
    }
    catch (error)    
    {
        console.log('Error 2: ' + error.message)
    }    
})()