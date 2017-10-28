<template>
  <section class="project">
    <div class="timeline">
      <ul>
        <li v-for ="year in years" :class="'item' + year">{{ year }}</li>
      </ul>
    </div>
    <div class="project-item">
      <div :class="'year' + project.year" v-for="project in projects">
        <p>
          <span class="date">{{ project.date }}</span>
          <span class="client">{{ project.client }}</span>
          <span class="role">{{ project.role }}</span>
        </p>
        <ul>
          <li v-for="item in project.content">{{ item }}</li>
        </ul>
        <button @click="toUrl(project)" v-if="project.url.length > 0">More</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      years: [ '2017', '2016', '2015', '2014', '2013', '2012', '2011' ],
      projects: [
        {
          year: '2017',
          date: '2017 Jun - 2017 Sep',
          client: 'LG U+',
          role: 'Markup',
          content: [
            'LG U+ 경영관리고도화 시스템'
          ],
          url: ''
        },
        {
          year: '2016',
          date: '2016 Oct - 2017 Jan',
          client: 'MYLO',
          role: 'Markup',
          content: [
            '액티비티 앱 서비스 MYLO 웹사이트',
            'MYLO 앱 webview 및 이메일'
          ],
          url: 'http://mylo.co.kr'
        },
        {
          year: '2016',
          date: '2016 Jul - 2016 Sep',
          client: 'VOLO',
          role: 'Markup',
          content: [
            '여행기 앱 서비스 VOLO 웹사이트'
          ],
          url: 'http://withvolo.com'
        },
        {
          year: '2015',
          date: '2015 Sep - 2015 Nov',
          client: 'Linuxware',
          role: 'Markup, UX Design',
          content: [
            '기업메일 솔루션 서비스 메일플러그의 UX 리뉴얼'
          ],
          url: 'http://mailplug.com'
        },
        {
          year: '2015',
          date: '2015 Jan - 2015 Jul',
          client: 'Intellian Systems',
          role: 'Markup, UX Design',
          content: [
            '삼성 SDS 상암센터 꿈토란 어린이집 App',
            'i-Attendance(내부 개발 솔루션) App & Web',
            'Intellian Technology Mail & Web',
            '자사 웹사이트 개편'
          ],
          url: 'http://sookimoff.cafe24.com/cv2017/#Portfolio'
        },
        {
          year: '2011',
          date: '2011 Feb - 2014 Jul',
          client: 'ESE',
          role: 'Markup, UX Design',
          content: [
            '한국도로공사 프로젝트 다수',
            '국토지리정보원 프로젝트 다수',
            'KT/LS/나주시청 등 프로젝트 다수',
            '사내 자체 프로젝트(자사 웹사이트 개편)'
          ],
          url: 'http://sookimoff.cafe24.com/cv2017/#Portfolio'
        }
      ]
    }
  },
  methods: {
    toUrl: function(value){
      return window.open(value.url, '_blank');
    }
  },
  mounted: function(){

    //mobile scroll to 
    var $year2011 = $('.year2011'); 
    $('.item2011, .item2012, .item2013, .item2014').on('click', function(){
        $('html, body').animate({
            scrollTop: ($year2011.offset().top)
        },500);
    });

    $('.timeline ul').find('li').each(function(){
      var year = $(this).attr('class').substr(4,7);
      var $item = $('.year' + year);
      $(this).on('click', function(){
        $('html, body').animate({
            scrollTop: ($item.offset().top)
        },500);
      });
    });

    //lighting each year
    $('.year2011').hover(
      function () {
          $('.item2011, .item2012, .item2013, .item2014').addClass('active');
       }, 
       function () {
          $('.item2011, .item2012, .item2013, .item2014').removeClass('active');
       }
    );

    $('.project-item').find('div').each(function() {
      $(this).on({
        'mouseenter':function() {
          var year = $(this).attr('class').substr(4,7);

          $(this).parent().parent().find('.timeline ul').find('li').each(function() {
              var item = $(this).attr('class').substr(4,7);
              if(year == item) {
                $(this).addClass('active');
              }
          })
        }, 'mouseleave': function() {
          $(this).parent().parent().find('.timeline ul').find('li').each(function() {
                $(this).removeClass('active');
          })
        } 
      })
    });
  }
}
</script>