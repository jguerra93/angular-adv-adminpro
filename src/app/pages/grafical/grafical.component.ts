import { Component } from '@angular/core';


@Component({
  selector: 'app-grafical',
  templateUrl: './grafical.component.html',
  styles: [
  ]
})
export class GraficalComponent {
  
  public title1: string = 'Ventas'
  public title2: string = 'Compras'
  public labels1: string[] = ['Agua', 'Pan', 'Nachos'];
  public data1= [
      [20, 10, 25]
    ];
}


