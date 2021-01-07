import { Routes } from "@angular/router";
import { PanierContainerComponent } from "./features/panier/panier-container/panier-container.component";

export const APP_ROUTES: Routes = [
  { path: "", redirectTo: "cocktails", pathMatch: "full" },
  { path: "panier", component: PanierContainerComponent }
];
