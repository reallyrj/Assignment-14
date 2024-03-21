const express=require("express");
const app=express();
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/crafts",(req,res)=>{
    console.log("api request");
    const crafts=[];
    crafts[0]={
        name: "Beaded JellyFish",
        image: "bead-jellyfish.jpg",
        description: "Create a hanging jellyfish using eggcartons and multicolored beads",
        suppplies: [
            "string",
            "egg cartons",
            "beads"
        ]
    };
    
    crafts[1]={
        name: "Character Bookmarks",
        image: "bookmarks.jpeg",
        description: "Create a little birdy bookmark to always remin you were you were",
        suppplies: [
            "yellow construction paper",
            "orange construction paper",
            "black construction paper"
        ]
    };
    
    crafts[2]={
        name: "Button Flowers",
        image: "button-flowers.jpeg",
        description: "Create a fun bouquet of flowers with your favorite buttons",
        suppplies: [
            "multicolored buttons",
            "multicolored flet",
            "green straws",
            "ribbon"
        ]
    };
    
    crafts[3]={
        name: "Cheerio Necklaces",
        image: "cheerio-necklace.webp",
        description: "Create a fun and edible necklace",
        suppplies: [
            "Cheerios or Fruit Loops",
            "Elastic string"
        ]
    };
    
    crafts[4]={
        name: "Cotton Ball Cupcakes",
        image: "cotton-ball-cupcakes.webp",
        description: "Decorate your fun filled cupcake however you want.",
        suppplies: [
            "Construction Paper",
            "Cotton Balls",
            "Black Sharpie",
            "Glitter"
        ]
    };
    
    crafts[5]={
        name: "School Themed Mason Jars",
        image: "decorated-jars.jpeg",
        description: "Let's make mason jars to ",
        suppplies: [
            "Construction Paper",
            "Cotton Balls",
            "Black Sharpie",
            "Glitter"
        ]
    };
    
    crafts[6]={
        name: "Egg Carton Flowers",
        image: "egg-carton-flowers.jpg",
        description: "Make a beautiful bouquet with egg cartons and other items you can find around the house",
        suppplies: [
            "Egg Cartons",
            "Butons",
            "Green Pipe Cleaner",
            "Ribbon",
            "Canvas"
        ]
    };
    
    crafts[7]={
        name: "Finger Puppets",
        image: "finger-puppets.jpeg",
        description: "These little critters are easy to make, and will entertain your little one while they make a show.",
        suppplies: [
            "Pom-poms",
            "Googly Eyes",
            "Pipe Cleaner"
        ]
    };
    
    crafts[8]={
        name: "Ribbon Flower Headbands",
        image: "flower-headbands.jpg",
        description: "Let your little one show off her new style with these pretty and customizable headbands",
        suppplies: [
            "Plain headband",
            "Ribbon",
            "Buttons",
            "Gems"
        ]
    };
    
    crafts[9]={
        name: "Hand Print Fish Puppets",
        image: "handprint-fish.jpg",
        description: "We all need to take every opportunity we can to remember those tiny hands, and what better way to do it, then to make fish puppets!",
        suppplies: [
            "Popsicle sticks",
            "Cardstock",
            "Gems",
            "Googly Eyes"
        ]
    };
    
    crafts[10]={
        name: "Hand Print Tree",
        image: "hand-print-tree.jpeg",
        description: "This is a fun way to get your little one into finger painting.",
        suppplies: [
            "Watercolor Paper",
            "Finger paint"
        ]
    };
    
    crafts[11]={
        name: "Melted Bead Bowl",
        image: "melted-bead-bowl.jpeg",
        description: "All they need to do is shape their faviorte design, warm it up and they have a brand new bowl.",
        suppplies: [
            "Beads",
            "Bowl",
            "Parchment paper"
        ]
    };
    
    crafts[12]={
        name: "Monster Kites",
        image: "monster-rolls.jpg",
        description: "Let's make those scary toilet paper rolls fly!",
        suppplies: [
            "Toilet paper rolls",
            "Paint",
            "Tissue Paper",
            "String"
        ]
    };
    
    crafts[13]={
        name: "Pool Noodle Boats",
        image: "noodle-boats.png",
        description: "Let's make a boat that will actually float, due to the floating bottom of a pool noodle.",
        suppplies: [
            "Pool Noodle",
            "Straw",
            "Plastic Paper"
        ]
    };
    
    crafts[14]={
        name: "Paper Plate Bees",
        image: "paper-plate-bees.jpeg",
        description: "Let's have fun with making cute little bees, or big bees actually.",
        suppplies: [
            "Paper Plate",
            "Googly Eyes",
            "Close Pins",
            "Black pom poms",
            "Yellow Paint",
            "Black Paint"
        ]
    };
    
    crafts[15]={
        name: "Paper Plate Dinosaurs",
        image: "paper-plate-dinosaurs.jpg",
        description: "Who would have thought that half a paper plate would be the base of a dinosaur.",
        suppplies: [
            "Paper Plate",
            "Paint",
            "Close Pins",
            "Construction Paper"
        ]
    };
    
    crafts[16]={
        name: "Porcupine Leafs",
        image: "porcupine-leaf.webp",
        description: "Let's turn an ordinary paper plate into a fun filled mask.",
        suppplies: [
            "Leafs",
            "Berries",
            "Acorns",
            "Construction Paper"
        ]
    };
    
    crafts[17]={
        name: "Rainbow Cloud",
        image: "rainbow-cloud.webp",
        description: "Some cotton and color and you'll have a beautiful rainbow.",
        suppplies: [
            "Paper Plate",
            "Cotton Balls",
            "Construction Paper"
        ]
    };
    
    crafts[18]={
        name: "Fun Shaped Crayons",
        image: "shaped-crayons.jpg",
        description: "Let's melt some crayons together and let them harden into fun shapes.",
        suppplies: [
            "Broken Crayons",
            "Mold"
        ]
    };
    
    crafts[19]={
        name: "Straw Farris Wheel",
        image: "straw-faris-wheel.jpg",
        description: "It might be too small to ride, but this farris wheel is the most colorful of all.",
        suppplies: [
            "Multicolored straws",
        ]};
        console.log(crafts);
        res.json(crafts);
});

app.listen(3001,()=>{
    console.log("listening");
});
