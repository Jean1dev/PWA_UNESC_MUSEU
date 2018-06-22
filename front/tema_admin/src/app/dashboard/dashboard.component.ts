import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var $:any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{  

    constructor(private http: HttpClient){
    }
    
    ngOnInit(): void {
        this.listAnimals();
    }
    listAnimals(){
        this.http.get('http://localhost:8081/animais').subscribe((data) => {
            console.log(data);
        });
    }
    
}
