document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app()
    console.log(app)
})

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
           // const user = result.user;
           // document.write("Hello " + user.displayName);
           // console.log(user)
            window.location.href = 'goals.html';
        })
        .catch(console.log)
}

function studyFunction() {
    window.location.href = 'study.html';
}

function practiceFunction() {
    window.location.href = 'practice.html';
}