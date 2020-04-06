import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { LogoComponent } from './logo/logo.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { UserSnippetComponent } from './user-snippet/user-snippet.component';



@NgModule({
  declarations: [LoaderComponent, LogoComponent, ProfilePictureComponent, UserSnippetComponent],
  imports: [CommonModule],
  exports: [LoaderComponent, LogoComponent, ProfilePictureComponent, UserSnippetComponent]
})
export class PokedraftUtilsModule { }
