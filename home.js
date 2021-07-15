//Project 1:
function ageInDays(){
    var birthYear = prompt("Enter your birth year please...")
    var currentTime = new Date();

    var year=currentTime.getUTCFullYear();
    var days=(year-birthYear)*365;
    //console.log(days);
    //lets add it to the dom 
    
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('you have spent ' + days+' days on earth');
    h1.setAttribute('id','ageInDays');// set the id of the new element h1 
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);


}

//for reset 
function reset(){
document.getElementById('ageInDays').remove();



}

//project 2:
function makeCat(){
    var img = new Image();
    var div=document.getElementById('catimagebox');
    img.src = 'https://media.giphy.com/media/QUEFPDQhw89bi/giphy.gif';
    div.appendChild(img);
    

}

function deleteCat(){
    document.getElementById('catimagebox').remove(); 
}

