import { Component } from '@angular/core';
import { ComentariosshComponent } from '../comentariossh/comentariossh.component';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [ComentariosshComponent],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {
  comentarios: string []=[];
  recibirDato(dato:string) {
    this.comentarios.push(dato);
    }
}
