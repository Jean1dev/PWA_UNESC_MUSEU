import { UserService } from '../dashboard/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login-cmp',
    moduleId: module.id,
    styleUrls: ['./login.component.css'],
    templateUrl: 'login.component.html',
})

export class LoginComponent implements OnInit{

    constructor(private router: Router, private user: UserService) { }

    ngOnInit() {
    }

    loginUser(e) {
        e.preventDefault();
        const username = e.target.elements[0].value;
        const password = e.target.elements[1].value;

        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('_msu-permission', 'true');
            this.router.navigate(['/dashboard']);
        }

    }
}
