import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any = []
  constructor(private http: HttpClient) {
  }

  createPost(input: HTMLInputElement) {
    let newpost = { title: input.value }
    this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(newpost))
      .subscribe((post) => {
        // newpost['id'] = post.toLocaleString();
        this.posts.unshift(newpost);
        input.value='';
      }, error => {
        console.log('OOPS! Request failed. Try again later...');
      })
  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data) => {
      this.posts = data;
      console.log(this.posts)
    })
  }
}
