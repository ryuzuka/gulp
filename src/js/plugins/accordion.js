/** accordion.js ********************************************************************************************************** */
;($ => {
  let pluginName = 'accordion'

  $.fn.extend({
    accordion: function (options = {}, value) {
      if (typeof options === 'string') {
        $.plugin.call(this, options, value)
      } else {
        this.each((index, el) => {
          if (!$(el).attr('applied-plugin')) {
            $.plugin.add($(el), pluginName, new Accordion($(el), options))
          }
        })
      }
      return this
    }
  })

  class Accordion {
    constructor($this, options) {
      this.$accordion = $this
      this.$btn = this.$accordion.find('.accordion-head > button')
      this.$content = this.$accordion.find('.accordion-content')

      this.options = options
      this.options.type = options.type || 'single'
      this.options.toggle = options.toggle || false
      this.activeIndex = -1

      this.init()
    }

    init() {
      this.$btn.each((index, el) => {
        $(el).attr('btn-index', index)
      })
      this.$btn.on('click', e => {
        let idx = Number($(e.currentTarget).attr('btn-index'))
        this.activeIndex = idx
        if (this.options.type === 'single') {
          this.$content.each((index, el) => {
            let $btn = this.$btn.eq(index)
            let $content = this.$content.eq(index)

            if (idx === index) {
              if (!$btn.hasClass('active')) {
                $btn.addClass('active').attr('aria-expanded', true)
                $content.addClass('active').prop('hidden', false)
              } else {
                $btn.removeClass('active').attr('aria-expanded', false)
                $content.removeClass('active').prop('hidden', true)
              }
            } else {
              $btn.removeClass('active').attr('aria-expanded', false)
              $content.removeClass('active').prop('hidden', true)
            }
          })
        } else if (this.options.type === 'multi') {
          if (!this.$btn.eq(idx).hasClass('active')) {
            this.$btn.eq(idx).addClass('active').attr('aria-expanded', true)
            this.$content.eq(idx).addClass('active').prop('hidden', false)
          } else {
            this.$btn.eq(idx).removeClass('active').attr('aria-expanded', false)
            this.$content.eq(idx).removeClass('active').prop('hidden', true)
          }
        }
        this.$accordion.triggerHandler({type: 'open', activeIndex: this.activeIndex})
      })

      if (typeof this.options.activeIndex === 'number') {
        this.active(this.options.activeIndex)
      }
    }

    active(idx) {
      this.activeIndex = idx
      this.$content.each(index => {
        if (idx === index) {
          this.$btn.eq(index).addClass('active').attr('aria-expanded', true)
          this.$content.eq(index).addClass('active').prop('hidden', false)
        } else {
          this.$btn.eq(index).removeClass('active').attr('aria-expanded', false)
          this.$content.eq(index).removeClass('active').prop('hidden', true)
        }
      })
    }

    clear() {
      this.$btn.off()
      this.$btn.attr('aria-expanded', false).removeClass('active')
      this.$content.prop('hidden', true).removeClass('active')
      this.$accordion = null
      this.activeIndex = null
    }
  }
})(window.jQuery)
/** ****************************************************************************************************************** */
