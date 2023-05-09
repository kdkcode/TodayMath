import { useEffect, useRef } from 'react';
import "./Map.css";



function Map() {
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(37.51960392507718, 126.87110811468752);
    const mapOptions = {
      center: location,
      zoom: 18,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);

    const marker = new naver.maps.Marker({
      position: location,
      map,
    });

    // 마커를 클릭했을 때 이벤트 등록
    naver.maps.Event.addListener(marker, 'click', function() {
      window.open('https://naver.me/xPpehJgL', '_blank');
    });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div style={{ width: '80vw', height: '100vh', minHeight: '400px', display: 'flex',flexDirection:'column'}}>

      <h1 class="head">오시는 길</h1><br></br>
      <p>서울시 양천구 신목로7길 9 2층</p>
      <p>중,고등부 010-2418-3881</p><br></br>
      
      <div ref={mapElement} style={{ width: '100%', height: '50%' }} />
    </div>
  </div>
  );
}

export default Map;


