function pageTransition() {
  var tl = gsap.timeline();

  tl.from('.transition', {
    duration: .4,
    scaleY: 1,
    transformOrigin: 'top left',
    stagger: .2,
    delay: 1.5,
    ease: Power4.easeOut,
  });

  tl.to('.transition', {
    duration: .3,
    scaleY: 0,
    transformOrigin: 'bottom left',
    stagger: .1,
    delay: 1.5,
  });
}

function contentAnimation() {
  var tl = gsap.timeline();

  tl.from('.logo-p1', .2, { y: 50, opacity: 0 }, 0),
    tl.to('.logo-p1', .2, { y: -50, opacity: 0 }, 1.3),

    tl.from('.logo-p2', .2, { y: 50, opacity: 0 }, 0),
    tl.to('.logo-p2', .2, { y: -50, opacity: 0 }, 1.3),

    tl.from('.logo__header__p1', { duration: 1.3, opacity: 0 }), 1,

    tl.from('.logo__header__p2', { duration: 1.3, opacity: 0 }, 1),

    tl.from('.hero__bandeira', { duration: 1.3, opacity: 0 }, 1.5),

    tl.staggerFrom('.hide__title', .5, {
      y: '100',
      ease: Power4.easeOut,
    }, .1),

    tl.staggerFrom('.hide__text', .5, {
      y: '25',
      opacity: '0',
      ease: Power4.easeOut,
    }, .1),

    tl.staggerFrom('.hide__social', .5, {
      y: '100',
      opacity: '0',
      ease: Power4.easeOut,
    }, .1)
}

function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,
  transitions: [{
    async leave(data) {
      const done = this.async();

      pageTransition();
      await delay(1500);
      done();
    },

    async enter(data) {
      pageTransition();
      contentAnimation();
    },

    async once(data) {
      pageTransition();
      contentAnimation();
    }
  }]
})
