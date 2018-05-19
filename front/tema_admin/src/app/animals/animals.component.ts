import { FormControl, FormGroup } from '@angular/forms';
import { Component,OnInit } from '@angular/core';

declare var google: any;

@Component({
    moduleId: module.id,
    selector: 'animals-cmp',
    templateUrl: 'animals.component.html'
})

export class AnimalsComponent implements OnInit {

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
        console.log(this.form)
    }

    onUpload(e) {
        console.log(e)
    }

    submit(e) {
        
        e.preventDefault();
        const username = e.target.elements[0].value;
        console.log(username)
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
        });
    }


}
