import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  title = 'Desafio 3 ';

  alumnos: string[] = ['Nestor', 'Rodrigo', 'Pablo', 'Laura', 'Juan'];
  cargando: boolean = false;
  esperar: boolean = false;
  cargarAlumnos() {
    this.esperar = true;
    setTimeout(() => {
      this.esperar = false;
      this.cargando = true;
    }, 2000);
  }

  constructor(private fb: FormBuilder) {}

  get name() {
    return this.formUser.get('name') as FormControl;
  }

  get email() {
    return this.formUser.get('email') as FormControl;
  }

  formUser = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });
  newName: any;
  procesar() {
    console.log(this.formUser.value.name);
    this.newName = this.formUser.value.name?.toString();
    this.alumnos.push(this.newName);
  }
}