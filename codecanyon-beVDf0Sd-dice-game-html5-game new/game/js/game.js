////////////////////////////////////////////////////////////
// GAME v1.8
////////////////////////////////////////////////////////////

/*!
 * 
 * GAME SETTING CUSTOMIZATION START
 * 
 */
var backgroundColour = "#fff"; //background colour
var textCredit = "[NUMBER]"; //credit text display
var textPaid = "[NUMBER]"; //paid text display
var textWin = "[NUMBER]"; //win text display
var gameCredit = 0; //game credit
var gameTimer = 0; //game timer
var finalAmount = 0; //final amount
var betAreaColour = "#A7CD2C"; //bet area colour
var betAreaHighlightColour = "#F7A21B"; //bet area highlight colour
var postData = {};

//bet options
var area_arr = [
    { x: 1355, y: 205, width: 168, height: 125, win: 1, type: ["BETWEEN[11,17]"] },
    { x: 338, y: 205, width: 168, height: 125, win: 1, type: ["BETWEEN[4,10]"] },

    { x: 1270, y: 205, width: 85, height: 72, win: 180, type: ["MATCH[6,6,6]"] }, //150
    { x: 1185, y: 205, width: 85, height: 72, win: 180, type: ["MATCH[5,5,5]"] }, //150
    { x: 1100, y: 205, width: 85, height: 72, win: 180, type: ["MATCH[4,4,4]"] }, //150
    { x: 675, y: 205, width: 85, height: 72, win: 180, type: ["MATCH[3,3,3]"] }, //150
    { x: 590, y: 205, width: 85, height: 72, win: 180, type: ["MATCH[2,2,2]"] }, //150
    { x: 505, y: 205, width: 85, height: 72, win: 180, type: ["MATCH[1,1,1]"] }, //150

    { x: 591, y: 278, width: 82, height: 55, win: 8, type: ["MATCH[2,2]"] }, //8
    { x: 675, y: 278, width: 82, height: 55, win: 8, type: ["MATCH[3,3]"] }, //8
    { x: 1186, y: 278, width: 82, height: 55, win: 8, type: ["MATCH[5,5]"] }, //8
    { x: 761, y: 205, width: 340, height: 125, win: 24, type: ["MATCH[1,1,1]", "MATCH[2,2,2]", "MATCH[3,3,3]", "MATCH[4,4,4]", "MATCH[5,5,5]", "MATCH[6,6,6]"] },
    { x: 1101, y: 278, width: 82, height: 55, win: 8, type: ["MATCH[4,4]"] }, //8
    { x: 506, y: 278, width: 82, height: 55, win: 8, type: ["MATCH[1,1]"] }, //8
    { x: 1271, y: 278, width: 82, height: 55, win: 8, type: ["MATCH[6,6]"] }, //8

    { x: 1440, y: 333, width: 83, height: 78, win: 40, type: ["TOTAL[17]"] }, //50
    { x: 1355, y: 333, width: 83, height: 78, win: 16, type: ["TOTAL[16]"] }, //18
    { x: 1270, y: 333, width: 83, height: 78, win: 12, type: ["TOTAL[15]"] }, //14
    { x: 1185, y: 333, width: 83, height: 78, win: 10, type: ["TOTAL[14]"] }, //12
    { x: 1100, y: 333, width: 83, height: 78, win: 8, type: ["TOTAL[13]"] }, //8
    { x: 1015, y: 333, width: 83, height: 78, win: 6, type: ["TOTAL[12]"] }, //6
    { x: 930, y: 333, width: 83, height: 78, win: 6, type: ["TOTAL[11]"] }, //6
    { x: 845, y: 333, width: 83, height: 78, win: 6, type: ["TOTAL[10]"] }, //6
    { x: 760, y: 333, width: 83, height: 78, win: 6, type: ["TOTAL[9]"] }, //6
    { x: 675, y: 333, width: 83, height: 78, win: 6, type: ["TOTAL[8]"] }, //6
    { x: 590, y: 333, width: 83, height: 78, win: 10, type: ["TOTAL[7]"] }, //12
    { x: 505, y: 333, width: 83, height: 78, win: 12, type: ["TOTAL[6]"] }, //14
    { x: 420, y: 333, width: 83, height: 78, win: 16, type: ["TOTAL[5]"] }, //18
    { x: 335, y: 333, width: 83, height: 78, win: 40, type: ["TOTAL[4]"] }, //50

    { x: 506, y: 522, width: 65, height: 107, win: 5, type: ["MATCH[1,2]"] }, //5
    { x: 914, y: 522, width: 65, height: 107, win: 5, type: ["MATCH[2,4]"] }, //5
    { x: 642, y: 522, width: 65, height: 107, win: 5, type: ["MATCH[1,4]"] }, //5
    { x: 846, y: 522, width: 65, height: 107, win: 5, type: ["MATCH[2,3]"] }, //5
    { x: 1118, y: 522, width: 65, height: 107, win: 5, type: ["MATCH[3,4]"] }, //5
    { x: 982, y: 522, width: 65, height: 107, win: 5, type: ["MATCH[2,5]"] }, //5
    { x: 1186, y: 522, width: 65, height: 107, win: 5, type: ["MATCH[3,5]"] }, //5
    { x: 1050, y: 522, width: 65, height: 107, win: 5, type: ["MATCH[2,6]"] }, //5
    { x: 1322, y: 522, width: 65, height: 107, win: 5, type: ["MATCH[4,5]"] }, //5
    { x: 1254, y: 522, width: 65, height: 107, win: 5, type: ["MATCH[3,6]"] }, //5
    { x: 710, y: 522, width: 65, height: 107, win: 5, type: ["MATCH[1,5]"] }, //5
    { x: 778, y: 522, width: 65, height: 107, win: 5, type: ["MATCH[1,6]"] }, //5
    { x: 1390, y: 522, width: 65, height: 107, win: 5, type: ["MATCH[4,6]"] }, //5
    { x: 1458, y: 522, width: 65, height: 107, win: 5, type: ["MATCH[5,6]"] }, //5
    { x: 574, y: 522, width: 65, height: 107, win: 5, type: ["MATCH[1,3]"] }, //5


    { x: 1327, y: 412, width: 197, height: 77, win: 1, type: ["MATCH[6]"] },
    { x: 1128, y: 412, width: 197, height: 77, win: 1, type: ["MATCH[5]"] },
    { x: 929, y: 412, width: 197, height: 77, win: 1, type: ["MATCH[4]"] },
    { x: 731, y: 412, width: 197, height: 77, win: 1, type: ["MATCH[3]"] },
    { x: 534, y: 412, width: 197, height: 77, win: 1, type: ["MATCH[2]"] },
    { x: 336, y: 412, width: 197, height: 77, win: 1, type: ["MATCH[1]"] },
    { x: 810, y: 632, width: 120, height: 60, win: 1, type: ["ODD"] },
    { x: 930, y: 632, width: 120, height: 60, win: 1, type: ["EVEN"] }
];

//token list	
var token_arr = [
    // { src: "assets/token_10.png", credit: 0.01 },
    { src: "assets/token_50.png", credit: 0.05 },
    { src: "assets/token_100.png", credit: 0.1 },
    { src: "assets/token_150.png", credit: 0.5 },
    { src: "assets/token_200.png", credit: 1 }
];

var exitMessage = "Are you sure you want\nto quit the game?"; //quit game message
let transbet = {};
//Social share, [SCORE] will replace with game score
var shareEnable = false; //toggle share
var shareTitle = "Highscore on Dice Game is [SCORE]"; //social share score title
var shareMessage = "[SCORE] is mine new highscore on Dice Game! Try it now!"; //social share score message

/*!
 *
 * GAME SETTING CUSTOMIZATION END
 *
 */

var playerData = { credit: gameCredit, creditSum: gameCredit, timer: 0, paid: 0, win: 0, bet: 0, newBet: 0, slot: [] };
var gameData = { dice: [1, 1, 1], rollInterval: null, roll: false, betNumber: 0, betNumberPlus: 0, slotID: 0, history: false };

/*!
 * 
 * GAME BUTTONS - This is the function that runs to setup button event
 * 
 */

function Notify(text) {
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        var notification = new Notification(text);
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function(permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                var notification = new Notification(text);
            }
        });
    }
}


function buildGameButton() {
    const getProvider = () => {
        if ("solana" in window) {
            const provider = window.solana;
            if (provider.isPhantom) {
                return provider;
            }
        }
        Notify("Please setup wallet")
        window.open("https://phantom.app/", "_blank");
    };
    getProvider();
    buttonStart.cursor = "pointer";
    buttonStart.addEventListener("click", function(evt) {
        buttonRoll.visible = false;
        const phantomWallet = new PhantomWallet();
        buttonStart.visible = false;
        // phantomWallet.nonnon();
        if (!phantomWallet.isConnected) {
            phantomWallet.connectWallet()
                .then(x => {
                    if (x) {
                        phantomWallet.getBalance().then(x => {
                            const balance = (x / solanaWeb3.LAMPORTS_PER_SOL).toFixed(10);
                            this.gameCredit = balance;
                            myStr = phantomWallet.walletPubkey()
                            walletId.text = myStr.substr(0, 4) + '******' + myStr.substr(myStr.length - 4, myStr.length);
                            txtCredit.text = textCredit.replace('[NUMBER]', balance);
                            playSound('soundButton');
                            goPage('game');
                            Notify("Fetched Balance from Wallet");
                            // buttonStart.visible = true;
                        }).catch(err => Notify("Not able to fetch Balance from Wallet, Please refresh the page"));
                    }
                })
        } else {
            phantomWallet.getBalance().then(x => {
                this.gameCredit = x / solanaWeb3.LAMPORTS_PER_SOL;
                myStr = phantomWallet.walletPubkey()
                walletId.text = myStr.substr(0, 4) + '******' + myStr.substr(myStr.length - 4, myStr.length);
                txtCredit.text = textCredit.replace('[NUMBER]', x / solanaWeb3.LAMPORTS_PER_SOL);
                // buttonStart.visible = true;
                playSound('soundButton');
                goPage('game');
                Notify("Fetched Balance from Wallet");
            }).catch(err =>
                Notify("Not able to fetch Balance from Wallet, Please refresh the page")
            )
        }
        buttonRoll.visible = true;
    });

    buttonHistory.cursor = "pointer";
    buttonHistory.addEventListener("click", function(evt) {
        playSound('soundButton');
        toggleHistory();
    });

    buttonRoll.cursor = "pointer";
    buttonRoll.addEventListener("click", function(evt) {
        toggleRollDiceAnimation(true);
    });

    buttonMinus.cursor = "pointer";
    buttonMinus.addEventListener("mousedown", function(evt) {
        playSound('soundChips');
        toggleBetNumber('minus');
    });
    buttonMinus.addEventListener("pressup", function(evt) {
        toggleBetNumber();
    });

    buttonPlus.cursor = "pointer";
    buttonPlus.addEventListener("mousedown", function(evt) {
        playSound('soundChips');
        toggleBetNumber('plus');
    });
    buttonPlus.addEventListener("pressup", function(evt) {
        toggleBetNumber();
    });

    buttonBet.cursor = "pointer";
    buttonBet.addEventListener("click", function(evt) {
        toggleBetOption(false);
        setBetNumber();
    });

    buttonReplay.cursor = "pointer";
    buttonReplay.addEventListener("click", function(evt) {
        playSound('soundButton');
        goPage('main');
    });
    buttonFacebook.cursor = "pointer";
    buttonFacebook.addEventListener("click", function(evt) {
        share('facebook');
    });
    buttonTwitter.cursor = "pointer";
    buttonTwitter.addEventListener("click", function(evt) {
        share('twitter');
    });
    buttonWhatsapp.cursor = "pointer";
    buttonWhatsapp.addEventListener("click", function(evt) {
        share('whatsapp');
    });

    //confirm
    buttonConfirm.cursor = "pointer";
    buttonConfirm.addEventListener("click", function(evt) {
        playSound('soundClick');
        toggleConfirm(false);
        stopGame(true);
        goPage('result');
    });

    buttonCancel.cursor = "pointer";
    buttonCancel.addEventListener("click", function(evt) {
        playSound('soundClick');
        toggleConfirm(false);
    });

    itemExit.addEventListener("click", function(evt) {});

    //options
    buttonSoundOff.cursor = "pointer";
    buttonSoundOff.addEventListener("click", function(evt) {
        toggleGameMute(true);
    });

    buttonSoundOn.cursor = "pointer";
    buttonSoundOn.addEventListener("click", function(evt) {
        toggleGameMute(false);
    });

    buttonFullscreen.cursor = "pointer";
    buttonFullscreen.addEventListener("click", function(evt) {
        toggleFullScreen();
    });

    buttonSettings.cursor = "pointer";
    buttonSettings.addEventListener("click", function(evt) {
        toggleOption();
    });

    buttonExit.cursor = "pointer";
    buttonExit.addEventListener("click", function(evt) {
        toggleConfirm(true);
        toggleOption();
    });

    buildBetAread();

    //memberpayment
    if (typeof memberData != 'undefined' && memberSettings.enableMembership) {
        playerData.credit = playerData.creditSum = 0;
        updateBetNumber();
    }
}

function buildBetAread() {
    for (n = 0; n < area_arr.length; n++) {
        $.areaBet['highlight' + n] = new createjs.Shape();
        $.areaBet['highlight' + n].graphics.beginFill(betAreaHighlightColour).drawRect(area_arr[n].x, area_arr[n].y, area_arr[n].width, area_arr[n].height);
        $.areaBet['highlight' + n].alpha = 0;

        $.areaBet['area' + n] = new createjs.Shape();
        $.areaBet['area' + n].graphics.beginFill(betAreaColour).drawRect(area_arr[n].x, area_arr[n].y, area_arr[n].width, area_arr[n].height);
        $.areaBet['area' + n].alpha = 0;

        $.areaBet['button' + n] = new createjs.Shape();
        $.areaBet['button' + n].id = n;
        $.areaBet['button' + n].cursor = "pointer";
        $.areaBet['button' + n].addEventListener("click", function(evt) {
            playSound('soundButton');

            //memberpayment
            if (typeof memberData != 'undefined' && memberSettings.enableMembership) {
                if (!checkMemberGameType()) {
                    goMemberPage('user');
                } else {
                    toggleBetOption(true, evt.target.id);
                }
            } else {
                toggleBetOption(true, evt.target.id);
            }
        });

        $.areaBet['button' + n].hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(area_arr[n].x, area_arr[n].y, area_arr[n].width, area_arr[n].height));

        boardAreaContainer.addChild($.areaBet['area' + n], $.areaBet['highlight' + n]);
        boardHighlightContainer.addChild($.areaBet['button' + n]);
        playerData.slot.push({ amount: 0, tokens: 0, update: false });
    }
}

function toggleBetButtons(con) {
    for (n = 0; n < area_arr.length; n++) {
        $.areaBet['button' + n].visible = con;
    }
}

/*!
 * 
 * DISPLAY PAGES - This is the function that runs to display pages
 * 
 */
var curPage = ''

function goPage(page) {
    curPage = page;

    mainContainer.visible = false;
    gameContainer.visible = false;
    resultContainer.visible = false;

    toggleBetButtons(false);
    var targetContainer = ''
    switch (page) {
        case 'main':
            targetContainer = mainContainer;
            updateStat();
            toggleRandomAnimation(true);
            buttonStart.visible = true;
            break;

        case 'game':
            targetContainer = gameContainer;
            startAllAnimation();
            startGame();
            break;

        case 'result':
            targetContainer = resultContainer;
            txtScore.text = playerData.win;
            stopGame();
            saveGame(playerData.win);
            playSound('soundResult');
            break;
    }

    targetContainer.visible = true;
    resizeCanvas();
}

/*!
 * 
 * START GAME - This is the function that runs to start play game
 * 
 */
function startGame() {
    playerData.credit = gameCredit;
    playerData.creditSum = gameCredit;
    playerData.paid = 0;
    playerData.win = 0;
    playerData.bet = 0;

    //memberpayment
    if (typeof memberData != 'undefined' && memberSettings.enableMembership) {
        playerData.credit = playerData.creditSum = memberData.point;
        if (!checkMemberGameType()) {
            goMemberPage('user');
        }
    }

    toggleBetNumber();
    toggleBetOption(false);
    updateStat();
    clearHistory();
    toggleRollDiceButton('notready');
    toggleGameTimer(true);
}

/*!
 * 
 * STOP GAME - This is the function that runs to stop play game
 * 
 */
function stopGame() {
    toggleGameTimer(false);
    gameData.rollInterval = null;
    toggleGameTimer(false);
    resetBoard();
}

/*!
 * 
 * SAVE GAME - This is the function that runs to save game
 * 
 */
function saveGame(score) {
    if (typeof toggleScoreboardSave == 'function') {
        $.scoreData.score = score;
        if (typeof type != 'undefined') {
            $.scoreData.type = type;
        }
        toggleScoreboardSave(true);
    }

    /*$.ajax({
      type: "POST",
      url: 'saveResults.php',
      data: {score:score},
      success: function (result) {
         // console.log(result);
      }
    });*/
}

/*!
 * 
 * BET AREA SINGLE ANIMATION - This is the function that runs to animate bet area
 * 
 */
var animationSpeed = .3;

function toggleRandomAnimation(con, num) {
    if (con) {
        var randomBetNum = Math.floor(Math.random() * area_arr.length);
        TweenMax.to($.areaBet['area' + randomBetNum], animationSpeed, { alpha: 1, overwrite: true, onComplete: toggleRandomAnimation, onCompleteParams: [false, randomBetNum] });
    } else {
        TweenMax.to($.areaBet['area' + num], animationSpeed, { alpha: 0, overwrite: true, onComplete: toggleRandomAnimation, onCompleteParams: [true] });
    }
}

function killRandomAnimation() {
    for (n = 0; n < area_arr.length; n++) {
        TweenMax.killTweensOf($.areaBet['area' + n]);
        $.areaBet['area' + n].alpha = 0;
    }
}

/*!
 * 
 * BET AREA ALL ANIMATION - This is the function that runs to animate bet area
 * 
 */
function startAllAnimation() {
    killRandomAnimation();
    animationCount = 0;
    for (n = 0; n < area_arr.length; n++) {
        fadeArea(n, true);
    }

    setTimeout(function() { playSound('soundTone'); }, 500);
}

var animationSpeedAll = .5;
var animationCount = 0;

function fadeArea(n, con) {
    if (con) {
        TweenMax.to($.areaBet['area' + n], animationSpeedAll, { delay: .5, alpha: 1, overwrite: true, onComplete: fadeArea, onCompleteParams: [n, false] });
    } else {
        TweenMax.to($.areaBet['area' + n], animationSpeedAll, { alpha: 0, overwrite: true, onComplete: returnAnimation });
    }
}

function returnAnimation() {
    animationCount++;
    if (animationCount > area_arr.length - 1) {
        toggleBetButtons(true);
    }
}

/*!
 * 
 * GAME TIMER - This is the function that runs for game timer
 * 
 */
var gameTimerInterval = null;
var gameTimerUpdate = false;
var nowDate;
var beforeDate;
var accumulateTimer = 0;
var elapsedTime = 0;

function toggleGameTimer(con) {
    playerData.timer = 0;
    updateTimer();

    if (con) {
        accumulateTimer = 0;
        elapsedTime = 0;
        beforeDate = new Date();
    }
    gameTimerUpdate = con;
}

function toggleGameTimerPause(con) {
    if (con) {
        gameTimerUpdate = false;
        accumulateTimer += elapsedTime;
    } else {
        gameTimerUpdate = true;
        beforeDate = new Date();
    }
}

/*!
 * 
 * GAME LOOP - This is the function that runs to loop game
 * 
 */
function updateGame() {
    if (gameTimerUpdate) {
        nowDate = new Date();
        elapsedTime = (nowDate.getTime() - beforeDate.getTime());
        playerData.timer = (Number(gameTimer) - (elapsedTime + accumulateTimer));

        // updateTimer();
        // if (playerData.timer <= 0) {
        //     goPage('result');
        // }
    }

    if (gameData.roll) {
        randomDice(diceAnimate1);
        randomDice(diceAnimate2);
        randomDice(diceAnimate3);
    }
}

/*!
 * 
 * UPDATE GAME TIMER - This is the function that runs to update game timer
 * 
 */
function updateTimer() {
    // txtTime.text = millisecondsToTime(playerData.timer);
}


/*!
 * 
 * TOGGLE ROLL DICE BUTTON - This is the function that runs to toggle roll button
 * 
 */
function toggleRollDiceButton(con) {
    buttonRollDisabled.visible = buttonRoll.visible = false;

    if (con == 'ready') {
        buttonRoll.visible = true;
    } else if (con == 'notready') {
        //if(history_arr.length == 0)
        buttonRollDisabled.visible = true;
    }
}

/*!
 * 
 * TOGGLE ROLL DICE ANIMATION - This is the function that runs to toggle roll animation
 * 
 */
async function toggleRollDiceAnimation(con) {
    const phantomWallet = cryptoUtils.phantomWallet;

    if (con == true) {
        document.getElementById("gif").style.display = "block";
        await phantomWallet.requestTransaction(playerData.bet).then(result => {
            {
                transbet = {
                    "walletID": phantomWallet.wallet_pubkey,
                    "gameName": "Dice Game",
                    "userTransactionID": result,
                    "typeOfPlay": "SOL",
                    "betAmount": playerData.bet,
                };
                // console.log(transbet);
                Notify("Transaction Successful");
                document.getElementById("gif").style.display = "none";
                con = true;
                playSound('soundDice');
                toggleRollDiceButton();
                toggleBetOption(false);
            }
        }).catch((err) => {
            Notify("Please Approve Transaction");
            document.getElementById("gif").style.display = "none";
            con = false
            buttonRollDisabled.visible = false;
        });
    }
    if (con == true) {
        //memberpayment
        if (typeof memberData != 'undefined' && memberSettings.enableMembership) {
            updateUserPoint();
        }
        gameData.roll = true;
        gameData.rollInterval = setInterval(function() {
            toggleRollDiceAnimation(false);
            toggleBetButtons(false);
            checkBetWinAnimation();
        }, 1000);
    } else {
        gameData.roll = false;
        clearInterval(gameData.rollInterval);
        gameData.rollInterval = null;
    }
}

function randomDice(obj) {
    var diceNum = randomIntFromInterval(1, 6);
    obj.gotoAndStop(diceNum);
}

/*!
 * 
 * TOGGLE BET OPTION - This is the function that runs to toggle bet option
 * 
 */
var betNumberInterval = null;
var betNumberTimer = 0;
var betNumberTimerMax = 300;
var betNumberTimerMin = 10;
var thisSlotBet = 0;

function toggleBetOption(con, id) {
    betContainer.visible = con;

    if (con) {
        toggleBetButtons(false);
        gameData.betNumberPlus = 0;
        gameData.betNumber = 0;

        gameData.slotID = id;
        if (playerData.slot[id].amount != 0) {
            gameData.betNumber = playerData.slot[id].amount;
            playerData.newBet = playerData.bet - gameData.betNumber;
            playerData.bet = playerData.newBet;
        }
        updateBetNumber();
    } else {
        toggleBetButtons(true);
    }
}

/*!
 * 
 * SET BET NUMBER - This is the function that runs to set bet number
 * 
 */
function setBetNumber() {
    var updateBet = false;
    var readyBet = false;
    // console.log(gameData);
    playSound('soundChipsPlace');
    // console.log(playerData.slot[gameData.slotID].amount);
    if (playerData.slot[gameData.slotID].amount != gameData.betNumber) {
        playerData.slot[gameData.slotID].amount = gameData.betNumber;
        updateBet = true;
    }
    // tokenContainer.removeAllChildren();
    // console.log(updateBet);
    // console.log(playerData);
    for (n = 0; n < playerData.slot.length; n++) {
        $.areaBet['area' + n].alpha = 0;
        if (playerData.slot[n].amount > 0) {
            $.areaBet['area' + n].alpha = 1;
            readyBet = true;
            if (gameData.slotID == n) {
                if (updateBet) {
                    placeToken(n, playerData.slot[n].amount);
                }
            }
        } else {
            if (gameData.slotID == n) {
                // console.log(updateBet);
                // console.log(gameData.slotID);
                if (updateBet) {
                    placeToken(n, playerData.slot[n].amount);
                }
            }
        }
    }
    playerData.bet = playerData.newBet;
    playerData.creditSum = playerData.credit - playerData.bet;
    updateStat();

    if (readyBet) {
        toggleRollDiceButton('ready');
    } else {
        toggleRollDiceButton('notready');
    }
}


/*!
 * 
 * PLACE TOKEN - This is the function that runs place token
 * 
 */
var totalTokenNum = 0;

function placeToken(slot, betNumber, anime) {
    // console.log(slot);
    // console.log(betNumber);
    // console.log(anime)
    var tokenTotal_arr = [];
    var checkBetNumber = Number(betNumber).toFixed(3);

    //remove old tokens
    for (t = 0; t < playerData.slot[slot].tokens; t++) {
        // console.log("Hi");
        tokenContainer.removeChild($.token[slot + '-' + t]);
    }
    playerData.slot[slot].tokens = 0;
    // console.log(token_arr.length);
    // console.log(checkBetNumber);
    for (t = token_arr.length - 1; t >= 0; t--) {
        if (checkBetNumber >= token_arr[t].credit) {
            // console.log(checkBetNumber)
            tokenTotal_arr.push(t);
            // console.log(tokenTotal_arr)
            checkBetNumber -= token_arr[t].credit;
            checkBetNumber = Number(checkBetNumber).toFixed(3);
            t++;
        }
    }
    // console.log(tokenTotal_arr);
    var playSoundOnce = false;
    for (t = 0; t < tokenTotal_arr.length; t++) {
        playerData.slot[slot].tokens++;

        var rangeX = area_arr[slot].width / 100 * 10;
        var rangeY = area_arr[slot].height / 100 * 10;
        var randomX = Math.random() * rangeX - (rangeX / 2);
        var randomY = Math.random() * rangeX - (rangeX / 2);
        $.token[slot + '-' + t] = $.token['token' + tokenTotal_arr[t]].clone();
        $.token[slot + '-' + t].x = area_arr[slot].x + (area_arr[slot].width / 2) + randomX;
        $.token[slot + '-' + t].y = area_arr[slot].y + (area_arr[slot].height / 2) + randomY;
        $.token[slot + '-' + t].slot = slot;

        tokenContainer.addChild($.token[slot + '-' + t]);

        if (anime) {
            if (!playSoundOnce) {
                playSoundOnce = true;
                setTimeout(function() { playSound('soundChipsCollect'); }, 600);
            }
            TweenMax.from($.token[slot + '-' + t], .5, { delay: .6, x: canvasW / 2, y: -100, overwrite: true });
        }

        totalTokenNum++;
    }
}

/*!
 * 
 * ADD/DEDUCT BET NUMBER - This is the function that runs to add or deduct bet number
 * 
 */
function toggleBetNumber(con) {
    if (con == 'plus') {
        gameData.betNumberPlus = token_arr[0].credit;
    } else if (con == 'minus') {
        gameData.betNumberPlus = -(token_arr[0].credit);
    } else {
        gameData.betNumberPlus = 0;
    }

    if (con != undefined) {
        betNumberTimer = betNumberTimerMax;
        loopBetNumber();
    } else {
        clearInterval(betNumberInterval);
        betNumberInterval = null;
    }
}

function loopBetNumber() {
    clearInterval(betNumberInterval);
    betNumberInterval = setInterval(loopBetNumber, betNumberTimer);
    betNumberTimer -= 100;
    betNumberTimer = betNumberTimer < betNumberTimerMin ? betNumberTimerMin : betNumberTimer;

    updateBetNumber();
}

function updateBetNumber() {
    var availableCredit = playerData.credit - playerData.bet;
    gameData.betNumber += gameData.betNumberPlus;
    gameData.betNumber = gameData.betNumber <= 0 ? 0 : gameData.betNumber;
    gameData.betNumber = gameData.betNumber >= availableCredit ? availableCredit : gameData.betNumber;
    txtBetNumber.text = gameData.betNumber.toFixed(2);

    playerData.newBet = playerData.bet + gameData.betNumber;
    playerData.creditSum = (playerData.credit - playerData.newBet).toFixed(10);

    updateStat();
}

/*!
 * 
 * UPDATE STAT - This is the function that runs to update stat
 * 
 */

function updateStat() {
    txtCredit.text = textCredit.replace('[NUMBER]', Number(playerData.creditSum).toFixed(7));
    txtPaid.text = textPaid.replace('[NUMBER]', (playerData.paid).toFixed(6));
    txtWin.text = textWin.replace('[NUMBER]', (playerData.win).toFixed(6));
}

/*!
 * 
 * CHECK BET WIN - This is the function that runs to check bet win
 * 
 */
var playWinSound = false;
var winslot_arr = [];
var bet_array_slots = [];

function checkBetWinAnimation() {
    gameData.dice[0] = Number(diceAnimate1.currentFrame + 1);
    gameData.dice[1] = Number(diceAnimate2.currentFrame + 1);
    gameData.dice[2] = Number(diceAnimate3.currentFrame + 1);

    var paid = 0;
    var win = 0;
    var winRemain = 0;
    animationCompleteReady = false;
    animateChipsOnce = false;
    playWinSound = false;
    winslot_arr = [];
    bet_array_slots = [];
    for (n = 0; n < playerData.slot.length; n++) {
        if (playerData.slot[n].amount > 0) {
            bet_array_slots.push({
                "amount": playerData.slot[n].amount,
                "betArea": area_arr[n].type.toString(),
                "multiplier": area_arr[n].win,
            })
            paid += playerData.slot[n].amount;
            if (checkWinType(area_arr[n].type)) {
                winRemain += playerData.slot[n].amount;
                // console.log(winRemain);
                win += playerData.slot[n].amount * area_arr[n].win;
                // console.log(win);
                winslot_arr.push({ slot: n, amount: playerData.slot[n].amount * area_arr[n].win });
                // console.log(winslot_arr);
                playWinSound = true;
            };
        }

        if (checkWinType(area_arr[n].type)) {
            $.areaBet['highlight' + n].animateType = 0;
            animateWinArea($.areaBet['highlight' + n], n);
        } else {
            $.areaBet['highlight' + n].alpha = 0;
        };
    }

    //memberpayment
    if (typeof memberData == 'undefined') {
        playerData.credit -= paid;
    }
    finalAmount = win + winRemain;
    playerData.credit += win;
    playerData.credit += winRemain;
    playerData.paid += paid;
    playerData.win += win;
    playerData.bet = 0;

    playerData.creditSum = playerData.credit - playerData.bet;
    let diceSum = 0;
    for (let i = 0; i < gameData.dice.length; i++) {
        diceSum += gameData.dice[i];
    }
    // console.log(diceSum);
    postData = {
            ...transbet,
            "betNumbers": bet_array_slots,
            "gameDice": gameData.dice.toString(),
            "amountWon": finalAmount,
            "diceSumResult": diceSum,
            "gameResult": playerData.win > 0 ? "WIN" : "LOSS",
            "amountLost": playerData.win >= transbet['betAmount'] ? 0 : Number(transbet['betAmount'] - playerData.win),
            'amountPaid': (playerData.win - (playerData.win * 0.015)),
        }
        // console.log(postData);
    axios.post(`${DB_URL}/api/diceGame`, {
        ...postData
    });
    //memberpayment
    if (typeof memberData != 'undefined' && memberSettings.enableMembership) {
        updateUserPoint();
    }
}

var animationCompleteReady = false;
var animateChipsOnce = false;

function animateWinArea(obj, n) {
    var alphaNum = 0;
    var delayNum = 0;
    var tweenFunc = animateWinArea;

    if (obj.animateType == 0) {
        alphaNum = 0;
        delayNum = .5;
    }
    if (obj.animateType == 1) {
        alphaNum = 1;
        playSound('soundTone');
    } else if (obj.animateType == 2) {
        alphaNum = 0;
    } else if (obj.animateType == 3) {
        alphaNum = 1;
        playSound('soundTone');
    } else if (obj.animateType == 4) {
        alphaNum = 1;
        delayNum = 2;
        tweenFunc = animateWinAreComplete;

        if (!animateChipsOnce) {
            if (playWinSound) {
                playSound('soundWin1');
            }

            animateChipsOnce = true;
            animateWinChips();
        }
    }

    obj.animateType++;
    TweenMax.to(obj, .3, { delay: delayNum, alpha: alphaNum, overwrite: true, onComplete: tweenFunc, onCompleteParams: [obj, n] });
}

function animateWinAreComplete() {
    if (!animationCompleteReady) {
        if (winslot_arr.length > 0) {
            playSound('soundChipsCollect');
        }
        animationCompleteReady = true;
        insertHistory();

        if (playerData.credit <= 0) {
            playerData.creditSum = 0;
            goPage('result');
        } else {
            toggleBetButtons(true);
        }
        updateStat();
    }
    resetBoard();
}

function animateWinChips() {
    var playSoundOnce = false;
    for (n = 0; n < area_arr.length; n++) {
        if (playerData.slot[n].amount > 0) {
            var exist = false;
            for (w = 0; w < winslot_arr.length; w++) {
                if (winslot_arr[w].slot == n) {
                    exist = true;
                }
            }

            if (!exist) {
                if (!playSoundOnce) {
                    playSoundOnce = true;
                    playSound('soundChipsCollect');
                }
                for (t = 0; t < playerData.slot[n].tokens; t++) {
                    TweenMax.to($.token[n + '-' + t], .5, { x: canvasW / 2, y: -100, overwrite: true });
                }
            }
        }
    }
    // console.log(winslot_arr);
    for (w = 0; w < winslot_arr.length; w++) {
        placeToken(winslot_arr[w].slot, winslot_arr[w].amount, true);
    }
}

/*!
 * 
 * RESET BOARD - This is the function that runs to reset board
 * 
 */
function resetBoard() {
    playerData.bet = 0;
    tokenContainer.removeAllChildren();

    var readyBet = false;
    for (n = 0; n < area_arr.length; n++) {
        playerData.slot[n].amount = 0;
        playerData.slot[n].tokens = 0;

        TweenMax.killTweensOf($.areaBet['area' + n]);
        TweenMax.killTweensOf($.areaBet['highlight' + n]);

        $.areaBet['area' + n].alpha = 0;
        $.areaBet['highlight' + n].alpha = 0;
    }
}

/*!
 * 
 * CHECK WIN TYPE - This is the function that runs to check win type
 * 
 */
function checkWinType(type) {
    var dice_arr = [];
    var match_arr = [];
    var totalNum = 0;
    var totalDiceNum = 0;

    for (d = 0; d < gameData.dice.length; d++) {
        dice_arr.push(gameData.dice[d]);
    }

    for (w = 0; w < type.length; w++) {
        if (type[w].substring(0, 5) == 'MATCH') {
            match_arr = type[w].substring(6, type[w].length - 1).split(',');

            var matchNum = 0;
            for (m = 0; m < match_arr.length; m++) {
                var matchDiceNum = dice_arr.indexOf(Number(match_arr[m]));
                if (matchDiceNum != -1) {
                    dice_arr.splice(matchDiceNum, 1);
                    matchNum++;
                }
            }

            if (matchNum == match_arr.length) {
                return true;
            }
        } else if (type[w].substring(0, 5) == 'TOTAL') {
            totalNum = Number(type[w].substring(6, type[w].length - 1));
            totalDiceNum = Number(gameData.dice[0]) + Number(gameData.dice[1]) + Number(gameData.dice[2]);

            if (totalNum == totalDiceNum) {
                return true;
            }
        } else if (type[w].substring(0, 7) == 'BETWEEN') {
            match_arr = type[w].substring(8, type[w].length - 1).split(',');
            totalDiceNum = Number(gameData.dice[0]) + Number(gameData.dice[1]) + Number(gameData.dice[2]);

            if (totalDiceNum >= match_arr[0] && totalDiceNum <= match_arr[1]) {
                return true;
            }
        } else if (type[w].substring(0, 3) == 'ODD') {
            totalDiceNum = Number(gameData.dice[0]) + Number(gameData.dice[1]) + Number(gameData.dice[2]);
            // console.log(totalDiceNum);
            if (totalDiceNum % 2 == 1) {
                return true;
            }
        } else if (type[w].substring(0, 4) == 'EVEN') {
            totalDiceNum = Number(gameData.dice[0]) + Number(gameData.dice[1]) + Number(gameData.dice[2]);
            // console.log(totalDiceNum);
            if (totalDiceNum % 2 == 0) {
                return true;
            }
        }
        // else if (type[w].substring(0, 6) == "SINGLE") {
        //     match_arr = type[w].substring(7, type[w].length - 1).split(',');
        //     let gamediceNum = gameData.dice;
        // }
    }

    return false;
}

/*!
 * 
 * TOGGLE HISTORY PANEL - This is the function that runs to toggle history panel
 * 
 */
function toggleHistory() {
    var moveX = 0;
    if (gameData.history) {
        gameData.history = false;
        moveX = canvasW;
    } else {
        gameData.history = true;
        moveX = canvasW / 100 * -2;
    }
    TweenMax.to(historyContainer, .3, { x: -moveX, overwrite: true });
}

/*!
 * 
 * DICE HISTORY - This is the function that runs to insert/remove dice history list
 * 
 */
var history_arr = [];

function insertHistory() {
    if (history_arr.length >= 15) {
        history_arr.splice(history_arr.length - 3, 3);
    }

    history_arr.unshift(gameData.dice[2]);
    history_arr.unshift(gameData.dice[1]);
    history_arr.unshift(gameData.dice[0]);

    var startHistoryNum = (history_arr.length - 1) - 3;
    for (n = 0; n < 15; n++) {
        $.historyDice[n].visible = false;
        if (n < history_arr.length) {
            $.historyDice[n].gotoAndStop(Number(history_arr[n]) - 1);
            $.historyDice[n].visible = true;
        }
    }
    buttonHistory.visible = true;
}

function clearHistory() {
    buttonHistory.visible = false;
    history_arr = [];
    for (n = 0; n < 24; n++) {
        $.historyDice[n].visible = false;
    }
}

/*!
 * 
 * MILLISECONDS CONVERT - This is the function that runs to convert milliseconds to time
 * 
 */
function millisecondsToTime(milli) {
    var milliseconds = milli % 1000;
    var seconds = Math.floor((milli / 1000) % 60);
    var minutes = Math.floor((milli / (60 * 1000)) % 60);

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
}

/*!
 * 
 * CONFIRM - This is the function that runs to toggle confirm
 * 
 */
function toggleConfirm(con) {
    confirmContainer.visible = con;
    toggleGameTimerPause(con);

    if (con) {
        TweenMax.pauseAll(true, true);
    } else {
        TweenMax.resumeAll(true, true);
    }
}

/*!
 * 
 * OPTIONS - This is the function that runs to toggle options
 * 
 */

function toggleOption() {
    if (optionsContainer.visible) {
        optionsContainer.visible = false;
    } else {
        optionsContainer.visible = true;
    }
}

/*!
 * 
 * OPTIONS - This is the function that runs to mute and fullscreen
 * 
 */
function toggleGameMute(con) {
    buttonSoundOff.visible = false;
    buttonSoundOn.visible = false;
    toggleMute(con);
    if (con) {
        buttonSoundOn.visible = true;
    } else {
        buttonSoundOff.visible = true;
    }
}

function toggleFullScreen() {
    if (!document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

/*!
 * 
 * SHARE - This is the function that runs to open share url
 * 
 */
function share(action) {
    gtag('event', 'click', { 'event_category': 'share', 'event_label': action });

    var loc = location.href
    loc = loc.substring(0, loc.lastIndexOf("/") + 1);
    var title = '';
    var text = '';
    title = shareTitle.replace("[SCORE]", playerData.win);
    text = shareMessage.replace("[SCORE]", playerData.win);
    var shareurl = '';

    if (action == 'twitter') {
        shareurl = 'https://twitter.com/intent/tweet?url=' + loc + '&text=' + text;
    } else if (action == 'facebook') {
        shareurl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(loc + 'share.php?desc=' + text + '&title=' + title + '&url=' + loc + '&thumb=' + loc + 'share.jpg&width=590&height=300');
    } else if (action == 'google') {
        shareurl = 'https://plus.google.com/share?url=' + loc;
    } else if (action == 'whatsapp') {
        shareurl = "whatsapp://send?text=" + encodeURIComponent(text) + " - " + encodeURIComponent(loc);
    }

    window.open(shareurl);
}
window.onbeforeunload = () => {
    return "Data will be lost if you leave the page, are you sure?";
};