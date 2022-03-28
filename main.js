const DATA = [
    // первый вопрос
    {
        questions: 'За чей счет финансируется обучение и проверка знаний работников по безопасности и охраны труда',
        answers: [
            {
                id: '1',
                value: 'За счет средств бюджета службы охраны труда',
                correct: false,
            },
            {
                id: '2',
                value: 'За счет работника или с последующим удержанием с его заработанной платы',
                correct: false,
            },
            {
                id: '3',
                value: 'За счет государственного бюджета РК',
                correct: false,
            },
            {
                id: '4',
                value: ' За счет средств работодателя',
                correct: true,
            },
        ]
    },
    // второй вопрос
    {
        questions: 'Требования правил техники безопасности при перерыве в работе по наряду-допуску',
        answers: [
            {
                id: '4',
                value: 'Бригаду необходимо удалить с рабочего места. При этом наряд остается у руководителя, производителя работ (наблюдающего)',
                correct: true,
            },
            {
                id: '5',
                value: 'Бригаду необходимо удалить с рабочего места, при этом производитель работ (наблюдающий) остается на рабочем месте',
                correct: false,
            },
            {
                id: '6',
                value: ' Бригада остается на рабочем месте',
                correct: false,
            },
            {
                id: '7',
                value: 'Оформляется временное окончание работ',
                correct: false,
            },
        ]
    },
    // третий вопрос
    {
        questions: 'Нагрузка на леса, и грузоподъемные площадки указывается в документах',
        answers: [
            {
                id: '8',
                value: 'Установленной заводом-изготовителем',
                correct: false,
            },
            {
                id: '9',
                value: 'Установленной техническим заданием',
                correct: false,
            },
            {
                id: '10',
                value: 'Установленной проектным (паспортом)',
                correct: false,
            },
            {
                id: '11',
                value: 'Верны 1 и 3 варианты',
                correct: true,
            },
        ]
    },
    // четвертый вопрос
    {
        questions: 'Должны ли лица, принятые на работу проходить обучение и проверку знаний по вопросам БиОТ',
        answers: [
            {
                id: '12',
                value: ' Не должны',
                correct: false,
            },
            {
                id: '13',
                value: 'Должны',
                correct: true,
            },
            {
                id: '14',
                value: 'Если срок контракта больше 6 месяцев',
                correct: false,
            },
            {
                id: '15',
                value: 'Нет требования по данному вопросу',
                correct: false,
            },
        ]
    },
    // пятый вопрос
    {
        questions: 'Работники не прошедшие обучение, проверку знаний и инструктаж по БиОТ к работе _____:',
        answers: [
            {
                id: '16',
                value: ' Допускаются на время прохождения испытательного срока',
                correct: false,
            },
            {
                id: '17',
                value: 'Не допускаются',
                correct: true,
            },
            {
                id: '18',
                value: 'Допускаются на определенный срок',
                correct: false,
            },
            {
                id: '19',
                value: 'Верны 1 и 3 варианты',
                correct: false,
            },
        ]
    },
];

let localResults = {};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestar = document.getElementById('btn-restart');

const renderQustions = (index) => {
    renderIndicator(index + 1);

    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers
        .map((answer) => `
            <li class="answers-li">
                <label>
                    <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                    ${answer.value}
                </label>
            </li>
            `)
        .join('');

    questions.innerHTML = `
            <div class="quiz-questions-item">
                <div class="quiz-questions-item__question">${DATA[index].questions}</div>
                <ul class="quiz-questions-item__answers">${renderAnswers()}</ul>
            </div>`;
}
const renderResults = () => {
    let content = '';

    const getClassname = (answer, questionIndex) => {
        let classname = '';

        if(!answer.correct && answer.id === localResults[questionIndex]) {
            classname = 'answer--invalid';
        } else if (answer.correct) {
            classname = 'answer--valid';
        }

        return classname;
    }

    const getAnswers = (questionIndex) => DATA[questionIndex].answers
        .map((answer) => `<li class="${getClassname(answer, questionIndex)}" >${answer.value}</li>`)
        .join('');

    DATA.forEach((question, index) => {
        content += `
        <div class="quiz-results-item">
            <div class="quiz-results-item__question">${question.questions}</div>
                <ul class="quiz-results-item__answers">${getAnswers(index)}</ul>
        </div>   
        `;
    })

    results.innerHTML = content;
}

const renderIndicator = (currentStep) => {
    indicator.innerHTML = `${currentStep}/${DATA.length}`;
}

quiz.addEventListener('change', (event) => {
    //логика ответа
    if(event.target.classList.contains('answer-input')) {
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;
    }
});

quiz.addEventListener('click', (event) => {
    //вперед или сначала
    if(event.target.classList.contains('btn-next')) {
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;

        if(DATA.length === nextQuestionIndex) {
            // переход к результатам
            questions.classList.add('questions--hidden');
            indicator.classList.add('indicator--hidden');
            results.classList.add('indicator--visable');
            btnNext.classList.add('btn-next--hidden');
            btnRestar.classList.add('btn-restart-visible');

            renderResults();
        } else {
            // переход к следующему вопросу
            renderQustions(nextQuestionIndex);
        }

        btnNext.disabled = true;
    }

    if(event.target.classList.contains('btn-restart')) {
        localResults = {};
        results.innerHTML = '';

        questions.classList.remove('questions--hidden');
        indicator.classList.remove('indicator--hidden');
        results.classList.remove('indicator--visable');
        btnNext.classList.remove('btn-next--hidden');
        btnRestar.classList.remove('btn-restart-visible');

        renderQustions(0);
    }
});

renderQustions(0);