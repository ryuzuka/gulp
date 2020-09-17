/** ease.js ******************************************************************************************************** */
;($ => {
  let Ease = {
    Ease: {
      Quad: {
        easeIn: 'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
        easeOut: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        easeInOut: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)'
      },
      Cubic: {
        easeIn: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
        easeOut: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        easeInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)'
      },
      Quart: {
        easeIn: 'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
        easeOut: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
        easeInOut: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)'
      },
      Quint: {
        easeIn: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
        easeOut: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
        easeInOut: 'cubic-bezier(0.860, 0.000, 0.070, 1.000)'
      },
      Sine: {
        easeIn: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
        easeOut: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
        easeInOut: 'cubic-bezier(0.445, 0.050, 0.550, 0.950)'
      },
      Expo: {
        easeIn: 'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
        easeOut: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
        easeInOut: 'cubic-bezier(1.000, 0.000, 0.000, 1.000)'
      },
      Circ: {
        easeIn: 'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
        easeOut: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
        easeInOut: 'cubic-bezier(0.785, 0.135, 0.150, 0.860)'
      },
      Back: {
        easeIn: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
        easeOut: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        easeInOut: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
      }
    }
  }

  window.App = Object.assign(window.App || {}, Ease)
})(window.jQuery)
/** ****************************************************************************************************************** */