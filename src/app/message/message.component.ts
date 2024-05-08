import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  toggleSelection(emoji: string) {
    const selected = document.getElementById(emoji);
    if (selected?.classList.contains("selected")) {
      selected.classList.remove("selected");
    } else if (selected) {
      selected.classList.add("selected");
    }
  }
}
