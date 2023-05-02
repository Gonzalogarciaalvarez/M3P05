let entrante =""
let principal ="" 

function menu(){

    //Primero el selector de platos

    entrante = prompt("Que quieres comer de entrante?")
    if (entrante >5){
        entrante = prompt("Eso no es un plato disponible, por favor, vuelve a seleccionar tu entrante")
    }else principal = prompt("Que quieres comer de principal?")
    if (principal >5){
        principal = prompt("Eso no es un plato disponible, por favor, vuelve a seleccionar tu plato principal")
    }else

    //A continuacion tenemos dos switch case con la informacion de cada plato

    switch(entrante){
        case "1":
            comidaE = "Empanadilla ricota y espinaca"
            break;
        case "2":
            comidaE = "Patatas alioli"
            break;
        case "3":
            comidaE = "Ensaladilla rusa"
            break;
        case "4":
            comidaE = "Patatas fritas"
            break;
        case "5":
            comidaE = "Aros de cebolla"
            break;
    }

    switch(principal){
        case "1":
            comidaP = "Kebab"
            break;
        case "2":
            comidaP = "Entrecot de ternera"
            break;
        case "3":
            comidaP = "Lasaña"
            break;
        case "4":
            comidaP = "Churrasco de cerdo"
            break;
        case "5":
            comidaP = "Hamburguesa de buey"
            break;
    }

    //Y para acabar tenemos un alert que coja la informacion de cada switch case

    alert ("Ha elegido de primer plato "+comidaE+" y de segundo plato "+comidaP)
    
}