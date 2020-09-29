import { BrowserModule } from '@angular/platform-browser';
import { forwardRef, NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoColumnsComponent } from './components/two-columns/two-columns.component';
import { HeroComponent } from './components/hero/hero.component';
import { ThreeColumnsComponent } from './components/three-columns/three-columns.component';
import { ListComponent } from './components/list/list.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { OutputComponent } from './views/output/output.component';
import { ProcessComponent } from './views/process/process.component';
import { GamerComponent } from './views/gamer/gamer.component';
import { SingleColumnsComponent } from './components/single-columns/single-columns.component';
import { MapComponent } from './components/map/map.component';
import { BarComponent } from './components/bar/bar.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { DxMapModule, DxCheckBoxModule, DxButtonModule } from 'devextreme-angular';
import { DxVectorMapModule } from 'devextreme-angular';
import { InfoComponent } from './components/info/info.component';
import { ChartComponent } from './components/chart/chart.component';
import { MapChartComponent } from './components/map-chart/map-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { GlobalMapComponent } from './components/global-map/global-map.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { GamerBarChartComponent } from './components/gamer-bar-chart/gamer-bar-chart.component';
import { QualityServiceComponent } from './components/quality-service/quality-service.component';
import { AverageUsersComponent } from './components/average-users/average-users.component';
import { GamerPlatformComponent } from './components/gamer-platform/gamer-platform.component';
import { AvgSessionComponent } from './components/avg-session/avg-session.component';
import { UserPlatformComponent } from './components/user-platform/user-platform.component';
import { CudtomerComponent } from './components/cudtomer/cudtomer.component';
@NgModule({
  declarations: [
    AppComponent,
    TwoColumnsComponent,
    HeroComponent,
    ThreeColumnsComponent,
    ListComponent,
    BreadcrumbComponent,
    NavBarComponent,
    HomeComponent,
    DashboardComponent,
    OutputComponent,
    ProcessComponent,
    GamerComponent,
    SingleColumnsComponent,
    MapComponent,
    BarComponent,
    PageNotFoundComponent,
    InfoComponent,
    ChartComponent,
    MapChartComponent,
    GlobalMapComponent,
    BarChartComponent,
    GamerBarChartComponent,
    QualityServiceComponent,
    AverageUsersComponent,
    GamerPlatformComponent,
    AvgSessionComponent,
    UserPlatformComponent,
    CudtomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxMapModule,
    DxCheckBoxModule,
    DxButtonModule,
    DxVectorMapModule,
    HighchartsChartModule,
    ChartModule,
    DxMapModule,
    CheckboxModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
