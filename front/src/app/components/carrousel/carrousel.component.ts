import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit{

  images: string[] = [
    'assets/imagenes/cata-vinos.jpg',
    'assets/imagenes/fiesta-playa.jpg',
    'assets/imagenes/tour-amsterdam.jpg',
    'assets/imagenes/montaña-excursion-bogota.jpg',
    'assets/imagenes/madrid-tour.jpg',
    'assets/imagenes/clases-pintura.avif'
  ];

  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      const slides = document.querySelector('.slides') as HTMLElement;
      slides.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }, 3000); // Cambiar imagen cada 3 segundos
  }

}
