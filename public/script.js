const getCrafts=async()=>{
    try{
        return(await fetch("http://localhost:3001/api/crafts")).json();
    } catch(error) {
        console.log("error getting data")
        return "";
    }
};

const showCrafts=async()=>{
    const craftsJSON=await getCrafts();
    const craftsDiv=document.getElementById("crafts-div");
    if (craftsJSON== ""){
        craftsDiv.innerHTML="No Crafts";
        return;
    }

//looping through json
craftsJSON.forEach((craft)=> {
    const section=document.createElement("section");
    craftsDiv.append(section);

    const h3=document.createElement("h3");
    h3.innerHTML=craft.name;
    section.append(h3);

    const img=document.createElement("img");
    img.src = "http://localhost:3001/" + craft.img;
    section.append(img);
    
});
};

showCrafts();