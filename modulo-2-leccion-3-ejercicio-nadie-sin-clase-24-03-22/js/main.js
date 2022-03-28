"use strict";
const avatarImage =document.querySelector('.js_image');
// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "hhttps://placedog.net/1000/563?id=15";
//userAvatar ="";
//innetHTML nunca se usa con input y img

console.log(avatarImage.src);

if( ){
//Poner el avatar por defecto
avatarImage.src = DEFAULT_AVATAR ;
}
else {
//Poner el avatar de la usuaria
avatarImage.src = userAvatar;
}

/*
avatarImage.src = userAvatar === '' ? DEFAULT_AVATAR : userAvatar;
avatarImage.setAttribute('src', userAvatar || DEFAULT_AVATAR); 
*/