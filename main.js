const SELECTIONS = [
    {
        name: 'rock',
        opponent: 'paper'
    },
    {
        name: 'paper',
        opponent: 'scissors'
    },
    {
        name: 'scissors',
        opponent: 'rock'
    }
]

const rock = "./icones/rock.png"
const paper = "./icones/paper.png"
const scissors = "./icones/scissors.png"

const selectionButtons = document.querySelectorAll('[data-selection]')

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)

        makeSelection(selection)
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection()

    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    const draw = isDraw(selection, computerSelection)

    const youSelected = document.getElementById("youSelected")
    const opponentSelected = document.getElementById("opponentSelected")
    const result = document.getElementById("result")

    if(yourWinner) {
        document.body.style.backgroundImage = "url('win.jpg')";
        document.getElementById("results").style.display = "block";
        document.getElementById("results").style.zIndex = "100";
        document.getElementById("playAgain").style.display = "block";
        result.textContent = 'YOU WIN';
        console.log("YOU")
        if(selection.name === 'rock' && computerSelection.name === 'scissors') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/rock.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/scissors.png')";
            console.log("rock X scissors")
        }
        if(selection.name === 'scissors' && computerSelection.name === 'rock') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/scissors.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/rock.png')";
    
            console.log("scissors X rock")
        }
    
        if(selection.name === 'rock' && computerSelection.name === 'paper') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/rock.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/paper.png')";
    
            console.log("rock X paper")
        }
        if(selection.name === 'paper' && computerSelection.name === 'rock') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/paper.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/rock.png')";
    
            console.log("paper X rock")
        }
    
        if(selection.name === 'paper' && computerSelection.name === 'scissors') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/paper.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/scissors.png')";
    
            console.log("paper X scissors")
        }
        if(selection.name === 'scissors' && computerSelection.name === 'paper') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/scissors.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/paper.png')";
    
            console.log("scissors X paper")
        }
    
        if(selection.name === 'rock' && computerSelection.name === 'rock') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/rock.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/rock.png')";
    
            console.log("rock X rock")
        }
        if(selection.name === 'scissors' && computerSelection.name === 'scissors') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/scissors.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/scissors.png')";
    
            console.log("scissors X scissors")
        }
        if(selection.name === 'paper' && computerSelection.name === 'paper') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/paper.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/paper.png')";
    
            console.log("paper X paper")
        }
    }
    if(computerWinner) {
        document.body.style.backgroundImage = "url('lose.jpg')";
        document.getElementById("results").style.display = "block";
        document.getElementById("results").style.zIndex = "100";
        document.getElementById("playAgain").style.display = "block";
        result.textContent = 'YOU LOSE';
        console.log("PC")

        if(selection.name === 'rock' && computerSelection.name === 'scissors') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/rock.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/scissors.png')";
            console.log("rock X scissors")
        }
        if(selection.name === 'scissors' && computerSelection.name === 'rock') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/scissors.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/rock.png')";
    
            console.log("scissors X rock")
        }
    
        if(selection.name === 'rock' && computerSelection.name === 'paper') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/rock.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/paper.png')";
    
            console.log("rock X paper")
        }
        if(selection.name === 'paper' && computerSelection.name === 'rock') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/paper.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/rock.png')";
    
            console.log("paper X rock")
        }
    
        if(selection.name === 'paper' && computerSelection.name === 'scissors') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/paper.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/scissors.png')";
    
            console.log("paper X scissors")
        }
        if(selection.name === 'scissors' && computerSelection.name === 'paper') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/scissors.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/paper.png')";
    
            console.log("scissors X paper")
        }
    
        if(selection.name === 'rock' && computerSelection.name === 'rock') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/rock.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/rock.png')";
    
            console.log("rock X rock")
        }
        if(selection.name === 'scissors' && computerSelection.name === 'scissors') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/scissors.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/scissors.png')";
    
            console.log("scissors X scissors")
        }
        if(selection.name === 'paper' && computerSelection.name === 'paper') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/paper.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/paper.png')";
    
            console.log("paper X paper")
        }
    }
    if(draw) {
        document.body.style.backgroundImage = "url('draw.jpg')";
        document.getElementById("results").style.display = "block";
        document.getElementById("results").style.zIndex = "100";
        document.getElementById("playAgain").style.display = "block";
        result.textContent = 'DRAW';
        console.log("DRAW")

        if(selection.name === 'rock' && computerSelection.name === 'scissors') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/rock.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/scissors.png')";
            console.log("rock X scissors")
        }
        if(selection.name === 'scissors' && computerSelection.name === 'rock') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/scissors.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/rock.png')";
    
            console.log("scissors X rock")
        }
    
        if(selection.name === 'rock' && computerSelection.name === 'paper') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/rock.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/paper.png')";
    
            console.log("rock X paper")
        }
        if(selection.name === 'paper' && computerSelection.name === 'rock') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/paper.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/rock.png')";
    
            console.log("paper X rock")
        }
    
        if(selection.name === 'paper' && computerSelection.name === 'scissors') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/paper.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/scissors.png')";
    
            console.log("paper X scissors")
        }
        if(selection.name === 'scissors' && computerSelection.name === 'paper') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/scissors.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/paper.png')";
    
            console.log("scissors X paper")
        }
    
        if(selection.name === 'rock' && computerSelection.name === 'rock') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/rock.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/rock.png')";
    
            console.log("rock X rock")
        }
        if(selection.name === 'scissors' && computerSelection.name === 'scissors') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/scissors.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/scissors.png')";
    
            console.log("scissors X scissors")
        }
        if(selection.name === 'paper' && computerSelection.name === 'paper') {
            document.getElementById("youSelected").style.backgroundImage = "url('icons/paper.png')";
            document.getElementById("opponentSelected").style.backgroundImage = "url('icons/paper.png')";
    
            console.log("paper X paper")
        }
    }

    console.log(selection)
    console.log(computerSelection)
}
function isWinner(selection, opponentSelection) {
    return selection.name === opponentSelection.opponent
}
function isDraw(selection, opponentSelection) {
    return selection.name === opponentSelection.name
}
function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}
function pushTop() {
    document.getElementById("title").style.top = "60px";
    document.getElementById("title").style.transition = "1000ms";
    document.getElementById("selections").style.top = "80px";
    document.getElementById("selections").style.transition = "1500ms";
    //document.getElementById("column-left").style.transform = "scale(1.3)";
    //document.getElementById("column-left").style.transition = "2000ms";
    //document.getElementById("column-right").style.transform = "scale(1.3)";
    //document.getElementById("column-right").style.transition = "2000ms";
}

