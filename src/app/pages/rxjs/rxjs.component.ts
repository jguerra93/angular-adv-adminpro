import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  public intervalSubs: Subscription;

  constructor() {

    // this.returnObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //   valor => console.log('Subs:', valor),
    //   error => console.warn('Error:', error),
    //   () => console.info('Obs terminado')
    // );
    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }
  
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }
  
  ngOnInit(): void {

  }

  retornaIntervalo(): Observable<number> {
    const intervals = interval(1000)
      .pipe(
        take(10),
        map(valor => valor + 1),
        filter(valor => (valor % 2 === 0) ? true : false),
      );
    return intervals;
  }

  returnObservable(): Observable<number> {
    let i = -1;
    const obs$ = new Observable<number>(observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 2) {
          // i = 0;
          observer.error('i es valor 2');
        }
      }, 1000)
    });
    return obs$;
  }
}
