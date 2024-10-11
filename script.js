console.log("hello");

const images = document.getElementsByClassName('img');
const boxes = document.getElementsByClassName('box');

let draggedImage;

console.log(images);
console.log(boxes);

for(image of images) {
    image.addEventListener('dragstart', (e)=> {
        console.log("drag start event");
        draggedImage = e.target;
        e.target.style.border = '5px dashed black';
        setTimeout(()=> {
            e.target.style.display = 'none';
        },0);
    });
    
    image.addEventListener('dragend', (e)=> {
        console.log("drag end event");
        e.target.style.display = 'block';
        e.target.style.border = 'none';
        e.target = draggedImage;
    
    });
}



for(box of boxes) {
    box.addEventListener('dragenter', (e)=> {
        console.log("drag enter event");
    });

    box.addEventListener('dragleave', (e)=> {
        console.log("drag leave event");
    });
    
    box.addEventListener('dragover', (e)=> {
        e.preventDefault();
        console.log("drag over event");
    });
    
    box.addEventListener('drop', (e)=> {
        console.log("drag drop event");
        e.preventDefault();
        e.target.appendChild(draggedImage);
    });
}