function navbar (){
    return `<div id="header">
    <h5 id="text">FLASH SALE:SERUMS & MASKS AT FLAT 499</h5>
    
  </div>
  <div id="navbar2">
    <div>
    
     <img onclick="loadmenu()" class="menuIcon" id="menuIcon" src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg" alt="menu">
    </div>
    <div>
     <a href="index.html" class="logobtn">
      <img class="logoIcon"
      src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x.jpg?v=1646547348"
      alt="logo"/>
      </a>
    </div>
  
    <div class="searchBox">
      <input type="text" class="searchText" placeholder="Search">
      <a href="#" class="searchbtn">
        <i class="fas fa-search"></i>
      </a>
    </div>
    <div id="tpart">
        <img class="trackingIcon" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_346.svg?v=1655211633" alt="">
      <a href="./addTocart.html" class="cartbtn">
        <img class="cartIcon" onclick="openNav()" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIq4p9AB9tQu9d0zKl1UMhuWZbv7Q1wZxBfA&usqp=CAU" alt="">
      </a>
      <a href="" id="loginbtn">
        <img id="loginIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7pFKhkdDUw2y5itWf4EJZAZPMaWzO3Owpw&usqp=CAU" alt="login">
      </a>
    </div>
    
  </div>
    <!-- Menu -->
  <div id="mainmenu">
    <div id="menu">
    <div class="sidebar">
       <ul>
        <li>
            <a href="">WHAT'S NEW</a>
        </li>
        <li>
            <a href="">BEST SELLERS</a>
        </li>
        <li>
            <a href="">499 STORE</a>
        </li>
        <li class="in">
            <a href="" class="in-btn">SHOP BY INGREDIENTS</a><p onclick="first()" id="first">+</p>
            <ul id="in-show">
                <li>
                    <a href="">NIACINAMIDE + CICA</a>
                </li>
                <li>
                    <a href="">HYALURONIC + RICE WATER</a>
                </li>
                <li>
                    <a href="">VITAMIN C</a>
                </li>
                <li>
                    <a href="">WATERMELON + AHA</a>
                </li>
                <li>
                    <a href="">RETINOL + CERAMIDE</a>
                </li>
                <li>
                    <a href="">SALICYLIC</a>
                </li>
            </ul>
        </li>
        <li class="in">
            <a href="" class="co-btn">SHOP BY CONCERN</a><p onclick="second()" id="second">+</p>
            <ul id="co-show">
                <li>
                    <a href="">DRYNESS & REPAIR</a>
                </li>
                <li>
                    <a href="">ACNE CONTROL</a>
                </li>
                <li>
                    <a href="">DULLNESS</a>
                </li>
                <li>
                    <a href="">DARK SPOTS & PIGMENTATION</a>
                </li>
                <li>
                    <a href="">AGE DEFENCE</a>
                </li>
            </ul>
        </li>
        <li class="in">
            <a href="" class="pr-btn">SHOP ALL PRODUCTS</a><p onclick="third()" id="third">+</p>
            <ul id="pr-show">
                <li>
                    <a href="">SERUMS & OIL</a>
                </li>
                <li>
                    <a href="">MOISTURIZERS & DAY CREAMS</a>
                </li>
                <li>
                    <a href="">MIGHT CREAMS & SLEEP MASKS</a>
                </li>
                <li>
                    <a href="">FACE WASH</a>
                </li>
                <li>
                    <a href="">MASKS</a>
                </li>
                <li>
                    <a href="">FACE TONERS</a>
                </li>
                <li>
                    <a href="">SUNSCREEN</a>
                </li>
                <li>
                    <a href="">UNDERARM CAREMASKS</a>
                </li>
                <li>
                    <a href="">EXFOLIATORS</a>
                </li>
                <li>
                    <a href="">LIP CARE</a>
                </li>
                <li>
                    <a href="">COMBOS & REGIME</a>
                </li>
                <li>
                    <a href="">TOOLS & ACCESSORIES</a>
                </li>
                <li>
                    <a href="">GIFTING</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="">HAIR CARE</a>
        </li>
        <li>
            <a href="">BODY CARE</a>
        </li>
        <li>
            <a href="">IKWI NUTRITION</a>
        </li>
        <li>
            <a href="">DOWNLOAD THE APP</a>
        </li>
        <li class="in">
            <a href="" class="be-btn">KNOW US BETTER</a><p onclick="forth()" id="forth">+</p>
            <ul id="be-show">
                <li>
                    <a href="">OUR SKINCARE JOURNAL</a>
                </li>
                <li>
                    <a href="">OUR SKINCARE GUIDES</a>
                </li>
                <li>
                    <a href="">EARTHCARE</a>
                </li>
               
            </ul>
        </li>
        <li class="in">
            <a href="" class="pr-btn">PROFILE</a> <p onclick="fifth()" id="fifth">+</p>
            <ul id="pr-show2">
                <li>
                    <a href="">SKINDULGENCE REWARDS</a>
                </li>
                <li>
                    <a href="">WISHLIST</a>
                </li>
                <li>
                    <a href="">TRACK ORDER</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="">LOG IN</a>
        </li>
       </ul>
    </div>
    <div id="smenu">
        <img
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Cica_Sunscreen_Burger_Menu-02_2.png?v=1659613395"
          alt=""
        />
      </div>
    </div>
</div>
`
}

export default navbar;