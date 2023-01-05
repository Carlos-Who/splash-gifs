import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Gif, SearchGifsRespone} from "../interfaces/gifs.interface";


@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  API_KEY = "Your API KEY";
  URL = "https://api.giphy.com/v1/gifs";

  private _historial: string[] = [];
  public gifResult: Gif[] = [];
  public gifTrendResult: Gif[] = [];

  constructor(private http: HttpClient) {

    if(localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }
  }

  get historial() {
    return [...this._historial];
  }

  trendGifs() {
    const paramsQ = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('limit', '10')

    this.http.get<SearchGifsRespone>( `${this.URL}/trending`, {params: paramsQ}).subscribe( response => {
      console.log(response);
      this.gifTrendResult = response.data;
    });
  }

  searchGifs(query: string, amount: string = "20") {
    query = query.trim().toLowerCase();

    if(!this._historial.includes(query)) {
      this._historial.unshift(query); // IMPORTANT -- [unshift] Add an element on top of the array...
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const paramsK = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('limit', amount)
      .set('q', query);

    console.log(paramsK.toString());

    this.http.get<SearchGifsRespone>(`${this.URL}/search`,{params: paramsK}).subscribe((response) => {
      console.log(response.data);
      this.gifResult = response.data;
    })
  }

}
