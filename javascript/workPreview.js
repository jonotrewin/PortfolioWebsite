const workPreviewWindow = document.getElementById("homepage-workinfobox");

let closeButton = document.getElementById("homepage-workinfobox-closebutton");

let WPtitle = document.getElementById("homepage-workinfobox-title");

let WPdescription = document.getElementById("homepage-workinfobox-description");

let WPvideo = document.getElementById("homepage-workinfobox-video");



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
     
      
        WPvideo.style.display ="none"
       
    }
    else
    {
        WPvideo.style.display ="block";
        WPvideo.src = item.videoURL;
       

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
    desc: "My game Illegal Harvest was winner for the Grads in Gaming Rising Star Competition. In the space of a month, I was able to design, prototype, program and playtest this game design prototype. Additionally, I modelled all the characters (including the veggies). Other assets, such as the Truck and Police Boats were created by Ioanna Efthymiadou. \n\nCheck out the Game Design Document at: bit.ly/3UlBWcd",
    role: "Designer, Artist, Programmer",
    imageSRC:"./images/30birds.jpg",
    videoURL: "https://www.youtube.com/embed/4-WuU0gLYck?si=uwJeinu4I6SZN98C",

    linkText: "Play it on Itch!",
    linkAddress: "https://jonathon-trewin.itch.io/lllegal-harvest",

    hasVideo: true,
    darkMode:false,
    
    colour: "linear-gradient(180deg, lightblue, white)"
}

let mekAndKube =
{
    card: document.getElementById("bigmekcard"),
    title:"Big Mek & Kube",
    desc: "As part of the Unwrap 2024 Game Jam, my team and I created a co-op city destroying game that encourages players to speed their way through a human city, in search of revenge and retribution.\n\n I implemented the sound, UI and animations. In terms of programming, I took care of the enemy AI, Big Mek Movement and city destruction.",
    role: "Programmer and Implementation",
    imageSRC:"./images/bigmek.webp",
    videoURL: "https://www.youtube.com/embed/3j0GH_sqIkQ?si=2DZIm3tAoyakON-5",

    linkText: "Play it on Itch!",
    linkAddress: "https://redloboe.itch.io/bigmek",

    hasVideo: false,
    darkMode:false,
    
    colour: "linear-gradient(180deg, orange, blue)"
}

let fatHobo =
{
    card: document.getElementById("fathobocard"),
    title:"",
    desc: "When he find Santa Clause dead in an alleyway, Maurice (A.K.A Hobocop) sets out on an adventure across his neighbourhood in the Post-Soviet city of Gorod Natsional.  Aided by his best friend, partner and traffic cone Nicholas II, he will have to bargain with the city's denizens to get the answers he needs.\n\n I programmed the entire game, as well as writing all the dialogue. I also took on a leadership role in the team to make sure everyone was coordinated.",
    role: "Programmer, Narrative Designer",
    videoURL: "https://www.youtube.com/embed/RLECC9YOOKI?si=KXSkw48A97Iiz1Tv",
    

    linkText: "Download the game on Itch!",
    linkAddress: "https://jonathon-trewin.itch.io/fat-hobo",

    hasVideo: true,
    darkMode:true,
     

    
    colour: `url("./images/FatHoboBanner.png")`
}


let beesteKeuze =
{
    card: document.getElementById("beestekeuzecard"),
    title:"Beeste Keuze",
    desc: "Beeste Keuze is an edu-game funded by Scum Studios and the Flemish Governemnt. It teaches players the difficulty of coallition formation and running governments. I was lead designer and programmer for this project, with David Jávorcsík as lead artist. \n\nIt is mobile- and browser-friendly.",
    role: "Game Direction, Lead Programmer, Lead Designer",
    

    linkText: "Play the game on Itch!",
    linkAddress: "https://jonathon-trewin.itch.io/beeste-keuze",

    hasVideo: false,
    darkMode:false,
     

    
    colour: `url("./images/BeesteBackground.png")`
}


let ratlingRats =
{
    card: document.getElementById("ratcard"),
    title:"Ratling Rats",
    desc: "Ratling Rats was made for the two day Street Jam 2024. It's heavily inspired by Pikmin. In it, you control a mouse commander ordering about his rebellious army of rats. The end product is a bit too difficult, but hopefully I'll eventually find the time to go back and do some balancing. \n\n The art was done by Ziqqy and Bonnie, while Willem Hollants worked on implementation and sound design.",
    role: "Programmer, Unity Implementer, Ideation",

    videoURL: "https://www.youtube.com/embed/U1-B2WD0wtY?si=S_9QuaI4R09O95LT",

    linkText: "Play the game on Itch!",
    linkAddress: "https://ziqqy-88.itch.io/rating-rats",

    hasVideo: true,
    darkMode:false,
     

    
    colour: `url("./images/ratlingratscover.png")`
}


let groover =
{
    card: document.getElementById("groovercard"),
    title:"Groover",
    desc: "Groover was a Game Design project that I did to improve my familiarity with Unreal Engine and its visual scripting language Blueprints. \n\nThe goal of the game is to get from one end of the map to the other without running out of moves. The player loses lives when they move outside of the rhythm that is being played globally. The player can increase their moves by moving onto pickups, and can activate teleporters around the level by adjusting the speed of the rhythm (some teleporters activate on a slow rhythm, others on a fast one).",
    role: "Blueprints Programmer, Game Design",

    videoURL: "https://www.youtube.com/embed/qUxr5cnzRSk?si=d13O0Ai4xhpuIdr1",

        
    linkText: "Design Process",
    linkAddress: "https://www.youtube.com/watch?v=UzTghhy8qfE",

    hasVideo: true,
    darkMode:false,
     

    
    colour: "linear-gradient(180deg, black, orange)"
}

let thirtyBirds =
{
    card: document.getElementById("30birdscard"),
    title:"30 Birds",
    desc: "30 Birds is the tale of detective Zig and her sidekick Hoop the Hoopoe, exploring a dangerous world in order to solve the case of a missing bird goddess. As narrative designer, I helped create the overarching plot, as well as writing the hilarious, strange characters and dialogue. Part of this work includes working with json and Twine files.",
    role: "Narrative Designer",

    imageSRC: "",
    videoURL: "https://www.youtube.com/embed/zfa0gMgN-w4?si=vpHSCdghKsiuLfNL",

    linkText: "Check it out on Steam!",
    linkAddress: "https://store.steampowered.com/app/1708770/30_Birds/",

    hasVideo: true,
    darkMode:false,


    
    colour: `url("./images/30birds.webp")`
}

let supermarket =
{
    card: document.getElementById("supermarketcard"),
    title:"Supermarket",
    desc: "Supermarket is a political narrative game created for the 'F#$* Captialism' gamejam on itch.io.\n\nIt was created with Zain Al Rubaie on Sound Design and Ioanna Efthymiadou as art designer and additional programmer. The Game Design was collaborated between the three of us. \n\n Note 25/01/2024: this link leads to an old version. The actual final version is being polished and will be updated ASAP.\n\n Password: gooseberry",
    role: "Game Designer, Programmer, Writer",
    
    linkText: "Play it on Itch!",
    linkAddress: "https://jonathon-trewin.itch.io/supermarket-wip",
    darkMode:false,
    hasVideo: false,
    
    colour: `url("./images/Supermarket.png")`
}

let cartoonbase =
{
    card: document.getElementById("cbcard"),
    title:"Cartoonbase",
    desc: "During my tenure at Cartoonbase, I had multiple functions: copy-/script writer, project management, creative direction,... and more. \n Below you'll find a link to a selection of videos that I worked on in varying capacities - always as writer, but occasionally with extended responsibilities.",
    role: "Writer and more...",
    
    linkText: "Check out my projects!",
    linkAddress: "https://jonmayes8.wixsite.com/website/work",
    darkMode:true,
    hasVideo: false,
    
    colour: `url("./images/cbEyes.png")`
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

beesteKeuze.card.addEventListener('click',function(){OpenWindow(beesteKeuze)});
fatHobo.card.addEventListener('click',function(){OpenWindow(fatHobo)});
illegalHarvest.card.addEventListener('click',function(){OpenWindow(illegalHarvest)});
groover.card.addEventListener('click',function(){OpenWindow(groover)});
thirtyBirds.card.addEventListener('click',function(){OpenWindow(thirtyBirds)})
quitenAndTheRabbit.card.addEventListener('click',function(){OpenWindow(quitenAndTheRabbit)})
supermarket.card.addEventListener('click',function(){OpenWindow(supermarket)});
cartoonbase.card.addEventListener('click',function(){OpenWindow(cartoonbase)});
mekAndKube.card.addEventListener('click',function(){OpenWindow(mekAndKube)});
ratlingRats.card.addEventListener('click',function(){OpenWindow(ratlingRats)});
