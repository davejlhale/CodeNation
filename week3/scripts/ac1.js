const photoCardToggles = document.querySelectorAll('.photo-card .btn-toggle');
const photoCardImages = document.querySelectorAll('.photo-card .image-hideable');

for (let i=0;i<photoCardToggles.length;i++) {

    console.log(photoCardToggles[i])

    photoCardToggles[i].addEventListener('click', () => 
    {     

        console.log(photoCardToggles[i])
    
            switch (photoCardImages[i].getAttribute('hidden')) {
                // hidden attribute as hidden or hidden="hidden"
                case "":
                case 'hidden':
                    photoCardToggles[i].textContent = "Close Image";
                    photoCardImages[i].removeAttribute('hidden');
                    break;
        
                //no hidden attribute
                case null :
                    photoCardToggles[i].textContent = "Show Image";
                    photoCardImages[i].setAttribute('hidden', 'hidden');
                    break;

            }
        }
    )};


