<script>
        //video表示スクリプト
            AFRAME.registerComponent('videohandler', {
                init: function () {
                    var marker = this.el;
                    this.vid = document.querySelector("#vid");
                    marker.addEventListener('markerFound', function () {
                        this.toggle = true;
                        this.vid.play();
                    }.bind(this));
                    marker.addEventListener('markerLost', function () {
                        this.toggle = false;
                        this.vid.pause();
                    }.bind(this));
                },
            });
        </script>
    </head>

<script>  
        //クリック後のアクションスクリプト
  AFRAME.registerComponent('click-change', {
  init: function () {
    this.el.addEventListener('click', function (event) {
    //クリック時の処理
    //window.location.href = "https://netken.info";    
    });
  }
});        
    </script>    
