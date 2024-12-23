

// HIDE/SHOW SHOWCASED VIDEOS
const showMore = document.querySelector("#show-more");
const showcasedVideos = document.querySelector("#showcased-videos");
let isOpen = false;

showMore.addEventListener("click", () => {
    if(!isOpen) {
        showcasedVideos.classList.remove("hide");
        showcasedVideos.classList.add("show");
        showMore.textContent = "Hide videos showcased in demo reel";
        isOpen = true;
    }
    else {
        showcasedVideos.classList.remove("show");
        showcasedVideos.classList.add("hide");
        showMore.textContent = "Show videos showcased in demo reel";
        isOpen = false;
    }
});

// HIDE/SHOW TECHNICAL SHOWCASED VIDEOS
const showMoreTechnical = document.querySelector("#show-more-technical");
const showcasedVideosTechnical = document.querySelector("#showcased-videos-technical");
let isOpenTechnical = false;

showMoreTechnical.addEventListener("click", () => {
    if(!isOpenTechnical) {
        showcasedVideosTechnical.classList.remove("hide");
        showcasedVideosTechnical.classList.add("show");
        showMoreTechnical.textContent = "Hide videos showcased in demo reel";
        isOpenTechnical = true;
    }
    else {
        showcasedVideosTechnical.classList.remove("show");
        showcasedVideosTechnical.classList.add("hide");
        showMoreTechnical.textContent = "Show videos showcased in demo reel";
        isOpenTechnical = false;
    }
});


// FEATURED WORKS
// SKETCHAVEN
const sketchavenClose = document.querySelectorAll(".sketchaven-close");
const openSketchaven = document.querySelector(".sketchaven-more");
const sketchavenContainer = document.querySelector("#sketchaven-modal-container");

openSketchaven.addEventListener('click', () => {
    sketchavenContainer.classList.add('show');
})
sketchavenClose.forEach(e => {
    e.addEventListener("click", () => {
        sketchavenContainer.classList.remove('show');
    })
})

// STAR MOUNTAIN
const starClose = document.querySelectorAll(".star-close");
const openStar = document.querySelector(".star-more");
const starContainer = document.querySelector("#star-modal-container");

openStar.addEventListener('click', () => {
    starContainer.classList.add('show');
})
starClose.forEach(e => {
    e.addEventListener("click", () => {
        starContainer.classList.remove('show');
    })
})

// PLAYTEST
const playtestClose = document.querySelectorAll(".playtest-close");
const openPlaytest = document.querySelector(".playtest-more");
const playtestContainer = document.querySelector("#playtest-modal-container");

openPlaytest.addEventListener('click', () => {
    playtestContainer.classList.add('show');
})
playtestClose.forEach(e => {
    e.addEventListener("click", () => {
        playtestContainer.classList.remove('show');
    })
})

// SHOW/HIDE EARLIER
const show_earlier_text = document.querySelector("#show-earlier");
    const show_early_albums = document.querySelectorAll(".hide-early");
    const later_albums = document.querySelectorAll(".later");

    let showEarlierIsOpen = false;

    

    show_earlier_text.addEventListener("click", () => {
        show_early_albums.forEach(e => {
            if(!showEarlierIsOpen)
            {
                e.classList.add("picture");
                e.classList.remove("screen-close");

            }
            else 
            {
                e.classList.remove("picture");
                e.classList.add('screen-close');
            }
        })
        later_albums.forEach(e => {
            if(!showEarlierIsOpen)
                e.classList.add("screen-close");
            else
                e.classList.remove("screen-close");
        })
        if(showEarlierIsOpen)
        {
            show_earlier_text.textContent = "Show earlier works";
            showEarlierIsOpen = false;
        }
        else
        {
            show_earlier_text.textContent = "Show current works";
            showEarlierIsOpen = true;
        }
    });