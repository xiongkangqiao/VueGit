<template margin="0">
  <el-container>
    <el-header style="height: 84px;background:#01062e" id="sticky">
      <div style="height:20%;width:100%;font-size: 10px;font-family: 宋体;padding-top: 4px">
        <div style="float:left;height:100%;width:40%;padding-left: 10%">{{welcome}}</div>
        <div style="float:right;height:100%;width: 40%;padding-right: 10%">
          <ul id="top_ul">
            <li class="top_li">管理员登录</li>
            <li class="top_li">丨</li>
            <li class="top_li">海洋研究所</li>
            <li class="top_li">丨</li>
            <li class="top_li">EN</li>
            <li class="top_li">丨</li>
            <li class="top_li">用户留言</li>
          </ul>
        </div>
      </div>
      <el-divider></el-divider>
      <div style="height:80%;width:100%">
        <div style="width: 40%;float:left;padding-left: 10%">
          <img :src="img" style="height: 50px">
        </div>
        <div style="width: 50%;float:right">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#01062e"
            text-color="#fff"
            active-text-color="#fff"
            style="height:100%;border: 0;">
            <el-menu-item style="font-size: 11px" index="1">首页</el-menu-item>
            <el-menu-item style="font-size: 11px" index="2">专项概况</el-menu-item>
            <el-menu-item style="font-size: 11px" index="3">专项动态</el-menu-item>
            <el-menu-item style="font-size: 11px" index="4">亮点成果</el-menu-item>
            <el-menu-item style="font-size: 11px" index="5">共享平台</el-menu-item>
            <el-menu-item style="font-size: 11px" index="6">合作交流</el-menu-item>
            <el-menu-item style="font-size: 11px" index="7">专项管理</el-menu-item>
          </el-menu>
        </div>
      </div>
    </el-header>
    <el-main style="height: 1580px;width: 1262.67px;margin: 0 auto;">
      <div style="background:white;height: 28%">
        <el-carousel trigger="click" height="442px">
          <el-carousel-item v-for="item in imgList" :key="item.id">
            <img :src="item.img" height="100%">
          </el-carousel-item>
        </el-carousel>
      </div>

      <div style="height: 2%;background: #EBEEF5;padding-left: 160px;">
        <div style="height: 100%">
          <div style="float: left;height: 100%;"><img :src="img7" height="100%"></div>
          <div>
            <!-- <el-carousel height="30px" direction="horizontal" :autoplay="true" indicator-position="none">-->
            <el-carousel height="30px" direction="vertical" :autoplay="true" indicator-position="none" interval=2000>
              <el-carousel-item v-for="item in textList" :key="item.id">
                <p style="margin: 0;font-size: 12px;padding-top: 7px"><strong>{{item.id}}/3</strong> &nbsp{{item.text}}
                </p>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>

      <div style="padding: 0 160px;margin: auto;height:70%">
        <div class="empty"></div>
        <div style="height: 19%">
          <div class="img_big" style="width: 43%;float: left;height:100%;position:relative;">
            <img :src="img2" style="width: 100%" v-on:mouseover="show()" v-on:mouseleave="dis()">
            <div id="tishi"><p style="margin: 0">隐藏内容</p></div>
          </div>
          <div style="width: 55%;float: right;padding-left: 2%;height:100%">
            <div style="width: 100%;height: 10%">
              <div style="float: left;font-weight:bolder;color:#005aa1;font-size:16px">丨综合新闻</div>
              <div style="float: right;font-weight:lighter;font-size: 11px">更多></div>
            </div>
            <div style="width: 100%">
              <ul class="content" style="line-height: 15px;letter-spacing: 1px">
                <li style="padding-top: 8px"><a style="font-size: 14px;" href="#">{{item| ellipsis_3}}<p class="p">
                  {{time}}</p></a></li>
                <li style="padding-top: 8px"><a style="font-size: 14px;" href="#">{{item| ellipsis_3}}<p class="p">
                  {{time}}</p></a></li>
                <li style="padding-top: 8px"><a style="font-size: 14px;" href="#">{{item| ellipsis_3}}<p class="p">
                  {{time}}</p></a></li>
                <li style="padding-top: 8px"><a style="font-size: 14px;" href="#">{{item| ellipsis_3}}<p class="p">
                  {{time}}</p></a></li>
                <li style="padding-top: 8px"><a style="font-size: 14px;" href="#">{{item| ellipsis_3}}<p class="p">
                  {{time}}</p></a></li>
                <li style="padding-top: 8px"><a style="font-size: 14px;" href="#">{{item| ellipsis_3}}<p class="p">
                  {{time}}</p></a></li>
                <li style="padding-top: 8px"><a style="font-size: 14px;" href="#">{{item| ellipsis_3}}<p class="p">
                  {{time}}</p></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="empty"></div>
        <div style="height: 20%">
          <div style="height: 100%;width: 30%;float: left">
            <div style="width: 100%;height: 10%">
              <div style="float: left;font-weight:bolder;font-size:13px">科研成果</div>
              <div style="float: right;font-weight:lighter;font-size: 11px"><a href="#">更多></a></div>
            </div>
            <div><img :src="img3_1" style="width: 100%"></div>
            <div>
              <ul class="content">
                <li><a href="#">{{item| ellipsis_2}}<p class="p">{{time}}</p></a></li>
                <li><a href="#">{{item| ellipsis_2}}<p class="p">{{time}}</p></a></li>
                <li><a href="#">{{item| ellipsis_2}}<p class="p">{{time}}</p></a></li>
                <li><a href="#">{{item| ellipsis_2}}<p class="p">{{time}}</p></a></li>
              </ul>
            </div>
          </div>
          <div style="height: 100%;width: 30%;float: right">
            <div style="width: 100%;height: 10%">
              <div style="float: left;font-weight:bolder;font-size:13px">通知公告</div>
              <div style="float: right;font-weight:lighter;font-size: 11px"><a href="#">更多></a></div>
            </div>
            <div><img :src="img3_3" style="width: 100%"></div>
            <div>
              <ul class="content">
                <li><a href="#">{{item| ellipsis_2}}<p class="p">{{time}}</p></a></li>
                <li><a href="#">{{item| ellipsis_2}}<p class="p">{{time}}</p></a></li>
                <li><a href="#">{{item| ellipsis_2}}<p class="p">{{time}}</p></a></li>
                <li><a href="#">{{item| ellipsis_2}}<p class="p">{{time}}</p></a></li>
              </ul>
            </div>
          </div>
          <div style="height: 100%;width: 30%;margin:0 auto">
            <div style="width: 100%;height: 10%">
              <div style="float: left;font-weight:bolder;font-size:13px">专项动态</div>
              <div style="float: right;font-weight:lighter;font-size: 11px"><a href="#">更多></a></div>
            </div>
            <div><img :src="img3_2" style="width: 100%"></div>
            <div>
              <ul class="content">
                <li><a href="#">{{item| ellipsis_2}}<p class="p">{{time}}</p></a></li>
                <li><a href="#">{{item| ellipsis_2}}<p class="p">{{time}}</p></a></li>
                <li><a href="#">{{item| ellipsis_2}}<p class="p">{{time}}</p></a></li>
                <li><a href="#">{{item| ellipsis_2}}<p class="p">{{time}}</p></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="empty"></div>
        <div style="height: 6%">
          <img :src="img4" style="height: 100%">
        </div>
        <div class="empty"></div>
        <div style="height: 10%">
          <div style="width: 50%;height: 100%;float: left">
            <div style="width: 100%;height: 15%">
              <div style="float: left;font-weight:bolder;font-size:13px">丨专家顾问</div>
              <div style="font-size: 8px;font-weight: lighter;padding-top: 6px">丨顶尖的海洋科学研究团队</div>
            </div>
            <div id="button_father" style="left:0;width: 471px;overflow:hidden;position:relative;height: 85%"
                 v-on:mouseover="button_show()" v-on:mouseleave="button_dis()">

                <div id='race_notice_s' style="position:absolute;left:0; top:0;float: left;width: 624px">
                  <div>
                    <img :src="img8" style="width: 69px;padding-left: 4px;padding-top: 10px;">
                    <img :src="img8" style="width: 69px;padding-left: 4px;padding-top: 10px;">
                    <img :src="img8" style="width: 69px;padding-left: 4px;padding-top: 10px;">
                    <img :src="img8" style="width: 69px;padding-left: 4px;padding-top: 10px;">
                    <img :src="img8" style="width: 69px;padding-left: 4px;padding-top: 10px;">
                    <img :src="img8" style="width: 69px;padding-left: 4px;padding-top: 10px;">
                    <img :src="img8" style="width: 69px;padding-left: 4px;padding-top: 10px;">
                    <img :src="img8" style="width: 69px;padding-left: 4px;padding-top: 10px;">
                  </div>
                </div>


              <div id="button_left"><p style="margin: 0;cursor:pointer" v-on:click="button_left()"><</p></div>
              <div id="button_right"><p style="margin: 0;cursor:pointer" v-on:click="button_right()">></p></div>
            </div>
          </div>
          <div style="width: 49%;float: right;padding-left: 1%">
            <div style="width: 100%;height: 10%">
              <div style="float: left;font-weight:bolder;font-size:13px">丨管理规则</div>
            </div>
            <div style="width: 100%">
              <ul class="content">
                <li><a href="#">{{item| ellipsis_1}}<p class="p">{{time}}</p></a></li>
                <li><a href="#">{{item| ellipsis_1}}<p class="p">{{time}}</p></a></li>
                <li><a href="#">{{item| ellipsis_1}}<p class="p">{{time}}</p></a></li>
                <li><a href="#">{{item| ellipsis_1}}<p class="p">{{time}}</p></a></li>
                <li><a href="#">{{item| ellipsis_1}}<p class="p">{{time}}</p></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="empty"></div>
        <div style="height: 10%;">
          <div style="width: 100%;height: 25%">
            <div style="font-weight:bolder;font-size:13px">丨参与单位</div>
          </div>
          <el-row :gutter="10" style="margin: 0">
            <el-col :span="4">
              <div class="grid-content bg-purple" style="height: 80px;background: #0055ab"></div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple" style="height: 80px;background: #0055ab"></div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple" style="height: 80px;background: #0055ab"></div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple" style="height: 80px;background: #0055ab"></div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple" style="height: 80px;background: #0055ab"></div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple" style="height: 80px;background: #0055ab"></div>
            </el-col>
          </el-row>
        </div>
        <div class="empty"></div>
        <div style="height: 19%">
          <div style="height:30%">
            <div style="width: 8%;background: #0055ab;color:white;font-size: 11px;padding: 8px;float: left">
              <p style="margin-top: 0;font-size: 13px;font-weight: bolder">专项</p>
              <p>研究项目</p>
              <p>RESEARCH<br>PROJECT</p>
              <p style="text-align: right;font-weight: bolder">>&nbsp&nbsp&nbsp</p></div>
            <div style="width: 89%;float: right;font-size: 12px;padding-top: 10px">{{text}}</div>
          </div>
          <div style="height: 70%;width: 89%;float: right;padding-top: 10px">
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="grid-content bg-purple" style="height: 120px;background: white">
                  <img :src="img9" style="width: 100%">
                  <div style="font-size: 11px;text-align: center;height: 20px;background: white;border:1px solid #d3dce6;
                  border-style:none solid">印太交汇区海洋物质能量循环与...
                  </div>
                  <div
                    style="font-size: 11px;text-align: center;height: 18px;background: #c8d1e0;color: white;padding-top: 2px">
                    项目一
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple" style="height: 120px;background: white">
                  <img :src="img9" style="width: 100%">
                  <div style="font-size: 11px;text-align: center;height: 20px;background: white;border:1px solid #d3dce6;
                  border-style:none solid">印太交汇区海洋物质能量循环与...
                  </div>
                  <div
                    style="font-size: 11px;text-align: center;height: 18px;background: #c8d1e0;color: white;padding-top: 2px">
                    项目二
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple" style="height: 120px;background: white">
                  <img :src="img9" style="width: 100%">
                  <div style="font-size: 11px;text-align: center;height: 20px;background: white;border:1px solid #d3dce6;
                  border-style:none solid">印太交汇区海洋物质能量循环与...
                  </div>
                  <div
                    style="font-size: 11px;text-align: center;height: 18px;background: #c8d1e0;color: white;padding-top: 2px">
                    项目三
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple" style="height: 120px;background: white">
                  <img :src="img9" style="width: 100%">
                  <div style="font-size: 11px;text-align: center;height: 20px;background: white;border:1px solid #d3dce6;
                  border-style:none solid">印太交汇区海洋物质能量循环与...
                  </div>
                  <div
                    style="font-size: 11px;text-align: center;height: 18px;background: #c8d1e0;color: white;padding-top: 2px">
                    项目四
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="empty"></div>
      </div>
    </el-main>
    <el-footer style="height: 125px;width: 100%;background:#010021;font-size: 10px;font-family: 宋体">
      <div style="width: 100%;height: 80%">
        <div style="width: 40%;height: 30%;float: left;padding-left: 10%;padding-top:30px">
          {{address}}&nbsp{{postcode}}<br><br>版权所有{{copyright}}&nbsp备案号：{{for_the_record}}
        </div>
        <div style="width: 20%;height:70%;float: right;padding-top:10px;padding-left: 20%">
          <img :src="img6" style="height: 100%">
        </div>
      </div>
      <div style="height:20%;width: 100%;text-align: center">
        {{buttom_text}}
      </div>
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    filters: {
      ellipsis_1(value) {
        if (!value) return ''
        if (value.length > 25) {
          return value.slice(0, 25) + '...'
        }
        return value
      },
      ellipsis_2(value) {
        if (!value) return ''
        if (value.length > 17) {
          return value.slice(0, 17) + '...'
        }
        return value
      },
      ellipsis_3(value) {
        if (!value) return ''
        if (value.length > 30) {
          return value.slice(0, 30) + '...'
        }
        return value
      }
    },
    data() {
      return {
        activeIndex2: '1',
        welcome: '欢迎来到中国科学院B类战略性先导科技专项“印太交汇区海洋物质能量中心形成演化过程与机制”',
        imgList: [{id: 1, img: require('@/assets/1.4.png')}, {id: 2, img: require('@/assets/1.4.png')},
          {id: 3, img: require('@/assets/1.4.png')}],
        textList:
          [{id: 1, text: '中国科学院“印太交汇区海洋物质能量中心形成演化过程与机制”B类战略性先导科技专项2020年度开放子课题择优支持指南'},
            {id: 2, text: '中国科学院“印太交汇区海洋物质能量中心形成演化过程与机制”B类战略性先导科技专项2020年度开放子课题择优支持指南'},
            {id: 3, text: '中国科学院“印太交汇区海洋物质能量中心形成演化过程与机制”B类战略性先导科技专项2020年度开放子课题择优支持指南'}],
        img: require('@/assets/OG{PZ54PL40FGRG0`7EN7}H.png'),
        img1: require('@/assets/1.1.png'),
        img2: require('@/assets/ship.png'),
        img3_1: require('@/assets/3.1.png'),
        img3_2: require('@/assets/3.2.png'),
        img3_3: require('@/assets/3.3.png'),
        img4: require('@/assets/4.png'),
        img5_1: require('@/assets/5.1.png'),
        img5_2: require('@/assets/5.2.png'),
        img5_3: require('@/assets/5.3.png'),
        img5_4: require('@/assets/5.4.png'),
        img5_5: require('@/assets/5.5.png'),
        img6: require('@/assets/6.png'),
        img7: require('@/assets/7.png'),
        img8: require('@/assets/8.png'),
        img9: require('@/assets/9.png'),
        item: 'cctv13：[午间新闻]我国首次海底观测西太平洋我国首次海底观测西太平洋太平洋太平洋',
        time: '2014-04-24',
        address: '山东省青岛市市南区南海路7号',
        postcode: '266071',
        copyright: '中国科学院海洋研究所',
        for_the_record: '370200206D875',
        text: '中国科学院战略性先导科技专项(B类)“印太交汇区海洋物质能量中心形成演化过程与机制”.面向国家重大战略需求和' +
          '国际海洋科技前沿，以晒太平洋及其邻近海或海洋系统为主要研究对象，从“海洋系统”的视角开展综合性协同调与研究,' +
          '在印太暖池对东亚及我国候的影响机制、邻近大洋影响下的近海生态系统演查规律、西太平洋深海环境和资源分布特征等领' +
          '域取得突破性、原创性成果，促进我国深海研究探测装备的研发与应用，显著提升我国深海大洋理论研究水平,为我国海洋' +
          '环境信息保障、战路性资源开发海洋综合管理、防灾减灾提供科学依据。与此同时，打造-支国际先进水平的深海科学研究' +
          '与技术研发创新团队，促进我国深海高新技术进步,实现海洋科技跨越发展，为建设“海洋强国提供科技支撑。',
        buttom_text: '本站由中国科学院战略性先导科技专项（B类）"印太交汇区海洋物质能量中心形成演化过程与机制"提供资助'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      show() {
        document.getElementById("tishi").style.visibility = 'visible';
      },
      dis() {
        document.getElementById("tishi").style.visibility = 'hidden';
      },
      button_show() {
        document.getElementById("button_left").style.visibility = 'visible';
        document.getElementById("button_right").style.visibility = 'visible';
      },
      button_dis() {
        document.getElementById("button_left").style.visibility = 'hidden';
        document.getElementById("button_right").style.visibility = 'hidden';
      },
      button_left(){
        var speed = -39;
        var race_notice_p = document.getElementById('race_notice_p');
        var race_notice_s = document.getElementById('race_notice_s');
        var p = race_notice_s.getElementsByTagName('div')[0];
        var length = p.offsetWidth;
        if(race_notice_s.offsetLeft===-156){
          const a=1;
        }
        else if(race_notice_s.offsetLeft >= - length){
          race_notice_s.style.left = race_notice_s.offsetLeft + speed +'px';
        }
      },
      button_right(){
        var speed = 39;
        var race_notice_p = document.getElementById('race_notice_p');
        var race_notice_s = document.getElementById('race_notice_s');
        var p = race_notice_s.getElementsByTagName('div')[0];
        var length = p.offsetWidth;
        if(race_notice_s.offsetLeft===0){
          const a=1;
        }
        else if(race_notice_s.offsetLeft >= - length){
          race_notice_s.style.left = race_notice_s.offsetLeft + speed +'px';
        }
      },
    },
    created() {
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header {
    background-color: white;
    color: white;
    padding: 0;

  }

  .el-main {
    background-color: white;
    color: #333;
    padding: 0;
  }

  .el-footer {
    background-color: #B3C0D1;
    color: white;

    padding: 0;
  }

  .empty {
    width: 100%;
    height: 2%;
  }

  #top_ul {
    list-style-type: none;
    float: right;
    height: 30px;
    padding: 0;
    margin: 0;
  }

  .top_li {
    padding: 0 3px;
    list-style-type: none;
    float: right;
    height: 30px;
    margin: 0;
  }

  .el-menu {
    background-color: #000569;
  }

  .el-divider {
    margin: 0;
    border: 0;
    height: 0.5px;
    background: rgba(255, 255, 255, 0.5)
  }

  .content {
    width: 100%;
    float: left;
    list-style-type: none;
    padding: 0;
    margin: 0;
    line-height: 14px;
  }

  .p {
    text-align: right;
    float: right;
    width: 20%;
    margin: 0;
    color: rgba(0, 0, 0, 0.3)
  }

  a {
    text-decoration: none;
    font-size: 13px;
    letter-spacing: 1px;
  }

  a:link {
    color: black;
  }

  a:visited {
    color: black;
  }

  a:hover {
    color: dodgerblue;
  }

  .content li {
    padding-top: 5px;
    overflow: hidden;
    z-index: -1;
  }

  .content li a {
    overflow: hidden;
    z-index: -1;
  }

  .el-row {
    margin-bottom: 20px;

  &
  :last-child {
    margin-bottom: 0;
  }

  }
  .el-col {
    border-radius: 4px;
    height: 80px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 30px;
    margin: 0;
  }

  #tishi {
    position: absolute;
    top: 80%;
    left: 2px;
    background: rgba(0, 0, 0, 0.7);
    height: 13%;
    width: 99%;
    color: white;
    text-align: center;
    visibility: hidden;
  }

  #sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  #button_left {
    position: absolute;
    top: 37%;
    left: 2px;
    background: rgba(0, 0, 0, 0.7);
    height: 25%;
    width: 3%;
    color: white;
    text-align: center;
    visibility: hidden;
  }

  #button_right {
    position: absolute;
    top: 37%;
    right: 2px;
    background: rgba(0, 0, 0, 0.7);
    height: 25%;
    width: 3%;
    color: white;
    text-align: center;
    visibility: hidden;
  }

</style>
