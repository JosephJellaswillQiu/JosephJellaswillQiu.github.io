var posts=["2025/12/01/hello-world/","2025/12/01/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };