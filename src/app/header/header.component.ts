import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {StorageDataService} from "../shared/storage-data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private storageService: StorageDataService) { }

  ngOnInit(): void {
  }

  onSave() {
    this.storageService.storeRecipes();
  }

  onFetchData() {
  this.storageService.fetchRecipes().subscribe();
  }
}
