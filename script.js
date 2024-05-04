const history_button = document.getElementById("history-btn");
const vision_button = document.getElementById("vision-btn");
const goals_button = document.getElementById("goals-btn");
const my_image = document.getElementById("image");
const my_header = document.getElementById("myheader");
const my_text = document.getElementById("mytext");

function history_click()
{
my_image.src = "/images/image3.jpg";
my_header.innerHTML="History";
my_text.innerHTML="Mr oh winding it enjoyed by between. The servants securing material goodness her. Saw principles themselves ten are possession. So endeavor to continue cheerful doubtful we to. Turned advice the set vanity why mutual. Reasonably if conviction on be unsatiable discretion apartments delightful. Are melancholy appearance stimulated occasional entreaties end. Shy ham had esteem happen active county. Winding morning am shyness evident to. Garrets because elderly new manners however one village she.";
vision_button.classList.remove("button_selected");
goals_button.classList.remove("button_selected");
history_button.classList.add("button_selected");
}

history_button.addEventListener("click",history_click);

function vision_click()
{
my_image.src = "/images/image1.jpg";
my_header.innerHTML="Vision";
my_text.innerHTML="Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may. Wicket do manner others seemed enable rather in. Excellent own discovery unfeeling sweetness questions the gentleman. Chapter shyness matters mr parlors if mention thought.";
vision_button.classList.add("button_selected");
goals_button.classList.remove("button_selected");
history_button.classList.remove("button_selected");
}
vision_button.addEventListener("click",vision_click);

function goals_click()
{
my_image.src = "/images/image2.jpg";
my_header.innerHTML="Goals";
my_text.innerHTML="Living valley had silent eat merits esteem bed. In last an or went wise as left. Visited civilly am demesne so colonel he calling. So unreserved do interested increasing sentiments. Vanity day giving points within six not law. Few impression difficulty his use has comparison decisively.";
vision_button.classList.remove("button_selected");
goals_button.classList.add("button_selected");
history_button.classList.remove("button_selected");
}

goals_button.addEventListener("click",goals_click);


let onload_arrowfunc = () => {vision_click()};
window.addEventListener("load",onload_arrowfunc);