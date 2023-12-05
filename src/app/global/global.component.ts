// global.component.ts
import { Component } from '@angular/core';
import { PreguntasService } from '../preguntas.service';
import { Pregunta } from '../pregunta';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent {

  pregunta: Pregunta = new Pregunta("", new Array(), "");
  respuestaSeleccionada: number = 0;
  esCorrecta: boolean | undefined;

  constructor(private servicioPreguntas: PreguntasService) { }

  ngOnInit(): void {
    this.servicioPreguntas.getPreguntas().subscribe((data) => {
      this.pregunta.pregunta = data.datos.pregunta;
      this.pregunta.correcta = data.datos.respuesta_correcta;
      this.pregunta.posibles[0] = data.datos.opciones[0];
      this.pregunta.posibles[1] = data.datos.opciones[1];
      this.pregunta.posibles[2] = data.datos.opciones[2];
      this.pregunta.posibles[3] = data.datos.opciones[3];
    });
  }

  actualizarRespuestaSeleccionada(index: number): void {
    this.respuestaSeleccionada = index;
  }

  comprobarSiEsCorrecto(): void {
    if (this.pregunta.correcta === this.pregunta.posibles[this.respuestaSeleccionada]) {
      this.esCorrecta = true;
    } else {
      this.esCorrecta = false;
    }
  }
  
}
