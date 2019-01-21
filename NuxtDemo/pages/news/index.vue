<template>
  <div>
    <h2>News Index page</h2>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
    <p>NewsID:{{$route.params.newsId}}</p>


    <ul>
      <li><a href="/">Home</a></li>
      <li><nuxt-link :to="{name:'news-id',params:{id:123,title:'I am news'}}">News-1</nuxt-link></li>
      <li><a href="/news/456">News-2</a></li>
    </ul>
  </div>
</template>
