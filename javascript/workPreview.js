const workPreviewWindow = document.getElementById("homepage-workinfobox");

let closeButton = document.getElementById("homepage-workinfobox-closebutton");

let WPtitle = document.getElementById("homepage-workinfobox-title");

let WPdescription = document.getElementById("homepage-workinfobox-description");

let WPvideo = document.getElementById("homepage-workinfobox-video");

let WPimage = document.getElementById("homepage-workinfobox-image");

let WPlink = document.getElementById("homepage-workinfobox-link");

let WPlinkText = document.getElementById("homepage-workinfobox-linktext");

let WProle = document.getElementById("homepage-workinfobox-role");

closeButton.addEventListener('click', e =>{
    workPreviewWindow.style.display = 'none';
})





function OpenWindow(item)
{
    console.log("hello");
    workPreviewWindow.style.display = 'block';
    WPtitle.innerText = item.title;
    WPdescription.innerText = item.desc;

    WProle.innerText=item.role;
    
    WPlinkText.innerText = item.linkText;
    WPlink.href = item.linkAddress



    workPreviewWindow.style.backgroundImage =  item.colour;

   

    if(!item.hasVideo)
    {
        WPimage.style.display = "block"; 
        WPimage.src= item.imageSRC;
        WPvideo.style.display ="none"
       
    }
    else
    {
        WPvideo.style.display ="block";
        WPvideo.src = item.videoURL;
        WPimage.style.display="none";

    }

    if(item.darkMode)
    {
        WPtitle.style.color = "var(--darkgrey)"; 
        WPdescription.style.color = "var(--darkgrey)";
    }
    else
    {
        WPtitle.style.color = "var(--cream)"; 
       
    }

    
    
}



/*Works Here (don't forget to add an event listener!)*/

let illegalHarvest =
{
    card: document.getElementById("illegalharvestcard"),
    title:"Illegal Harvest",
    desc: "Illegal Harvest was created for the Grads in Gaming Rising Star Competition",
    role: "Designer, Artist, Programmer",
    imageSRC:"./images/30birds.jpg",
    videoURL: "https://www.youtube.com/embed/4-WuU0gLYck?si=uwJeinu4I6SZN98C",

    linkText: "Play it on Itch!",
    linkAddress: "https://jonathon-trewin.itch.io/lllegal-harvest",

    hasVideo: true,
    darkMode:false,
    
    colour: "linear-gradient(180deg, lightblue, white)"
}

let thirtyBirds =
{
    card: document.getElementById("30birdscard"),
    title:"30 Birds",
    desc: "30 Birds is the tale of detective Zig and her sidekick Hoop the Hoopoe, exploring a dangerous world in order to solve the case of a missing bird goddess. As narrative designer, I helped create the overarching plot, as well as writing the hilarious, strange characters and dialogue.",
    role: "Narrative Designer",

    imageSRC: "",
    videoURL: "https://www.youtube.com/embed/zfa0gMgN-w4?si=vpHSCdghKsiuLfNL",

    linkText: "Check it out on Steam!",
    linkAddress: "https://store.steampowered.com/app/1708770/30_Birds/",

    hasVideo: true,
    darkMode:false,


    
    colour: `url("./images/30birds.webp")`
}

let quitenAndTheRabbit =
{
    card: document.getElementById("quintencard"),
    title:"Quinten And The Rabbit",
    desc: "Quinten and The Rabbit is a short-story about how a greedy little boy gets his comeuppance. It's full of rhymes and all kinds of fable goodness",
    role: "Writer",
    
    linkText: "Read Online!",
    linkAddress: "https://docs.google.com/document/d/1uFQ4biNAe2XC4n9VKnaK6eTuybTVq1BpFCyxNR20ZcE/edit?usp=sharing",
    darkMode:true,
    hasVideo: false,
    
    colour: `url("./images/QuentinAndTheRabbit.png")`
}

illegalHarvest.card.addEventListener('click',function(){OpenWindow(illegalHarvest)});
thirtyBirds.card.addEventListener('click',function(){OpenWindow(thirtyBirds)})
quitenAndTheRabbit.card.addEventListener('click',function(){OpenWindow(quitenAndTheRabbit)})

