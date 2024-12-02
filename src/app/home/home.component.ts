import { Component, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = []
  housingService: HousingService = inject (HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getallHousingLocation();
  }
}
