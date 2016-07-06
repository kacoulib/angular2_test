import { Injectable } from '@angular/core';

import {ELEMENTS} from "./../mock/mock-elements"

@Injectable()
export class MatrixService {
    getMatrix() {
        return Promise.resolve(ELEMENTS);
    }
}
