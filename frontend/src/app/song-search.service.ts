import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Song } from '@classes/song';

@Injectable({
  providedIn: 'root'
})
export class SongSearchService {

  SEARCH_API = 'https://itunes.apple.com/search?term=';

  constructor(private httpClient: HttpClient) {  }

  searchItunes(search_term) {
    console.log(`${this.SEARCH_API}${search_term.split(' ').join('+')}`);
    return this.httpClient.get<any>(`${this.SEARCH_API}${search_term.split(' ').join('+')}`).pipe(catchError(this.errorHandler))
  }

  searchDatabase(term) {
    // return this.apiService.get_songs(term);
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error);
  }
}
