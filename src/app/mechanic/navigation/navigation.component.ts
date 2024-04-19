import { Component, OnInit } from '@angular/core';
import { CurrentStateService } from '../../shared/current-state.service';
import { MechanicService } from '../../shared/mechanic.service';
import { SpaceshipService } from '../../shared/spaceship.service';
import { Star } from '../../model/star';
import { Planet } from '../../model/planet';
import { Router } from '@angular/router';


@Component({
selector: 'app-trade',
templateUrl: './navigation.component.html',
styleUrls: ['./navigation.component.css']
})


export class NavigationComponent implements OnInit {
  closestStars: Star[] = [];
  planetsInSelectedStar: Planet[] = [];
  selectedStarId?: number;
  selectedPlanetId?: number;

spaceshipId = 1; // This would typically be determined by the current user's spaceship

constructor(
    private mechanicService: MechanicService,
    private currentStateService: CurrentStateService,
    private router: Router,
    private spaceshipService: SpaceshipService
) {}

    ngOnInit(): void {
     this.loadClosestStars();
    const spaceshipId = 1;
    this.spaceshipService.getSpaceship(spaceshipId).subscribe(spaceship => {
      if (spaceship && spaceship.currentStar && spaceship.currentPlanet) {
        this.selectedStarId = spaceship.currentStar.id;
        this.selectedPlanetId = spaceship.currentPlanet.id;
      }
    });
  }

  loadClosestStars() {
  this.mechanicService.getClosestStars(this.spaceshipId).subscribe(
    stars => {
      console.log('Closest stars fetched', stars);
      this.closestStars = stars;
    },
    error => console.error('Error fetching closest stars', error)
  );
}

  onTravelToStar(starId: number) {
    this.mechanicService.travelToStar(this.spaceshipId, starId).subscribe(
      () => {
        console.log('Travel successful');
        this.selectedStarId = starId;
        this.loadPlanetsInStar(starId);
      },
      error => console.error('Error traveling to star', error)
    );
  }

  loadPlanetsInStar(starId: number) {
    this.mechanicService.getPlanetsInStar(starId).subscribe(
      planets => this.planetsInSelectedStar = planets,
      error => console.error('Error fetching planets in star', error)
    );
  }

 onTravelToPlanet(planetId: number) {
  this.mechanicService.travelToPlanet(this.spaceshipId, planetId).subscribe(
    () => {
      console.log('Travel to planet successful');
      this.currentStateService.selectedPlanetId = planetId; // Set the selected planet ID in the service
      // Navigate to the trade component if needed, or it will automatically pick up the change.
      this.router.navigate(['/mechanic/trade']);
},
    error => console.error('Error traveling to planet', error)
  );
}


}
