import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  // API url
  baseApiUrl = "https://file.io"
    
  constructor(private http:HttpClient) { }
  
  // Returns an observable
  upload(file:File):Observable<any> {
      const formData = new FormData(); 
      formData.append("file", file, file.name);
      return this.http.post(this.baseApiUrl, formData);
  }
}
