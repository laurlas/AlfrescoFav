import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

    public ROOT_URL = 'https://s3.eu-west-2.amazonaws.com/alfresco-adf-app-test/favorites.json';
    private data ;
    constructor(private http: HttpClient) {}
    getFavourites() {
        this.data = this.http.get(this.ROOT_URL);
        return this.data;
    }
}
