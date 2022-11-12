const loadBtn = document.getElementById('img-previewer-load-btn');



loadBtn.addEventListener('click', () => 
    {    
        document.getElementById('img-previewer-imgSrc').src = "";
        let imgSrc= document.getElementById('img-previewer-imgText').value;     
        
        document.getElementById('img-previewer-imgSrc').src = imgSrc;
            


       
        
     })
