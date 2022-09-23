function getUsuarios() {
    return new Promise((resolve, reject) => {
        resolve(['Bruno', 'Deise', 'Kauan']);
    });
}

// getUsuarios().then((usuarios) => {
//     console.log(usuarios[0]);
// })


async function fetchUsuarios() {
    const usuarios = await getUsuarios();
    console.log(usuarios[2]);
}

fetchUsuarios();