window.onload = function () {
    lax.init()

    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    lax.addElements('.lax-left-right', {
      scrollY: {
        translateX: [
          ["elOutY", "elInY"],
          [-100,500],
        ]
      }
    })

    lax.addElements('.lax-left-right-2', {
        scrollY: {
          translateX: [
            ["elInY", "elOutY"],
            ['-pageWidth','pageWidth'],
          ]
        }
      })

    //   Pencils Rotate
      lax.addElements('.lax-rotate', {
        scrollY: {
            rotate: [
            ['elInY', 'elOutY'],
            [0,360],
          ]
        }
      })
      lax.addElements('.lax-rotate-2', {
        scrollY: {
            rotate: [
            ['elInY', 'elOutY'],
            [180,480],
          ]
        }
      })
      lax.addElements('.lax-rotate-3', {
        scrollY: {
            rotate: [
            ['elInY', 'elOutY'],
            [-80,360],
          ]
        }
      })
      lax.addElements('.lax-rotate-4', {
        scrollY: {
            rotate: [
            ['elInY', 'elOutY'],
            [-180,280],
          ]
        }
      })
      lax.addElements('.lax-rotate-5', {
        scrollY: {
            rotate: [
            ['elInY', 'elOutY'],
            [0,310]
          ]
        }
      })

      lax.addElements('.lax-fade-in', {
        scrollY: {
            opacity: [
                ['elInY', 'elInY+800'],
                [0,1]
          ]
        }
      })
  }