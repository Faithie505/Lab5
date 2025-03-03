import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; //imported http client 
import { Observable } from 'rxjs'; //we will use this to call the getStudentData asynchronously(not having to wait 3 secs for it to load)

//@Injectable tells the angular framework that this is a service and is desgined to be used by other components
@Injectable({
  providedIn: 'root'
})
export class DataService {

  //getting an insatance of the http client (allows us to use it in runntime
  //this ensures that all the dependencies are taken care of)
  constructor(private httpClient:HttpClient) { }

  //we want this method to get an instance of the httpclient
  //the observable lets us use this method asynchronously
  getStudentData(): Observable<any> {
    return this.httpClient.get('https://www.jsonblob.com/api/jsonblob/1346093451602747392');
  }

  //create a method to access the weather api from openweather
  getWeatherData(): Observable<any>
  {
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303');
  }
}
