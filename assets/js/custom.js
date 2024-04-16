(function ($) {
  "use strict";

  // Mean Menu
  $(".mean-menu").meanmenu({
    meanScreenWidth: "991",
  });

  // Header Sticky
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 120) {
      $(".navbar-area").addClass("is-sticky");
    } else {
      $(".navbar-area").removeClass("is-sticky");
    }
  });

  // Language-switcher
  $(".language-option").each(function () {
    var each = $(this);
    each
      .find(".lang-name")
      .html(each.find(".language-dropdown-menu a:nth-child(1)").text());
    var allOptions = $(".language-dropdown-menu").children("a");
    each.find(".language-dropdown-menu").on("click", "a", function () {
      allOptions.removeClass("selected");
      $(this).addClass("selected");
      $(this)
        .closest(".language-option")
        .find(".lang-name")
        .html($(this).text());
    });
  });

  // Others Option For Responsive JS
  $(".side-nav-responsive .dot-menu").on("click", function () {
    $(".side-nav-responsive .container .container").toggleClass("active");
  });

  // hero Slider
  $(".hero-slider").owlCarousel({
    loop: true,
    margin: 30,
    autoHeight: true,
    nav: true,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
      "<i class='flaticon-left-arrow'></i>",
      "<i class='flaticon-chevron'></i>",
    ],
  });

  // Odometer JS
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  // Brand Slider
  $(".brand-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      520: {
        items: 3,
      },
      668: {
        items: 5,
      },
      1000: {
        items: 6,
      },
    },
  });

  // Testimonials Slider
  $(".testimonials-slider").owlCarousel({
    loop: true,
    margin: 30,
    autoHeight: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Testimonials Slider Two
  $(".testimonials-slider-two").owlCarousel({
    loop: true,
    margin: 10,
    autoHeight: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    navText: [
      "<i class='flaticon-left-arrow'></i>",
      "<i class='flaticon-chevron'></i>",
    ],
  });

  // Event Slider
  $(".event-slider").owlCarousel({
    loop: true,
    margin: 30,
    autoHeight: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });

  // Categories Slider
  $(".categories-slider").owlCarousel({
    loop: true,
    margin: 30,
    autoHeight: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 4,
      },
    },
    navText: [
      "<i class='flaticon-left-arrow'></i>",
      "<i class='flaticon-chevron'></i>",
    ],
  });

  // Course Slider
  $(".course-slider").owlCarousel({
    loop: true,
    margin: 30,
    autoHeight: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
    navText: [
      "<i class='flaticon-left-arrow'></i>",
      "<i class='flaticon-chevron'></i>",
    ],
  });

  // Course Slider
  $(".course-slider-two").owlCarousel({
    loop: true,
    margin: 30,
    autoHeight: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
    navText: [
      "<i class='flaticon-left-arrow'></i>",
      "<i class='flaticon-chevron'></i>",
    ],
  });

  // Instructors Slider
  $(".instructors-slider").owlCarousel({
    loop: true,
    margin: 30,
    autoHeight: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 4,
      },
    },
    navText: [
      "<i class='flaticon-left-arrow'></i>",
      "<i class='flaticon-chevron'></i>",
    ],
  });

  // Blog Preview Slider
  $(".blog-preview-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    mouseDrag: true,
    dots: false,
    items: 1,
    autoHeight: true,
    autoplay: false,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    navText: [
      "<i class='flaticon-left-arrow'></i>",
      "<i class='flaticon-chevron'></i>",
    ],
  });

  // Tabs Single Page
  $(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current");
  $(".tab ul.tabs li").on("click", function (g) {
    var tab = $(this).closest(".tab"),
      index = $(this).closest("li").index();
    tab.find("ul.tabs > li").removeClass("current");
    $(this).closest("li").addClass("current");
    tab
      .find(".tab_content")
      .find("div.tabs_item")
      .not("div.tabs_item:eq(" + index + ")")
      .slideUp();
    tab
      .find(".tab_content")
      .find("div.tabs_item:eq(" + index + ")")
      .slideDown();
    g.preventDefault();
  });

  // FAQ Accordion JS
  $(".accordion")
    .find(".accordion-title")
    .on("click", function () {
      // Adds Active Class
      $(this).toggleClass("active");
      // Expand or Collapse This Panel
      $(this).next().slideToggle("fast");
      // Hide The Other Panels
      $(".accordion-content").not($(this).next()).slideUp("fast");
      // Removes Active Class From Other Titles
      $(".accordion-title").not($(this)).removeClass("active");
    });

  // Popup Video
  $(".play-btn").magnificPopup({
    disableOn: 0,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  // Count Time JS
  function makeTimer() {
    var endTime = new Date("October 30, 2022 17:00:00 PDT");
    var endTime = Date.parse(endTime) / 1000;
    var now = new Date();
    var now = Date.parse(now) / 1000;
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
  }
  setInterval(function () {
    makeTimer();
  }, 300);

  // Subscribe form
  $(".newsletter-form")
    .validator()
    .on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        // Handle The Invalid Form...
        formErrorSub();
        submitMSGSub(false, "Please enter your email correctly");
      } else {
        // Everything Looks Good!
        event.preventDefault();
      }
    });
  function callbackFunction(resp) {
    if (resp.result === "success") {
      formSuccessSub();
    } else {
      formErrorSub();
    }
  }
  function formSuccessSub() {
    $(".newsletter-form")[0].reset();
    submitMSGSub(true, "Thank you for subscribing!");
    setTimeout(function () {
      $("#validator-newsletter").addClass("hide");
    }, 4000);
  }
  function formErrorSub() {
    $(".newsletter-form").addClass("animated shake");
    setTimeout(function () {
      $(".newsletter-form").removeClass("animated shake");
    }, 1000);
  }
  function submitMSGSub(valid, msg) {
    if (valid) {
      var msgClasses = "validation-success";
    } else {
      var msgClasses = "validation-danger";
    }
    $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
  }

  // AJAX MailChimp
  $(".newsletter-form").ajaxChimp({
    url: "https://envyTheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
    callback: callbackFunction,
  });

  // Back To Top
  $(document).ready(function() {
    $("body").append(
      "<div class='go-top'><a href='https:/wa.me/+918884999188' target='_blank' class='whatsapp_float'><i class='fa-brands fa-whatsapp whatsapp-icon'></i></a></div> <div class='go-top'><i class='ri-arrow-up-s-line'></i></div>"
    );
  
    $(window).on("scroll", function() {
      var scrolled = $(window).scrollTop();
      if (scrolled > 600) {
        $(".go-top, .whatsapp_float").addClass("active");
      } else {
        $(".go-top, .whatsapp_float").removeClass("active");
      }
    });
  
    $(".go-top").on("click", function() {
      $("html, body").animate({
        scrollTop: "0",
      }, 500);
    });
  
    $(".whatsapp_float").on("click", function() {
      $("html, body").animate({
        scrollTop: "0",
      }, 500);
    });
  });

  
  // Preloader
  $(window).on("load", function () {
    var preLoder = $(".loader-wrapper");
    preLoder.delay(700).fadeOut(500);
    $("body").addClass("loaded");
  });

  // AOS JS
  AOS.init();

  // TweenMax JS
  $(".banner-area").mousemove(function (e) {
    var wx = $(window).width();
    var wy = $(window).height();
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    var newx = x - wx / 2;
    var newy = y - wy / 2;
    $(".banner-img").each(function () {
      var speed = $(this).attr("data-speed");
      if ($(this).attr("data-revert")) speed *= -0.4;
      TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
    });
  });

  // TweenMax JS
  $(".enrolled-area").mousemove(function (e) {
    var wx = $(window).width();
    var wy = $(window).height();
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    var newx = x - wx / 2;
    var newy = y - wy / 2;
    $(".enrolled-img, .enrolled-img-two").each(function () {
      var speed = $(this).attr("data-speed");
      if ($(this).attr("data-revert")) speed *= -0.4;
      TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
    });
  });

  // Switch Btn
  // $("body").append(
  //   "<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>"
  // );
})($);

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("ledu_theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("ledu_theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}

// // Immediately invoked function to set the theme on initial load
// (function () {
//   if (localStorage.getItem("ledu_theme") === "theme-dark") {
//     setTheme("theme-dark");
//     document.getElementById("slider").checked = false;
//   } else {
//     setTheme("theme-light");
//     document.getElementById("slider").checked = true;
//   }
// })();

const getStartDate = e => {
  var currentDate = new Date();

  // Date from the newdate variable
  var newdateString = e;
  var newdateParts = newdateString.split('/');
  var newdate = new Date(newdateParts[2], newdateParts[1] - 1, newdateParts[0]);

  // Calculate the difference in milliseconds
  var difference = newdate.getTime() - currentDate.getTime();

  // Convert milliseconds to days
  var daysDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

const getHomeCourses = async () => {
  if (pageType === null || pageType === undefined) {
    pageType = 'home';
  }
  let courseData = await fetch("/assets/js/courses.json");
  courseData = await courseData.json();
  courseData = courseData.courseList;
  let temp = "";
  if (pageType === 'home') {
    courseData = courseData.filter(e => e.showInHome);
  }
  var searchParam = new URLSearchParams(window.location.search).get('search');
  let countOfCourses = courseData.length;
  if (searchParam) {
    courseData = courseData.filter(function (course) {
      // Perform case-insensitive search by converting both values to lowercase
      return course.name.toLowerCase().includes(searchParam.toLowerCase());
    });
    countOfCourses = courseData.length;
    let seachParmText = searchParam.toUpperCase();
    let searchText = `We found ${countOfCourses} courses for <b>${seachParmText}</b>`;
    $(".count_Course").html(searchText);
  }
  courseData.forEach((e) => {
    let startSoon = getStartDate(e.nextbatch);
    temp += `<div class="col-lg-3 col-md-3">
    <div class="courses-item">
        ${startSoon <= 10 && startSoon >= 0 ? `<div class="ribbon">Start Soon</div>` : ''}
        <a href="courses-details.html?course=${e.name}&id=${e.id}">
            <img src="${e.image}" alt="Courses" class="cp-img" />
        </a>
        <div class="content">
           <div class="price-text">${e.price}</div>
           <h5 class="mx-2"><a href="courses-details.html?course=${e.name}&id=${e.id}">${e.name}</a></h5>
           <hr class="mt-1.5 text-[#CECCCD]">
              <div class="Cou_Card_Description" >
                <li> <img src="./assets/images/courses/accept.png" class="accept mx-2" alt="Righttick">${e.list}</li>
                <li> <img src="./assets/images/courses/accept.png" class="accept mx-2" alt="Righttick"><strong>Opportunities:</strong>${e.list1}</li>
               
                <li><img src="./assets/images/courses/accept.png" class="accept mx-2" alt="Righttick">${e.list2}</li>
                <li><img src="./assets/images/courses/accept.png" class="accept mx-2" alt="Righttick">${e.list3}</li>
                
              </div>
              <hr class="mt-1.5 text-[#CECCCD]">
              <a href="courses-details.html?course=${e.name}&id=${e.id}" class="default-btn">view details</a>
               
                                 
        </div>
    </div>
</div>`;
  });
  $(".home-popcourse").html(temp);
};

getHomeCourses();

const getCourseDetails = async (e) => {
  let courseData = await fetch("/assets/js/course_syllabus.json");
  courseData = await courseData.json();
  let courseDetails = courseData.course_details.filter(v => v.id == e);
  courseDetails = courseDetails[0];
  courseData = courseDetails.course_syllabus;

  console.log(courseDetails);
  let temp = "";
  $(".inner-banner-bg9").css('background-image', 'url("' + courseDetails.banner + '")');
  $("#cimage").attr('src', courseDetails.cimage);

  $("#dy-title").text(courseDetails.title);
  $("#dy-banner-content p").text(courseDetails.bannerContent);
  $("#dy-req-des").text(courseDetails.requirements);
  let req_list = '';

  courseDetails.reqList.forEach((req) => {
    req_list += `<li>${req}</li>`;
  })
  $("#dy-req-list").html(req_list);
  $("#dy-wul").text(courseDetails.whatyouwilllearn);
  let images = '';

  courseDetails.whatyouwilllearn.forEach((req) => {
    images += `<img src="${req}" class="" alt="Responsive image"/>`;
  })
  $("#dy-wul").html(images);

  courseDetails.reqList.forEach((req) => {
    req_list += `<li>${req}</li>`;
  })

  let desList = '';
  courseDetails.discription.forEach((des) => {
    desList += `<p>${des}</p>`;
  });
  $("#dy-price").html(courseDetails.fees);
  $("#dy-des").html(desList);
  let cd_list = '';
  courseDetails.courseDetailsList.forEach((list) => {
    cd_list += `<div>
          <p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_24121_5085)">
              <path d="M12 0C5.38293 0 0 5.38293 0 12C0 18.6171 5.38293 24 12 24C18.6171 24 24 18.6171 24 12C24 5.38293 18.6171 0 12 0Z" fill="#EEFFF7"></path>
              <path d="M18.0823 9.45703L11.5822 15.9569C11.3872 16.1519 11.1312 16.2501 10.8752 16.2501C10.6193 16.2501 10.3633 16.1519 10.1683 15.9569L6.91833 12.707C6.52722 12.316 6.52722 11.684 6.91833 11.293C7.30927 10.9019 7.94116 10.9019 8.33228 11.293L10.8752 13.836L16.6683 8.04309C17.0593 7.65198 17.6912 7.65198 18.0823 8.04309C18.4732 8.43402 18.4732 9.06592 18.0823 9.45703V9.45703Z" fill="#6FCD9E"></path>
          </g>
          <defs>
              <clipPath id="clip0_24121_5085">
                  <rect width="24" height="24" fill="white"></rect>
              </clipPath>
          </defs>
      </svg>
          
         <span> ${list}</span></p>
          
      </div>`;
  });

  $("#dy-cd-list").html(cd_list);


  courseData.forEach((e) => {
    let temp2 = '';
    e.subtopics.forEach((v) => {
      temp2 += ` <div class="accordion-content show">
        <div class="accordion-content-list">
            <div class="accordion-content-left">
            
            ${v.preview === true ? `<i class="ri-play-circle-line"  title='Video preview available'></i>` : `<i class="ri-file-text-line"></i>`}
                ${v.title}
            </div>
            <div class="accordion-content-right">
                <div class="tag">3 question</div>
                <div class="tag2">${v.duration} min</div>                
            </div>
        </div>        
    </div>`;
    });

    temp += `<li class="accordion-item">
         <a class="accordion-title active" href="javascript:void(0)">
             <i class="ri-add-fill"></i>
             ${e.heading}
              ${e.isdemo ? `<span class='free_tag'> - Free demo available.</span>` : ''}
         </a>
         ${temp2}
     </li>`;
  });
  $(".course-syllabus-info").html(temp);
  $("#pills-home").html('');
  $("#pills-home").append(`<h3>${courseDetails.coursesyllabus.heading}</h3>`);
  courseDetails.coursesyllabus.unit1.forEach((item) => {
    $("#pills-home").append(`<li>${item}</li>`);
  });


  $("#pills-profile").html('');
  $("#pills-profile").append(`<h3>${courseDetails.coursesyllabus.heading1}</h3>`);
  courseDetails.coursesyllabus.unit2.forEach((item) => {
    $("#pills-profile").append(`<li>${item}</li>`);
  });

  $("#pills-contact").html('');
  $("#pills-contact").append(`<h3>${courseDetails.coursesyllabus.heading2}</h3>`);
  courseDetails.coursesyllabus.unit3.forEach((item) => {
    $("#pills-contact").append(`<li>${item}</li>`);
  });
};

const getCurrentPageId = () => {
  // URL to be parsed
  var url = window.location.href;

  // Extracting the ID from the URL
  var params = new URLSearchParams(new URL(url).search);
  var id = params.get("id");

  getCourseDetails(id);

}
getCurrentPageId()


const checkSearchUrl = () => {
  // URL to be checked
  var url = window.location.href;

  // Checking if the URL has a search parameter
  var params = new URLSearchParams(new URL(url).search);
  var hasSearchParam = params.has("search");

  if (!hasSearchParam) {
    $('.search_key h3').text('Courses List');
  }

}

checkSearchUrl();



//twak too
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/647b18037957702c744b8c6e/1h20dbjni';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();


var script = document.createElement('script');
script.src = '/assets/js/navbar.js';

// Append the script element to the document body
document.body.appendChild(script);

//backend code here
