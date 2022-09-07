const posts = [
    {
        title: "Post 1",
        content: "The first post"
    },
    {
        title: "Post 2",
        content: "The second post"
    }

];

function getPosts() {
    setTimeout(() => {

        let output = "";
        /* for(let post in posts){

        } */
        posts.forEach((post) => {
            output += `<h1>${post.title}</h1><p>${post.content}</p>`;
        })
        document.body.innerHTML = output;

    }, 1000);
}

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    }, 2000)
}

createPost({title: "Post 3", content: "Ez a harmadik poszt"}, getPosts);