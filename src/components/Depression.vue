<template>
<div class="result">
    <h3 class="result-title">
        우울증 진단 및 치료 무료 프로그램 안내 입니다.

    </h3>
 
    <div class="result-item">
        <div class="depression-desc">
            - <strong>대상:</strong> 국민 전체 <br>
            - <strong>주요 프로그램:</strong> 정신사회 재활 지원사업, 아동청소년정신건강증진사업, 우울증 및 자살예방사업, 알코올중독관리사업, 정신건강 환경조성사업 <br>
            - <strong>장소:</strong> 전국에 광역정신건강증진센터와 기초정신건강증진센터 총 226개소가 설치된 기관 <br>
            - <strong>상담 및 안내 서비스:</strong> 정신건강상담전화<br>(지역번호)1577-0199 <br>
            - <a src="https://www.nhis.or.kr/nhis/healthin/retrieveMindHltMelyMesr.d>">우울증 자가진단 사이트 클릭!</a>
        </div>
        
    </div>
     <p class="result-desc red">
        ▷ 가까운 센터를 확인하세요
    </p>
    <div id="map" class="map" style="width:340px;height:400px;" >
        


    </div>
    <div class="footer">
            만수무강 X 건보장
    </div>

</div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'Result',
  data(){
      return {
    //   showIntro: true,
    si:['하남시'],
    chimai:[],
    depression:[],
    noSmoke:[],
    check:[],
    baby:[],
    cancer:[],

    }
  },
  components: {
      
      },
    methods:{
        getChimai(){
            axios.get('https://drkjhyuck.pythonanywhere.com/dementiactr/?city_name=부천시')
            .then(res =>{
                console.log('치매 성공!');
                console.log(res);
                this.chimai = res.data;
                })
            .catch((error) => {
                console.error('치매 에러는'+error);
                }
            );
        },
        getChimaii(){
            axios.get('https://drkjhyuck.pythonanywhere.com/nosmokectr/?high_city=경기도')
            .then(res =>{
                console.log(res);
                this.smoke = res.data.result;
                console.log('받아온값'+this.smoke);

                })
            .catch((error) => {
                console.error('금연 에러는'+error);
                }
            );
        },
        
        // getChimaiii(){
        //     axios.get('https://drkjhyuck.pythonanywhere.com/bluectr/?city_name=부천시')
        //     .then(res =>{
        //         console.log(res);
        //         console.log('우울증 성공!');
        //         })
        //     .catch((error) => {
        //         console.error('우울증 에러는'+error);
        //         }
        //     );
        // },
        // getChimaiiii(){
        //     axios.get('https://drkjhyuck.pythonanywhere.com/normalchk/?age=40&format=json&gender=Female')
        //     .then(res =>{
        //         console.log(res);
        //         console.log('건강검진 성공!');
        //         })
        //     .catch((error) => {
        //         console.error('건강검진 에러는'+error);
        //         }
        //     );
        // },
        // getChimaiiiii(){
        //     axios.get('https://drkjhyuck.pythonanywhere.com/childchk/?childage=66&format=json')
        //     .then(res =>{
        //         console.log(res);
        //         console.log('영유아 성공!');
        //         })
        //     .catch((error) => {
        //         console.error('영유아 에러는'+error);
        //         }
        //     );
        // },
        // getChimaiiiiii(){
        //     axios.get('https://drkjhyuck.pythonanywhere.com/cancerchk/?gender=Female&format=json&age=46')
        //     .then(res =>{
        //         console.log(res);
        //         console.log('암정보 성공!');
        //         })
        //     .catch((error) => {
        //         console.error('암정보 에러는'+error);
        //         }
        //     );
        // },

        
        initMap() {
            var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
            center: new kakao.maps.LatLng(37.49426645,126.7809633628), // 지도의 중심좌표
            level: 8, // 지도의 확대 레벨
            };
        var map = new kakao.maps.Map(mapContainer, mapOption);
        
        var positions = [
            {
                content: '<div class="marker">경기도 부천시 양지로 134<br>032-625-9871</div>', 
                latlng: new kakao.maps.LatLng(37.4706038241, 126.817061714)
            },
            {
                content: '<div class="marker">경기도 부천시 옥산로10번길 16<br>032-625-4423</div>', 
                latlng: new kakao.maps.LatLng(37.49426645, 126.7809633628)
            },
            {
                content: '<div class="marker">경기도 부천시 성오로 172<br>032-625-9881</div>', 
                latlng: new kakao.maps.LatLng(37.5283469861, 126.7960281955)
            },
            {
                content: '<div>근린공원</div>',
                latlng: new kakao.maps.LatLng(33.451393, 126.570738)
            }
        ];

        for (var i = 0; i < 4; i ++) {
            // 마커를 생성합니다this.chimai[0].demen_logt
            // var lating = new window.kakao.maps.LatLng(this.chimai[0].demen_lat,this.chimai[0].demen_logt)
            // var lating = new window.kakao.maps.LatLng( 37.4706038241,126.8170617140)
            var marker = new window.kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커의 위치,
            });
            var infowindow = new kakao.maps.InfoWindow({
                content: positions[i].content // 인포윈도우에 표시할 내용
            });
            kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
            kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
        }
        function makeOverListener(map, marker, infowindow) {
            return function() {
                infowindow.open(map, marker);
            };
        }
        
        // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
        function makeOutListener(infowindow) {
            return function() {
                infowindow.close();
            };
        }
        }
        




    },
    mounted(){
        this.getChimai();
        this.getChimaii();
        // this.getChimaiii();
        // this.getChimaiiii();
        // this.getChimaiiiii();
        // this.getChimaiiiiii();
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement('script');
            script.onload = () => kakao.maps.load(this.initMap);
            script.src =
            'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=14cc464a948df948e07660a20c3ae220';
            document.head.appendChild(script);
        }
    },

    
}
</script>

<style>

.red{
    margin: 20px 0 10px ;
    color: red;
}
.depression-desc{
    font-size:12px;
}
.marker{
    font-size: 10px;
}
</style>
