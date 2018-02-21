import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {AgmCoreModule} from '@agm/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { GoogleAutocompleteComponent } from './google-autocomplete/google-autocomplete.component';

declare let jQuery: Object;
const appRoute: Routes = [

  { path: '', component: HomeComponent },
   { path: 'googleMap', component: GoogleMapComponent },
   { path: 'googleMapSearch', component: GoogleAutocompleteComponent },
  // { path: 'employee/:id', canActivate: [AuthGuardGuard], component: EmployeeAccordionComponent },
  // { path: 'cascade', canActivate: [AuthGuardGuard], component: CascadeDropDownComponent },
  // { path: 'collapse', canActivate: [AuthGuardGuard], component: CollapseExampleComponent },
  // { path: 'upload', canActivate: [AuthGuardGuard], component: UpLoadComponent },
  // { path: 'product', canActivate: [AuthGuardGuard], component: ProductInsertComponent },
  // { path: 'productList', canActivate: [AuthGuardGuard], component: ProductListComponent },
  // { path: 'editorTemplate', canActivate: [AuthGuardGuard], component: EditorTemplateComponent },
  // {
	// 	path: "user",
	// 	pathMatch:"prefix",
	// 	children: [
	// 		{ path: ":name", component: UserComponent },
	// 		{ path: ":name/:id", component: UserComponent },
	// 	]
	// },
  // // { path: 'user/:name', component: UserComponent },
  // // { path: 'user/:name/:id', component: UserComponent },
  // { path: 'dashboard', canActivate: [AuthGuardGuard], component: DashboardComponent },
  // { path: '**', component: NotFoundComponent },
  
	// {
	// 	path: "user",
	// 	pathMatch:"full",
	// 	children: [
	// 		{ path: ":name", component: use },
	// 		{ path: ":name/:id", component: UserComponent },
	// 	]
	// },
	//{ path: 'user/:name', component: UserComponent },
	//{ path: 'user/:name/:id', component: UserComponent },
	// { path: '**', component: PageNotFoundComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GoogleMapComponent,
    GoogleAutocompleteComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoute),HttpModule,FormsModule,ReactiveFormsModule,
    AgmCoreModule.forRoot({apiKey: "AIzaSyBr1LfdPOcJVTISyV2vLb-YIj_1-LQNRy0",libraries: ["places"]})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
