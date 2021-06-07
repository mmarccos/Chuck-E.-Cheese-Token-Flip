const flipBtn = document.getElementById('flipBtn');
const img = document.getElementById('img');
const headTails = document.getElementById('headTails');
const resetBtn = document.getElementById('resetBtn');

/* When the Flip Token button is pressed: 
    * The Flip Token button disables
    * Reset button enables
    * The image becomes either heads or tails of the Token (random)
    * The text above the button becomes either "Heads!" or "Tails!" of the Token */
function headOrTails() 
{
    resetBtn.disabled = false;
    if (Math.floor(Math.random() * 2) === 1) 
    {
        img.src = 'images/heads.jpg';
        headTails.innerText = 'Heads!';
    } 
    else 
    {
        img.src = 'images/tails.jpg';
        headTails.innerText = 'Tails!';
    }
    flipBtn.disabled = true;
}

/* When the Reset button is pressed: 
    * The Flip Token button enables
    * Reset button disables
    * The image becomes a question mark
    * The text above the button becomes "Flip!" */
function reflip ()
{
    img.src = 'images/questionMark.png';
    headTails.innerText = 'Flip!';
    flipBtn.disabled = false;
    resetBtn.disabled = true;
}

flipBtn.addEventListener('click', headOrTails);
resetBtn.addEventListener('click', reflip);