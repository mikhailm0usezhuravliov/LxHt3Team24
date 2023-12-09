import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  messages = MESSAGES;
}

interface iMessage {
  userName: string;
  govId: number;
  text: string;
  filePath?: string;
  date: string;
}
export const MESSAGES:iMessage[] = [
  {userName: 'Михайло Журавльов', govId:331654654 , text: 'Необхідно знайти роботу', date: '2023-12-09T01:00:42.913Z'},
  {userName: 'Михайло Журавльов', govId:331654654 , text: 'За фахом фронт-енд розробника', date: '2023-12-09T01:00:53.050Z'},
  {userName: 'Михайло Журавльов', govId:331654654 , text: 'знаю ангуляр' , date: '2023-12-09T01:01:18.922Z'},
  {userName: 'AI BOT', govId:0 , text: 'Чим зможемо тим поможемо. Чекайте відповіді на пошту.' , date: '2023-12-09T01:01:26.434Z'},
]
