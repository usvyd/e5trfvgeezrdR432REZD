var images=["image.jpg", "D7F6EC73-0786-4887-9FCD-A94B4E4CE923.jpeg", "164C10B8-DB20-449C-B927-C539286340AF.jpeg", "5D4E7434-44BO-4D0B-8A49-1959CB8D1DA6.jpeg"];
var names=["Krish Chhibber", "Poonam Chhibber", "Munir Chhibber", "Kashvi Chhibber", "Title"];
var i=0;
function update(){
    i++;
    var numbers_of_family_member_in_array=4
    if(i>numbers_of_family_member_in_array){
        i=0;
    }
    var updatedImage=images[i];
    var updatedName=names[i];
    document.getElementById("family_member_image").src=updatedImage;
    document.getElementById("family_member_name").innerHTML=updatedName;
    
}