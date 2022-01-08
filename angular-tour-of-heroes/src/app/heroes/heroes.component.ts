import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero; //it's the same than selectHero: Hero | undefined -> não está inicializada

  heroes: Hero[] = []; //tem todos os heroes

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes(); //obtém todos os heróis, mas espera que seja inicializado primeiro uma vez que o método subscribe é assincrono.
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero; //incializa a variável
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    //envia uma mensagem que o id do herói é hero.id
  }

  //obtem um Observable<Hero[]> só que nós percisamos de um array
  //e por isso utiliza-se o método subscribe para que torna num array
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
