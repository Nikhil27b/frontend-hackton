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
        end: "10%",
        stagger: 0.4,
        pin: true,
        scrub: 1,
      },
    });

    banner.fromTo(".title", { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
    banner.fromTo(
      ".community-video img",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0 }
    );
    // banner.fromTo(
    //   ".community-content .cards",
    //   { opacity: 0, x: -50 },
    //   { opacity: 1, x: 0},
    // );
    banner.from(".community-content .cards", {
      stagger: 0.2,
      opacity: 0,
      x: -30,
    });

    //author

    let author = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "-20%",
        end: "10%",
        pin: true,
        scrub: 1,
      },
    });

    author.fromTo(
      ".about-image img",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0 }
    );
    author.fromTo(
      ".about-image h1",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0 }
    );
    author.from(".about-content", {
      stagger: 0.2,
      opacity: 0,
    });
    author.from(".about-content h1", {
      stagger: 0.2,
      y: -30,
    });

    author.from(".about-content li", {
      stagger: 0.2,
      opacity: 0,
      y: -30,
    });
    author.from(".social-icons span", {
      stagger: 0.2,
      opacity: 0,
      y: -30,
    });

    //Group

    let group = gsap.timeline({
      scrollTrigger: {
        trigger: ".group",
        start: "-20%",
        end: "10%",
        scrub: 1,
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
        end: "50%",
        pin: true,
        stagger: 0.2,

        scrub: 1,
      },
    });

    testimonial.from(".testimonial", {
      stagger: 0.2,
      opacity: 0,
      backgroundColor: "#ffffff",
    });
    testimonial.from(".testimonial .title h1", {
      stagger: 0.2,
      opacity: 0,
      y: -30,
    });
    testimonial.from(".testimonial .testi-card", {
      stagger: 0.2,
      opacity: 0,
      y: -30,
    });
    testimonial.from(".testimonial .testi-card .user_img", {
      stagger: 0.2,
      opacity: 0,
      y: -30,
    });
    testimonial.from(".testimonial .testi-card .user_content", {
      stagger: 0.2,
      opacity: 0,
      y: -30,
    });
    testimonial.from(".testimonial .testi-card .review", {
      stagger: 0.2,
      opacity: 0,
      y: -30,
    });

    //F&Q

    let fq = gsap.timeline({
      scrollTrigger: {
        trigger: "#fq",
        start: "-40%",
        end: "0%",
        scrub: 1,
      },
    });
    fq.from(".faq h1", {
      stagger: 0.2,
      opacity: 0,
      y: -30,
    });
    fq.from(".faq p", {
      stagger: 0.2,
      opacity: 0,
      y: -30,
    });
    fq.from(".faq-main summary", {
      stagger: 0.2,
      opacity: 0,
      y: -30,
    });
  },
});
