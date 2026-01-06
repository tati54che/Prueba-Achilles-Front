import { Component, Input, Output, OnChanges, EventEmitter , SimpleChanges } from '@angular/core';
import { DetailView } from '../user-settings/user-settings.component';

@Component({
  selector: 'app-user-info',
  standalone: true,
  templateUrl: './user-info.component.html'
})
export class UserInfo implements OnChanges {

  @Input() userInfo!: DetailView;
  @Output() edadActualizada = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userInfo']) {
      this.onUserInfoChanged();
    }
  }

  onUserInfoChanged() {
    console.log('DetailView cambió:', this.userInfo);
  }

  incrementarEdad(): void {
    this.userInfo.age = this.userInfo.age + 1;
    //cOMUNICA AL PADRE LA NUEVA EDAD
    this.edadActualizada.emit(this.userInfo.age);
  }
}
