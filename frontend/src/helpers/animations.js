import posed from 'react-pose';

const FadeInLeft = posed.div({
  start: {
    right: '2rem',
    opacity: 0
  },
  end: {
    right: '0rem',
    opacity: 1,
    type: 'decay',
    modifyTarget: (v) => Math.ceil(v / 100) * 100,
    transition: {
      duration: 500
    }
  }
});

const RingBell = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    rotate: 0,
    originX: '50%',
    originY: '0%'
  },
  hover: {
    rotate: 20,
    originX: '50%',
    originY: '0%'
  },
  press: {
    scale: 1.1
  }
});

export default {
  FadeInLeft: FadeInLeft,
  RingBell: RingBell
};

export { FadeInLeft, RingBell };
