import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.scss']
})
export class VotetakerComponent implements OnInit {
//변수선언 html에서  ngFor을 돌리기위해서
  agreed = 0;
  disagreed = 0;
  voters = ['Mr. Hong', 'Miss. Kim', 'Mr. Lee'];

//찬성 반대를 부모에서 이벤트로 알려주고 부모에서 다시 자식에서 보내줌
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

  ngOnInit(): void {
  }
}
