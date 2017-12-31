		import { requestFor, requestInSeq } from "./async-util.js";

		// This method will randomly loads the images
		function loadImages() {
		    const button = document.querySelector('#loadImages');
		    const container = document.querySelector('#image-container');

		    button.addEventListener("click", (event) => {

		        const images = imageNames();
		        images.forEach((image) => {
		            requestFor(image, container).then(imageData => {
		                const imageElement = imageData.imageElement;
		                const imageSrc = imageData.objectURL;
		                imageElement.src = imageSrc;
		            });
		        });
		    });
		}

		// This function loads the images in sequence
		function loadImagesSeq() {
		    const button = document.querySelector('#loadImagesSeq');
		    const container = document.querySelector('#image-container');
		    const promises = [];
		    button.addEventListener("click", (event) => {

		        const images = imageNames();

		        images.forEach((image) => {
		            promises.push(requestInSeq(image, container));
		        });
		        console.log(promises);
		        // when all promises are resolved then this promise is resolved.
		        Promise.all(promises).then((imageDataObjs) => {
		            console.log(imageDataObjs);
		            imageDataObjs.forEach((imageData) => {
		                const imageElement = imageData.imageElement;
		                const imageSrc = imageData.objectURL;
		                imageElement.src = imageSrc;
		            });

		        });
		    });


		}


		function imageNames() {
		    const images = [];
		    for (let i = 1; i < 21; i++) {
		        images.push(i);
		    }
		    return images;
		}

		loadImages();
		loadImagesSeq();