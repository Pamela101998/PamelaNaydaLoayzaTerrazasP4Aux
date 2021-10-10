"use strict";

// La solucion de la pregunta 1 va aqui

// PARTE 1
// 1. Cree una función 'createImage' que reciba 'imgPath' como entrada. Esta
// función devuelve una promesa que crea una nueva imagen (use
// document.createElement('img')) y establece el atributo ‘.src’ en el ruta de la
// imagen proporcionada


// const createImage = new Promise (function (resolve){
//     const img = new Image ();
//     img.src = "img-1.jpeg";
//     img.onload = function () {resolve (img); }
// });

// 2. Cuando la imagen haya terminado de cargarse, agréguela al elemento DOM
// con la clase 'images' y resuelva la promesa. El valor resuelto debe ser el
// elemento de la imagen en cuestión. En caso de que haya un error al cargar la
// imagen (escuche el evento 'error'), rechace la promesa.

// const C = document.getElementsByClassName('images');

const createImage = new Promise (function (resolve, reject){
    const img = new Image ();
    img.src = "img-1.jpeg";
    img.onload = function () {resolve (img2); }
    img.onerror = function(){
        reject (new Error("Error al cargar la imagen"));
    } 
});


// PARTE 2
// 3. Consuma la promesa usando ‘.then’ y también controle los errores.

var promesa = createImage("img-1.jpeg");
promesa.then(
    function(img) { 
        document.write("img-1.jpeg"); 
        document.close();
    },
    function(error) { 
        document.write(error.message); 
        document.close();
    }
);


// 4. Una vez que se haya cargado la imagen, pause la ejecución durante 2
// segundos usando temporizadores.

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(createImage), 2000);
  });
  
  myPromise.then(value => console.log(value));
  
  console.log(myPromise);


// 5. Una vez transcurridos los 2 segundos, oculte la imagen actual (configure la
// propiedad ‘display’ de CSS a 'none'), y cargue una segunda imagen.




// 6. Una vez que se haya cargado la segunda imagen, vuelva a pausar la ejecución
// durante 2 segundos.




// 7. Una vez transcurridos los 2 segundos, oculte la imagen actual.