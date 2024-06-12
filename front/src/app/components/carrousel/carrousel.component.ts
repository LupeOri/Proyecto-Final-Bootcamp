import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements AfterViewInit {
  images: string[] = [
    'assets/imagenes/fiestaplayados.jpg',
    'assets/imagenes/caballo.jpg',
    'assets/imagenes/tour-amsterdam.jpg',
    'assets/imagenes/panoramico.webp',
    'assets/imagenes/montanismo.jpg',
    'assets/imagenes/azotea.jpg'
  ];

  currentIndex = 0;

  ngAfterViewInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      const slides = document.querySelector('.slides') as HTMLElement;
      if (slides) {
        slides.style.transform = `translateX(-${this.currentIndex * 100}%)`;
      }
    }, 3000); 
  }
}