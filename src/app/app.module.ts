import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NotafijasComponent } from './componentes/notafijas/notafijas.component'; // Importar ReactiveFormsModule


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NavegadorComponent,
    NotafijasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
