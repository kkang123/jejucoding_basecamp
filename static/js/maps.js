var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(33.39239242506926, 126.51402545775956), // 지도의 중심좌표
        level: 9 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
var positions = [
    {
        content: '<div>이큐티 EQTY</div><br><p>제주 제주시 인다13길 28 1층</p>',
        latlng: new kakao.maps.LatLng(33.472399, 126.548659)
    },
    {
        content: '<div>카페닐스</div><br><p>제주 제주시 한림읍 일주서로 5153</P>', 
        latlng: new kakao.maps.LatLng(33.409921, 126.271560)
    },
    {
        content: '<div>카페블루하우스 모슬포점</div><br><p>제주 서귀포시 대정읍 하모중앙로 22 1층 카페블루하우스 모슬포점</p>', 
        latlng: new kakao.maps.LatLng(33.226042, 126.252362)
    },
    {
        content: '<div>오피스제주 사계점</div><br><p>제주특별자치도 서귀포시 안덕면 향교로 214</p>', 
        latlng: new kakao.maps.LatLng(33.234146, 126.290500)
    },
    {
        content: '<div>카페477플러스</div><br><p>리뷰 7제주특별자치도 제주시 구좌읍 세평항로 46-9 2층</p>', 
        latlng: new kakao.maps.LatLng(33.526981, 126.856059)
    },
    {
        content: '<div>스타트업베이</div><br><p>제주특별자치도 서귀포시 중정로 86</p>', 
        latlng: new kakao.maps.LatLng(33.248159, 126.565451)
    },
    {
        content: '<div>W360</div><br><p>제주특별자치도 제주시 동문로9길 13-1 제주지방기상청</p>', 
        latlng: new kakao.maps.LatLng(33.514332, 126.529610)
    },
    {
        content: '<div>루트330 ICT</div><br><p>제주특별자치도 제주시 첨단로 330 A동 2층 Route330 ICT</p>', 
        latlng: new kakao.maps.LatLng(33.442315, 126.567304)
    },
    {
        content: '<div>신한 스퀘어브릿지 제주</div><br><p>제주특별자치도 제주시 신광로 49</p>', 
        latlng: new kakao.maps.LatLng(33.487619, 126.490278)
    },
    {
        content: '<div>제주창조경제혁신센터</div><br><p>제주특별자치도 제주시 중앙로 217 J-SPACE</p>', 
        latlng: new kakao.maps.LatLng(33.500305, 126.529987)
    },
    {
        content: '<div>제주시소통협력센터</div><br><p>제주특별자치도 제주시 관덕로 44 제주시 소통협력센터 모두의실험실</p>', 
        latlng: new kakao.maps.LatLng(33.512814, 126.523914)
    },
    {
        content: '<div>브이랩365</div><br><p>제주특별자치도 제주시 아란3길 13-3 아라지엘지 2층</p>', 
        latlng: new kakao.maps.LatLng(33.476585, 126.541519)
    },
    {
        content: '<div>미유크</div><br><p>제주특별자치도 제주시 노형9길 9-3 2층</p>', 
        latlng: new kakao.maps.LatLng(33.483526, 126.477391)
    },
    {
        content: '<div>바나나 오피스</div><br><p>제주특별자치도 제주시 원노형3길 4-9 바나나 오피스</p>', 
        latlng: new kakao.maps.LatLng(33.487215, 126.485103)
    },
    {
        content: '<div>호호플러스</div><br><p>제주특별자치도 제주시 신산마을길 184 1층 HOHOPLUS</p>', 
        latlng: new kakao.maps.LatLng(33.480518, 126.456287)
    },
    {
        content: '<div>맨써드림스페이스</div><br><p>제주특별자치도 제주시 신대로 145 맨써빌딩 1층 4층 6층 전관</p>', 
        latlng: new kakao.maps.LatLng(33.484295, 126.496697)
    },
    {
        content: '<div>기여오피스</div><br><p>제주특별자치도 제주시 오현길 27</p>', 
        latlng: new kakao.maps.LatLng(33.507700, 126.522366)
    },
    {
        content: '<div>공유공간 이을</div><br><p>제주특별자치도 서귀포시 대정읍 에듀시티로50번길 6</p>', 
        latlng: new kakao.maps.LatLng(33.291059, 126.283482)
    },
    {
        content: '<div>ABC 에이팩토리베이커리카페</div><br><p>제주 제주시 탑동로 11</p>', 
        latlng: new kakao.maps.LatLng(33.516968, 126.519170)
    },
    {
        content: '<div>고스란</div><br><p>제주 서귀포시 안덕면 병악로 81-40 1,2층</p>', 
        latlng: new kakao.maps.LatLng(33.283313, 126.360277)
    },
    {
        content: '<div>고요산책</div><br><p>제주 제주시 중앙로12길 5 1층 짙은 초록 외관</p>', 
        latlng: new kakao.maps.LatLng(33.511811, 126.523854)
    },
    {
        content: '<div>노론존 No Lone Zone</div><br><p>제주 제주시 도령로 50 이화오피스텔 중2층 노론존</p>', 
        latlng: new kakao.maps.LatLng(33.488437, 126.484084)
    },
    {
        content: '<div>디벌트 에스프레소 바</div><br><p>제주 제주시 승천로 88 디벌트 에스프레소 바</p>', 
        latlng: new kakao.maps.LatLng(33.491246, 126.543521)
    },
    {
        content: '<div>래디컬브루잉클럽 애월점</div><br><p>제주 제주시 애월읍 애월해안로 226 호텔 SALT 건물 1층</p>', 
        latlng: new kakao.maps.LatLng(33.466994, 126.336311)
    },
    {
        content: '<div>멜버즈</div><br><p>제주 제주시 한라대학로 114 골든스퀘어 1층 멜버즈</p>', 
        latlng: new kakao.maps.LatLng(33.476086, 126.482556)
    },
    {
        content: '<div>모리노코에</div><br><p>제주 제주시 구남로2길 30</p>', 
        latlng: new kakao.maps.LatLng(33.487118, 126.534397)
    },
    {
        content: '<div>브라운타임</div><br><p>제주 제주시 한경면 중산간서로 3647 1층</p>', 
        latlng: new kakao.maps.LatLng(33.330349, 126.255055)
    },
    {
        content: '<div>서귀피안 베이커리</div><br><p>제주 서귀포시 성산읍 신양로122번길 17 2F</p>', 
        latlng: new kakao.maps.LatLng(33.435249, 126.921962)
    },

     {
        content: '<div>에스프레소라운지</div><br><p>제주 제주시 한라대학로 1</p>', 
        latlng: new kakao.maps.LatLng(33.480632, 126.472760)
    },
    {
        content: '<div>의문당</div><br><p>제주 서귀포시 안덕면 신화역사로304번길 139 1층 의문당</p>', 
        latlng: new kakao.maps.LatLng(33.302181, 126.320748)
    },
    {
        content: '<div>에프터글로우</div><br><p>제주 제주시 간월동로 67-3</p>', 
        latlng: new kakao.maps.LatLng(33.507100, 126.561648)
    },
    {
        content: '<div>여누카페</div><br><p>제주 제주시 조천읍 남조로 1842 1층 여누카페</p>', 
        latlng: new kakao.maps.LatLng(33.495045, 126.675688)
    },
    {
        content: '<div>오후다섯시 두가지착각 조차도</div><br><p></p>', 
        latlng: new kakao.maps.LatLng(33.552114, 126.648555)
    },
    {
        content: '<div>밀탑 대포점</div><br><p>제주 서귀포시 이어도로343번길 63 담앤루 리조트</p>', 
        latlng: new kakao.maps.LatLng(33.245889, 126.451606)
    },
    {
        content: '<div>비에노즈</div><br><p>제주 제주시 한림읍 한림해안로 674</p>', 
        latlng: new kakao.maps.LatLng(33.442427, 126.283564)
    },
    {
        content: '<div>어브라운브리즈</div><br><p>제주 제주시 박성내동길 49-1</p>', 
        latlng: new kakao.maps.LatLng(33.490895, 126.543962)
    },
    {
        content: '<div>에이바우트커피 함덕점</div><br><p>제주 제주시 조천읍 조함해안로 526</p>', 
        latlng: new kakao.maps.LatLng(33.486304, 126.408093)
    },
    {
        content: '<div>에이바우트커피뷰 하귀포구점</div><br><p>제주 제주시 애월읍 하귀12길 21-2 1~3층</p>', 
        latlng: new kakao.maps.LatLng(33.486304, 126.408093)
    },
    {
        content: '<div>울트라마린</div><br><p>제주 제주시 한경면 일주서로 4611</p>', 
        latlng: new kakao.maps.LatLng(33.369417, 126.206151)
    },
    {
        content: '<div>유스커피</div><br><p>제주 제주시 구산로 54 1층</p>', 
        latlng: new kakao.maps.LatLng(33.484330, 126.540707)
    },
    {
        content: '<div>카페몹시</div><br><p>제주 제주시 월대1길 10</p>', 
        latlng: new kakao.maps.LatLng(33.494544, 126.433637)
    },
    {
        content: '<div>카페미와</div><br><p>제주 제주시 구좌읍 구좌로 51-1 2층</p>', 
        latlng: new kakao.maps.LatLng(33.523200, 126.857154)
    },
    {
        content: '<div>탐앤탐스 외도점</div><br><p>제주 제주시 월대5길 6</p>', 
        latlng: new kakao.maps.LatLng(33.494512, 126.435638)
    },
    {
        content: '<div>트립1849</div><br><p>제주 제주시 연북로 88</p>', 
        latlng: new kakao.maps.LatLng(33.481548, 126.490731)
    },
    {
        content: '<div>파스쿠찌 서귀포신시가지점</div><br><p>제주 서귀포시 김정문화로27번길 10-1 카페 파스쿠찌</p>', 
        latlng: new kakao.maps.LatLng(33.252721, 126.508134)
    },
    {
        content: '<div>풍미독서</div><br><p>제주 제주시 구좌읍 세화합전2길 7</p>', 
        latlng: new kakao.maps.LatLng(33.513836, 126.859110)
    },
    {
        content: '<div>프립캠프</div><br><p>제주 서귀포시 태평로 363 헤이서귀포 2층</p>', 
        latlng: new kakao.maps.LatLng(33.246264, 126.560053)
    }
];





for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng // 마커의 위치
    });

    // 마커에 표시할 인포윈도우를 생성합니다 
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
    });

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
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



// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);