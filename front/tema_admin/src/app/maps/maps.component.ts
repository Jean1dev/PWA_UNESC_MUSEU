import { FormControl, FormGroup } from '@angular/forms';
import { Component,OnInit } from '@angular/core';

declare var google: any;

@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html'
})

export class MapsComponent implements OnInit {

  /**
   * Instância do formulario.
   */
    form: FormGroup;

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
