let Posts = [];
let Users = [];

let CurrentPost;
let CurrentUser = { Name: "Guest" };

class Comment {
    constructor(Name, Text) {
        this.Name = Name;
        this.Text = Text;
        this.Date = new window.Date();
    }
}

class Post {
    constructor(Heading, Text) {
        this.Comments = [];
        this.Heading = Heading;
        this.Text = Text;
        this.Date = new window.Date();
    }
}

class User {
    constructor(Name, DateOfBirth, Gender, Joined, Password) {
        this.Name = Name;
        this.DateOfBirth = DateOfBirth;
        this.Gender = Gender;
        this.Joined = Joined;
        this.Password = Password;
        this.CommentCount = 0;
    }
}

function GetPostByTitle(Title) {
    for(let i = 0; i < Posts.length; i++) {
        if(Posts[i].Heading === Title) {
            return Posts[i];
        }
    }
    return null;
}

function GetUserByName(Name) {
    for(let i = 0; i < Users.length; i++) {
        if(Users[i].Name === Name) {
            return Users[i];
        }
    }
    return null;
}