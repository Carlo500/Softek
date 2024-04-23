import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comentariossh',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './comentariossh.component.html',
  styleUrl: './comentariossh.component.css'
})
export class ComentariosshComponent {
  @Output()
  llamadaPadre:EventEmitter<string> = new EventEmitter();
  nombre:string=" ";
  onSubmit(){
    this.llamadaPadre.emit(this.nombre);
  }
  enviarPadre(nombres:string) {
    this.llamadaPadre.emit(nombres);
    }
}