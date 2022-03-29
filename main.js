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
    // шестой вопрос
    {
        questions: 'Как часто должны проходить обучение и проверку знаний по БиОТ ответственные работники',
        answers: [
            {
                id: '20',
                value: 'Не реже 1 раза в год',
                correct: false,
            },
            {
                id: '21',
                value: 'Не реже 1 раза в 5 лет',
                correct: false,
            },
            {
                id: '22',
                value: 'Не реже 1 раза в 3 года',
                correct: true,
            },
            {
                id: '23',
                value: 'Не реже 1 раза в 2 года',
                correct: false,
            },
        ]
    },
    // седьмой вопрос
    {
        questions: 'Как часто должны проходить обучение и проверку знаний по БиОТ работники по рабочим профессиям',
        answers: [
            {
                id: '24',
                value: 'Не реже 1 раза в 3 года',
                correct: false,
            },
            {
                id: '25',
                value: 'Не реже 1 раза в 6 месяцев',
                correct: false,
            },
            {
                id: '26',
                value: 'Не реже 1 раза в 2 года',
                correct: false,
            },
            {
                id: '27',
                value: 'Не реже 1 раза в год',
                correct: true,
            },
        ]
    },
    // 8 вопрос
    {
        questions: 'В каком случае Комиссия по расследованию несчастных случаев может обязать к повторной проверке',
        answers: [
            {
                id: '28',
                value: 'При допущении несчастных случаев (групповых; со смертельным или тяжелым (инвалидным) исходом)',
                correct: false,
            },
            {
                id: '29',
                value: 'При возникновении аварии, взрыва, пожара или отравления',
                correct: false,
            },
            {
                id: '30',
                value: 'При перерыве в работе более одного года',
                correct: false,
            },
            {
                id: '31',
                value: 'Верны 1 и 2 варианты',
                correct: true,
            },
        ]
    },
    // 9 вопрос
    {
        questions: 'Минимальное количество человек при создании экзаменационной комиссии (внутри организации)',
        answers: [
            {
                id: '32',
                value: 'Не менее 4 человек',
                correct: false,
            },
            {
                id: '33',
                value: 'Не менее 3 человек',
                correct: true,
            },
            {
                id: '34',
                value: 'Не менее 5 человек',
                correct: false,
            },
            {
                id: '35',
                value: 'Нет требования по составу комиссии',
                correct: false,
            },
        ]
    },
    // 10 вопрос
    {
        questions: 'На какой основе функционирует экзаменационная комиссия (внутри организации)',
        answers: [
            {
                id: '36',
                value: 'На постоянной основе',
                correct: true,
            },
            {
                id: '37',
                value: 'На временной',
                correct: false,
            },
            {
                id: '38',
                value: 'Только до 3-х лет',
                correct: false,
            },
            {
                id: '39',
                value: 'Только до одного года',
                correct: false,
            },
        ]
    },
    // 11 вопрос
    {
        questions: 'Какие лица должны формировать состав экзаменационной комиссию (внутри организации)',
        answers: [
            {
                id: '40',
                value: 'Руководители подразделений',
                correct: false,
            },
            {
                id: '41',
                value: 'Специалисты службы БиОТ организации',
                correct: false,
            },
            {
                id: '42',
                value: 'Лица ответственные за обеспечение БиОТ',
                correct: false,
            },
            {
                id: '43',
                value: 'Технический инспектор по охране труда предприятия',
                correct: false,
            },
            {
                id: '44',
                value: 'Все ответы верны',
                correct: true,
            },
        ]
    },
    // 12 вопрос
    {
        questions: 'Какой способ проверки знаний у ответственных работников, могут использовать экзаменационная',
        answers: [
            {
                id: '45',
                value: 'Тестирование',
                correct: true,
            },
            {
                id: '46',
                value: 'Билеты',
                correct: false,
            },
            {
                id: '47',
                value: 'Устный опрос',
                correct: false,
            },
            {
                id: '48',
                value: 'Верны 1 и 3 варианты',
                correct: false,
            },
            
        ]
    },
    // 13 вопрос
    {
        questions: 'На какие виды подразделяются инструктажи',
        answers: [
            {
                id: '49',
                value: 'Вводный, Первичный на рабочем месте, Повторный',
                correct: false,
            },
            {
                id: '50',
                value: 'Внеплановый, Целевой',
                correct: false,
            },
            {
                id: '51',
                value: 'Разовый, углубленный для ИТР',
                correct: false,
            },
            {
                id: '52',
                value: 'Верны 1 и 2 варианты',
                correct: true,
            },
            
        ]
    },
    // 14 вопрос
    {
        questions: 'В каких случаях, травмы, полученные работником, не подлежат учету как несчастные случаи',
        answers: [
            {
                id: '53',
                value: 'При выполнении пострадавшим по собственной инициативе работ или иных действий, не входящих в функциональные обязанности работника и не связанных с интересом работодателя, в том числе в период междусменного отдыха при работе вахтовым методом, перерыва для отдыха и приема пищи',
                correct: false,
            },
            {
                id: '54',
                value: 'В результате преднамеренного причинения вреда своему здоровью, а также при совершении пострадавшим уголовного правонарушения',
                correct: false,
            },
            {
                id: '55',
                value: 'В состоянии алкогольного опьянения, употребление токсических и наркотических веществ',
                correct: false,
            },
            {
                id: '56',
                value: 'Все ответы верны',
                correct: true,
            },
            
        ]
    },
    // 15 вопрос
    {
        questions: 'В каких случаях, травмы, полученные работником, подлежат учету как несчастные случаи',
        answers: [
            {
                id: '57',
                value: ' Если травма была получена перед началом или по окончании рабочего времени при подготовке и приведении в порядок рабочего места, орудий производства, СИЗ',
                correct: false,
            },
            {
                id: '58',
                value: 'При следовании к месту выполнения работы или с работы на транспортном средстве, предоставленном работодателем',
                correct: false,
            },
            {
                id: '59',
                value: 'При совершении действий по собственной инициативе в интересах работодателя',
                correct: false,
            },
            {
                id: '60',
                value: 'Все ответы верны',
                correct: true,
            },
            
        ]
    },
    // 16 вопрос
    {
        questions: 'Следует ли сохранить, до начала расследования обстановку на месте несчастного случая, если это не угрожает жизни и здоровью других лиц',
        answers: [
            {
                id: '61',
                value: 'Следует',
                correct: true,
            },
            {
                id: '62',
                value: 'Не следует',
                correct: false,
            },
            {
                id: '63',
                value: 'До 3 часов',
                correct: false,
            },
            {
                id: '64',
                value: 'Не более суток',
                correct: false,
            },
            
        ]
    },
    // 17 вопрос
    {
        questions: 'Следует ли сохранить, до начала расследования обстановку на месте несчастного случая, если это угрожает жизни и здоровью других лиц',
        answers: [
            {
                id: '65',
                value: 'Следует',
                correct: false,
            },
            {
                id: '66',
                value: 'Не следует',
                correct: true,
            },
            {
                id: '67',
                value: 'До 3 часов',
                correct: false,
            },
            {
                id: '68',
                value: 'Не более суток',
                correct: false,
            },
            
        ]
    },
    // 18 вопрос
    {
        questions: 'Обязанности работодателя при несчастном случае',
        answers: [
            {
                id: '69',
                value: 'Немедленно проинформировать о несчастном случае близких родственников пострадавшего и направить сообщение в государственные органы и организации',
                correct: false,
            },
            {
                id: '70',
                value: 'Допускать членов комиссии по специальному расследованию к месту происшествия для расследования несчастного случая, связанного с трудовой деятельностью',
                correct: false,
            },
            {
                id: '71',
                value: 'Организовать оказание первой медицинской помощи пострадавшему и при необходимости его доставку в организацию здравоохранения',
                correct: false,
            },
            {
                id: '72',
                value: 'Все ответы верны',
                correct: true,
            },
            
        ]
    },
    // 19 вопрос
    {
        questions: 'Кем проводится, расследование несчастных случаев, при аварии транспортных средств',
        answers: [
            {
                id: '73',
                value: 'Страховой компании',
                correct: false,
            },
            {
                id: '74',
                value: 'Отдела ОТ и ТБ',
                correct: false,
            },
            {
                id: '75',
                value: 'Руководителя подразделения',
                correct: false,
            },
            {
                id: '76',
                value: 'Уполномоченного органа по обеспечению безопасности дорожного движения',
                correct: true,
            },
            
        ]
    },
    // 20 вопрос
    {
        questions: 'Уполномоченный орган по обеспечению безопасности дорожного движения обязан представить копии материалов расследования',
        answers: [
            {
                id: '77',
                value: 'В 5 дневный срок',
                correct: true,
            },
            {
                id: '78',
                value: 'Незамедлительно',
                correct: false,
            },
            {
                id: '79',
                value: 'В 10 дневный срок',
                correct: false,
            },
            {
                id: '80',
                value: 'В течение 14 рабочих дней',
                correct: false,
            },
            
        ]
    },
    // 21 вопрос
    {
        questions: 'Расследование несчастных случаев на производстве, проводится комиссией, которая создается в течении',
        answers: [
            {
                id: '81',
                value: '3 часов',
                correct: false,
            },
            {
                id: '82',
                value: '24 часов',
                correct: true,
            },
            {
                id: '83',
                value: '10 часов',
                correct: false,
            },
            {
                id: '84',
                value: '3 суток',
                correct: false,
            },
            
        ]
    },
    // 22 вопрос
    {
        questions: 'При каких несчастных случаях, производится специальное расследование',
        answers: [
            {
                id: '85',
                value: 'Групповые случаи острого отравления',
                correct: false,
            },
            {
                id: '86',
                value: 'Групповые несчастные случаи, не зависимо от степени тяжести травм пострадавших',
                correct: false,
            },
            {
                id: '87',
                value: 'Несчастные случаи с тяжёлым или со смертельным исходом',
                correct: false,
            },
            {
                id: '88',
                value: ' Все ответы верны',
                correct: true,
            },
            
        ]
    },
    // 23 вопрос
    {
        questions: 'Какой срок не должно превышать расследование несчастного случая',
        answers: [
            {
                id: '89',
                value: ' 10 рабочих дней',
                correct: true,
            },
            {
                id: '90',
                value: ' 15 рабочих дней',
                correct: false,
            },
            {
                id: '91',
                value: '5 рабочих дней',
                correct: false,
            },
            {
                id: '92',
                value: '15 календарных дней',
                correct: false,
            },
            
        ]
    },
    // 24 вопрос
    {
        questions: 'В каком случае Председателем комиссии становится Главный Госинспектор Труда области',
        answers: [
            {
                id: '93',
                value: 'Групповые НС с 2-мя смертельными исходами',
                correct: true,
            },
            {
                id: '94',
                value: 'Все ответы верны',
                correct: false,
            },
            {
                id: '95',
                value: 'Несчастные случаи от 3 до 5 смертельных исходов',
                correct: false,
            },
            {
                id: '96',
                value: 'Несчастные случаи более 5 смертельных исходов',
                correct: false,
            },
            
        ]
    },
    // 25 вопрос
    {
        questions: 'В каком случае Комиссия создается Правительством Республики Казахстан',
        answers: [
            {
                id: '97',
                value: 'Несчастные случаи более 5 смертельных исходов',
                correct: true,
            },
            {
                id: '98',
                value: ' Несчастные случаи от 3 до 5 смертельных исходов',
                correct: false,
            },
            {
                id: '99',
                value: 'Все ответы верны',
                correct: false,
            },
            {
                id: '100',
                value: ' Групповые НС с 2-мя смертельными исходами',
                correct: false,
            },
            
        ]
    },
    // 26 вопрос
    {
        questions: 'В течение, какого времени материалы расследования несчастного случая подлежат хранению в организации',
        answers: [
            {
                id: '101',
                value: ' В течение 45 лет',
                correct: true,
            },
            {
                id: '102',
                value: 'В течение 20 лет',
                correct: false,
            },
            {
                id: '103',
                value: 'В течение 5 лет',
                correct: false,
            },
            {
                id: '104',
                value: 'В течение 10 лет',
                correct: false,
            },
            
        ]
    },
    // 27 вопрос
    {
        questions: 'На чем основывается Трудовое Законодательство РК',
        answers: [
            {
                id: '105',
                value: 'На Приказе 205',
                correct: false,
            },
            {
                id: '106',
                value: 'На Законе ОПО',
                correct: false,
            },
            {
                id: '107',
                value: 'На техническом регламенте',
                correct: false,
            },
            {
                id: '108',
                value: 'На Конституции РК',
                correct: true,
            },
            
        ]
    },
    // 28 вопрос
    {
        questions: 'Где и на кого распространяются действия Трудового Кодекса',
        answers: [
            {
                id: '109',
                value: ' Территория РК',
                correct: false,
            },
            {
                id: '110',
                value: 'Иностранные граждане и лица без гражданства, осуществляющие трудовую деятельность в РК',
                correct: false,
            },
            {
                id: '111',
                value: 'Работники организаций, расположенных на территории РК, учредителями или собственниками которых являются иностранные юридические и физические лица',
                correct: false,
            },
            {
                id: '112',
                value: 'Все ответы верны',
                correct: true,
            },
            
        ]
    },
    // 29 вопрос
    {
        questions: 'На что работник имеет право',
        answers: [
            {
                id: '113',
                value: 'Рабочее место, оборудованное в соответствии с требованиями безопасности и охраны труда',
                correct: false,
            },
            {
                id: '114',
                value: 'Страхование от несчастных случаев при исполнении трудовых (служебных) обязанностей',
                correct: false,
            },
            {
                id: '115',
                value: ' Обеспечение защиты персональных данных, хранящихся у работодателя',
                correct: false,
            },
            {
                id: '116',
                value: 'Все ответы верны',
                correct: true,
            },
            
        ]
    },
    // 30 вопрос
    {
        questions: 'Чему обязан работник',
        answers: [
            {
                id: '117',
                value: 'Добросовестно выполнять свои трудовые обязанности',
                correct: false,
            },
            {
                id: '118',
                value: 'Бережно относиться к имуществу работодателя и работников',
                correct: false,
            },
            {
                id: '119',
                value: 'Соблюдать трудовую дисциплину',
                correct: false,
            },
            {
                id: '120',
                value: 'Все ответы верны',
                correct: true,
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