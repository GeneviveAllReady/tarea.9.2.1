import { Component } from '@angular/core';
import { NavigationComponent } from "@layout/navigation/navigation";
import { FooterComponent } from "@layout/footer/footer";

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.html',
  styleUrls: ['./skeleton.scss'],
  imports: [NavigationComponent, FooterComponent],
})

export class SkeletonComponent {}
