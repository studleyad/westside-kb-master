import { Injectable } from '@angular/core';
import { Project } from '../models/projects';


@Injectable({
  providedIn: 'root'
})
export class ProjectDetailService {

  projects: Project[] = [
    {
      'id': 1,
      'name': 'omega frameless',
      'description': 'White Omega frameless cabinets',
      'mainImg': 'IMG_0061.jpeg',
      'after': ['IMG_0053.jpeg','IMG_0054.jpeg','IMG_0055.jpeg','IMG_0056.jpeg','IMG_0057.jpeg','IMG_0058.jpeg','IMG_0059.jpeg','IMG_0060.jpeg','IMG_0062.jpeg','IMG_0063.jpeg', 'thumbnail_IMG_02421.jpg','thumbnail_IMG_02431.jpg','thumbnail_IMG_02441.jpg','thumbnail_IMG_02451.jpg','thumbnail_IMG_02461.jpg','thumbnail_IMG_02471.jpg'],
      'before': [],
      'folder': 'kitchen-11-04'
    },
    {
      'id': 2,
      'name': 'aristakraft',
      'description': '',
      'mainImg': 'IMG-2184.JPG',
      'after': ['IMG-2146.JPG','IMG-2184.JPG','IMG-2181.JPG','IMG-2182.JPG','IMG-2183.JPG','IMG-2185.JPG','IMG-2186.JPG','IMG-2175.JPG','IMG-2177.JPG','IMG-2178.JPG','IMG-2179.JPG'],
      'before': [],
      'folder': 'kitchen-11-19'
    },
    {
      'id': 3,
      'name': 'House Renovation',
      'description': '',
      'mainImg': 'thumbnail_IMG_02571.jpg',
      'after': ['thumbnail_IMG_02581.jpg','thumbnail_IMG_02601.jpg','thumbnail_IMG_02611.jpg','thumbnail_IMG_02621.jpg','thumbnail_IMG_02631.jpg','thumbnail_IMG_02641.jpg','thumbnail_IMG_02651.jpg','thumbnail_IMG_02661.jpg','thumbnail_IMG_02671.jpg','thumbnail_IMG_02681.jpg'],
      'before': ['thumbnail_IMG_02481.jpg','thumbnail_IMG_02491.jpg','thumbnail_IMG_02501.jpg','thumbnail_IMG_02511.jpg','thumbnail_IMG_02521.jpg','thumbnail_IMG_02531.jpg','thumbnail_IMG_02541.jpg','thumbnail_IMG_02551.jpg','thumbnail_IMG_02561.jpg'],
      'folder': 'House-12-19'
    }
  ]
}