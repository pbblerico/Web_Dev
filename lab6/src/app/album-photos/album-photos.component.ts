import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
  album: Album;
  photos: Photo[];

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.album = {} as Album;
    this.photos = [{}] as Photo[];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        let _id = params.get('id');
        if (_id) {
          let id = +_id;
          this.albumService.getAlbum(id).subscribe(
            (album) => {
              this.album = album;
            }
          );
          this.albumService.getPhotos(id).subscribe(
            (photos) => {
              this.photos = photos;
            },
          );
        }
      }
    );
  }

}
