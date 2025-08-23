let suggestions = [
    "maths 1ere SM",
    "ciam 1ere ",
    "phsique-chimie",
    "1001 exo de maths 1ere",
    "ciam corrigé 1ere s"
  ];
  
  // getting all required elements
  const searchInput = document.querySelector(".searchInput");
  const input = searchInput.querySelector("input");
  const resultBox = searchInput.querySelector(".resultBox");
  const icon = searchInput.querySelector(".icon");
  let linkTag = searchInput.querySelector("a");
  let webLink;
  
  // if user press any key and release
  input.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+ data +'</li>';
        });
        searchInput.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = resultBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchInput.classList.remove("active"); //hide autocomplete box
    }
  }
  
  function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    resultBox.innerHTML = listData;
  }
  
  document.getElementById("contact-link").addEventListener("click",function(e){

    e.preventDefault();
    const contactSelection=document.getElementById("contact");
    const position=contactSelection.offsetTop;
    window.scrollTo({
top:position,
behavior:"smooth"

    });
  });

function toggleSubmenu(){
const submenu=document.getElementById('submenu');
submenu.style.display=submenu.style.display=='block'?'none':'block';
}










const button=document.getElementById("toggleform");
const form=document.getElementById("myForm");
button.addEventListener("click",()=>{
if(form.style.display==="block"){
 
  form.style.display="none";
  

  }else{

  
form.style.display="block";




}
});





function showSection(id){

    document.querySelectorAll('.content').forEach(div=>{
    
    div.style.display='none';
    
  
    
    
    
    });
    
    document.getElementById(id).style.display='block';
    


    

    }



    
    







{


    

    

    }









    











    function showhide(id){

        document.querySelectorAll('.contenu').forEach(div=>{
        
        div.style.display='block';
        
      
        
        
        
        });
        
        document.getElementById(id).style.display='none';
        
        
        }
    
    
    
    
    
    
    
        



