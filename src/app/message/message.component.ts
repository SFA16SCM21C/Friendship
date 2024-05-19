import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  selectedVibesCount: number = 0;
  selectedAdjectivesCount: number = 0;
  text: string = 'test';

  toggleAdjectiveSelection(adjective: string) {
    const adjectiveSelected = document.getElementById(adjective);

    if (adjectiveSelected?.classList.contains("adjective-selected")) {
      adjectiveSelected.classList.remove("adjective-selected");
    } else if (adjectiveSelected) {
      adjectiveSelected.classList.add("adjective-selected");
    }
  }

  toggleVibeSelection(vibe: string) {
    const vibeSelected = document.getElementById(vibe);
    
    if (vibeSelected?.classList.contains("vibe-selected")) {
      vibeSelected.classList.remove("vibe-selected");
    } else if (vibeSelected) {
      vibeSelected.classList.add("vibe-selected");
    }
  }
}
