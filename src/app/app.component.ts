import { Component, OnInit} from '@angular/core';
import { Data, RouterOutlet } from '@angular/router';
import { DataService } from './Services/data.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'data-app';
   
  //making a local array that will hold any time of data
  students: any[] = [];
  weather: any[] = [];

  temperature: any = "";
  count: number = 0;

  //create new instance/object of a DataService
  constructor(private dataService:DataService){}

 
  //thusis a better place to enter logic rather than putting it in teh constructor (as if there is an error in the constructor, none of the code will work)
  ngOnInit(): void {
    //invokes getStudentData data asynchronously, ensuring the app won't hang while we are getting data from the api
    this.dataService.getStudentData().subscribe( 
      
      (data) => {
        console.log(data);
        //puts all the data from the api into teh students array
        this.students = data.students;
      }
    );

    
    this.dataService.getWeatherData().subscribe(
      (data) =>{
        //puts all the data of the weather into the weather array
        this.weather = data.weather;
        //puts all the details from the main into the temperature object
        this.temperature = data.main;
      }
    );

  }




}
