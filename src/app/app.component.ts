import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-angular';

  alumnos: string[] = ['Lucas Caro', 'Gustavo Gonzalez', 'Facundo Miranda', 'Milagros Amarilla', 'Santiago Lopez'];
  cargando: boolean = false;
  esperar: boolean = false;
  cargarAlumnos() {
    this.esperar = true;
    setTimeout(() => {
      this.esperar = false;
      this.cargando = true;
    }, 2000);
  }
}
