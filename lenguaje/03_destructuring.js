function algo() {
    let codigo = 23;
    let user = 'Pepe';
    let error = false;

    return [codigo, user, error];
}

let x = algo();
console.log(x);

if (! x[2]) {
    console.log(`El código es ${ x[0] } y el usuario es ${ x[1] }`);
}

// Desesctructuración:

let [codigo, user, error] = algo();

if (! error) {
    console.log(`(Destruct) El código es ${ codigo } y el usuario es ${ user }`);
}

// function algo2() {
//     let codigo = 33;
//     let user = 'Juana';
//     let error = false;

//     return  {
//         codigo: codigo,
//         user: user,
//         error: error
//     }
// }

// let {codigo2, user2, error2} = algo2();

// if (! error2) {
//     console.log(`(2) El código es ${ codigo2 } y el usuario es ${ user2 }`);
// }

