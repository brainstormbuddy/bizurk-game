import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonText,
  IonIcon,
} from '@ionic/angular/standalone';
import { RatingComponent } from '../../shared/rating/rating.component';

interface GameCard {
  image: string;
  logo: string;
  title: string;
  category: string;
  price: number;
  rating: number;
  color: string;
}

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonImg,
    IonText,
    IonIcon,
    RatingComponent,
  ],
})
export class GameCardComponent {
  game = input.required<GameCard>();

  hexToRgb(hex: string): string | null {
    // Remove leading '#' if present
    const cleanedHex = hex.replace('#', '');
    const bigint = parseInt(cleanedHex, 16);
    if (cleanedHex.length === 6) {
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `${r}, ${g}, ${b}`;
    }
    return null;
  }
}
