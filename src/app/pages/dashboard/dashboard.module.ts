import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { KittenComponent } from './kitten/kitten.component';
import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';
import { WeatherComponent } from './weather/weather.component';
import { SolarComponent } from './solar/solar.component';
import { PlayerComponent } from './rooms/player/player.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TrafficChartComponent } from './traffic/traffic-chart.component';
import { FormsModule } from '@angular/forms';
import { CountryOrdersChartComponent } from '../dashboard/country-orders/chart/country-orders-chart.component';
import { EarningCardComponent } from '../dashboard/earning-card/earning-card.component';
import { EarningCardBackComponent } from '../dashboard/earning-card/back-side/earning-card-back.component';
import { EarningPieChartComponent } from '../dashboard/earning-card/back-side/earning-pie-chart.component';
import { EarningCardFrontComponent } from '../dashboard/earning-card/front-side/earning-card-front.component';
import { EarningLiveUpdateChartComponent } from '../dashboard/earning-card/front-side/earning-live-update-chart.component';
import { StatsCardBackComponent } from '../dashboard/profit-card/back-side/stats-card-back.component';
import { StatsAreaChartComponent } from '../dashboard/profit-card/back-side/stats-area-chart.component';
import { StatsBarAnimationChartComponent } from '../dashboard/profit-card/front-side/stats-bar-animation-chart.component';
import { StatsCardFrontComponent } from '../dashboard/profit-card/front-side/stats-card-front.component';
import { TrafficRevealCardComponent } from '../dashboard/traffic-reveal-card/traffic-reveal-card.component';
import { TrafficBarComponent } from '../dashboard/traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import { TrafficFrontCardComponent } from '../dashboard/traffic-reveal-card/front-side/traffic-front-card.component';
import { TrafficCardsHeaderComponent } from '../dashboard/traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import { TrafficBackCardComponent } from '../dashboard/traffic-reveal-card/back-side/traffic-back-card.component';
import { TrafficBarChartComponent } from '../dashboard/traffic-reveal-card/back-side/traffic-bar-chart.component';
import {
  ECommerceVisitorsAnalyticsComponent,
} from '../dashboard/visitors-analytics/visitors-analytics.component';
import {
  ECommerceVisitorsAnalyticsChartComponent,
} from '../dashboard/visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import {
  ECommerceVisitorsStatisticsComponent,
} from '../dashboard/visitors-analytics/visitors-statistics/visitors-statistics.component';
import { ECommerceLegendChartComponent } from '../dashboard/legend-chart/legend-chart.component';
import { ECommerceUserActivityComponent } from '../dashboard/user-activity/user-activity.component';
import { ECommerceProgressSectionComponent } from '../dashboard/progress-section/progress-section.component';
import { SlideOutComponent } from '../dashboard/slide-out/slide-out.component';

import { CountryOrdersComponent } from '../dashboard/country-orders/country-orders.component';
import { CountryOrdersMapComponent } from '../dashboard/country-orders/map/country-orders-map.component';
import { ProfitCardComponent } from '../dashboard/profit-card/profit-card.component';
import { ECommerceChartsPanelComponent } from '../dashboard/charts-panel/charts-panel.component';
import { OrdersChartComponent } from '../dashboard/charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from '../dashboard/charts-panel/charts/profit-chart.component';
import { ChartPanelHeaderComponent } from '../dashboard/charts-panel/chart-panel-header/chart-panel-header.component';
import { ChartPanelSummaryComponent } from '../dashboard/charts-panel/chart-panel-summary/chart-panel-summary.component';
import { CountryOrdersMapService } from './country-orders/map/country-orders-map.service';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    LeafletModule,
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    TemperatureDraggerComponent,
    ContactsComponent,
    RoomSelectorComponent,
    TemperatureComponent,
    RoomsComponent,
    KittenComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
    PlayerComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
    CountryOrdersChartComponent,
    EarningCardComponent,
    EarningCardBackComponent,
    EarningPieChartComponent,
    EarningCardFrontComponent,
    EarningLiveUpdateChartComponent,
    StatsCardBackComponent,
    StatsAreaChartComponent,
    StatsBarAnimationChartComponent,
    StatsCardFrontComponent,
    TrafficRevealCardComponent,
    TrafficBarComponent,
    TrafficFrontCardComponent,
    TrafficCardsHeaderComponent,
    TrafficBackCardComponent,
    TrafficBarChartComponent,
    ECommerceVisitorsAnalyticsComponent,
    ECommerceVisitorsAnalyticsChartComponent,
    ECommerceVisitorsStatisticsComponent,
    ECommerceLegendChartComponent,
    ECommerceUserActivityComponent,
    ECommerceProgressSectionComponent,
    SlideOutComponent,
    CountryOrdersComponent,
    CountryOrdersMapComponent,
    ProfitCardComponent,
    ECommerceChartsPanelComponent,
    OrdersChartComponent,
    ProfitChartComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,
  ],
  providers: [
    CountryOrdersMapService
  ],
  exports: [
    ProfitCardComponent,
    WeatherComponent,
    TemperatureComponent,
    EarningCardComponent,
    SolarComponent,
    ContactsComponent
  ]
})
export class DashboardModule { }
