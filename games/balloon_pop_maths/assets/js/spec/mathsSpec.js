describe("JavaScript Maths Function Library Testing Utilities", function () {
    let qNoArray = [10, 20];
    let gameModeArray = ["multiply", "divide", "add", "subtract"];

    for (let qni = 0; qni < qNoArray.length; qni++) {
        let qNo = qNoArray[qni];
        for (let gmi = 0; gmi < gameModeArray.length; gmi++) {
            let gameMode = gameModeArray[gmi];

            let optionsToCheck;
            if (gameMode == "multiply") {
                optionsToCheck = [["2x, 5x, 10x"], ["1 dan 12 gacha"], ["1x"], ["2x"], ["3x"], ["4x"], ["5x"], ["6x"], ["7x"], ["8x"], ["9x"], ["10x"], ["11x"], ["12x"], ["1x", "2x", "3x", "4x", "5x", "6x"], ["7x", "8x", "9x", "10x", "11x", "12x"]];
            } else if (gameMode == "divide") {
                optionsToCheck = [["÷2, ÷5, ÷10"], ["1 dan 12 gacha"], ["÷1"], ["÷2"], ["÷3"], ["÷4"], ["÷5"], ["÷6"], ["÷7"], ["÷8"], ["÷9"], ["÷10"], ["÷11"], ["÷12"], ["÷1", "÷2", "÷3", "÷4", "÷5", "÷6"], ["÷7", "÷8", "÷9", "÷10", "÷11", "÷12"]];
            } else if (gameMode == "add" || gameMode == "subtract") {
            optionsToCheck = [["10 gacha"], ["20 gacha"], ["50 gacha"], ["100 gacha"]];
            }

            for (let oni = 0; oni < optionsToCheck.length; oni++) {
                let optionArray = optionsToCheck[oni];
                let teststr = "returnQuestionArray " + gameMode + " " + optionArray + " " + qNo + " Savollar";

                it(teststr, function () {
                    let qArray = returnQuestionArray(gameMode, optionArray, qNo);
                    expect(qArray).toBeInstanceOf(Array);
                    expect(qArray).toHaveSize(qNo);
                });
            }
        }
    }

    for (let tno = 1; tno < 13; tno++) {
        let teststr = "returnMultiplicationQuestion " + tno;

        it(teststr, function () {
            let mQ = returnMultiplicationQuestion(tno);
            let mQstr = mQ[0];
            let mQno = mQ[1];
            let mQArray = mQstr.split(" ");
            let mQtno1 = Number(mQArray[0]);
            let mQtno2 = Number(mQArray[2]);
            expect(mQ).toBeInstanceOf(Array);
            expect(mQ).toHaveSize(2);
            expect(mQstr).toBeInstanceOf(String);
            expect(mQno).toBeInstanceOf(Number);
            expect(mQno).toBe(mQtno1 * mQtno2);
        });
    }

    for (let dno = 1; dno < 13; dno++) {
        let teststr = "returnDivisionQuestion " + dno;

        it(teststr, function () {
            let dQ = returnDivisionQuestion(dno);
            let dQstr = dQ[0];
            let dQno = dQ[1];
            let dQArray = dQstr.split(" ");
            let dQtno1 = Number(dQArray[0]);
            let dQtno2 = Number(dQArray[2]);
            expect(dQ).toBeInstanceOf(Array);
            expect(dQ).toHaveSize(2);
            expect(dQstr).toBeInstanceOf(String);
            expect(dQno).toBeInstanceOf(Number);
            expect(dQno).toBe(dQtno1 / dQtno2);
        });
    }

    let maxSumArray = [10, 20, 50, 100];
    for (let msi = 0; msi < maxSumArray.length; msi++) {
        let maxsum = maxSumArray[msi];
        let teststr = "returnAdditionQuestion " + maxsum;

        it(teststr, function () {
            let aQ = returnAdditionQuestion(maxsum);
            let aQstr = aQ[0];
            let aQno = aQ[1];
            let aQArray = aQstr.split(" ");
            let aQtno1 = Number(aQArray[0]);
            let aQtno2 = Number(aQArray[2]);
            expect(aQ).toBeInstanceOf(Array);
            expect(aQ).toHaveSize(2);
            expect(aQstr).toBeInstanceOf(String);
            expect(aQno).toBeInstanceOf(Number);
            expect(aQno).toBe(aQtno1 + aQtno2);
        });
    }

    maxSumArray = [10, 20, 50, 100];
    for (let msi = 0; msi < maxSumArray.length; msi++) {
        let maxsum = maxSumArray[msi];
        let teststr = "returnSubtractionQuestion " + maxsum;
        it(teststr, function () {
            let sQ = returnSubtractionQuestion(maxsum);
            let sQstr = sQ[0];
            let sQno = sQ[1];
            let sQArray = sQstr.split(" ");
            let sQtno1 = Number(sQArray[0]);
            let sQtno2 = Number(sQArray[2]);
            expect(sQ).toBeInstanceOf(Array);
            expect(sQ).toHaveSize(2);
            expect(sQstr).toBeInstanceOf(String);
            expect(sQno).toBeInstanceOf(Number);
            expect(sQno).toBe(sQtno1 - sQtno2);
        });
    }

    it("checkQuestionArray", function () {
        let qArray = [["5 x 9", 45], ["2 x 1", 2], ["2 x 12", 24]];

        let qaC = checkQuestionArray(["2 x 1", 2], qArray);
        expect(qaC).toBe(true);
        qaC = checkQuestionArray(["2 x 2", 4], qArray);
        expect(qaC).toBe(false);
    });

    it("answerArray", function () {
        let qArray = answerArray("multiply", ["2 x 10", 20]);
        expect(qArray).toBeInstanceOf(Array);
        expect(qArray).toHaveSize(6);
    });

    for (let ttk1 = 1; ttk1 < 13; ttk1++) {
        for (let ttk2 = 1; ttk2 < 13; ttk2++) {
            let qstr = ttk1 + " x " + ttk2;
            let qa = (ttk1 * ttk2);
            let qCurrent = [qstr, qa];
            let teststr = "wrongAnswersMultiplication " + qCurrent;

            it(teststr, function () {
                let qArray = wrongAnswersMultiplication(qCurrent);
                expect(qArray).toBeInstanceOf(Array);
                expect(qArray).toHaveSize(5);
            });
        }
    }

    for (let ttk1 = 1; ttk1 < 13; ttk1++) {
        for (let ttk2 = 1; ttk2 < 13; ttk2++) {
            let sum = (ttk1 * ttk2);
            let qstr = sum + " &divide " + ttk2;
            let qa = (sum / ttk2);
            let qCurrent = [qstr, qa];
            let teststr = "wrongAnswersDivision " + qCurrent;
            it(teststr, function () {
                let qArray = wrongAnswersDivision(qCurrent);
                expect(qArray).toBeInstanceOf(Array);
                expect(qArray).toHaveSize(5);
            });
        }
    }

    for (let ttk1 = 1; ttk1 < 51; ttk1++) {
        for (let ttk2 = 1; ttk2 < 51; ttk2++) {
            let qstr = ttk1 + " + " + ttk2;
            let qa = (ttk1 + ttk2);
            let qCurrent = [qstr, qa];
            let teststr = "wrongAnswersAddition " + qCurrent;

            it(teststr, function () {
                let qArray = wrongAnswersAddition(qCurrent);
                expect(qArray).toBeInstanceOf(Array);
                expect(qArray).toHaveSize(5);
            });
        }
    }    
    
    for (let ttk1 = 1; ttk1 < 100; ttk1++) {
        for (let ttk2 = 1; ttk2 < 100; ttk2++) {
            let minno = Math.min(ttk1, ttk2);
            let maxno = Math.max(ttk1, ttk2);
            let qstr = maxno + " - " + minno;
            let qa = (maxno - minno);
            let qCurrent = [qstr, qa];
            let teststr = "wrongAnswersSubtraction " + qCurrent;

            it(teststr, function () {
                let qArray = wrongAnswersSubtraction(qCurrent);
                expect(qArray).toBeInstanceOf(Array);
                expect(qArray).toHaveSize(5);
            });
        }
    }

    it("wrongAnswerArrayComplete", function () {
        let qArray =  wrongAnswerArrayComplete([6, 8, 9], 10, 4, 12);
        expect(qArray).toBeInstanceOf(Array);
        expect(qArray).toHaveSize(5);
    });

    it("getRandomIntInclusive", function () {
        let rInt = getRandomIntInclusive(1, 20);
        expect(rInt).toBeInstanceOf(Number);
        expect(rInt).toBeGreaterThan(0);
        expect(rInt).toBeLessThan(21);
    });

    it("shuffleArray", function () {
        let qArray =  shuffleArray([6, 8, 9, 10, 12, 14]);
        expect(qArray).toBeInstanceOf(Array);
        expect(qArray).toHaveSize(6);
    });

});
