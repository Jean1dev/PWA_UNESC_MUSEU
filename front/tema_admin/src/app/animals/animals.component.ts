import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import QRCode from 'qrcode'

declare var google: any;


export class objetoAnimal {
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

    url_qrcode: any

    constructor(private http: HttpClient) {
    }


    /**
     * Instância do formulario.
     */
    form: FormGroup;
    validateTypeFile() {
        console.log('vai ti deitaaa!!')
        debugger
        var fileName = (<HTMLInputElement>document.getElementById('inputImage')).value;
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") {
            alert('boa seu filha da puta!')
        } else {
            alert("Only jpg/jpeg and png files are allowed!");
        }
    }

    ngOnInit() {
        this.form = this.createForm();
    }

    onUpload(e) {
        console.log(e)
    }

    generateQrCode() {
        var url_temp = `localhost:8081/animais:${this.url_qrcode[`id_Animais`]}`
        QRCode.toDataURL(url_temp)
            .then(url => {
                console.log(url)
            })
            .catch(err => {
                console.error(err)
            })
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
            this.url_qrcode = res
            console.log(this.url_qrcode[`id_Animais`])
            this.generateQrCode()
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
