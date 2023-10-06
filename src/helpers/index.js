//GENERADOR DE ID UNICO
export const idGenerate = () => {
    const radom = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return fecha + radom;
};

//PONER PRIMERA LETRA EN MAYUSCULAS DE UNA ORACION
export const toUpperString = (frase) => {
    const primeraLetra = frase.slice(0, 1).toUpperCase(); //Obtener la priemra letra de la frase y pasarla a mayuscula
    const restoFrase = frase.slice(1); //Obtener el resto de la frase sin la primera letra
    return primeraLetra + restoFrase;
};

//PONER PRIMERA LETRA DE CADA NOMBRE/APELLIDO EN MAYUSCULA
export const toUpperName = (name) => {
    return name.replace(/\b\w/g, (char)=> char.toUpperCase());
}