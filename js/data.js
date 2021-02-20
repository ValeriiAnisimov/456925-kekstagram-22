import {getRandomIntInclusive} from './util.js';

const MOCKS_COUNT = 25;
const MOCK_DESCRIPTION = 'Some photo description';
const MOCK_COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const MOCK_USERNAMES = ['Борис', 'Виктор', 'Аркадий', 'Анна', 'Елена', 'Виталий', 'Валерий', 'Виктория', 'Александр', 'Дарья', 'Мария', 'Анатолий', 'Генадий', 'Владимир', 'Светлана', 'Давид'];

const counter = function () {
  let initialValue = 1;
  return function (){
    return initialValue++;
  }
}
let commentCounter = counter();
let idCounter = counter();
let urlCounter = counter();

const createCommentObject = function () {
  return  {
    commentId : commentCounter(),
    avatar : `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
    message : MOCK_COMMENTS[getRandomIntInclusive(0, MOCK_COMMENTS.length - 1)],
    userName : MOCK_USERNAMES[getRandomIntInclusive(0, MOCK_USERNAMES.length - 1)],
  }
}

const createMockObject = function () {
  let mockObject = {
    descriptionId : idCounter(),
    url : `photos/${urlCounter()}.jpg`,
    description : MOCK_DESCRIPTION,
    likes : getRandomIntInclusive(15, 200),
    comment : [],
  }

  let commentsCount = getRandomIntInclusive(1, 5);
  while (commentsCount) {
    mockObject.comment.push(createCommentObject())
    commentsCount--;
  }
  return mockObject;
}

const renderMockArray = function () {
  const mockArray = [];
  for (let i = 0; i < MOCKS_COUNT; i++) {
    mockArray.push(createMockObject());
  }
  return mockArray;
}

export {renderMockArray};
