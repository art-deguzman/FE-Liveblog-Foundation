<template>
    <div class="header-nav header-wrapper pt-4 pb-4">
        <div class="top-nav container mx-auto">
            <nav class="float-right">
                <ul class="list-inline">
                    <li><a href="#"><i class="fa fa-facebook-official"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li class="relative"><a href="#" class="dropdown relative"><span><i class="fa fa-globe"></i></span> Netherlands</a>
                        <ul class="absolute pt-3 pb-3">
                            <li><a href="#"><span><i class="fa fa-flag"></i></span>  English</a></li>
                            <li><a href="#"><span><i class="fa fa-flag-checkered"></i></span> Spanish</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div class="clear-both"></div>
        </div>
    </div>
    <div class="header-content header-wrapper pt-4 pb-4">
        <div class="main-nav container mx-auto flex">
            <nav class="w-2/3 pt-4 pr-4 pb-8">
                <div class="logo-wrapper mb-4">
                    <a href="/"><img src="./../assets/images/logo-ft.png" class="img-logo" alt="FootballTransfers"></a>
                </div>
                <ul class="list-inline">
                    <li><a href="/#" class="active">Home</a></li>
                    <li><a href="#" class="dropdown">Transfernieuws</a>
                        <ul class="absolute">
                            <li><a href="#">Sub Menu</a></li>
                        </ul>
                    </li>
                    <li><a href="#" class="dropdown">Transfers &amp; feruchten</a>
                        <ul class="absolute">
                            <li><a href="#">Sub Menu</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#" class="dropdown">Spelers</a>
                        <ul class="absolute">
                            <li><a href="#">Sub Menu</a></li>
                        </ul>
                    </li>
                    <li><a href="#" class="dropdown">Transferwaarden</a>
                        <ul class="absolute">
                            <li><a href="#">Sub Menu</a></li>
                        </ul>
                    </li>
                    <li><a href="#" class="dropdown">Statistieken</a>
                        <ul class="absolute">
                            <li><a href="#">Sub Menu</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div class="search-bar-content w-1/3 flex">
                <div class="w-1/3"></div>
                <div class="search-bar w-2/3 pt-4">
                    <input type="text" class="search-home pt-2 pb-2 pl-3 pr-3 w-full rounded-lg" placeholder="Zoek spelers en teams" />
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto border-b-4 pt-4 pb-4">
        <img src="./../assets/images/bg-header.png" class="w-full mx-auto img-80" alt="Header">
    </div>
  </template>
  
  
  
<script>

export default {
    name: 'HeaderContent'
}

// window.onload = function () {
//   var span = document.createElement('span');

//   span.className = 'fa';
//   span.style.display = 'none';
//   document.body.insertBefore(span, document.body.firstChild);
  
//   alert(window.getComputedStyle(span, null).getPropertyValue('font-family'));
    
//   document.body.removeChild(span);
// };



</script>


<style lang="scss" scoped>
    .header-wrapper {
        a {
            font-size: 0.9rem;
            color: white;
            -webkit-transition: all .25s ease;
            -moz-transition: all .25s ease;
            -ms-transition: all .25s ease;
                -o-transition: all .25s ease;
                transition: all .25s ease;
        }
        .top-nav,
        .main-nav{
            li {
                display: inline-block;
                margin: 0 5px;
                padding: 0;
                position: relative;
                vertical-align: top;  
                &:hover {
                    ul {
                        opacity: 1;
                        top: 24px;
                        visibility: visible;
                        display: block;
                    }
                }
                ul {
                    background-color: var(--rt-blue-color);
                    width: 100%;
                    left: 0;
                    opacity: 0;
                    top: 0;
                    visibility: hidden;
                    display: none;
                    height: auto;
                    z-index: 1;
                    -webkit-transition: all .25s ease;
                    -moz-transition: all .25s ease;
                        -ms-transition: all .25s ease;
                        -o-transition: all .25s ease;
                            transition: all .25s ease;
                    li {
                        display: block;
                        width: 100%;
                    }
                }
            } 
        }
        .top-nav {            
            ul > li:last-child {
                border-left: 1px solid rgba(255,255,255,0.4);
                padding-left: 12px;
                li {
                    border-left-width: 0;
                    padding-left: 12px;
                }
            }
        }
        .main-nav{
            nav > ul {
                position: absolute;
                li:first-child {
                    border-left-width: 0;
                    padding-left: 0;
                }
                & > li {
                    position: relative;
                    border-left: 1px solid rgba(255,255,255,0.4);
                    padding-left: 14px;
                    padding-right: 18px;
                    a {
                        position: relative;
                    }
                }
            }
                
        }
        .dropdown::after {
            content: '\25bc';
            right: -18px;
            top: 2px;
            font-size: 0.7em;
            position: absolute;
        }
    }
    .img-80 {
        width: 80% !important;
    }
    .img-logo {
        width: 100%;
        height: auto;
        max-width: 310px;
    }
    .header-nav {background-color: var(--rt-dark-blue-color);}
    .header-content { background-color: var(--rt-blue-color);}

    .search-bar-content {
        .search-bar {
            input{
                background-color: #263959;
                position: relative;
                &:focus {
                    outline: none;
                }
                &::after {
                    content: "\f002";
                    font-family:'FontAwesome';
                    font-weight: bold;
                    position: absolute;
                    right: 0;
                    top: 0;
                    z-index: 1;
                }
                
            }
        }
    }

</style>
  
  