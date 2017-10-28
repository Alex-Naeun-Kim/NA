<template>
  
  <section class="cv" id="printCV">
    <div class="profile">
      <div class="face">
        <img src="../assets/images/pic.jpg" />
      </div>
        <p class="name">김나은</p>
        <p class="print">1980.12.8</p>
        <p class="print">010-3397-8598</p>
        <p>naeun.off@gmail.com</p>
        <button class="pdf" @click="toPdf">Print</button>
    </div>
    <div class="education">
      <h2>Education</h2>
      <dl>
        <dt><h3>2007 Mar</h3></dt>
        <dd>Japan Electronic College 컴퓨터 그래픽스과 졸업</dd>
      </dl>
      <dl>
        <dt><h3>2004 Feb</h3></dt>
        <dd>국민대학교 조형대학 금속공예과 졸업</dd>
      </dl>
      <dl>
        <dt><h3>1999 Feb</h3></dt>
        <dd>개포고등학교 졸업</dd>
      </dl>
    </div>
    <div class="skills">
      <h2>Skills</h2>
      <dl v-for="skill in skills">
        <dt><h3>{{ skill.name }}</h3></dt>
        <dd>{{ skill.content }}</dd>
      </dl>
    </div>
    <div class="work-experience">
      <h2>Work Experience</h2>
      <div v-for="project in projects" class="experience">
        <p>
          <span class="date">{{ project.date }}</span>
          <h3>{{ project.client }}</h3>
          <span class="role">{{ project.role }}</span>
        </p>
        <ul>
          <li v-for="item in project.content">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="cv-project">
      <h2>Project</h2>
      <div v-for="exp in experiences">
        <h3>{{ exp.company }}</h3>
        <ul>
          <li v-for="item in exp.list">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      experiences: [
        {
          company: 'LG U+',
          list: [
            'U+ SIS 손익추정',
            'U+ SIS Plan(React.js)',
            'U+ SIS 비용백서(Vue.js)',
            'U+ SIS KPI'
          ]
        },
        {
          company: 'MYLO',
          list: [
            'MYLO 웹사이트 구축',
            'MYLO 앱 웹뷰 및 메일 Markup'
          ]
        },
        {
          company: 'VOLO(SK TechX)',
          list: [
            'VOLO 웹사이트 운영/업데이트(Pug)'
          ]
        },
        {
          company: 'Linuxware',
          list: [
            '기업메일 솔루션 메일플러그 UX 리뉴얼'
          ]
        },
        {
          company: 'Intellian Systems',
          list: [
            'http://www.intelliantech.com 사이트 운영',
            '파트너 포털 운영',
            '그룹웨어 구축',
            '이메일 템플릿 Markup',
            '삼성 SDS 꿈토란 어린이집 Web/App',
            'i-Attendance App/Web',
            '자사 사이트 웹사이트 구축'
          ]
        },
        {
          company: 'ESE',
          list: [
            '국토지리정보원 스마트 전자지도 관리시스템 구축 2차',
            '국토지리정보원 2011-2013 국토공간정보 종합시스템 유지보수',
            '국토지리정보원 스마트 전자국토관리시스템 및 확대발전전략 계획 수립',
            '국토지리정보원 2011 웹사이트 통합',
            'LS 산전 통합모니터링 시스템 구축',
            '나주 그린스마트 구축 시범 사업',
            'KT 유비칸 UI 디자인 개선',
            'KT 글로벌 사업용 유비칸 관제 시스템 구축',
            'RINO 웹사이트 구축',
            '그 외 다수'
          ]
        }
      ],
      skills: [
        {
          name: 'Language',
          content: 'HTML, CSS, SASS, Pug, jQuery, javascript, japanese'
        },
        {
          name: 'Frameworks',
          content: 'Bootstrap, Foundation, Vue.js'
        },
        {
          name: 'Version control system',
          content: 'Mercurial, Git'
        },
        {
          name: 'Graphic',
          content: 'Photoshop, Illustrator, Sketch'
        }
      ],
      projects: [
        {
          date: '2017 Jun - 2017 Sep',
          client: 'LG U+',
          role: 'Markup',
          content: [
            'LG U+ 경영관리고도화 시스템 구축'
          ],
          url: ''
        },
        {
          date: '2016 Oct - 2017 Jan',
          client: 'MYLO',
          role: 'Markup',
          content: [
            '액티비티 앱 서비스 MYLO 웹사이트 구축',
            'MYLO 앱 webview 및 이메일 등의 전반적 Markup 담당'
          ],
          url: 'http://mylo.co.kr'
        },
        {
          date: '2016 Jul - 2017 Sep',
          client: 'VOLO',
          role: 'Markup',
          content: [
            '여행기 앱 서비스 VOLO 웹사이트 운영'
          ],
          url: 'http://withvolo.com'
        },
        {
          date: '2015 Sep - 2015 Nov',
          client: 'Linuxware',
          role: 'Markup, UX Design',
          content: [
            '기업메일 솔루션 서비스 메일플러그의 UI/UX 리뉴얼'
          ],
          url: 'http://mailplug.com'
        },
        {
          date: '2015 Jan - 2015 Jul',
          client: 'Intellian Systems',
          role: 'Markup, UX Design',
          content: [
            '삼성 SDS 상암센터 꿈토란 어린이집 App / BI',
            'i-Attendance(내부 개발 솔루션) App / Web',
            'Intellian Technology Mail / Web 유지보수',
            '자사 웹사이트 개편'
          ],
          url: 'http://sookimoff.cafe24.com/cv2017/#Portfolio'
        },
        {
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
    },
    toPdf: function(){
      //printJS('printCV', 'html');
      window.print();
    }
  }
}
</script>