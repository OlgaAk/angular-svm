import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'Delicios Mazarella Pizza',
      'https://lh3.googleusercontent.com/proxy/ObNj2tACm6CnuKemYOcrKrhGgBswqsVqwfpccvyssbKYmVLobtAdCuNxSqCIN6ojb86NZDolp5D2plQF0AYnHf1PmtLDa-mzPDiuX2lCMlSKF7-LP2E--tL9n-0a1OrKvIwYnyEecVaTOQapz5Wg2NgGml3QgGdYQIkgYifefQhgIuJOvwFqRUbCoLrh382PCY2ZfUDEL-zs4-DjCGdtakVLrTSOuZ1FQvtUS8dRQCRif82tFUflwvBU9VaBOLz9xGctUAcQBK3UySHr26pZj8w5TjdlmZ8pOEGO26FLr6ez8pXpmOMgnZ5SF1ey4DZnnVzuWku3MkJK8W-Lsz68Ar_Skx55geg-bfEy1mYxPzNJ1JTt2s3ZLWWlwBdma8mstgyJqCAzTvIWat-1TfzmydBqDFJmwziMJWcJF0Nv89nq4P8tl_gi-n9xFg9elhNfqWbQhl6uDET9nO7JFT6gmA_I6XsCByiR7P9yp3_4UJEmo0iSibGop76WUCfzL2wkrSK2NTVHsQjr8tmWDH3PNazRBwR3cK5PfXsFs0lR02TCLd6j5eZtrtvE6bylg8Kmt_C4lEk'
    ),
    new Recipe(
      'Tomato Soup',
      'Hot red tomato soup',
      'https://lh3.googleusercontent.com/proxy/ObNj2tACm6CnuKemYOcrKrhGgBswqsVqwfpccvyssbKYmVLobtAdCuNxSqCIN6ojb86NZDolp5D2plQF0AYnHf1PmtLDa-mzPDiuX2lCMlSKF7-LP2E--tL9n-0a1OrKvIwYnyEecVaTOQapz5Wg2NgGml3QgGdYQIkgYifefQhgIuJOvwFqRUbCoLrh382PCY2ZfUDEL-zs4-DjCGdtakVLrTSOuZ1FQvtUS8dRQCRif82tFUflwvBU9VaBOLz9xGctUAcQBK3UySHr26pZj8w5TjdlmZ8pOEGO26FLr6ez8pXpmOMgnZ5SF1ey4DZnnVzuWku3MkJK8W-Lsz68Ar_Skx55geg-bfEy1mYxPzNJ1JTt2s3ZLWWlwBdma8mstgyJqCAzTvIWat-1TfzmydBqDFJmwziMJWcJF0Nv89nq4P8tl_gi-n9xFg9elhNfqWbQhl6uDET9nO7JFT6gmA_I6XsCByiR7P9yp3_4UJEmo0iSibGop76WUCfzL2wkrSK2NTVHsQjr8tmWDH3PNazRBwR3cK5PfXsFs0lR02TCLd6j5eZtrtvE6bylg8Kmt_C4lEk'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
