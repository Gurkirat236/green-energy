    // Load your images on page-load
    function preloader() {
        const imagesPaths = [
           "img/img-1.jpg",
           "img/img-2.jpg",
           "img/img-3.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
            images[i] = new Image();
            images[i].src = imagesPaths[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    

    window.addEventListener("load", preloader);
    
    /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */

    const nodeList = document.querySelectorAll('button');
    
    /* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */
    const resourceObj = [
        {
            headingContent: "Solar Energy",
            imgUrl: "img/img-1.jpg",
            imgAlt: 'Solar energy image',
            bodyText: "Solar Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
        {
            headingContent: "Hybrid",
            imgUrl: "img/img-2.jpg",
            imgAlt: 'Hybrid image',
            bodyText: "Hybrid energy systems are defined as the integration of several types of energy generation equipment such as electrical energy generators, electrical energy storage systems, and renewable energy sources"
        },
        {
            headingContent: "Geothermal",
            imgUrl: "img/img-3.jpg",
            imgAlt: 'Geothermal image',
            bodyText: "Geothermal energy is the thermal energy generated and stored in the Earth. Thermal energy is the energy that determines the temperature of matter."
        }
    ];

    /* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */
    const content = document.querySelector('.new-content');
    /* 
    The first button in a NODE LIST of buttons will initially 
    have the id: active-button - this will uniquely style 
    the active button (CSS rule). 
    
    The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>` */
    
    /* 
    Start your handleSelection function here. */ 
    function handleSelection(event){
        /* 
        Remove the id active-button from the element that
        contains it prior to the click-event. 

        This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id. */
        for (let btn of nodeList){
            if(btn.hasAttribute('id')){
                btn.removeAttribute('id');
            }
        }

        /*
        Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */
        event.target.setAttribute('id', 'active-button');

        /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */ 

        if (event.target.innerText == "Solar Energy") {
            content.innerHTML = `<h1>${resourceObj[0].headingContent}</h1>
                <img src="${resourceObj[0].imgUrl}" alt="${resourceObj[0].imgAlt}">
                <p>${resourceObj[0].bodyText}</p>`;
            }else if(event.target.innerText == "Hybrid"){
            content.innerHTML = `<h1>${resourceObj[1].headingContent}</h1>
                <img src="${resourceObj[1].imgUrl}" alt="${resourceObj[1].imgAlt}">
                <p>${resourceObj[1].bodyText}</p>`;
            }else if(event.target.innerText == "Geothermal"){
            content.innerHTML = `<h1>${resourceObj[2].headingContent}</h1>
                <img src="${resourceObj[2].imgUrl}" alt="${resourceObj[2].imgAlt}">
                <p>${resourceObj[2].bodyText}</p>`;
        }
    }
    /* 
    Close your handleSelection function here. */  
    

    /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */  
    for (let btn of nodeList){
        btn.addEventListener('click', handleSelection);
    }