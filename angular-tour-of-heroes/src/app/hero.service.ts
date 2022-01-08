import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes'; //HEROES é o nome da variável que está se
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  //com o observable é possível passar parametros para outras componentes
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); //torna o array num observable
    this.messageService.add('HeroService: fetched heroes'); //mostra uma mensagem para o utilizador
    return heroes; //retorna um observable
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}



//When you provide the service at the root level, Angular creates a single,
// shared instance of HeroService and injects into any class that asks for it.
//turns out if not be used
