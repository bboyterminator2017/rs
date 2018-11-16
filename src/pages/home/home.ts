import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('usuario') usuario;
  @ViewChild('password') password;
  
  constructor(public navCtrl: NavController,
    public firebaseAuth: AngularFireAuth,
    public toastCrtl: ToastController) {

  }

  login(){
    this.firebaseAuth.auth.signInWithEmailAndPassword(
      this.usuario.value, this.password.value
    ).then( () => {
      //login com sucesso
      console.log(this.firebaseAuth.auth.currentUser.email)
      this.exibirMensagem('Logado com sucesso');
  })
    .catch( (erro:any) => {
      //login sem sucesso
      this.exibirMensagem('Usuário inválido');
    });
}

  exibirMensagem(mensagem : string){
    let toast = this.toastCrtl.create({
      duration : 4000, position: 'bottom'
    })
    toast.setMessage(mensagem);
    toast.present();
  }

  irParaCadastro(){
    this.navCtrl.push('CadastroPage');
  }

}
