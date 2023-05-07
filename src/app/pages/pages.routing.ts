import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { GraficalComponent } from "./grafical/grafical.component";
import { AcountSettingsComponent } from "./acount-settings/acount-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";


const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
            { path: 'grafica1', component: GraficalComponent, data: { titulo: 'Grafica1' } },
            { path: 'acount-settings', component: AcountSettingsComponent, data: { titulo: 'Ajustes de cuenta' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesa' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs' } },
            //   { path: '', redirectTo: '/dasboard', pathMatch: 'full' },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }