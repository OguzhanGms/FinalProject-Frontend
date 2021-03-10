import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Hangi tag ile kullanacağımızı belirtiyoruz.
  templateUrl: './app.component.html', // Hangi dosyanın componenti olduğu
  styleUrls: ['./app.component.css'],
}) // C# karşılığı Attribute. Alttaki classın bir component olduğu ve özelliklerini belirtiyor.
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Oğuzhan Gümüş';
  
}
