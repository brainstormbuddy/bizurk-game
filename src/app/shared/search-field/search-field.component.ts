import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonIcon, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonIcon, IonInput],
})
export class SearchFieldComponent {
  @ViewChild('searchInput', { static: false })
  searchInput!: ElementRef<HTMLInputElement>;

  _isClose: boolean = true;
  searchValue: string = '';

  handleSearchIconClick() {
    if (this._isClose) {
      this._isClose = false;
      setTimeout(() => this.searchInput.nativeElement.focus(), 0);
    }
  }

  handleBlur() {
    this._isClose = true;
  }

  handleClear(event: any) {
    event.stopPropagation();
    this.searchValue = '';
    this._isClose = false;
    setTimeout(() => this.searchInput.nativeElement.focus(), 0);
  }
}
