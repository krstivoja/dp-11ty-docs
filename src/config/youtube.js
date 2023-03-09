module.exports = (eleventyConfig) => {
  eleventyConfig.addNunjucksShortcode('youtube', (id, props) => {
    const output = `${id}`

    return `<div class="wrapper w-full mx-auto my-xxl">
    <div class="youtube relative overflow-hidden cursor-pointer w-full h-auto aspect-video rounded-sm" data-embed="${output}">
      <div 
              class=" play-button bg-[#ff0d00] rounded-[10px] w-[90px] h-[60px] z-10 opacity-80 cursor-pointer absolute top-[50%] left-[50%]
                      before:absolute before:top-[50%] before:left-[50%]">
          </div>
    </div>
  </div>
  
  <style>
  .youtube .play-button:before {
    border-width: 15px 0 15px 26.0px;
    border-color: transparent transparent transparent #fff;
  }
  
  .youtube .play-button,
  .youtube .play-button:before {
    transform: translate3d( -50%, -50%, 0 );
  }
  
  .youtube iframe{
    width: 100%;
      height: auto;
      aspect-ratio: 16/9;
  }
  </style>
  
  <script>
      ( function() {
  
    var youtube = document.querySelectorAll( ".youtube" );
    
    for (var i = 0; i < youtube.length; i++) {
      
      var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
      
      var image = new Image();
          image.src = source;
                  image.classList.add("w-full", "left-0", "top-0", "-translate-y-[17%]", "cursor-pointer", "absolute");
          image.addEventListener( "load", function() {
            youtube[ i ].appendChild( image );
          }( i ) );
      
          youtube[i].addEventListener( "click", function() {
  
            var iframe = document.createElement( "iframe" );
  
                iframe.setAttribute( "frameborder", "0" );
                iframe.setAttribute( "allowfullscreen", "" );
                iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
  
                this.innerHTML = "";
                this.appendChild( iframe );
          } );	
    };
    
      } )();
  </script>`;
  })
}

// usage: {% youtube 'id' %}
