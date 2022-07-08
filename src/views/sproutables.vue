<template>
  <section id="sproutables">
  <div class="box">
<ul id="bookmarks">
  <li><a href="#">vegan</a>
    <li><a href="https://www.youtube.com/watch?v=NJqR8OgRt2M">brocSpts</a></li> 
    <li><a href="http://www.provident-living-today.com/support-files/basic-sprouting-guide.pdf">sprouting</a></li>  
    <li><a href="https://www.youtube.com/watch?v=lIVdAMJZ8uU">beanSprts</a></li>  
  </ul>
 </li>
</ul>
</div>
</section>
</template>

<script>
export default {
  name: "Sproutables",
};
</script>


<style scoped>
*{
    margin:0;
    padding:0;
}
body {
    font:14px/1.3 Arial,sans-serif;
}
.box {
    height: 571px;
    margin: 30px auto;
    padding: 15px;
    width: 771px;
}
#bookmarks,#bookmarks ul {
    background-color: #8899AA;
    list-style: none outside none;
    margin: 0;
    padding: 0;
}
#bookmarks {
    display: block;
    padding: 5px;
    position: relative;
    width: 112px;
    -moz-perspective: 200px;
    -ms-perspective: 200px;
    -webkit-perspective: 200px;
    -o-perspective: 200px;
    perspective: 200px;
}
#bookmarks ul {
    left: -9999px;
    opacity:0;
    overflow: hidden;
    padding: 5px;
    position: absolute;
    top: -9999px;
    -moz-transform: rotateY(70deg);
    -ms-transform: rotateY(70deg);
    -o-transform: rotateY(70deg);
    -webkit-transform: rotateY(70deg);
    transform: rotateY(70deg);
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -moz-transition: -moz-transform 0.3s linear, opacity 0.3s linear;
    -ms-transition: -ms-transform 0.3s linear, opacity 0.3s linear;
    -o-transition: -o-transform 0.3s linear, opacity 0.3s linear;
    -webkit-transition: -webkit-transform 0.3s linear, opacity 0.3s linear;
    transition: transform 0.3s linear, opacity 0.3s linear;
}
#bookmarks li {
    background-color: #FFFFFF;
    position: relative;
}
#bookmarks > li {
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}
#bookmarks li a {
    background-color: #AABBCC;
    border-color: #DDDDDD #555555 #555555 #DDDDDD;
    border-style: solid;
    border-width: 1px;
    color: #000000;
    display: block;
    font-size: 15px;
    padding: 8px 10px 8px 5px;
    text-decoration: none;
    width:95px;
    -moz-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
}
#bookmarks li:hover > a {
    background-color: #8899AA;
    border-color: #8899AA;
    color: #FFFFFF;
}
#bookmarks li:hover ul.sites {
    left: 114px;
    opacity:1;
    top: 0;
    -moz-transition-delay: 0.3s;
    -ms-transition-delay: 0.3s;
    -o-transition-delay: 0.3s;
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
    -moz-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
}
#bookmarks ul li {
    width: 100%;
}

</style>





