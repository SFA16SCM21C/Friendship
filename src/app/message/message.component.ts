import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  //vibes related variables
  selectedVibesCount: number = 0;
  maxVibesAllowed: number = 2;

  // adjective related variables
  selectedAdjectivesCount: number = 0;
  maxAdjectivesAllowed: number = 2;

  // the message generated
  text: string = 'test';

  toggleAdjectiveSelection(adjective: string) {
    const adjectiveSelected = document.getElementById(adjective);

    if (adjectiveSelected?.classList.contains("adjective-selected")) {
      adjectiveSelected.classList.remove("adjective-selected");
      this.selectedAdjectivesCount--;
    } else if (this.selectedAdjectivesCount < this.maxAdjectivesAllowed) {
      if (adjectiveSelected) {
        adjectiveSelected.classList.add("adjective-selected");
        this.selectedAdjectivesCount++;
      }
    } else {
      alert('You can select up to two adjectives only.');
    }
  }

  toggleVibeSelection(vibe: string) {
    const vibeSelected = document.getElementById(vibe);
    
    if (vibeSelected?.classList.contains("vibe-selected")) {
      vibeSelected.classList.remove("vibe-selected");
      this.selectedVibesCount--;
    } else if (this.selectedVibesCount < this.maxVibesAllowed) {
      if (vibeSelected) {
        vibeSelected.classList.add("vibe-selected");
        this.selectedVibesCount++;
      }
    } else {
      alert('You can select up to two vibes only.');
    }
  }
}
