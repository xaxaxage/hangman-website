const wordsStr = 'truth ninja plain alarm giant force punch berry twins broad paper pulse furry drink viola larva chess queen stove dolor spawn pants guide troop kazoo vixen colon truck first drama rider rifle login chaos water paint trade level bunch sound hotel earth photo troop scout viola yeast river fanny stage serum jelly right skirt drill dozen medal cloth cycle count trunk fence story blush blind spank blast punch haste sleep piano horst glory plume dance frock thing ferry staff share glass cloth guard spark bench demon share toque class siege quota vault ranch faith shame spade robot chick larva thyme swath river fiber inbox skunk facet layer fairy koala patty wheat slang filth woman award truth modem riser stove'
const wordsArray = wordsStr.split(' ')
const correctLetters = []
const lettersWas = []
const letters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
const lettersArray = []
for (let letter of letters) {lettersArray.push(letter)}

const correctWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]

for (let letter of correctWord) {
    console.log(letter)
    correctLetters.push(letter)
}
console.log(correctLetters, correctWord)

window.onload = () => {
    const answer = document.getElementById('inp');
    const div = document.getElementsByClassName('p')[0]
    const word = document.getElementById('word')
    const span = document.querySelectorAll('span')
    const mistakeScore = document.getElementById('m_score')
    answer.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            console.log(lettersArray)
            if (!youStupidOrNot(lettersArray, answer)) {return false}
            if (!dublicateOrNot(answer, lettersWas, div, p)) {return false}
            correctOrNot(answer, correctLetters, word, span, mistakeScore)
            winOrLose(mistakeScore, word)
        }
    });
}

function correctOrNot(ans, massive, word, span, mistakeScore) {
    if (massive.includes(ans.value)) {       
            massive.forEach((elem, index) => {
                if (elem === ans.value) {
                    span[index].textContent = ans.value;
                    return true
            }
        })
    } else {
        mistakeScore.textContent = Number(mistakeScore.textContent) + 1
        return true
    }
}

function dublicateOrNot(ans, massive) {
    if (massive.includes(ans.value)) {
        alert('Dublicate letter!')      
        console.log('dubl')
        console.log(massive)
        return false
    }
    massive.push(ans.value)
    console.log('no dubl')
    console.log(massive)
    return true
}

function winOrLose(mistakeScore, word) {
    if (mistakeScore.textContent === '7') {
        alert('You losе!!!')
    }

    if (word.textContent === correctWord) {
        alert('You won!!!')
    }
}

function youStupidOrNot(massive, ans) {
    if (massive.includes(ans.value)) {
        return true
    }
    alert('Uncorrect input')
    return false
}


