import { Component } from '@angular/core';
import { PreguntasService } from '../preguntas.service';
import { Pregunta } from '../pregunta';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent {

  pregunta:Pregunta = new Pregunta("",new Array(),"");

  constructor(private servicioPreguntas: PreguntasService) { }

  ngOnInit(): void {
    this.servicioPreguntas.getPreguntas().subscribe((data) => {
        this.pregunta.pregunta = data.datos.pregunta;
        this.pregunta.correcta = data.datos.respuesta_correcta;
        this.pregunta.posibles = data.datos.opciones;
    });
  }

}
