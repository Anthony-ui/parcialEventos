import { Usuarios } from './usuarios';

export interface Eventos{

    idEvento:number,
    fecha:string,
    evento:string,
    lugar:string,
    costo:number,
    idUsuario:number,
    Usuarios:Usuarios
    
    }