import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
@Component({
  selector: 'app-home',
  template: `
    <app-carousel></app-carousel>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum neque leo, id porttitor arcu malesuada et. Suspendisse suscipit luctus eros egestas convallis. Duis a eros justo. Curabitur at quam scelerisque, tempor velit ut, finibus turpis. Pellentesque euismod nulla venenatis, molestie dolor et, condimentum ipsum. Sed quis neque diam. Donec ultrices imperdiet nisi, quis aliquet enim viverra eget. Maecenas id purus vitae quam lacinia semper in eget massa. Aenean vel bibendum augue. Cras vitae rutrum lacus. In at nulla dapibus, finibus enim ac, luctus leo.
    </p><p>
    Donec tristique malesuada tortor. Nulla sit amet eros sed eros tristique vehicula. Aliquam tempus turpis et risus commodo tempus vitae in neque. Vivamus gravida urna ac vestibulum consequat. Aliquam erat volutpat. Duis sed volutpat neque. Vivamus elit nisl, sodales vitae semper at, gravida efficitur eros. Etiam a porttitor magna. Duis consequat, est eu commodo ultricies, turpis lorem sollicitudin libero, ac ultricies justo arcu eu risus. Curabitur convallis rhoncus erat, ac pulvinar tellus finibus sed. Integer rutrum, elit non laoreet pretium, tellus velit sodales libero, ut tincidunt lectus risus ut erat. Maecenas vitae urna erat. In hac habitasse platea dictumst. Aenean fringilla diam ligula, bibendum egestas sapien egestas vitae.
    </p><p>
    Nunc egestas consequat ex, quis sodales lacus bibendum eget. Donec nec nulla vitae orci congue volutpat nec ut metus. Cras rhoncus gravida suscipit. Cras non libero libero. Suspendisse id consequat urna, vitae volutpat ex. Donec luctus ultrices nulla fermentum ultrices. Vestibulum dignissim ante ac ex molestie, a fermentum sapien dignissim.
    </p><p>
    Morbi dictum porta sapien. Ut sed lectus eget elit tincidunt ultricies. Duis est ex, accumsan vitae orci ac, dictum scelerisque libero. Curabitur consequat mauris at finibus viverra. Vestibulum vulputate ex nec arcu placerat, ac blandit velit tincidunt. Maecenas hendrerit sem est, nec elementum ante vestibulum ut. Curabitur ipsum dolor, tincidunt in urna eu, lacinia blandit mauris. Phasellus nec suscipit urna. Sed sed aliquam ipsum, et pellentesque dui. Aliquam aliquet eros a maximus fermentum. Proin sollicitudin, ligula commodo commodo pulvinar, ipsum nunc consequat enim, vitae venenatis sapien neque sed lacus. Proin suscipit egestas tellus, a sagittis ante eleifend ac. Praesent eget neque ullamcorper, accumsan enim eu, consequat quam. Donec nec eros malesuada, vestibulum neque eget, ornare nisi. Duis elementum porttitor ipsum quis aliquet.
    </p><p>
    Cras rutrum risus id est pretium, et posuere mi efficitur. Donec fermentum eros vel nulla elementum pulvinar. Nulla vel felis at nulla suscipit malesuada. Proin eu enim posuere, bibendum massa a, aliquet diam. Integer vitae nisi sit amet augue facilisis fringilla. Phasellus a dolor arcu. Sed sollicitudin convallis egestas.
    </p><p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum neque leo, id porttitor arcu malesuada et. Suspendisse suscipit luctus eros egestas convallis. Duis a eros justo. Curabitur at quam scelerisque, tempor velit ut, finibus turpis. Pellentesque euismod nulla venenatis, molestie dolor et, condimentum ipsum. Sed quis neque diam. Donec ultrices imperdiet nisi, quis aliquet enim viverra eget. Maecenas id purus vitae quam lacinia semper in eget massa. Aenean vel bibendum augue. Cras vitae rutrum lacus. In at nulla dapibus, finibus enim ac, luctus leo.
    </p><p>
    Donec tristique malesuada tortor. Nulla sit amet eros sed eros tristique vehicula. Aliquam tempus turpis et risus commodo tempus vitae in neque. Vivamus gravida urna ac vestibulum consequat. Aliquam erat volutpat. Duis sed volutpat neque. Vivamus elit nisl, sodales vitae semper at, gravida efficitur eros. Etiam a porttitor magna. Duis consequat, est eu commodo ultricies, turpis lorem sollicitudin libero, ac ultricies justo arcu eu risus. Curabitur convallis rhoncus erat, ac pulvinar tellus finibus sed. Integer rutrum, elit non laoreet pretium, tellus velit sodales libero, ut tincidunt lectus risus ut erat. Maecenas vitae urna erat. In hac habitasse platea dictumst. Aenean fringilla diam ligula, bibendum egestas sapien egestas vitae.
    </p><p>
    Nunc egestas consequat ex, quis sodales lacus bibendum eget. Donec nec nulla vitae orci congue volutpat nec ut metus. Cras rhoncus gravida suscipit. Cras non libero libero. Suspendisse id consequat urna, vitae volutpat ex. Donec luctus ultrices nulla fermentum ultrices. Vestibulum dignissim ante ac ex molestie, a fermentum sapien dignissim.
    </p><p>
    Morbi dictum porta sapien. Ut sed lectus eget elit tincidunt ultricies. Duis est ex, accumsan vitae orci ac, dictum scelerisque libero. Curabitur consequat mauris at finibus viverra. Vestibulum vulputate ex nec arcu placerat, ac blandit velit tincidunt. Maecenas hendrerit sem est, nec elementum ante vestibulum ut. Curabitur ipsum dolor, tincidunt in urna eu, lacinia blandit mauris. Phasellus nec suscipit urna. Sed sed aliquam ipsum, et pellentesque dui. Aliquam aliquet eros a maximus fermentum. Proin sollicitudin, ligula commodo commodo pulvinar, ipsum nunc consequat enim, vitae venenatis sapien neque sed lacus. Proin suscipit egestas tellus, a sagittis ante eleifend ac. Praesent eget neque ullamcorper, accumsan enim eu, consequat quam. Donec nec eros malesuada, vestibulum neque eget, ornare nisi. Duis elementum porttitor ipsum quis aliquet.
    </p><p>
    Cras rutrum risus id est pretium, et posuere mi efficitur. Donec fermentum eros vel nulla elementum pulvinar. Nulla vel felis at nulla suscipit malesuada. Proin eu enim posuere, bibendum massa a, aliquet diam. Integer vitae nisi sit amet augue facilisis fringilla. Phasellus a dolor arcu. Sed sollicitudin convallis egestas.
    </p>
  `,
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
