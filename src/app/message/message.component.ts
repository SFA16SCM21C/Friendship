import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  // vibes related variables
  selectedVibesCount: number = 0;
  maxVibesAllowed: number = 2;

  // adjective related variables
  selectedAdjectivesCount: number = 0;
  maxAdjectivesAllowed: number = 2;

  // the message generated
  text: string = 'test';

  // selected strings
  selectedVibes: string[] = [];
  selectedAdjectives: string[] = [];

  constructor(private http: HttpClient) { }

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

  generateMessage () {
    if (this.selectedAdjectivesCount == 0 && this.selectedVibesCount == 0) {
      alert('You have not selected any vibe or adjective');
    } else {
      this.createMessage();
    }
  }

  createMessage () {
    const vibesString = this.selectedVibes.join(", ");
    const adjectivesString = this.selectedAdjectives.join(", ");
    const prompt = `generate 5 messages to send my lover based on these feelings, I want the message to be ${adjectivesString}, while also sounding ${vibesString}`;

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer YOUR_OPENAI_API_KEY`
    };

    const body = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 150
    };

    this.http.post('https://api.openai.com/v1/chat/completions', body, { headers }).subscribe(
      (response: any) => {
        console.log(response.choices[0].message.content);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
