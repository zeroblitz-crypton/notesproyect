import {  Component, ViewChild, ElementRef, Inject } from '@angular/core';
import { Nota } from 'src/app/models/Nota';
import { FirebaseService } from 'src/app/services/firebase.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
 
  arrayNotas:Nota[]=[]
  selectedNota:Nota= new Nota(0,'')
 
  notas:any[]=[]
  notaaux=""

  flag=false


  constructor(private firebase:FirebaseService){
  
    this.recuperarDatos()
    
  }

  addOrEdit(){
    if(this.selectedNota.id==0){
      this.selectedNota.id=this.arrayNotas.length+1
      this.arrayNotas.push(this.selectedNota)
    }
    this.guardarNotasEnLocalStorage()
    this.selectedNota=new Nota(0,'')
    this.mostrarAlerta("Genial!","Se guardo los datos satisfactoriamente","success")
  }
  mostrarAlerta(ctx:string,msg:string,tipo:any) {
    Swal.fire(ctx, msg, tipo);
  }
  recuperarDatos(){
    const notasString = localStorage.getItem('notas');
    if (notasString) {
      this.arrayNotas = JSON.parse(notasString); // Parsea el JSON almacenado en el localStorage
    }
    console.log(this.notas);
    
  }

  eliminarNota() {

    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, estoy seguro',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.arrayNotas=this.arrayNotas.filter(x => x!= this.selectedNota)
        this.guardarNotasEnLocalStorage()
        this.selectedNota=new Nota(0,'')
        this.mostrarAlerta("Bien !","Se elimino correctamente","success")
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      
        Swal.fire('Cancelado', 'La acción ha sido cancelada', 'error');
      }
    });
    
  }

  guardarNotasEnLocalStorage() {
    localStorage.setItem('notas', JSON.stringify(this.arrayNotas));
  }

  selectedItem(nota:Nota){
    console.log(nota.id);
    this.selectedNota=nota
  }
}
export interface UserProfile {
  username: string;
}