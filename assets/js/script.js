
new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    navigation: true,
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8'],
    navigationTooltips: ['Beranda', 'Menu', 'Geopark Ciletuh Pelabuhanratu', 'Kesepuhan Banten Kidul', 'Seren Taun', 'Peninggalan Sejarah', 'Contoh Peninggalan Sejarah', 'Gallery'],
    showActiveTooltip: true,
    controlArrows: false,
    slidesNavigation: true,
    // scrollHorizontally: true

    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector('h1');
        const subtitle = document.querySelector('.sub-title');
        const desa = document.querySelector('.desa');
        const rumah = document.querySelector('.rumah');
        const rumput = document.querySelector('.rumput');
        const batu = document.querySelector('.batu');
        const pelabuhan = document.querySelector('.pelabuhan');
        const tl = new TimelineMax({
            delay: 0.5
        });
        tl.fromTo(title, 0.5, {
            y: '50',
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        });

        tl.fromTo(subtitle, 0.5, {
            y: '50',
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        });

        tl.fromTo(desa, 0.5, {
            y: '80',
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        });

        tl.fromTo(rumah, 0.5, {
            x: '80',
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        });

        tl.fromTo(rumput, 0.5, {
            x: '-80',
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        });

        tl.fromTo(batu, 0.5, {
            x: '80',
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        });

        tl.fromTo(pelabuhan, 0.5, {
            x: '-80',
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        });

        if (destination.index === 1) {
            const cards = document.querySelectorAll('.menu-card');
            const social = document.querySelector('.social');
            tl.fromTo(cards, 0.5, {
                x: '-300%'
            }, {
                x: '-50%'
            });
            tl.fromTo(social, 0.5, {
                y: '50',
                opacity: 0
            }, {
                y: 0,
                opacity: 1
            }, '-=0.5');
        }

    }
});