let DisplayMode = "Post";

function ShowNewPost() {
    document.getElementById("add-new-post").style.display = "block";
    document.getElementById("post-and-comments-body").style.display = "none";
    document.getElementById("new-post-button").children.item(0).innerHTML = "- HIDE NEW POST WINDOW";
    document.getElementById("profile-section").style.display = "none";
    DisplayHead();
}

function ShowPosts() {
    document.getElementById("add-new-post").style.display = "none";
    document.getElementById("post-and-comments-body").style.display = "block";   
    document.getElementById("new-post-button").children.item(0).innerHTML = "+ NEW POST";
    document.getElementById("profile-section").style.display = "none";
    DisplayHead();
}

function ShowLogin() {
    document.getElementById("post-core").style.display = "none";
    document.getElementById("sign-up-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
    document.getElementById("profile-section").style.display = "none";
    DisplayHead();
}

function ShowSignUp() {
    document.getElementById("post-core").style.display = "none";
    document.getElementById("login-section").style.display = "none";
    document.getElementById("sign-up-section").style.display = "block";
    document.getElementById("profile-section").style.display = "none";
    DisplayHead();
}

function ShowCore() {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("sign-up-section").style.display = "none";
    document.getElementById("post-core").style.display = "block";
    document.getElementById("profile-section").style.display = "none";
    DisplayHead();
}

function ShowProfile() {
    document.getElementById("post-core").style.display = "none";
    document.getElementById("sign-up-section").style.display = "none";
    document.getElementById("login-section").style.display = "none";
    document.getElementById("profile-section").style.display = "block";
}

function ToggleNewPostOrPosts() {
    if (DisplayMode === "Post") {
        ShowNewPost();
        DisplayMode = "New";
    } else {
        ShowPosts();
        DisplayMode = "Post";
    }
}

function DisplayHead() {
    if (CurrentUser.Name !== "Guest") {
        document.getElementById("lin").style.display = "none";
        document.getElementById("sup").style.display = "none";
        document.getElementById("lout").style.display = "block";
        document.getElementById("prof").style.display = "block";
    } else {
        document.getElementById("lin").style.display = "block";
        document.getElementById("sup").style.display = "block";
        document.getElementById("lout").style.display = "none";
        document.getElementById("prof").style.display = "none";
    }
}

function DisplayPost (Post) {
    CurrentPost = Post;
    document.getElementById("blog-heading").innerHTML = Post.Heading;
    document.getElementById("blog-date").innerHTML = Post.Date.toLocaleString("en-US");
    document.getElementById("blog-text").innerHTML = Post.Text;
    DisplayComments(Post.Comments);
    DisplayPostList();
}

function DisplayPostList () {
    document.getElementById("post-selector").innerHTML = "";
    for(let i = 0; i < Posts.length; i++) {
        let tmp1 = document.getElementById("post-selector-prototype").cloneNode(true);
        tmp1.style.display = "block";
        tmp1.children.item(0).innerHTML = Posts[i].Heading;
        if (Posts[i].Heading === CurrentPost.Heading) {
            tmp1.classList.add("active");
        }
        document.getElementById("post-selector").appendChild(tmp1);
    }
    DisplayHead();
}

function DisplayComments(Comments) {
    document.getElementById("comment-container").innerHTML = "";
    document.getElementById("comment-count").innerHTML = Comments.length;
    for(let i = 0; i < Comments.length; i++) {
        let tmp1 = document.getElementById("comment-photo-prototype").cloneNode(true);
        let tmp2 = document.getElementById("comment-prototype").cloneNode(true);
        tmp1.style.display = "block";
        tmp2.style.display = "block";
        tmp2.children.item(1).innerHTML = Comments[i].Text;
        tmp2.children.item(0).children.item(0).innerHTML = Comments[i].Name;
        tmp2.children.item(0).children.item(1).innerHTML = Comments[i].Date.toLocaleString("en-US");
        //document.getElementById("comment-container").appendChild(tmp1);
        document.getElementById("comment-container").appendChild(tmp2);
        DisplayPostList();
    }
}

function UpdateProfileInfo() {
    document.getElementById("p-name-h").innerHTML = CurrentUser.Name;
    document.getElementById("p-name").innerHTML = CurrentUser.Name;
    document.getElementById("p-birth").innerHTML = CurrentUser.DateOfBirth;
    document.getElementById("p-gender").innerHTML = CurrentUser.Gender;
    document.getElementById("p-joined").innerHTML = CurrentUser.Joined;
    document.getElementById("p-comments").innerHTML = CurrentUser.CommentCount;
}