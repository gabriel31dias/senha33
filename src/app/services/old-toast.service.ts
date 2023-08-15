import { Injectable } from '@angular/core';
import * as toastr from 'toastr';

@Injectable({
  providedIn: 'root'
})
export class OldToastService {

  constructor() { }

  /**
   * 
   * @param mensagem string
   * @param tipo sucesso | alerta | erro
   */
  mensagemToastr(mensagem: string, tipo: string){
    toastr.options.closeButton = false;
    toastr.options.debug = false;
    toastr.options.newestOnTop = false;
    toastr.options.progressBar = true;
    toastr.options.positionClass = "toast-top-right";
    toastr.options.preventDuplicates = false;
    toastr.options.onclick = undefined;
    toastr.options.showDuration = 200;
    toastr.options.hideDuration = 1000;
    toastr.options.timeOut = 3000;
    toastr.options.extendedTimeOut = 1000;
    toastr.options.showEasing = 'swing';
    toastr.options.hideEasing = 'linear';
    toastr.options.showMethod = 'fadeIn';
    toastr.options.hideMethod = 'fadeOut';
    if(tipo == 'sucesso'){
      toastr['success'](mensagem);
    }else if(tipo == 'alerta'){
      toastr['warning'](mensagem);
    }else if(tipo == 'erro'){
      toastr['error'](mensagem);
    }
  }
}
