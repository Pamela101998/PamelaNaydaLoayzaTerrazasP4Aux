"use strict";

// La solucion de la pregunta 2 va aqui

// PARTE 1
// 1. Escribe una función asíncrona 'loadNPause' que recree la pregunta 1, esta vez
// usando async / await (solo la parte donde se consume la promesa, reutilice la
// función 'createImage' que escribió antes)

const loadNPause = async function(imgPath) {
    let foto = document.createElement("imgs");
    foto.src="img.jpeg";  
    const request = await fetch (foto);
    const data = await request.json(0);
    console.log(data);
};
loadNPause("img-1.jpeg");


// PARTE 2
// 1. Cree una función asíncrona 'loadAll' que reciba un array de rutas de imagen
// 'imgArr'
 
function loadAll (data, imgArr){
    const promise  = new Promise (function(resolve, reject){
        imgArr.push(data);
        resolve(imgArr);
    });
    if(!imgArr){
        reject(new Error ("Error"));
    }   
    return promise;
};
const imgArr = ['img-1.jpg', 'img-2.jpg', 'img-3.jpg'];

async function x (data, imgArr) {
    try {
        const result = await loadAll (data, imgArr);
        console.log(result);
    } catch (err) {
        return console.log("error");
    }
}

// 2. Utilice .map para recorrer el array, para cargar todas las imágenes con la
// función 'createImage' (la matriz resultante se llamará 'imgs')


// 3. Muestre el array ‘imgs’ en la consola 



// 4. Utilice una función de combinación de promesas para obtener las imágenes del
// array.



// 5. Agregue la clase 'parallel' a todas las imágenes (tiene algunos estilos CSS).




// Datos de prueba para la parte 2:
// ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'].
// Para probarlos, comente por un momento la función ‘loadNPause