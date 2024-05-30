document.getElementById("submit-comment").addEventListener("click",
        function(event) {
            event.preventDefault();
            CurrentPost.Comments.push(new Comment(CurrentUser.Name, document.getElementById("comment-form").value));
            DisplayComments(CurrentPost.Comments);
            CurrentUser.CommentCount++;
            UpdateProfileInfo();
}); 

document.getElementById("new-post-button").addEventListener("click",
        function(event) {
            event.preventDefault();
            ToggleNewPostOrPosts();
}); 

document.getElementById("post-selector").addEventListener("click",
    function(event) {
        event.preventDefault();
        let CurrentPost1 = GetPostByTitle(event.target.innerHTML);
        if(CurrentPost1 !== null) {
            DisplayPost(CurrentPost1);
        }
        CurrentPost = CurrentPost1;
        ShowPosts();
}); 

document.getElementById("submit-post").addEventListener("click",
    function(event) {
        event.preventDefault();
        let CurrentPost1 = GetPostByTitle(document.getElementById("post-title").value);
        if(CurrentPost1 === null) {
            Posts.push(new Post(document.getElementById("post-title").value, document.getElementById("post-form").value));
        } else { 
            alert("The post with this name already exists! Choose another name.");
        }
        DisplayPostList();
}); 

document.getElementById("login-button").addEventListener("click",
        function(event) {
            event.preventDefault();
            ShowLogin();
}); 

document.getElementById("sign-up-button").addEventListener("click",
        function(event) {
            event.preventDefault();
            ShowSignUp();
}); 

document.getElementById("home-button").addEventListener("click",
        function(event) {
            event.preventDefault();
            ShowCore();
}); 

document.getElementById("profile-button").addEventListener("click",
        function(event) {
            event.preventDefault();
            ShowProfile();
}); 

document.getElementById("log-out-button").addEventListener("click",
        function(event) {
            event.preventDefault();
            CurrentUser = new User("Guest", 0, 0, 0, 0);
            ShowCore();
            DisplayHead();
}); 

document.getElementById("login-submit").addEventListener("click",
        function(event) {
            event.preventDefault();
            ShowCore();
            let User1 = GetUserByName(document.getElementById("login-email").value);
            if(User1 !== null) {
                if(document.getElementById("login-password").value === User1.Password) {
                    alert("Logged in successfully.");
                    CurrentUser = GetUserByName(document.getElementById("login-email").value);
                } else {
                    alert("Failed to log in.");
                }
            }  else {
                alert("Failed to log in.");
            }
            DisplayHead();
            UpdateProfileInfo();
}); 

document.getElementById("sign-up-submit").addEventListener("click",
        function(event) {
            event.preventDefault();
            ShowCore();
            let User1 = GetUserByName(document.getElementById("sign-up-email").value);
            if (User1 !== null) {
                alert("Choose another username!");
            } else {
                Users.push(new User(
                    document.getElementById("sign-up-email").value,
                    document.getElementById("sign-up-birth").value,
                    document.getElementById("sign-up-gender").value,
                    new window.Date().toLocaleString("en-US"),
                    document.getElementById("sign-up-password").value
                ));
                CurrentUser = Users[Users.length - 1];
                console.log(Users[Users.length - 1]);
                DisplayHead();
            }
            DisplayHead();
            UpdateProfileInfo();
}); 

Posts.push(new Post("Post A", "Post 1"));
Posts.push(new Post("Post B", "Post 2"));
Posts.push(new Post("Post C", "Post 3"));
Posts.push(new Post("Post D", "Post 4"));
Posts.push(new Post("Post E", "Post 4"));

Users.push(new User("Vasyl", new window.Date(), "M", new window.Date(), 5));

DisplayPost(Posts[0]);
DisplayHead();
ShowCore();