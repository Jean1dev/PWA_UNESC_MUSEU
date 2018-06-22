import { FormControl, FormGroup } from '@angular/forms';
import { Component,OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var google: any;


export class objetoAnimal{
    nome: string;
    nome_cientifico: string;
    ordem: string;
    familia: string;
    distribuicao_geografica: string;
    habitat: string;
    descricao: string;
}

@Component({
    moduleId: module.id,
    selector: 'animals-cmp',
    templateUrl: 'animals.component.html'
})

export class AnimalsComponent implements OnInit {


    constructor(private http: HttpClient){
    }
    

  /**
   * Instância do formulario.
   */
    form: FormGroup;
    validateTypeFile(){
        console.log('vai ti deitaaa!!')
        debugger
        var fileName = (<HTMLInputElement>document.getElementById('inputImage')).value;
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile=="jpg" || extFile=="jpeg" || extFile=="png"){
            alert('boa seu filha da puta!')
        }else{
            alert("Only jpg/jpeg and png files are allowed!");
        }   
    }
    
    ngOnInit() {
        this.form = this.createForm();
    }

    onUpload(e) {
        console.log(e)
    }

    submit(e) {
        
        e.preventDefault();

        const ani = new objetoAnimal();
        ani.nome = e.target.elements[0].value;
        ani.nome_cientifico = e.target.elements[1].value;
        ani.ordem = e.target.elements[2].value;
        ani.familia = e.target.elements[3].value;
        ani.distribuicao_geografica = e.target.elements[4].value;
        ani.habitat = e.target.elements[5].value;
        ani.descricao = e.target.elements[6].value;

        console.log(ani)

        this.http.post("http://localhost:8081/animais", ani).subscribe((res) => {
            alert('Animal cadastrado com sucesso');
        }, (err) => {
            alert('Houveram erros ao enviar ao servidor');
        });
    }

    private createForm(): FormGroup {
        return new FormGroup({
            name: new FormControl(),
            cientifc_name: new FormControl(),
            order: new FormControl(),
            family: new FormControl(),
            description: new FormControl(),
            position: new FormControl(),
            habitat: new FormControl(),
            descricao: new FormControl(),
        });
    }


}
