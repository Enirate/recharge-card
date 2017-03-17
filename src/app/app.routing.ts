//to create a module we need to import module generator
import { NgModule } from '@angular/core';
//We will define our routes with Routes service and use the Routes service to configure the RouterModule
import { RouterModule, Routes } from '@angular/router';

// To define routes our components is needed so we import our components
import { AboutComponent } from './components/about/about.component';
import { CardPageComponent } from './components/card-page/card-page.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

// let's define our routes
const AppRoutes:Routes = [
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'card-page',
        component: CardPageComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
    },
    {
        path:'**',
        component: ErrorComponent
    }
]

@NgModule({
    //we import our RouterModule and configure it with the pre-defined Routes
    imports:[RouterModule.forRoot(AppRoutes)],

    // we export the configured Module so that we can import it in the root Module
    exports:[RouterModule]
})

export class AppRouteModule {}

/*To keep our root Module clean we will export all our components in an array so we can import them as a single
array and not individually */
export const allComponents = [
    AboutComponent,
    CardPageComponent,
    ErrorComponent,
    HomeComponent,
    LoginComponent
];