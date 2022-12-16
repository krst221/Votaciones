import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voting } from '../../interfaces';

@Component({
  selector: 'app-all-votes',
  templateUrl: './all-votes.component.html',
  styleUrls: ['./all-votes.component.scss']
})
export class AllVotesComponent implements OnInit {
  votings: Voting[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.loadVotings();
  }

  async loadVotings() {
    this.votings = await this.dataService.getAllVotings();
  }

  async startVoting() {
    const record = await this.dataService.startVoting();

    if (!record.error && record.data?.length) {
      this.router.navigateByUrl(`/app/${record.data[0].id}`);
    }
  }
}
