//setup Vue
var App = new Vue({
	el: '#app',
    components: {
    	alert: VueStrap.alert,
    	sidebar: VueStrap.aside,
        vSelect: VueStrap.select,
        bsInput: VueStrap.input
    },
    data: {
    	showMenu: false,
        options: [
          {val: '--tomp4', label: 'To MP4'},
          {val: '--quiet', label: 'Quiet'},
          {val: '--loop', label: 'Loop'}
        ],
        casturl: '',
        params: null
    },
    methods: {
        cast: function(e){
            e.preventDefault();
            var flags = '';

            this.params.forEach(function(param){
                flags += (' ' + param);
            })

            this.$http.post('/api/castnow', {"url": this.casturl, "flags": flags}).then((response) => {
                // success callback
                console.log(response);
            }, (response) => {
                // error callback
                console.log(response)
            });
        }
    }
});

