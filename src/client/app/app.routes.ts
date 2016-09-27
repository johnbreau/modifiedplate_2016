import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { EntryFormRoutes } from './entry-form/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...EntryFormRoutes,
];
