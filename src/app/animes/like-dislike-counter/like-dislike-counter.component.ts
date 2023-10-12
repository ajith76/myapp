import { Component,EventEmitter, Input, Output } from '@angular/core'
import { AnimeService } from '../../anime.service';


@Component({
  selector: 'app-like-dislike-counter',
  templateUrl: './like-dislike-counter.component.html',
  styleUrls: ['./like-dislike-counter.component.css']
})
export class LikeDislikeCounterComponent {
  @Input() like: number = 0;
  @Input() disLike: number = 0;
  @Output() likeCount = new EventEmitter<number>();
  @Output() disLikeCount = new EventEmitter<number>();

  incrementLike() {
    this.like++;
    this.likeCount.emit(this.like);
  }

  incrementDisLike() {
    this.disLike++;
    this.disLikeCount.emit(this.disLike);
  }

}
