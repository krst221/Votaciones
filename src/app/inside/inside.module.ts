import { VotingComponent } from './../voting/voting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingsListComponent } from './votings-list/votings-list.component';
import { VotingsDetailsComponent } from './votings-details/votings-details.component';
import { UiComponent } from './ui/ui.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AllVotesComponent } from './all-votes/all-votes.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

const routes: Routes = [
  {
    path: '',
    component: UiComponent,
    children: [
      {
        path: '',
        component: VotingsListComponent,
      },
      {
        path: 'voting',
        component: AllVotesComponent,
      },
      {
        path: ':id',
        component: VotingsDetailsComponent,
      },
      {
        path: 'voting/:id',
        component: VotingComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    VotingsListComponent,
    VotingsDetailsComponent,
    UiComponent,
    HeaderComponent,
    FooterComponent,
    AllVotesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    PopoverModule,
    TooltipModule,
  ],
  exports: [],
})
export class InsideModule {}
