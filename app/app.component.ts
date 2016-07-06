import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { MatrixService } from './services/matrix.service';
import {UserService} from './services/user.service'

import {NavComponent} from './components/partials/nav.component';

@Component({
    selector: 'app-pw',
    templateUrl: './app/app.html',
    animations: [
        trigger('elemState', [
            state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(1)'
            })),
            state('active', style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ],
    providers: [MatrixService, UserService],
    directives: [NavComponent]
})

export class AppComponent implements OnInit {
    private number:number;
    private img;
    private matrix = [];
    private status = 0;
    private users:string;

    constructor(private matrixService:MatrixService, private _userservive:UserService) {
        this.number = 100;
        this.img = 'http://lorempicsum.com/futurama/400/200/1';
    }

    getList() {
        this._userservive.list().subscribe(
            data => this.users = JSON.stringify(data),
            error => console.log(error),
            ()=> console.log("finished")
        );
    }

    getMatrix() {
        this.matrixService.getMatrix().then(matrix => this.matrix = matrix);
    }

    ngOnInit():any {
        this.getMatrix();
    }

    switchLed() {
        this.status = (this.status + 1) % 2;
    }

}