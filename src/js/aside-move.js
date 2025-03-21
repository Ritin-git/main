document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.querySelector(".blog");
    const aside = document.querySelector(".aside");
    const firstPost = document.querySelector(".card-horizontal.blog-post-item.post-1");

    if (blogContainer && aside && firstPost) {
        blogContainer.insertBefore(aside, firstPost.nextSibling);
    }
});
