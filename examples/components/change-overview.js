AFRAME.registerComponent('toggle', {
    init: function() {
        let data = this.data;
        let el = this.el;

        el.addEventListener("click", function() {
            let itemID = el.getAttribute('id');
            if (itemID == "get-started") {
                document.querySelector('#get-started').setAttribute('visible', 'false');
                document.querySelector('#overview').setAttribute('visible', 'true');
            } else if (itemID == "refresh") {
                if (document.querySelector('#design1').getAttribute('visible', 'true')) {
                    document.querySelector('#design1').setAttribute('visible', 'false');
                    document.querySelector('#design2').setAttribute('visible', 'true')
                } else if (document.querySelector('#design2').getAttribute('visible', 'true')) {
                    document.querySelector('#design2').setAttribute('visible', 'false');
                    document.querySelector('#design3').setAttribute('visible', 'true')
                } else if (document.querySelector('#design3').getAttribute('visible', 'true')) {
                    document.querySelector('#design3').setAttribute('visible', 'false');
                    document.querySelector('#design1').setAttribute('visible', 'true')
                }
            }
        })
    }
})