const MOCKS_COUNT = 25;
const MOCK_DESCRIPTION = 'Some photo description';
const MOCK_COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const MOCK_USERNAMES = ['Борис', 'Виктор', 'Аркадий', 'Анна', 'Елена', 'Виталий', 'Валерий', 'Виктория', 'Александр', 'Дарья', 'Мария', 'Анатолий', 'Генадий', 'Владимир', 'Светлана', 'Давид'];

const getRandomIntInclusive = function (min, max) {
  if(min >= max || min < 0) return 'Incorrect incoming data !';

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const isStrLengthValid = function (str, maxStrLength) {
  if (str.length <= maxStrLength) return true
  return false
}

let commentIdCounter = 1;
let idCounter = 1;

const getMockObject = function () {
  const mockObject = {
    descriptionId : idCounter,
    url : `photos/${idCounter}.jpg`,
    description : MOCK_DESCRIPTION,
    likes : getRandomIntInclusive(15, 200),
    comment : [],
  }

  idCounter++;

  const addComment = function () {
    mockObject.comment.push(
      {
        commentId : commentIdCounter,
        avatar : `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
        message : MOCK_COMMENTS[getRandomIntInclusive(0, MOCK_COMMENTS.length - 1)],
        userName : MOCK_USERNAMES[getRandomIntInclusive(0, MOCK_USERNAMES.length - 1)],
      },
    )
    commentIdCounter++;
  }

  let counter = getRandomIntInclusive(1, 5);
  while (counter) {
    addComment();
    counter--;
  }

  return mockObject;
}

const renderMockArray = function () {
  const mockArray = [];
  while (idCounter <= MOCKS_COUNT) {
    mockArray.push(getMockObject(idCounter));
  }

  return mockArray;
}

