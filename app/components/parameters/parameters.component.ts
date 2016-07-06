import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';

class User {
    username:string;
    email:string;

    constructor()
    {
    }
}

@Component({
    selector: 'app-parameters',
    templateUrl: './app/components/parameters/parameters.html'
})
export class ParametersComponent {
    private userForm:ControlGroup;
    private username:Control;
    private email:Control;
    private emailStrength:number = 0;
    private user:User;

    constructor(fb:FormBuilder) {
        this.username = fb.control('', Validators.required);
        this.email = fb.control('', Validators.required);

        this.userForm = fb.group({
            username: this.username,
            email: this.email
        });

        // we subscribe to every email change
        this.email.valueChanges.subscribe((newValue) => {
            this.emailStrength = newValue.length;
        });
        this.user = new User;
    }

    register() {

        this.user.username = this.userForm.value.username;
        this.user.email = this.userForm.value.email;

        console.log(this.user)
    }
}