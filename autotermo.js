async function treme() {
    response = await fetch(
        'https://gist.githubusercontent.com/un-versed/6373912fbf4649704b6823ea696cfcb1/raw/629137a0d0c7160b94c35013df8d570b31100174/termooo-wordsv2.json', {
        method: 'GET'
    });
    words = await response.json();
    values = Object.values(words);
    randomValue = values[parseInt(Math.random() * values.length)];
    tre = Array.from(randomValue);
    for (i in tre) {
        document.querySelector("body>wc-kbd").shadowRoot.querySelector("#kbd_" + tre[i] + "").click();
    }
    document.querySelector("body>wc-kbd").shadowRoot.querySelector("#kbd_enter").click();


    if (window.location.href == "https://term.ooo/") {
        setTimeout(function () {
            normSolutiont = JSON.parse(window.localStorage.termo).state;
        }, 3000);
    }
    if (window.location.href == "https://term.ooo/2/") {
        treme();
        setTimeout(function () {
            normSolutionduo = JSON.parse(window.localStorage.duo).state;
        }, 3000);
    }
    if (window.location.href == "https://term.ooo/4/") {
        setTimeout(function () {
            normSolutionquatro = JSON.parse(window.localStorage.quatro).state;
        }, 3000);
    }
};

function preenche(lk){
    for (i in lk) {
        document.querySelector("body>wc-kbd").shadowRoot.querySelector("#kbd_" + lk[i] + "").click();
    }
    document.querySelector("body>wc-kbd").shadowRoot.querySelector("#kbd_enter").click();

}

if (window.location.href == "https://term.ooo/") {
    treme();
    setTimeout(function () {
        lk = Array.from(normSolutiont[0].normSolution);
        preenche(lk);
        setTimeout(function () {
            window.location.href = "https://term.ooo/2/";
        }, 10000);
    }, 6000);
}
if (window.location.href == "https://term.ooo/2/") {
    treme();
    setTimeout(function () {
        lk = Array.from(normSolutionduo[0].normSolution);
        preenche(lk);
        setTimeout(function () {
            lk = Array.from(normSolutionduo[1].normSolution);
            preenche(lk);
            setTimeout(function () {
                window.location.href = "https://term.ooo/4/";
            }, 10000);
        }, 4000);
    }, 6000);
}
if (window.location.href == "https://term.ooo/4/") {
    treme();
    setTimeout(function () {
        lk = Array.from(normSolutionquatro[0].normSolution);
        preenche(lk);
        setTimeout(function () {
            lk = Array.from(normSolutionquatro[1].normSolution);
            preenche(lk);
            setTimeout(function () {
                lk = Array.from(normSolutionquatro[2].normSolution);
                preenche(lk);
                setTimeout(function () {
                    lk = Array.from(normSolutionquatro[3].normSolution);
                    preenche(lk);
                }, 4000);
            }, 4000);
        }, 4000);
    }, 4000);
}