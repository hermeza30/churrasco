import { LoginComponent } from './paginas/login/login.component';
import { NotpagesfoundComponent } from './paginas/notpagesfound/notpagesfound.component';
import { LoginGuard } from './servicios/login.guard';
import { PaginaComponent } from './paginas/pagina/pagina.component';
import{Routes,RouterModule} from '@angular/router';
const appRoutes:Routes=[
    {path:'login',component:LoginComponent},
    {path:'pagina',component:PaginaComponent,canActivate:[LoginGuard]},
    {path:'**',component:LoginComponent}
];

export const APP_ROUTES=RouterModule.forRoot(appRoutes,{useHash:true});