// let memData = [
//     {
//         id:0,
//         name:"홍길동",
//         pic :"assets/img/team/1.jpg",
//         title: "지부장 1"
//     },
//     {
//         id:0,
//         name:"신사임당",
//         pic :"assets/img/team/2.jpg",
//         title: "지부장 2"
//     },
//     {
//         id:0,
//         name:"척준경",
//         pic :"assets/img/team/3.jpg",
//         title: "지부장 3"
//     },
//     {
//         id:0,
//         name:"이순신",
//         pic :"assets/img/team/1.jpg",
//         title: "지부장 4"
//     },
//     {
//         id:0,
//         name:"김 마리아",
//         pic :"assets/img/team/2.jpg",
//         title: "지부장 5"
//     }
// ]
// memData = fetch('./member.json')

const App = Vue.createApp({
    data() {
        return {
            message: "미주한인지도자협의회",
            member: null,
        }
    },
    methods:{

    },
    mounted() {
        fetch('./member.json')
            .then(res => res.json())
            .then(data=> this.member = data)
    },
})
App.mount('#page-top')






/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
