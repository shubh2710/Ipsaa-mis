import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable()
export class AuthGaurd implements CanActivate{
 constructor(){
  
 }
 canActivate(){
  return true;
 }
}