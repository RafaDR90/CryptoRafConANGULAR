import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut , signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  private emailSource= new BehaviorSubject<string>('');
  currentEmail = this.emailSource.asObservable();

  public user:any = {};

  

  constructor(private auth:Auth, private router:Router) { }

  setEmail(email:string){
    this.emailSource.next(email);
  }

  public register(usuario:any){
    createUserWithEmailAndPassword(this.auth,usuario.email, usuario.password)
    .then((response:any)=>{
      this.user = response.user;
      console.log(response);
      this.router.navigate(['/coins']);
    })
    .catch((error:any)=>{
      console.log(error);
    });
  }

  public login(usuario:any){
    signInWithEmailAndPassword(this.auth,usuario.email, usuario.password)
    .then((response:any)=>{
      this.user = response.user;
      console.log(response);
      this.router.navigate(['/coins']);
    })
    .catch((error:any)=>{
      console.log(error);
    });
  }

  public logout(){
    signOut(this.auth)
    .then(() => {
      this.user = {};
      this.router.navigate(['/']);
      console.log("Sesión cerrada")
    });
  }

  public loginGoogle(){
    signInWithPopup(this.auth, new GoogleAuthProvider())
    .then((response:any)=>{
      this.user = response.user;
      console.log(this.user.uid);
      this.router.navigate(['/coins']);
    })
    .catch((error:any)=>{
      console.log(error);
    })
  }

  public loginGitHub(){
    signInWithPopup(this.auth, new GithubAuthProvider())
    .then((response:any)=>{
      this.user = response.user;
      console.log(this.user.uid);
      this.router.navigate(['/coins']);
    })
    .catch((error:any)=>{
      console.log(error);
    })
  }
}
