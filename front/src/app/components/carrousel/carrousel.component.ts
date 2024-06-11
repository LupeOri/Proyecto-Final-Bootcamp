import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit{

  images: string[] = [
    'assets/imagenes/fiestaplayados.jpeg',
    'assets/imagenes/caballo.jpeg',
    'assets/imagenes/tour-amsterdam.jpg',
    'assets/imagenes/panoramico.webp',
    'assets/imagenes/montanismo.jpg',
    'assets/imagenes/azotea.avif'
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
