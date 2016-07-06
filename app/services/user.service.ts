import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class UserService {
    constructor(private http:Http) {
    }

    private apiUrl = 'http://pw.local/api/pw';  // URL to web API

    list(){
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.apiUrl)
            .map((res:Response) => res.json());
    }
}
