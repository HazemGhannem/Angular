export class Fournisseur {
    idFournisseur !: number
    code !: string
    libelle !: string
    constructor(idFournisseur:number,code : string,libelle:string) { 
        this.idFournisseur=idFournisseur,
        this.code=code,
        this.libelle=libelle
    }
}
