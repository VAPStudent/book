import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _httpClient: HttpClient, private _auth: AuthService) { }

  saveBook(books: any[]) {
    var tk = this._auth.getToken();
    return this._httpClient.post("https://devcarehttp-default-rtdb.firebaseio.com/data.json?auth=" + tk, books)
  }

  getBook() {
    var tk = this._auth.getToken();
    return this._httpClient.get("https://devcarehttp-default-rtdb.firebaseio.com/data.json?auth=" + tk)
  }



}
