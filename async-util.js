
export function requestFor(resourceName, container) {
    const resourceUrl = "./images/" + resourceName + ".jpg";
    const imageElement = document.createElement('img');
    imageElement.src = "./images/loading.svg";
    container.appendChild(imageElement);

    return new Promise((resolve, reject) => {
        fetch(resourceUrl).then((response) => {
            return response.blob();
        }).then((myBlob) => {
            var objectURL = URL.createObjectURL(myBlob);
            setTimeout(() => {
                resolve({ imageElement, objectURL });
            }, Math.floor(Math.random() * 5000));


        });
    });


}


export function requestInSeq(resourceName, container) {
    const resourceUrl = "./images/" + resourceName + ".jpg";
    const imageElement = document.createElement('img');
    imageElement.src = "./images/loading.svg";
    container.appendChild(imageElement);

    return new Promise((resolve, reject) => {
        fetch(resourceUrl).then((response) => {
            return response.blob();
        }).then((myBlob) => {
            var objectURL = URL.createObjectURL(myBlob);
            setTimeout(() => {
                resolve({ imageElement, objectURL });
            }, Math.floor(Math.random() * 5000));

            // image.src = objectURL;

        });
    });
}