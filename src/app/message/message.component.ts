import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OpenAI } from 'openai';
import { environment } from 'src/environments/environment';

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
  text: string = '';

  // selected strings
  selectedVibes: string[] = [];
  selectedAdjectives: string[] = [];

  constructor(private http: HttpClient) { }

  toggleAdjectiveSelection(adjective: string) {
    const adjectiveSelected = document.getElementById(adjective);

    if (adjectiveSelected?.classList.contains("adjective-selected")) {
      adjectiveSelected.classList.remove("adjective-selected");
      this.selectedAdjectivesCount--;
      this.selectedAdjectives = this.selectedAdjectives.filter(item => item !== adjective);
    } else if (this.selectedAdjectivesCount < this.maxAdjectivesAllowed) {
      if (adjectiveSelected) {
        adjectiveSelected.classList.add("adjective-selected");
        this.selectedAdjectivesCount++;
        this.selectedAdjectives.push(adjective);
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
      this.selectedVibes = this.selectedVibes.filter(item => item !== vibe);
    } else if (this.selectedVibesCount < this.maxVibesAllowed) {
      if (vibeSelected) {
        vibeSelected.classList.add("vibe-selected");
        this.selectedVibesCount++;
        this.selectedVibes.push(vibe);
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
    this.text = prompt;

    const openai = new OpenAI({
      apiKey: environment.openaiApiKey,
      dangerouslyAllowBrowser: true
    });

    const chatCompletion = openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
    });

    console.log(chatCompletion);
  }
}
