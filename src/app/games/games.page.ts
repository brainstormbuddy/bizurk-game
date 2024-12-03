import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonCol,
  IonGrid,
} from '@ionic/angular/standalone';
import { GameCardComponent } from './game-card/game-card.component';
import { SearchFieldComponent } from '../shared/search-field/search-field.component';

interface GameCard {
  title: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  logo: string;
  color: string;
}

@Component({
  selector: 'app-games',
  templateUrl: 'games.page.html',
  styleUrls: ['games.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSegment,
    IonSegmentButton,
    IonCol,
    IonGrid,
    GameCardComponent,
    SearchFieldComponent,
  ],
})
export class GamesPage implements OnInit {
  router = inject(Router);
  selectedCategory = 'racing';
  filteredGames: GameCard[] = [];
  games: GameCard[] = [
    {
      title: 'Sonic the Hedgehog',
      category: 'racing',
      price: 4.99,
      rating: 4.5,
      image: '/assets/sonic-hedgehog.png',
      logo: '/assets/sonic-hedgehog-logo.png',
      color: '#4565F6',
    },
    {
      title: 'Super Mario Bros',
      category: 'action',
      price: 7.99,
      rating: 4.0,
      image: '/assets/super-mario.png',
      logo: '/assets/super-mario-logo.png',
      color: '#ED464A',
    },
    {
      title: 'Donald Duck',
      category: 'adventure',
      price: 5.99,
      rating: 5.0,
      image: '/assets/donald-duck.png',
      logo: '/assets/donald-duck-logo.png',
      color: '#F7B500',
    },
  ];

  ngOnInit(): void {
    this.filterGames();
  }

  onCategoryChange(e: any) {
    this.selectedCategory = e.detail.value;
    this.filterGames();
  }

  filterGames() {
    this.filteredGames = this.games.filter(
      (game) => game.category === this.selectedCategory
    );
  }

  goToDetails(game: any) {
    this.router.navigate(['/details', game.title]);
  }
}
