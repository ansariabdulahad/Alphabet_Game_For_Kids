// slect play btn
let play_btn = document.getElementById("play-btn");
// select play pause btn id
let p_p_btn = document.getElementById("p-p-btn");
// select input field
let t_input = document.getElementById("text-input");
// select left and right box
let left_img = document.getElementById("left-img");
let right_img = document.getElementById("right-img");

play_btn.addEventListener("click", ()=> {
    // change play icon after click on play btn
    p_p_btn.classList = "fa-solid fa-pause";

    // get val of input field
    let t_input_val = t_input.value.toUpperCase();

    if (t_input_val == "A") {
        left_img.src = "./Assets/video/Apple.mp4";
        right_img.src = "./Assets/images/apple.jpg";
    }
    else if (t_input_val == "B") {
        left_img.src = "./Assets/video/baby.mp4";
        right_img.src = "./Assets/images/baby.jpg";
    }
    else if (t_input_val == "C") {
        left_img.src = "./Assets/video/candy.mp4";
        right_img.src = "./Assets/images/candy.jpeg";
    }
    else if (t_input_val == "D") {
        left_img.src = "./Assets/video/diamond.mp4";
        right_img.src = "./Assets/images/diamond.jpeg";
    }
    else if (t_input_val == "E") {
        left_img.src = "./Assets/video/elephant.mp4";
        right_img.src = "./Assets/images/elephant.jpg";
    }
    else if (t_input_val == "F") {
        left_img.src = "./Assets/video/fairy.mp4";
        right_img.src = "./Assets/images/fairy.jpg";
    }
    else if (t_input_val == "G") {
        left_img.src = "./Assets/video/glasses.mp4";
        right_img.src = "./Assets/images/glasses.jpeg";
    }
    else if (t_input_val == "H") {
        left_img.src = "./Assets/video/hen.mp4";
        right_img.src = "./Assets/images/hen.jpeg";
    }
    else if (t_input_val == "I") {
        left_img.src = "./Assets/video/igloo.mp4";
        right_img.src = "./Assets/images/igloo.jpeg";
    }
    else if (t_input_val == "J") {
        left_img.src = "./Assets/video/jelly.mp4";
        right_img.src = "./Assets/images/jelly.jpeg";
    }
    else if (t_input_val == "K") {
        left_img.src = "./Assets/video/keyboard.mp4";
        right_img.src = "./Assets/images/keyboard.jpeg";
    }
    else if (t_input_val == "L") {
        left_img.src = "./Assets/video/ladybug.mp4";
        right_img.src = "./Assets/images/ladybug.jpeg";
    }
    else if (t_input_val == "M") {
        left_img.src = "./Assets/video/monkey.mp4";
        right_img.src = "./Assets/images/monkey.jpeg";
    }
    else if (t_input_val == "N") {
        left_img.src = "./Assets/video/needle.mp4";
        right_img.src = "./Assets/images/needle.jpg";
    }
    else if (t_input_val == "O") {
        left_img.src = "./Assets/video/orange.mp4";
        right_img.src = "./Assets/images/orange.jpg";
    }
    else if (t_input_val == "P") {
        left_img.src = "./Assets/video/pony.mp4";
        right_img.src = "./Assets/images/pony.webp";
    }
    else if (t_input_val == "Q") {
        left_img.src = "./Assets/video/queen.mp4";
        right_img.src = "./Assets/images/queen.jpg";
    }
    else if (t_input_val == "R") {
        left_img.src = "./Assets/video/rainbow.mp4";
        right_img.src = "./Assets/images/rainbow.jpeg";
    }
    else if (t_input_val == "S") {
        left_img.src = "./Assets/video/spider.mp4";
        right_img.src = "./Assets/images/spider.jpg";
    }
    else if (t_input_val == "T") {
        left_img.src = "./Assets/video/tiger.mp4";
        right_img.src = "./Assets/images/tiger.webp";
    }
    else if (t_input_val == "U") {
        left_img.src = "./Assets/video/umbrella.mp4";
        right_img.src = "./Assets/images/umbrella.jpeg";
    }
    else if (t_input_val == "V") {
        left_img.src = "./Assets/video/violen.mp4";
        right_img.src = "./Assets/images/violen.jpeg";
    }
    else if (t_input_val == "W") {
        left_img.src = "./Assets/video/wale.mp4";
        right_img.src = "./Assets/images/wale.jpg";
    }
    else if (t_input_val == "X") {
        left_img.src = "./Assets/video/xylophone.mp4";
        right_img.src = "./Assets/images/xylophone.jpg";
    }
    else if (t_input_val == "Y") {
        left_img.src = "./Assets/video/yoyo.mp4";
        right_img.src = "./Assets/images/yoyo.jpg";
    }
    else if (t_input_val == "Z") {
        left_img.src = "./Assets/video/zebra.mp4";
        right_img.src = "./Assets/images/zebra.jpg";
    }
    else {
        left_img.src = "./Assets/video/else-alphabet.mp4";
        right_img.src = "./Assets/images/wrong.webp";
    }
})