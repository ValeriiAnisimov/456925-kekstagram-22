import {getMockData} from './data.js';

const renderPictures = function () {
  const mockData = getMockData();
  const picturesContainer = document.querySelector('.pictures');
  const templateFragment = document.querySelector('#picture').content;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < mockData.length; i++) {
    const element = templateFragment.cloneNode(true);

    const img = element.querySelector('.picture__img');
    img.src = mockData[i].url;

    const pictureLikes = element.querySelector('.picture__likes');
    pictureLikes.textContent = mockData[i].likes;

    const pictureComments = element.querySelector('.picture__comments');
    pictureComments.textContent = mockData[i].comment.length;

    fragment.appendChild(element);
  }

  picturesContainer.appendChild(fragment);
}

export {renderPictures};
