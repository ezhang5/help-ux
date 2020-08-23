AFRAME.registerComponent('toggle', {
    init: function() {
        let data = this.data;
        let el = this.el;

        el.addEventListener("click", function() {
            let itemID = el.getAttribute('id');
            if (itemID == "start-box") {
                document.querySelector('#get-started').setAttribute('visible', 'false');
                document.querySelector('#start-box').setAttribute('visible', 'false');
                document.querySelector('#start').setAttribute('visible', 'false');
                document.querySelector('#overview').setAttribute('visible', 'true');
            } else if (itemID == "refresh-box") {
                if (document.querySelector('#design1').getAttribute('visible', 'true')) {
                    document.querySelector('#design1').setAttribute('visible', 'false');
                    document.querySelector('#design2').setAttribute('visible', 'true')
                } else if (document.querySelector('#design2').getAttribute('visible', 'true')) {
                    document.querySelector('#design2').setAttribute('visible', 'false');
                    document.querySelector('#design3').setAttribute('visible', 'true')
                } else if (document.querySelector('#design3').getAttribute('visible', 'true')) {
                    document.querySelector('#design3').setAttribute('visible', 'false');
                    document.querySelector('#design4').setAttribute('visible', 'true')
                } else if (document.querySelector('#design4').getAttribute('visible', 'true')) {
                    document.querySelector('#design4').setAttribute('visible', 'false');
                    document.querySelector('#design5').setAttribute('visible', 'true')
                } else if (document.querySelector('#design5').getAttribute('visible', 'true')) {
                    document.querySelector('#design5').setAttribute('visible', 'false');
                    document.querySelector('#design1').setAttribute('visible', 'true')
                }
            } else if (itemID == "to-about-button") {
                document.querySelector('#ty').setAttribute('visible', 'false');
                document.querySelector('#to-about').setAttribute('visible', 'false');
                document.querySelector('#to-about-button').setAttribute('visible', 'false')
                document.querySelector('#about').setAttribute('visible', 'true')
                document.querySelector('#to-ty-button').setAttribute('visible', 'true')
                document.querySelector('#to-ty').setAttribute('visible', 'true')
            } else if (itemID == "to-ty-button") {
                document.querySelector('#about').setAttribute('visible', 'false');
                document.querySelector('#to-ty').setAttribute('visible', 'false');
                document.querySelector('#to-ty-button').setAttribute('visible', 'false')
                document.querySelector('#ty').setAttribute('visible', 'true')
                document.querySelector('#to-about-button').setAttribute('visible', 'true')
                document.querySelector('#to-about').setAttribute('visible', 'true')
            }
        })
    }
})