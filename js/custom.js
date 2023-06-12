function goToLight(lightIdx) {
    imgs = document.getElementsByTagName("img");
    console.log(imgs.length);
    for (i = 0; i < imgs.length; i++) {
        text_content = imgs[i].src;
        items = text_content.split("/");
        items[items.length - 3] = lightIdx;
        new_text_content = items.join("/");
        imgs[i].src = new_text_content;
    }
    btns = document.getElementsByTagName("button");
    for (i = 0; i < btns.length; i++) {
        if (btns[i].id.indexOf("light") !== -1) {
            btns[i].className = "btn btn-primary";
            if (btns[i].id === "light" + lightIdx) {
                console.log(btns[i].id);
                btns[i].className = "btn btn-warning";
            }
        }
    }
}

function goToMask(maskType) {
    imgs = document.getElementsByTagName("img");
    console.log(imgs.length);
    for (i = 0; i < imgs.length; i++) {
        text_content = imgs[i].src;
        items = text_content.split("/");
        items[items.length - 2] = maskType;
        new_text_content = items.join("/");
        imgs[i].src = new_text_content;
    }
    btns = document.getElementsByTagName("button");
    for (i = 0; i < btns.length; i++) {
        if (btns[i].id.indexOf("button_masked") !== -1) {
            btns[i].className = "btn btn-primary";
            // console.log("button_masked" + maskType.substring(0, 3))
            // console.log(btns[i].id)
            // console.log(btns[i].id === "button_masked_" + maskType.substring(0, 3))
            if (btns[i].id === "button_masked_" + maskType.substring(0, 3)) {
                // console.log(btns[i].id);
                btns[i].className = "btn btn-warning";
            }
        }
    }
}

function goToObject(objId) {
    window.location.href = "obj" + objId + ".html"; // Replace with the next object's HTML page
}


function goBack() {
    window.location.href = "index.html"
}