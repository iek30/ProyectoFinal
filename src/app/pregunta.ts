export class Pregunta {
    pregunta:string;
    posibles:string[];
    correcta:string;
    constructor(pregunta:string,posibles:string[],correcta:string){
        this.correcta = correcta;
        this.posibles = posibles;
        this.pregunta = pregunta;
    }
}
