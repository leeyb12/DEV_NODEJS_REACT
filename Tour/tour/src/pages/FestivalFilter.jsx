import React, { useState } from 'react';
import './Component/Filter.css';

const FestivalFilter = () => {
  const [season, setSeason] = useState('');
  const [region, setRegion] = useState('');
  const [category, setCategory] = useState('');

  const handleReset = () => {
    setSeason('');
    setRegion('');
    setCategory('');
  };

  const handleSearch = () => {
    console.log('검색 조건:', { season, region, category });
    // 여기에 필터된 데이터 렌더링 로직 추가 가능
  };

  return (
    <div className="filter-bar">
      <select value={season} onChange={(e) => setSeason(e.target.value)}>
        <option value="">시기</option>
        <option value="A">개최중</option>
        <option value="B">개최예정</option>
        <option value="01">01월</option>
        <option value="02">02월</option>
        <option value="03">03월</option>
        <option value="04">04월</option>
        <option value="05">05월</option>
        <option value="06">06월</option>
        <option value="07">07월</option>
        <option value="08">08월</option>
        <option value="09">09월</option>
        <option value="10">10월</option>
        <option value="11">11월</option>
        <option value="12">12월</option>
      </select>

      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="">지역</option>
        <option value="1">서울</option>
        <option value="2">인천</option>
        <option value="3">대전</option>
        <option value="4">대구</option>
        <option value="5">광주</option>
        <option value="6">부산</option>
        <option value="7">울산</option>
        <option value="8">세종특별자치시</option>
        <option value="31">경기도</option>
        <option value="32">강원특별자치도</option>
        <option value="33">충청북도</option>
        <option value="34">충청남도</option>
        <option value="35">경상북도</option>
        <option value="36">경상남도</option>
        <option value="37">전북특별자치도</option>
        <option value="38">전라남도</option>
        <option value="39">제주특별자치도</option>
      </select>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">카테고리</option>
        <option value="여름">여름</option>
        <option value="야행">야행</option>
        <option value="전통문화">전통문화</option>
        <option value="문화예술">문화예술</option>
        <option value="야경">야경</option>
        <option value="힐링">힐링</option>
      </select>

      <button className="reset-btn" onClick={handleReset}><span>초기화</span></button>
      <button className="search-btn" onClick={handleSearch}><span>검색</span></button>
    </div>
  );
};

export default FestivalFilter;
