import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DondeEstamosComponent } from './donde-estamos/donde-estamos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'dondeEstamos', component: DondeEstamosComponent},
    {path: 'quienesSomos', component: QuienesSomosComponent},
    {path: 'comentarios', component: ComentariosComponent}
];
