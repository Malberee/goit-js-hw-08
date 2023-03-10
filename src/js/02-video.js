import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

if (!localStorage.getItem('videoplayer-current-time')) {
    player.setCurrentTime(0)
} else player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
