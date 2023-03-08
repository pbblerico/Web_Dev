import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums: Album[];
  newTitle: string;

  constructor(private albumService: AlbumService) {
    this.albums = [];
    this.newTitle = "";
  }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    })
  }

  deleteAlbum(album: Album): void {
    this.albumService.deleteAlbum(album.id).subscribe(
      (response) => {
        const index = this.albums.indexOf(album);
        if (index !== -1) {
          this.albums.splice(index, 1);
        }
      }
    );
  }

  addNewAlbum(): void {
    if (this.newTitle === "") {
      return;
    }
    
    this.albumService.addAlbum({ userId: this.albums.length + 1, id: this.albums.length + 1, title: this.newTitle }).subscribe(
      (response) => {
        this.albums.push(response);
      },
      (error) => {
        console.log(error);
      }
    );

    this.newTitle = "";
  }
}
