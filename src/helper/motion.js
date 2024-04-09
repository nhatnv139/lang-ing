export const motion_custom = {
  'about-title': {
    initial: { opacity: 0, x: -600 },
    enter: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1000
      }
    }
  },
  'about-sub-title': {
    initial: { opacity: 0, y: 100 },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1000,
        delay: 1000
      }
    }
  },

  'about-right': {
    initial: { scale: 0, opacity: 0, x: 600, y: -600 },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 1000
      }
    }
  },
  'about-item-1': {
    initial: { scale: 0, opacity: 0 },
    visibleOnce: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1000
      }
    }
  },

  'about-item-2': {
    initial: { opacity: 0 },
    visibleOnce: {
      opacity: 1,
      transition: {
        duration: 1000,
        delay: 500
      }
    }
  },

  'title-section-enter': {
    initial: { opacity: 0, y: 50 },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1000
      }
    }
  },
  'content-section-enter': {
    initial: { opacity: 0, y: 50 },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1000,
        delay: 500
      }
    }
  },

  'title-section-visible': {
    initial: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1000,
      }
    }
  },

}
