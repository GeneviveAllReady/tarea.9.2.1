import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { SkeletonComponent } from './app/layout/skeleton/skeleton';

bootstrapApplication(SkeletonComponent)
  .catch(err => console.error(err));