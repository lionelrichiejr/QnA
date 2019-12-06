document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app()
    console.log(app)
})

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
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

function flashCards() {
    window.location.href = 'flashcards.html';
}

function ytubeStudy() {
    window.location.href = 'youtubePage.html';
}

function createCards() {
    window.location.href = "public/flashcards/index.html";
}

function viewCards() {
    window.location.href = 'public/flashcards/index.html';
}
