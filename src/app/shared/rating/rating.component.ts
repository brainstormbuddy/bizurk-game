import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
  imports: [CommonModule, IonIcon],
})
export class RatingComponent {
  rating = input<number>(0); // Default rating
  maxRating: number = 5; // Maximum rating

  get filledStars() {
    return Math.floor(this.rating());
  }

  get halfStar() {
    return this.rating() % 1 !== 0;
  }

  get emptyStars() {
    return this.maxRating - Math.ceil(this.rating());
  }
}
