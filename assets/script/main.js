gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.saveStyles(".mobile, .desktop");

ScrollTrigger.matchMedia({
  // desktop
  "(max-width: 1840px)": function () {
    //hero section

    let hero = gsap.timeline({
      pin: true,
      start: "-5%",
      end: "100%",
      stagger: 1,
      scrub: 1,
    });

    hero.fromTo(
      ".navbar .logo",
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
      }
    );

    hero.fromTo(
      ".navbar .nav-button",
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
      }
    );
    hero.from("#home-page", {
      stagger: 0.2,
      opacity: 0,
    });

    hero.fromTo(
      "#home-page h1",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
      }
    );
    hero.fromTo(
      "#home-page p",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
      }
    );
    hero.fromTo(
      "#home-page a",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
      }
    );
    hero.fromTo(
      ".container .hero-image",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
      }
    );

    //banner image

    let banner = gsap.timeline({
      scrollTrigger: {
        trigger: ".community",
        start: "-20%",
        end: "40%",
        stagger: 0.2,
      },
    });

    banner.fromTo(".title", { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
    banner.fromTo(
      ".community-video img",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0 }
    );

    banner.from(".community-content .wecards", {
      stagger: 0.2,
      opacity: 0,
      y: -30,
    });
    banner.from(".community-content .wecards-2", {
      opacity: 0,
      stagger: 0.2,
      y: -10,
    },"-=.5");
    

    //author

    let author = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "-20%",
        stagger: 0.1,
        end: "10%",
      },
    });

    author.fromTo(
      ".about-image img",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0 },
      "-=2.5"
    );
    author.fromTo(
      ".about-image h1",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0 },
      "-=1.5"
    );
    author.from(".about-content", {
      stagger: 0.1,
      opacity: 0,
    },"-=1.5");
    author.from(".about-content h1", {
      stagger: 0.1,
      y: -30,
    },"-=1.5");

    author.from(".about-content li", {
      stagger: 0.1,
      opacity: 0,
      y: -30,
    },"-=1.5");
    author.from(".social-icons span", {
      stagger: 0.2,
      opacity: 0,
      y: -30,
    },"-=1");

    //Group

    let group = gsap.timeline({
      scrollTrigger: {
        trigger: ".group",
        start: "-20%",
        end: "10%",
      },
    });
    group.from(".group .title h1", {
      stagger: 0.2,
      opacity: 0,
      y: -30,
    });
    group.from(".group .group-card", {
      stagger: 0.2,
      opacity: 0,
      x: -30,
    });
    //Tstimonial

    let testimonial = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonial",
        start: "-20%",
        end: "40%",
        stagger: 0.1,   
      },
    });

    testimonial.from(".testimonial", {
      opacity: 0,
      stagger: 0.2,   

      backgroundColor: "#ffffff",
    });
    testimonial.from(".testimonial .title h1", {
      opacity: 0,
      y: -30,
      stagger: 0.1,   

    });
    testimonial.from(".testimonial .testi-card", {
      opacity: 0,
      stagger: 0.3,   
      y: -30,
    });


    //F&Q

    let fq = gsap.timeline({
      scrollTrigger: {
        trigger: "#fq",
        start: "-50%",
        end: "-40%",
        stagger: 0.1,
      },
    });
    fq.from(".faq h1", {
      stagger: 0.1,
      opacity: 0,
      y: -30,
    });
    fq.from(".faq p", {
      opacity: 0,
      y: -30,
    });
    fq.from(".faq-main summary", {
      opacity: 0,
      stagger: 0.1,
      y: -10,
    });
  },
});
