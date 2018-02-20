import {Component} from '@angular/core';

import {ApiService} from './api.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    public favourites = [];
    constructor(private _apiService: ApiService) {
    }

    ngOnInit() {
        this.getFavourites();
    }

    getFavourites() {
        this._apiService.getFavourites().subscribe(
            data => {
                this.processFavourites(data);
            },
            err => console.error(err)
        );
    }
    processFavourites(data) {
        this.favourites = [];
        for (const entry in data.list.entries) {
            if (data.list.entries[entry].entry.target.file) {
                this.favourites.push({
                    'type': 'file',
                    'name': data.list.entries[entry].entry.target.file.name
                });
            } else if (data.list.entries[entry].entry.target.folder) {
                this.favourites.push({
                    'type': 'folder',
                    'name': data.list.entries[entry].entry.target.folder.name
                });
            }
        }
    }
}
