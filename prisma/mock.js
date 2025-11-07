import { nullable } from 'superstruct';

export const PRODUCTS = [
  {
    id: '7f70481b-784d-4b0e-bc3e-f05eefc17951',
    name: 'Apple AirPods 프로',
    description:
      'Apple의 AirPods 프로는 탁월한 사운드 품질과 노이즈 캔슬링 기능을 갖춘 무선 이어폰입니다.',
    price: 320000,
    tags: ['소음제거', '스마트기기'],
    imageUrls: [
      'https://images.unsplash.com/photo-1585386959984-a415522316d1',
      'https://images.unsplash.com/photo-1611078489935-0e5dbd8d4c4b'
    ],
    createdAt: '2023-07-14T11:00:00Z',
    updatedAt: '2023-07-14T11:00:00Z'
  },
  {
    id: '41a8a94e-b2fc-4cb0-8f60-fc1c3f76b2b3',
    name: 'Samsung Galaxy S23 Ultra',
    description:
      '최신 Snapdragon 프로세서와 강력한 카메라 성능을 갖춘 삼성의 프리미엄 스마트폰입니다.',
    price: 1450000,
    tags: ['스마트폰'],
    imageUrls: [
      'https://images.unsplash.com/photo-1675863770059-4e5f77e48a3a',
      'https://images.unsplash.com/photo-1679678694768-95d3ad0dc1ab'
    ],
    createdAt: '2023-08-02T10:32:00Z',
    updatedAt: '2023-08-03T09:11:00Z'
  },
  {
    id: 'b56e7a44-d39d-45c0-b5a2-fc7db9a5fca2',
    name: 'LG OLED evo TV 65인치',
    description:
      '최신 OLED evo 패널을 사용한 4K HDR 스마트 TV로, 생생한 색감과 얇은 디자인이 특징입니다.',
    price: 2890000,
    tags: ['TV', 'OLED', '가전'],
    imageUrls: [
      'https://images.unsplash.com/photo-1584905077971-4453f3d78f4c',
      'https://images.unsplash.com/photo-1586902193272-1c3d8f1d5ff2'
    ],
    createdAt: '2023-07-10T14:22:00Z',
    updatedAt: '2023-07-11T10:14:00Z'
  },
  {
    id: 'f83be146-bf3a-4ad7-b9b1-4f62bcefd13a',
    name: 'Sony WH-1000XM5',
    description:
      '소니의 대표적인 무선 노이즈 캔슬링 헤드폰으로, 탁월한 음질과 편안한 착용감을 제공합니다.',
    price: 420000,
    tags: ['헤드폰', '소음제거'],
    imageUrls: [
      'https://images.unsplash.com/photo-1606813909365-59459a4577d8',
      'https://images.unsplash.com/photo-1583224314275-8e61b4ad9bd1'
    ],
    createdAt: '2023-08-21T09:30:00Z',
    updatedAt: '2023-08-22T09:30:00Z'
  },
  {
    id: 'e91a75b1-fc9c-4cf7-bfc3-f8ccbbfd3213',
    name: 'Apple MacBook Air M2',
    description: '초경량 노트북으로, M2 칩을 탑재하여 빠른 속도와 긴 배터리 수명을 자랑합니다.',
    price: 1690000,
    tags: ['노트북', 'Apple'],
    imageUrls: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8'
    ],
    createdAt: '2023-06-14T13:44:00Z',
    updatedAt: '2023-06-15T08:12:00Z'
  },
  {
    id: 'b0d50e64-f5cf-46ab-8c3b-8a5179eebac4',
    name: 'Dyson V15 Detect 무선청소기',
    description: '강력한 흡입력과 레이저 먼지 감지 기능으로 완벽한 청소를 가능하게 합니다.',
    price: 1190000,
    tags: ['청소기'],
    imageUrls: ['https://images.unsplash.com/photo-1616628188577-bddf8d32f9b4'],
    createdAt: '2023-07-02T10:00:00Z',
    updatedAt: '2023-07-03T11:00:00Z'
  },
  {
    id: 'c3c3c9d5-d879-4ce1-9e6b-f3e257fdb93b',
    name: 'Nintendo Switch OLED',
    description: '밝고 선명한 OLED 디스플레이를 탑재한 휴대용 콘솔 게임기입니다.',
    price: 459000,
    tags: ['게임'],
    imageUrls: ['https://images.unsplash.com/photo-1611605698335-0e9af6b7b1a4'],
    createdAt: '2023-05-22T09:30:00Z',
    updatedAt: '2023-05-23T09:31:00Z'
  },
  {
    id: 'd6f46aef-402a-4a44-bf4d-8d7086de08f3',
    name: 'Apple Watch Series 9',
    description: '심박수, 산소포화도, 수면 추적 등 다양한 헬스 기능이 탑재된 스마트워치입니다.',
    price: 599000,
    tags: ['스마트워치', 'Apple', '피트니스'],
    imageUrls: [
      'https://images.unsplash.com/photo-1526401485004-2aa7c1b96d83',
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b22'
    ],
    createdAt: '2023-09-05T14:15:00Z',
    updatedAt: '2023-09-06T10:05:00Z'
  },
  {
    id: 'af6739c9-d92a-4cb3-8a0a-4cfa4e1a923f',
    name: 'Canon EOS R8',
    description: '풀프레임 미러리스 카메라로, 전문가와 취미사진가 모두에게 적합합니다.',
    price: 1890000,
    tags: ['카메라', '미러리스'],
    imageUrls: [
      'https://images.unsplash.com/photo-1519183071298-a2962be90b8e',
      'https://images.unsplash.com/photo-1555617981-2f7b0e70f55a'
    ],
    createdAt: '2023-08-01T09:00:00Z',
    updatedAt: '2023-08-02T09:00:00Z'
  },
  {
    id: '4a6ed18f-2212-4b38-a157-3f03c3e88819',
    name: 'Logitech MX Master 3S',
    description: '인체공학적 디자인과 초정밀 스크롤 기능을 갖춘 무선 마우스입니다.',
    price: 139000,
    tags: ['마우스', '사무용'],
    imageUrls: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3'],
    createdAt: '2023-07-20T08:00:00Z',
    updatedAt: '2023-07-20T12:00:00Z'
  },
  {
    id: 'fce3bb9c-2179-4d7c-8a14-1121e76d8d38',
    name: 'Bose SoundLink Revolve+ II',
    description: '360도 전방향 사운드와 깊은 베이스를 제공하는 프리미엄 블루투스 스피커입니다.',
    price: 389000,
    tags: ['스피커'],
    imageUrls: ['https://images.unsplash.com/photo-1585386959984-a415522316d1'],
    createdAt: '2023-08-16T10:15:00Z',
    updatedAt: '2023-08-16T11:00:00Z'
  },
  {
    id: 'c9125a2f-ec63-4e0a-9043-46c67c62f3fa',
    name: 'Kindle Paperwhite 11세대',
    description: '전자잉크 디스플레이로 눈의 피로 없이 독서를 즐길 수 있는 전자책 리더기입니다.',
    price: 189000,
    tags: ['전자책', '리더기', '여행'],
    imageUrls: [
      'https://images.unsplash.com/photo-1611078489935-0e5dbd8d4c4b',
      'https://images.unsplash.com/photo-1601933470928-c4e633963f58'
    ],
    createdAt: '2023-07-15T10:00:00Z',
    updatedAt: '2023-07-16T09:00:00Z'
  },
  {
    id: '5c8266b5-174f-4b2c-96b2-9cf35a746dbc',
    name: 'Instant Pot Duo 7-in-1',
    description: '압력밥솥, 슬로우 쿠커, 찜기 등 7가지 기능을 하나로 합친 멀티쿠커입니다.',
    price: 159000,
    tags: ['주방가전', '요리'],
    imageUrls: [
      'https://images.unsplash.com/photo-1601043015720-9d99f7a9e225',
      'https://images.unsplash.com/photo-1615486364504-0b889cd6df60'
    ],
    createdAt: '2023-05-09T11:30:00Z',
    updatedAt: '2023-05-09T12:45:00Z'
  },
  {
    id: '4f9a6c4c-0845-4f8a-8b22-cfae0152c321',
    name: 'GoPro HERO 12 Black',
    description: '최신 액션 카메라로, 5.3K 영상 촬영과 안정적인 손떨림 보정 기능을 제공합니다.',
    price: 699000,
    tags: ['카메라', '스포츠'],
    imageUrls: [
      'https://images.unsplash.com/photo-1598188306155-25b4c2b32f83',
      'https://images.unsplash.com/photo-1586380978397-5fcb56c1f4c7'
    ],
    createdAt: '2023-09-11T09:15:00Z',
    updatedAt: '2023-09-12T09:45:00Z'
  },
  {
    id: 'f0acbb31-4e26-474a-9bfa-5bfa099f1c9b',
    name: 'iPad Pro 12.9 M2',
    description: '강력한 M2 칩을 탑재한 태블릿으로, 전문가용 그래픽 작업에 최적화되어 있습니다.',
    price: 1590000,
    tags: ['태블릿', 'Apple'],
    imageUrls: [
      'https://images.unsplash.com/photo-1606744824163-985d376605aa',
      'https://images.unsplash.com/photo-1611078489935-0e5dbd8d4c4b'
    ],
    createdAt: '2023-10-01T08:00:00Z',
    updatedAt: '2023-10-01T09:00:00Z'
  },
  {
    id: '8e9b7a31-6a7a-46c8-a721-2e84b5a8efab',
    name: 'JBL Flip 6',
    description: '컴팩트한 사이즈와 강력한 사운드를 자랑하는 방수 블루투스 스피커입니다.',
    price: 149000,
    tags: ['스피커', '휴대용'],
    imageUrls: ['https://images.unsplash.com/photo-1620694561115-efc1a57b0a76'],
    createdAt: '2023-06-12T09:30:00Z',
    updatedAt: '2023-06-12T10:00:00Z'
  },
  {
    id: '59edc341-2d3c-4d1a-9a23-fdb25a94fbd3',
    name: 'Apple Magic Keyboard',
    description: 'Apple 기기와 완벽하게 호환되는 블루투스 무선 키보드입니다.',
    price: 149000,
    tags: ['키보드', 'Apple'],
    imageUrls: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
      'https://images.unsplash.com/photo-1519241047957-be31d7379a5d'
    ],
    createdAt: '2023-07-01T09:00:00Z',
    updatedAt: '2023-07-01T10:00:00Z'
  },
  {
    id: '28a3c528-cb9e-4c3b-a4d1-4f7f69ff2ed2',
    name: 'Fitbit Charge 6',
    description: '심박수, 수면, 운동량을 정밀하게 측정해주는 스마트 밴드입니다.',
    price: 249000,
    tags: ['피트니스', '스마트워치'],
    imageUrls: [
      'https://images.unsplash.com/photo-1551817958-20204d6ab184',
      'https://images.unsplash.com/photo-1598970434795-0c54fe7c0641'
    ],
    createdAt: '2023-09-15T14:00:00Z',
    updatedAt: '2023-09-16T09:00:00Z'
  },
  {
    id: 'e74bda89-3b6e-4ef0-a36a-5a2589b05ac8',
    name: 'ASUS ROG Zephyrus G14',
    description: 'AMD Ryzen 9 프로세서와 RTX 그래픽을 탑재한 고성능 게이밍 노트북입니다.',
    price: 2290000,
    tags: ['노트북', '게이밍'],
    imageUrls: [
      'https://images.unsplash.com/photo-1605902711622-cfb43c4437b5',
      'https://images.unsplash.com/photo-1593642532973-d31b6557fa68'
    ],
    createdAt: '2023-07-21T11:20:00Z',
    updatedAt: '2023-07-22T09:00:00Z'
  },
  {
    id: '7e382a47-5b0f-4c3e-96ab-d6d66ac1e3a1',
    name: 'Microsoft Surface Pro 9',
    description:
      '노트북과 태블릿의 장점을 결합한 2-in-1 디바이스로, 생산성과 휴대성을 모두 제공합니다.',
    price: 1890000,
    tags: ['노트북', '태블릿'],
    imageUrls: [
      'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc',
      'https://images.unsplash.com/photo-1601933470928-c4e633963f58'
    ],
    createdAt: '2023-08-03T09:00:00Z',
    updatedAt: '2023-08-03T10:30:00Z'
  },
  {
    id: '91c91a4a-2e7b-4cf2-89a1-3a5a64dcf3a9',
    name: 'Sony PlayStation 5',
    description: '최신 그래픽 성능과 빠른 SSD 로딩 속도를 갖춘 차세대 콘솔 게임기입니다.',
    price: 759000,
    tags: ['게임기', 'Sony'],
    imageUrls: [
      'https://images.unsplash.com/photo-1606813909365-59459a4577d8',
      'https://images.unsplash.com/photo-1606813909355-c6e5e3e3a7c4'
    ],
    createdAt: '2023-06-05T11:45:00Z',
    updatedAt: '2023-06-06T09:00:00Z'
  },
  {
    id: 'b3ae2541-fc7d-46c2-a3cb-b174d8e139f8',
    name: 'Apple HomePod mini',
    description: '시리 음성 명령과 스마트홈 제어 기능이 탑재된 컴팩트 스마트 스피커입니다.',
    price: 149000,
    tags: ['스피커', 'Apple', 'IoT'],
    imageUrls: ['https://images.unsplash.com/photo-1593642634367-d91a135587b5'],
    createdAt: '2023-05-13T08:00:00Z',
    updatedAt: '2023-05-14T09:00:00Z'
  },
  {
    id: 'a64e51b9-08f5-42b8-8b1a-bf017d410b76',
    name: 'Xiaomi Mi Band 8',
    description: '저렴한 가격에 피트니스 기능을 갖춘 스마트 밴드입니다.',
    price: 69000,
    tags: ['피트니스', '웨어러블'],
    imageUrls: ['https://images.unsplash.com/photo-1606813909365-59459a4577d8'],
    createdAt: '2023-09-20T09:15:00Z',
    updatedAt: '2023-09-21T08:50:00Z'
  },
  {
    id: 'f24b0b9c-6e53-46fb-b93e-c3ef31816a2c',
    name: 'Razer DeathAdder V3',
    description: 'e스포츠 게이머들이 선호하는 초경량 유선 게이밍 마우스입니다.',
    price: 129000,
    tags: ['마우스', '게이밍'],
    imageUrls: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3'],
    createdAt: '2023-07-30T10:00:00Z',
    updatedAt: '2023-07-31T09:00:00Z'
  },
  {
    id: 'de52a1db-1a1c-4ef8-9e6a-8f1d7c4ef05a',
    name: 'DJI Mini 4 Pro',
    description: '컴팩트한 디자인에 4K 카메라를 탑재한 휴대용 드론입니다.',
    price: 1340000,
    tags: ['드론', '카메라'],
    imageUrls: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794',
      'https://images.unsplash.com/photo-1598188306155-25b4c2b32f83'
    ],
    createdAt: '2023-10-03T08:00:00Z',
    updatedAt: '2023-10-04T09:00:00Z'
  },
  {
    id: '3aeb88e9-7f6a-4e12-8b6e-0e6e8f7c59ef',
    name: 'Beats Studio Pro',
    description: '프리미엄 무선 헤드폰으로 깊은 베이스와 노이즈 캔슬링 기능을 제공합니다.',
    price: 479000,
    tags: ['헤드폰'],
    imageUrls: ['https://images.unsplash.com/photo-1606813909365-59459a4577d8'],
    createdAt: '2023-09-09T09:30:00Z',
    updatedAt: '2023-09-10T09:00:00Z'
  },
  {
    id: '90cb38f4-cb59-4de1-b9f1-0e5ac0917464',
    name: 'Anker PowerCore III 10000',
    description: '고속 충전을 지원하는 휴대용 보조 배터리입니다.',
    price: 59000,
    tags: ['모바일', '충전기'],
    imageUrls: ['https://images.unsplash.com/photo-1583224314275-8e61b4ad9bd1'],
    createdAt: '2023-06-25T10:00:00Z',
    updatedAt: '2023-06-25T11:00:00Z'
  }
];

export const ARTICLES = [
  {
    id: '42183d12-5a9c-49f1-bea3-861da70d5847',
    title: '사촌 비니',
    content:
      '뉴욕 브루클린 출신의 7전8기 변호사 비니의 좌충우돌 첫 케이스! 비니는 사촌 빈센트의 살인누명을 벗겨줄 수 있을 것인가? 남주 조펫지 여주 마리사 토메이가 환상적인 연기의 궁합을 보이다!',
    imageUrls: [
      'https://image.tmdb.org/t/p/w500/4o4M4Fx2G5qBP1dVYQ2PzHYkzDf.jpg',
      'https://upload.wikimedia.org/wikipedia/en/3/3b/My_Cousin_Vinny_poster.jpg'
    ],
    createdAt: '2025-11-06T22:45:28.232Z',
    updatedAt: '2025-11-15T14:12:01.232Z'
  },
  {
    id: '5002a911-3cae-423e-88c6-008f394b81c9',
    title: '전망좋은 방',
    content:
      '20세기 초중반 조신한 영국 처녀가 격정이 넘치는 이태리를 여행하며 성에 눈뜨는 과정을 코믹하게 묘사한 작품',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/en/d/d1/A_Room_with_a_View_poster.jpg'],
    createdAt: '2025-11-05T02:29:11.806Z',
    updatedAt: '2025-11-06T09:11:49.407Z'
  },
  {
    id: '4bde7e12-5c1b-43c8-8d79-0d1dfd79c8a1',
    title: '인셉션',
    content:
      '꿈속에서 또 다른 꿈을 꾸는 다층 구조의 스릴러. 인간의 무의식과 현실의 경계를 탐험하는 놀란 감독의 대표작.',
    imageUrls: [
      'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
      'https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg'
    ],
    createdAt: '2025-10-28T09:12:33.542Z',
    updatedAt: '2025-10-29T10:17:45.201Z'
  },
  {
    id: '1a93b75d-f4a1-4bc9-9051-c91132b21c77',
    title: '기생충',
    content:
      '부잣집과 가난한 집 두 가족의 교묘한 공생 관계가 결국 파국으로 치닫는 블랙코미디. 사회 계급의 벽을 날카롭게 풍자한다.',
    imageUrls: ['https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'],
    createdAt: '2025-10-29T13:55:22.109Z',
    updatedAt: '2025-11-01T18:21:34.624Z'
  },
  {
    id: '2b8ad731-8970-48ad-b3f3-ff520b63c624',
    title: '쇼생크 탈출',
    content: '억울하게 수감된 남자가 절망 속에서도 희망을 잃지 않고 탈출을 꿈꾸는 감동의 드라마.',
    imageUrls: ['https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'],
    createdAt: '2025-10-30T15:14:56.732Z',
    updatedAt: '2025-11-02T08:23:17.341Z'
  },
  {
    id: 'c2d19a58-bc04-4e02-8fd6-fb63e67fce73',
    title: '라라랜드',
    content:
      '꿈을 좇는 두 예술가의 사랑과 현실 사이의 아픔을 그린 뮤지컬 영화. 화려한 색감과 재즈 선율이 매력적이다.',
    imageUrls: [
      'https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg',
      'https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png'
    ],
    createdAt: '2025-11-01T03:11:25.109Z',
    updatedAt: '2025-11-03T14:55:09.204Z'
  },
  {
    id: 'a22a3c9d-75b5-4cf3-a218-b522b7759df5',
    title: '이터널 선샤인',
    content:
      '잊고 싶은 기억을 지워주는 기술을 소재로, 사랑과 기억의 의미를 되묻는 로맨틱 SF 드라마.',
    imageUrls: ['https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg'],
    createdAt: '2025-11-02T09:31:42.908Z',
    updatedAt: '2025-11-04T07:12:19.100Z'
  },
  {
    id: 'e981c5a4-3b4d-4ec3-9351-3f735c8b1e9f',
    title: '센과 치히로의 행방불명',
    content: '신비한 세계에 갇힌 소녀가 성장하며 부모를 구하는 여정. 스튜디오 지브리의 대표 걸작.',
    imageUrls: ['https://image.tmdb.org/t/p/w500/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg'],
    createdAt: '2025-10-31T16:23:14.002Z',
    updatedAt: '2025-11-03T11:55:32.605Z'
  },
  {
    id: '7fd73b0d-89b3-4ff9-9e3e-f445a1e72a91',
    title: '인터스텔라',
    content:
      '인류의 생존을 위해 우주로 떠난 탐사대의 여정을 통해 시간과 사랑의 본질을 탐구하는 SF 명작.',
    imageUrls: ['https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'],
    createdAt: '2025-10-27T21:03:14.002Z',
    updatedAt: '2025-11-01T02:43:55.991Z'
  },
  {
    id: '5e0d2a44-90b4-4a33-9df7-3dc2b3f1a0e7',
    title: '타이타닉',
    content: '비극적인 운명의 배 안에서 피어난 사랑. 시대를 초월한 감정선을 그린 클래식 로맨스.',
    imageUrls: ['https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg'],
    createdAt: '2025-10-30T10:09:28.203Z',
    updatedAt: '2025-11-02T20:32:10.874Z'
  },
  {
    id: '38a2735e-7e74-4a12-8e4e-63fd7b6e9f91',
    title: '헤어질 결심',
    content:
      '의문의 죽음을 조사하던 형사가 피의자 여인에게 빠져드는 미스터리 멜로. 박찬욱 감독의 섬세한 심리극.',
    imageUrls: ['https://image.tmdb.org/t/p/w500/bawtLQb1o3Y1VxgJBTtY3M3KclU.jpg'],
    createdAt: '2025-11-01T17:41:18.804Z',
    updatedAt: '2025-11-04T23:17:03.411Z'
  },
  {
    id: '4c2b5e3f-8af1-4c44-84b7-1cb4e2b9272c',
    title: '어벤져스: 엔드게임',
    content: '모든 히어로가 집결해 우주적 위협에 맞서는 마블 시네마틱 유니버스의 대서사시.',
    imageUrls: ['https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg'],
    createdAt: '2025-10-25T11:13:55.693Z',
    updatedAt: '2025-10-31T15:00:40.281Z'
  },
  {
    id: '9b8de731-b8d3-4bc2-a21f-5c9d6f83a9b9',
    title: '올드보이',
    content: '15년간 감금된 남자가 풀려난 뒤 복수를 향한 진실을 추적하는 충격적인 스릴러.',
    imageUrls: ['https://image.tmdb.org/t/p/w500/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg'],
    createdAt: '2025-10-29T22:42:14.509Z',
    updatedAt: '2025-11-03T12:51:27.231Z'
  },
  {
    id: 'e5a4c817-40f8-41f4-812a-9eae9c33c3b0',
    title: '반지의 제왕',
    content: '한 반지에 얽힌 인간, 요정, 난쟁이, 오크의 장대한 전쟁과 우정의 서사시.',
    imageUrls: ['https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg'],
    createdAt: '2025-10-27T19:14:52.215Z',
    updatedAt: '2025-11-02T08:32:20.904Z'
  },
  {
    id: 'b77f46a5-2a8b-4e1f-b283-22f3a88e7cb4',
    title: '스파이더맨: 노 웨이 홈',
    content: '멀티버스의 균열로 인해 다른 세계의 빌런들과 맞서는 청춘 히어로의 성장담.',
    imageUrls: ['https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg'],
    createdAt: '2025-10-26T09:08:45.104Z',
    updatedAt: '2025-11-03T21:32:50.502Z'
  },
  {
    id: 'c8e24e7f-8cb5-47cc-8d45-3d3e91dc7f50',
    title: '하울의 움직이는 성',
    content: '저주로 노인이 된 소녀가 마법사 하울과 함께 여행하며 자신을 찾아가는 이야기.',
    imageUrls: ['https://image.tmdb.org/t/p/w500/TfKoEboe0QWqV1dpY0e0sJzDhc.jpg'],
    createdAt: '2025-10-28T07:18:22.554Z',
    updatedAt: '2025-11-04T05:00:10.289Z'
  },
  {
    id: 'fa72e820-6633-43cb-a7b0-8c80d451b9e3',
    title: '조커',
    content: '사회에 외면당한 남자가 광대로 각성하며 폭력과 혼돈의 상징이 되어가는 심리극.',
    imageUrls: ['https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'],
    createdAt: '2025-11-01T14:09:12.422Z',
    updatedAt: '2025-11-05T11:55:49.502Z'
  },
  {
    id: 'cfb37212-f1a5-4fcd-8d0f-7a5ff65b6b71',
    title: '서울의 봄',
    content: '1980년 5월, 혼란의 시대 속에서 군과 시민의 갈등을 그린 실화 기반의 정치 스릴러.',
    imageUrls: ['https://image.tmdb.org/t/p/w500/8pURyujpWHzazb6MZy4Pu4R8eLk.jpg'],
    createdAt: '2025-10-31T13:24:40.704Z',
    updatedAt: '2025-11-04T18:44:33.201Z'
  },
  {
    id: 'd1a6c3fb-4a7a-4b4e-bcb4-49ff83a52e89',
    title: '언터처블: 1%의 우정',
    content: '상류층 장애인과 하층민 돌보미의 우정과 삶의 유머를 담은 프랑스 히트작.',
    imageUrls: ['https://image.tmdb.org/t/p/w500/wrgpC7dBzVhX6e1mZk1K0s8AjtK.jpg'],
    createdAt: '2025-10-30T20:12:22.214Z',
    updatedAt: '2025-11-03T03:41:57.419Z'
  },
  {
    id: 'ee482a72-86f4-4b69-b6f5-9a2d58f3a517',
    title: '그랜드 부다페스트 호텔',
    content: '유럽의 한 호텔에서 벌어지는 유쾌한 미스터리와 환상적인 비주얼로 가득한 코미디.',
    imageUrls: ['https://image.tmdb.org/t/p/w500/nX5XotM9yprCKarRH4fzOq1VM1J.jpg'],
    createdAt: '2025-10-25T12:44:55.904Z',
    updatedAt: '2025-10-31T08:55:41.902Z'
  },
  {
    id: '7f32484c-56d3-4f7b-91c9-cd57c17794e7',
    title: '포레스트 검프',
    content:
      '지적 장애를 가진 한 남자의 순수한 시선으로 본 미국 현대사의 여정. 감동적인 인생 드라마.',
    imageUrls: ['https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg'],
    createdAt: '2025-10-29T05:21:37.004Z',
    updatedAt: '2025-11-02T16:15:10.882Z'
  },
  {
    id: 'f62d3e43-9c24-44c7-8ed2-59c65b6c4174',
    title: '라이프 오브 파이',
    content: '난파선에서 벵골호랑이와 함께 생존을 이어가는 한 소년의 초현실적 모험.',
    imageUrls: ['https://image.tmdb.org/t/p/w500/8xPPeCkrrfGWWU9BXnuzxZzXwJ6.jpg'],
    createdAt: '2025-11-02T00:52:10.001Z',
    updatedAt: '2025-11-06T07:10:59.384Z'
  }
];

export const COMMENTS = [
  {
    id: 'c1a9e233-91a1-4b8b-9337-2b11f7c9f001-1',
    content: '음질이 정말 좋아요',
    productId: '7f70481b-784d-4b0e-bc3e-f05eefc17951',
    articleId: null,
    createdAt: '2023-07-15T09:12:00Z',
    updatedAt: '2023-07-15T09:45:00Z'
  },
  {
    id: 'c1a9e233-91a1-4b8b-9337-2b11f7c9f001-2',
    content: '노이즈 캔슬링이 기대 이상입니다',
    productId: '7f70481b-784d-4b0e-bc3e-f05eefc17951',
    articleId: null,
    createdAt: '2023-07-15T09:12:00Z',
    updatedAt: '2023-07-15T09:45:00Z'
  },
  {
    id: 'd4a6c33a-2107-4c3a-a5bc-b45a8c8b1002-1',
    content: '통화 음질도 깨끗해요',
    productId: '7f70481b-784d-4b0e-bc3e-f05eefc17951',
    articleId: null,
    createdAt: '2023-07-20T14:05:00Z',
    updatedAt: '2023-07-21T08:22:00Z'
  },
  {
    id: 'd4a6c33a-2107-4c3a-a5bc-b45a8c8b1002-2',
    content: '착용감이 편안합니다',
    productId: '7f70481b-784d-4b0e-bc3e-f05eefc17951',
    articleId: null,
    createdAt: '2023-07-20T14:05:00Z',
    updatedAt: '2023-07-21T08:22:00Z'
  },
  {
    id: 'f2c21d9a-8b3e-437b-aaf5-9e6f10f41003-1',
    content: '화면 색감이 끝내줍니다',
    productId: 'b56e7a44-d39d-45c0-b5a2-fc7db9a5fca2',
    articleId: null,
    createdAt: '2023-07-12T18:30:00Z',
    updatedAt: '2023-07-13T07:10:00Z'
  },
  {
    id: 'f2c21d9a-8b3e-437b-aaf5-9e6f10f41003-2',
    content: '영화 볼 때 몰입감 최고',
    productId: 'b56e7a44-d39d-45c0-b5a2-fc7db9a5fca2',
    articleId: null,
    createdAt: '2023-07-12T18:30:00Z',
    updatedAt: '2023-07-13T07:10:00Z'
  },
  {
    id: 'eab312fa-72de-45a4-a8ff-4ffda5321004-1',
    content: '크기가 커서 거실에 딱이네요',
    productId: 'b56e7a44-d39d-45c0-b5a2-fc7db9a5fca2',
    articleId: null,
    createdAt: '2023-07-25T11:00:00Z',
    updatedAt: '2023-07-25T11:05:00Z' // done.
  },
  {
    id: 'b4f920b3-cda2-4414-bfb0-9bb1f6c41005-1',
    content: '카메라 성능이 정말 뛰어나요',
    productId: '41a8a94e-b2fc-4cb0-8f60-fc1c3f76b2b3',
    articleId: null,
    createdAt: '2023-08-03T09:20:00Z',
    updatedAt: '2023-08-03T09:50:00Z'
  },
  {
    id: 'b4f920b3-cda2-4414-bfb0-9bb1f6c41005-2',
    content: '야간 촬영 품질이 훌륭합니다',
    productId: '41a8a94e-b2fc-4cb0-8f60-fc1c3f76b2b3',
    articleId: null,
    createdAt: '2023-08-03T09:20:00Z',
    updatedAt: '2023-08-03T09:50:00Z'
  },
  {
    id: 'a0cccb41-8f1a-4dc8-812f-2aa41c710006-1',
    content: '무거운 편이지만 성능이 압도적입니다',
    productId: '41a8a94e-b2fc-4cb0-8f60-fc1c3f76b2b3',
    articleId: null,
    createdAt: '2023-08-10T12:00:00Z',
    updatedAt: '2023-08-10T12:05:00Z'
  },
  {
    id: '8f3b2a1d-6c4e-4d5a-9f12-0a1b2c3d4e5f',
    content: 'OLED 화면이 정말 선명하고 색감이 풍부합니다',
    productId: 'c3c3c9d5-d879-4ce1-9e6b-f3e257fdb93b',
    articleId: null,
    createdAt: '2023-05-24T08:30:00Z',
    updatedAt: '2023-05-24T09:00:00Z'
  }, // done
  {
    id: 'd1a6f3b2-9c4f-4a7e-8b21-1c2d3e4f5a6b',
    content: '게임 로딩 속도가 빨라서 쾌적합니다',
    productId: 'c3c3c9d5-d879-4ce1-9e6b-f3e257fdb93b',
    articleId: null,
    createdAt: '2023-05-25T13:45:00Z',
    updatedAt: '2023-05-26T07:00:00Z'
  },
  {
    id: 'b2c3d4e5-f6a7-48b9-8123-3d4e5f6a7b8c',
    content: '휴대용으로 너무 좋아요',
    productId: 'c3c3c9d5-d879-4ce1-9e6b-f3e257fdb93b',
    articleId: null,
    createdAt: '2023-05-25T13:45:00Z',
    updatedAt: '2023-05-26T07:00:00Z'
  }, // done
  {
    id: 'a6b7c8d9-e0f1-42a3-2567-7b8c9d0e1f2a',
    content: '사진 색감이 자연스럽고 초점이 빠릅니다',
    productId: 'af6739c9-d92a-4cb3-8a0a-4cfa4e1a923f',
    articleId: null,
    createdAt: '2023-08-03T11:00:00Z',
    updatedAt: '2023-08-03T11:30:00Z'
  },
  {
    id: 'b7c8d9e0-f1a2-43b4-3678-8c9d0e1f2a3b',
    content: '야간 촬영도 만족스러워요',
    productId: 'af6739c9-d92a-4cb3-8a0a-4cfa4e1a923f',
    articleId: null,
    createdAt: '2023-08-04T10:45:00Z',
    updatedAt: '2023-08-04T11:15:00Z'
  },
  {
    id: 'c8d9e0f1-a2b3-44c5-4789-9d0e1f2a3b4c',
    content: '가격 대비 성능이 뛰어납니다',
    productId: 'af6739c9-d92a-4cb3-8a0a-4cfa4e1a923f',
    articleId: null,
    createdAt: '2023-08-04T10:45:00Z',
    updatedAt: '2023-08-04T11:15:00Z'
  },
  {
    id: 'd9e0f1a2-b3c4-45d6-589a-0e1f2a3b4c5d',
    content: '손목에 딱 맞고 조작감이 부드러워요',
    productId: '4a6ed18f-2212-4b38-a157-3f03c3e88819',
    articleId: null,
    createdAt: '2023-07-21T10:00:00Z',
    updatedAt: '2023-07-21T10:30:00Z'
  },
  {
    id: 'e0f1a2b3-c4d5-46e7-69ab-1f2a3b4c5d6e',
    content: '클릭 소리가 조용해서 사무실에서도 좋아요',
    productId: '4a6ed18f-2212-4b38-a157-3f03c3e88819',
    articleId: null,
    createdAt: '2023-07-22T11:30:00Z',
    updatedAt: '2023-07-22T12:00:00Z'
  },
  {
    id: 'f1a2b3c4-d5e6-47f8-7abc-2a3b4c5d6e7f',
    content: '소리 정말 좋아요!',
    productId: 'fce3bb9c-2179-4d7c-8a14-1121e76d8d38',
    articleId: null,
    createdAt: '2023-08-17T12:30:00Z',
    updatedAt: '2023-08-17T13:00:00Z'
  },
  {
    id: 'a2b3c4d5-e6f7-48a9-8bcd-3b4c5d6e7f8a',
    content: '배터리도 오래가네요.',
    productId: 'fce3bb9c-2179-4d7c-8a14-1121e76d8d38',
    articleId: null,
    createdAt: '2023-08-17T12:30:00Z',
    updatedAt: '2023-08-17T13:00:00Z'
  },
  {
    id: 'b2c3d4e5-f6a7-49b0-9cde-4c5d6e7f8a9b',
    content: '책 읽을 맛 나네요.',
    productId: 'c9125a2f-ec63-4e0a-9043-46c67c62f3fa',
    articleId: null,
    createdAt: '2023-07-17T09:00:00Z',
    updatedAt: '2023-07-17T10:30:00Z'
  },
  {
    id: 'c3d4e5f6-a7b8-4a01-0def-5d6e7f8a9b0c',
    content: '조명 반사도 적어서 좋아요.',
    productId: 'c9125a2f-ec63-4e0a-9043-46c67c62f3fa',
    articleId: null,
    createdAt: '2023-07-17T09:00:00Z',
    updatedAt: '2023-07-17T10:30:00Z'
  },
  {
    id: 'd4e5f6a7-b8c9-4b12-1f01-6e7f8a9b0c1d',
    content: '압력 기능이 강력해요!',
    productId: '5c8266b5-174f-4b2c-96b2-9cf35a746dbc',
    articleId: null,
    createdAt: '2023-05-10T11:00:00Z',
    updatedAt: '2023-05-10T11:45:00Z'
  },
  {
    id: 'e5f6a7b8-c9d0-4c23-2012-7f8a9b0c1d2e',
    content: '요리 초보도 쉽게 써요.',
    productId: '5c8266b5-174f-4b2c-96b2-9cf35a746dbc',
    articleId: null,
    createdAt: '2023-05-10T11:00:00Z',
    updatedAt: '2023-05-10T11:45:00Z'
  },
  {
    id: 'f6a7b8c9-d0e1-4d34-3123-8a9b0c1d2e3f',
    content: '영상 퀄리티 미쳤어요!',
    productId: '4f9a6c4c-0845-4f8a-8b22-cfae0152c321',
    articleId: null,
    createdAt: '2023-09-12T09:00:00Z',
    updatedAt: '2023-09-12T09:30:00Z'
  },
  {
    id: 'a7b8c9d0-e1f2-4e45-4234-9b0c1d2e3f4a',
    content: '액션캠 중 최고네요.',
    productId: '4f9a6c4c-0845-4f8a-8b22-cfae0152c321',
    articleId: null,
    createdAt: '2023-09-12T09:00:00Z',
    updatedAt: '2023-09-12T09:30:00Z'
  },
  {
    id: 'b8c9d0e1-f2a3-4f56-5345-0c1d2e3f4a5b',
    content: '아이패드 M2 진짜 빠르네요.',
    productId: 'f0acbb31-4e26-474a-9bfa-5bfa099f1c9b',
    articleId: null,
    createdAt: '2023-10-02T09:00:00Z',
    updatedAt: '2023-10-02T09:30:00Z'
  },
  {
    id: 'c9d0e1f2-a3b4-5067-6456-1d2e3f4a5b6c',
    content: '작고 예뻐요.',
    productId: '8e9b7a31-6a7a-46c8-a721-2e84b5a8efab',
    articleId: null,
    createdAt: '2023-06-13T08:00:00Z',
    updatedAt: '2023-06-13T08:30:00Z'
  },
  {
    id: 'd0e1f2a3-b4c5-6178-7567-2e3f4a5b6c7d',
    content: '야외에서도 소리가 좋아요.',
    productId: '8e9b7a31-6a7a-46c8-a721-2e84b5a8efab',
    articleId: null,
    createdAt: '2023-06-13T08:00:00Z',
    updatedAt: '2023-06-13T08:30:00Z'
  },
  {
    id: 'e1f2a3b4-c5d6-7289-8678-3f4a5b6c7d8e',
    content: '키감이 정말 좋아요.',
    productId: '59edc341-2d3c-4d1a-9a23-fdb25a94fbd3',
    articleId: null,
    createdAt: '2023-07-02T09:30:00Z',
    updatedAt: '2023-07-02T10:00:00Z'
  },
  {
    id: 'f2a3b4c5-d6e7-839a-9789-4a5b6c7d8e9f',
    content: '운동 기록 정확해요.',
    productId: '28a3c528-cb9e-4c3b-a4d1-4f7f69ff2ed2',
    articleId: null,
    createdAt: '2023-09-16T10:00:00Z',
    updatedAt: '2023-09-16T10:45:00Z'
  },
  {
    id: 'a3b4c5d6-e7f8-94ab-a89a-5b6c7d8e9f0a',
    content: '배터리 오래가네요.',
    productId: '28a3c528-cb9e-4c3b-a4d1-4f7f69ff2ed2',
    articleId: null,
    createdAt: '2023-09-16T10:00:00Z',
    updatedAt: '2023-09-16T10:45:00Z'
  },
  {
    id: 'b4c5d6e7-f809-05bc-b9ab-6c7d8e9f0a1b',
    content: '성능 대비 가격 굿',
    productId: 'e74bda89-3b6e-4ef0-a36a-5a2589b05ac8',
    articleId: null,
    createdAt: '2023-07-23T09:30:00Z',
    updatedAt: '2023-07-23T10:30:00Z'
  }, // done
  {
    id: 'c5d6e7f8-09a1-16cd-cabc-7d8e9f0a1b2c',
    content: '디자인도 예뻐요.',
    productId: 'e74bda89-3b6e-4ef0-a36a-5a2589b05ac8',
    articleId: null,
    createdAt: '2023-07-23T09:30:00Z',
    updatedAt: '2023-07-23T10:30:00Z'
  },
  {
    id: 'd6e7f809-1a2b-27de-dbcd-8e9f0a1b2c3d',
    content: '서피스 너무 유용해요.',
    productId: '7e382a47-5b0f-4c3e-96ab-d6d66ac1e3a1',
    articleId: null,
    createdAt: '2023-08-04T08:30:00Z',
    updatedAt: '2023-08-04T09:00:00Z'
  },
  {
    id: 'e7f8091a-2b3c-38ef-ecde-9f0a1b2c3d4e',
    content: '윈도우 터치감 좋아요.',
    productId: '7e382a47-5b0f-4c3e-96ab-d6d66ac1e3a1',
    articleId: null,
    createdAt: '2023-08-04T08:30:00Z',
    updatedAt: '2023-08-04T09:00:00Z'
  }, //done

  {
    id: 'a02b83b2-3071-4dbb-927d-f3cc37f4a051',
    content: '그래픽이 훌륭해요',
    productId: '91c91a4a-2e7b-4cf2-89a1-3a5a64dcf3a9',
    articleId: null,
    createdAt: '2023-06-06T10:00:00Z',
    updatedAt: '2023-06-06T10:30:00Z'
  },
  {
    id: '97d136e3-f615-4c5e-83db-373b9cbf2287',
    content: 'SSD 덕분에 로딩이 정말 빨라요',
    productId: '91c91a4a-2e7b-4cf2-89a1-3a5a64dcf3a9',
    articleId: null,
    createdAt: '2023-06-06T10:00:00Z',
    updatedAt: '2023-06-06T10:30:00Z'
  },
  {
    id: 'f4db83a1-7994-4e1a-8b65-c347ff4a0ee8',
    content: '디자인이 예쁘고 음질도 좋아요',
    productId: 'b3ae2541-fc7d-46c2-a3cb-b174d8e139f8',
    articleId: null,
    createdAt: '2023-05-15T08:20:00Z',
    updatedAt: '2023-05-15T09:00:00Z'
  },
  {
    id: 'b7d2f7b1-9f3f-4b91-87c4-5090f07b04cc',
    content: '이 가격대에서는 최고입니다',
    productId: 'a64e51b9-08f5-42b8-8b1a-bf017d410b76',
    articleId: null,
    createdAt: '2023-09-22T10:15:00Z',
    updatedAt: '2023-09-22T10:30:00Z'
  }, //done
  {
    id: '22d9a5b3-4232-4ed3-81ee-586a6b72f9ef',
    content: '배터리가 오래가요',
    productId: 'a64e51b9-08f5-42b8-8b1a-bf017d410b76',
    articleId: null,
    createdAt: '2023-09-22T10:15:00Z',
    updatedAt: '2023-09-22T10:30:00Z'
  },
  {
    id: 'fbdf5934-5c26-4c3e-9449-2755de1985c7',
    content: '클릭감이 좋아요',
    productId: 'f24b0b9c-6e53-46fb-b93e-c3ef31816a2c',
    articleId: null,
    createdAt: '2023-08-01T09:00:00Z',
    updatedAt: '2023-08-01T10:00:00Z'
  },
  {
    id: '5b2a7b44-7fc5-4db1-972d-83b147dbe14e',
    content: '가벼워서 손목이 덜 아파요',
    productId: 'f24b0b9c-6e53-46fb-b93e-c3ef31816a2c',
    articleId: null,
    createdAt: '2023-08-01T09:00:00Z',
    updatedAt: '2023-08-01T10:00:00Z'
  },
  {
    id: '2fa7f1de-7088-4b3d-9c5f-64b707a93471',
    content: '영상 퀄리티가 아주 뛰어나요',
    productId: 'de52a1db-1a1c-4ef8-9e6a-8f1d7c4ef05a',
    articleId: null,
    createdAt: '2023-10-05T08:00:00Z',
    updatedAt: '2023-10-05T09:00:00Z'
  },
  {
    id: '1771b493-448f-4b3d-9de3-c2b1a28d07b1',
    content: '휴대성이 좋아요',
    productId: 'de52a1db-1a1c-4ef8-9e6a-8f1d7c4ef05a',
    articleId: null,
    createdAt: '2023-10-05T08:00:00Z',
    updatedAt: '2023-10-05T09:00:00Z'
  },
  {
    id: '7dfb9a65-1217-4e76-b580-8f9f35a8d889',
    content: '조작이 간단해요',
    productId: 'de52a1db-1a1c-4ef8-9e6a-8f1d7c4ef05a',
    articleId: null,
    createdAt: '2023-10-05T08:00:00Z',
    updatedAt: '2023-10-05T09:00:00Z'
  },
  {
    id: '80df5391-f06c-4d02-a223-9c3b9a3b9e6b',
    content: '저음이 강력해서 좋습니다',
    productId: '3aeb88e9-7f6a-4e12-8b6e-0e6e8f7c59ef',
    articleId: null,
    createdAt: '2023-09-11T08:45:00Z',
    updatedAt: '2023-09-11T09:10:00Z'
  },
  {
    id: '2f19a2f8-1d06-4e03-9df0-7a99e871cb2f',
    content: '휴대성이 좋아서 출퇴근길에 딱이에요',
    productId: '90cb38f4-cb59-4de1-b9f1-0e5ac0917464',
    articleId: null,
    createdAt: '2023-06-26T10:00:00Z',
    updatedAt: '2023-06-26T10:40:00Z'
  }, // done
  {
    id: '2c14e5a3-70a1-44e7-8a6e-42d29f82840a',
    content: '고속 충전 정말 잘 됩니다',
    productId: '90cb38f4-cb59-4de1-b9f1-0e5ac0917464',
    articleId: null,
    createdAt: '2023-06-26T10:00:00Z',
    updatedAt: '2023-06-26T10:40:00Z'
  },
  {
    id: '1a2b3c4d-55f0-4b7e-a1b1-03b1c937e8f4',
    content: '조 페시의 연기 정말 웃겼어요!',
    productId: null,
    articleId: '42183d12-5a9c-49f1-bea3-861da70d5847',
    createdAt: '2025-11-07T10:00:00Z',
    updatedAt: '2025-11-07T11:00:00Z'
  },
  {
    id: 'b5c8d6f3-91b3-4b52-a46e-56b5b23d04d8',
    content: '법정씬이 인상적이에요',
    productId: null,
    articleId: '42183d12-5a9c-49f1-bea3-861da70d5847',
    createdAt: '2025-11-07T10:00:00Z',
    updatedAt: '2025-11-07T11:00:00Z'
  },
  {
    id: '8a9f3d2e-2c91-4c68-a0bc-f8b2a69e87b2',
    content: '조 페시와 마리사 토메이, 환상의 연기 궁합',
    productId: null,
    articleId: '42183d12-5a9c-49f1-bea3-861da70d5847',
    createdAt: '2025-11-07T10:00:00Z',
    updatedAt: '2025-11-07T11:00:00Z'
  },
  {
    id: 'c3b9a6b7-f1a5-40b0-9c52-4e13b7fdb8a1',
    content: '영국식 감성이 너무 좋아요',
    productId: null,
    articleId: '5002a911-3cae-423e-88c6-008f394b81c9',
    createdAt: '2025-11-06T09:15:00Z',
    updatedAt: '2025-11-06T10:20:00Z'
  },
  {
    id: 'd61b7af4-2391-4b9a-b0d8-3b7a41a5f1a4',
    content: '잔잔하지만 감정이 깊어요',
    productId: null,
    articleId: '5002a911-3cae-423e-88c6-008f394b81c9',
    createdAt: '2025-11-06T09:15:00Z',
    updatedAt: '2025-11-06T10:20:00Z'
  },
  {
    id: 'e29c4af7-75c1-4a9d-82b4-67a7f9b238d2',
    content: '꿈과 현실의 경계가 흥미로워요',
    productId: null,
    articleId: '4bde7e12-5c1b-43c8-8d79-0d1dfd79c8a1',
    createdAt: '2025-11-03T14:30:00Z',
    updatedAt: '2025-11-03T15:00:00Z'
  }, //done
  {
    id: 'f73d6f1e-45e4-47c9-99a1-9b27c4ad3e52',
    content: '음악도 완벽했어요',
    productId: null,
    articleId: '4bde7e12-5c1b-43c8-8d79-0d1dfd79c8a1',
    createdAt: '2025-11-03T14:30:00Z',
    updatedAt: '2025-11-03T15:00:00Z'
  },
  {
    id: 'a78b9e3d-4a42-4374-93b3-b4f8d09b97a6',
    content: '봉준호 감독의 연출력 최고',
    productId: null,
    articleId: '1a93b75d-f4a1-4bc9-9051-c91132b21c77',
    createdAt: '2025-11-05T18:15:00Z',
    updatedAt: '2025-11-05T18:40:00Z'
  },
  {
    id: 'b45d7f3c-c718-421d-b9f3-9086f0f9a8b9',
    content: '마지막 장면이 소름 돋았어요',
    productId: null,
    articleId: '1a93b75d-f4a1-4bc9-9051-c91132b21c77',
    createdAt: '2025-11-05T18:15:00Z',
    updatedAt: '2025-11-05T18:40:00Z'
  },
  {
    id: '2fa3d1e8-22d1-4e36-b82b-09c2e9b7b4d7',
    content: '희망을 잃지 않는 주인공의 모습이 감동적이에요',
    productId: null,
    articleId: '2b8ad731-8970-48ad-b3f3-ff520b63c624',
    createdAt: '2025-11-04T08:00:00Z',
    updatedAt: '2025-11-04T08:45:00Z'
  },
  {
    id: 'b94e3d6f-1a32-4c9f-b4a3-6d23e6b9a2d8',
    content: '음악과 색감이 너무 아름다워요',
    productId: null,
    articleId: 'c2d19a58-bc04-4e02-8fd6-fb63e67fce73',
    createdAt: '2025-11-03T12:10:00Z',
    updatedAt: '2025-11-03T13:20:00Z'
  }, //done
  {
    id: 'a2b3e4d5-491c-41d1-8e8e-294b8b6c2b31',
    content: '엔딩이 마음 아파요',
    productId: null,
    articleId: 'c2d19a58-bc04-4e02-8fd6-fb63e67fce73',
    createdAt: '2025-11-03T12:10:00Z',
    updatedAt: '2025-11-03T13:20:00Z'
  },
  {
    id: '4a6e3d8c-5132-4e2a-b9b1-b8b9b8e1a7f9',
    content: '사랑과 기억에 대한 철학적인 영화예요',
    productId: null,
    articleId: 'a22a3c9d-75b5-4cf3-a218-b522b7759df5',
    createdAt: '2025-11-04T07:45:00Z',
    updatedAt: '2025-11-04T08:05:00Z'
  },
  {
    id: '2d9e6a7b-2a81-45b4-bb1d-40a0bdfd908e',
    content: '환상적인 세계관!',
    productId: null,
    articleId: 'e981c5a4-3b4d-4ec3-9351-3f735c8b1e9f',
    createdAt: '2025-11-03T10:00:00Z',
    updatedAt: '2025-11-03T10:30:00Z'
  },
  {
    id: 'f6b1d8a4-37b2-4e3c-bd8d-7b2a9e3a1b57',
    content: '치히로의 성장 서사가 인상적이에요',
    productId: null,
    articleId: 'e981c5a4-3b4d-4ec3-9351-3f735c8b1e9f',
    createdAt: '2025-11-03T10:00:00Z',
    updatedAt: '2025-11-03T10:30:00Z'
  },
  {
    id: 'b3e2d4c7-9c32-4b32-90c7-d8b8f13e72a1',
    content: '시간의 개념을 이렇게 표현하다니 대단해요',
    productId: null,
    articleId: '7fd73b0d-89b3-4ff9-9e3e-f445a1e72a91',
    createdAt: '2025-11-02T22:00:00Z',
    updatedAt: '2025-11-02T23:00:00Z'
  },
  {
    id: '8d7c9e12-3b51-46b2-8ad3-c7f5a91d6b7a',
    content: 'OST도 정말 좋았어요',
    productId: null,
    articleId: '7fd73b0d-89b3-4ff9-9e3e-f445a1e72a91',
    createdAt: '2025-11-02T22:00:00Z',
    updatedAt: '2025-11-02T23:00:00Z'
  },
  {
    id: 'ad8b3c2f-41b1-4d49-b8a9-1b72c5c9d6a3',
    content: '눈물이 멈추지 않았어요',
    productId: null,
    articleId: '5e0d2a44-90b4-4a33-9df7-3dc2b3f1a0e7',
    createdAt: '2025-11-02T21:00:00Z',
    updatedAt: '2025-11-02T21:40:00Z'
  },
  {
    id: 'e4f7b8a2-31e2-4a8c-9ab4-8b6f5d1a4c3b',
    content: '레오나르도 연기가 압권입니다',
    productId: null,
    articleId: '5e0d2a44-90b4-4a33-9df7-3dc2b3f1a0e7',
    createdAt: '2025-11-02T21:00:00Z',
    updatedAt: '2025-11-02T21:40:00Z'
  },
  {
    id: 'b9f4a1e2-63d7-45a4-8b97-4e2b9c7d3b51',
    content: '서스펜스가 대단해요',
    productId: null,
    articleId: '38a2735e-7e74-4a12-8e4e-63fd7b6e9f91',
    createdAt: '2025-11-04T21:00:00Z',
    updatedAt: '2025-11-04T21:30:00Z'
  },
  {
    id: 'ac4f5b6d-4a91-4b7d-b8e1-6b9f5e8c9a21',
    content: '음악이 분위기를 살려줘요',
    productId: null,
    articleId: '38a2735e-7e74-4a12-8e4e-63fd7b6e9f91',
    createdAt: '2025-11-04T21:00:00Z',
    updatedAt: '2025-11-04T21:30:00Z'
  },
  {
    id: 'd2b8e1c3-9b41-47f1-9b71-2b6f4e7a91d4',
    content: '엔드게임은 진정한 대서사시!',
    productId: null,
    articleId: '4c2b5e3f-8af1-4c44-84b7-1cb4e2b9272c',
    createdAt: '2025-11-01T13:00:00Z',
    updatedAt: '2025-11-01T13:30:00Z'
  },
  {
    id: 'b1e2c4d8-59a7-4d7f-92e4-f8a6b4e2a9c3',
    content: '아이언맨 그리워요',
    productId: null,
    articleId: '4c2b5e3f-8af1-4c44-84b7-1cb4e2b9272c',
    createdAt: '2025-11-01T13:00:00Z',
    updatedAt: '2025-11-01T13:30:00Z'
  },
  {
    id: 'a4d3e2b7-6f9a-4c81-84b2-b91f7c4e8d1a',
    content: '결말의 반전이 충격적이었어요',
    productId: null,
    articleId: '9b8de731-b8d3-4bc2-a21f-5c9d6f83a9b9',
    createdAt: '2025-11-03T12:00:00Z',
    updatedAt: '2025-11-03T12:40:00Z'
  },
  {
    id: 'c3b5a2e9-5f31-4b4b-bf3d-8a9f3b7d2f81',
    content: '박찬욱 감독다운 긴장감',
    productId: null,
    articleId: '9b8de731-b8d3-4bc2-a21f-5c9d6f83a9b9',
    createdAt: '2025-11-03T12:00:00Z',
    updatedAt: '2025-11-03T12:40:00Z'
  },
  {
    id: '7b9d9b5c-7b47-4c41-9e1e-318ef312d4a2',
    content: '중간에 나오는 전투씬이 압도적이에요',
    productId: null,
    articleId: 'e5a4c817-40f8-41f4-812a-9eae9c33c3b0',
    createdAt: '2025-11-02T08:00:00Z',
    updatedAt: '2025-11-02T09:00:00Z'
  },
  {
    id: '92fcb12f-dce1-4ec4-bf5a-1c5f3e9828c1',
    content: '진짜 판타지의 정석',
    productId: null,
    articleId: 'e5a4c817-40f8-41f4-812a-9eae9c33c3b0',
    createdAt: '2025-11-02T08:00:00Z',
    updatedAt: '2025-11-02T09:00:00Z'
  },
  {
    id: 'b6e2f5e2-4373-4d8d-bb8e-9351e4cd4143',
    content: '스파이더맨의 새로운 해석이 좋았어요!',
    productId: null,
    articleId: 'b77f46a5-2a8b-4e1f-b283-22f3a88e7cb4',
    createdAt: '2025-10-27T10:00:00Z',
    updatedAt: '2025-10-27T11:00:00Z'
  },
  {
    id: '3d6e2bb0-7929-404d-8a59-44d6e1a25e29',
    content: '쿠키영상까지 완벽했습니다.',
    productId: null,
    articleId: 'b77f46a5-2a8b-4e1f-b283-22f3a88e7cb4',
    createdAt: '2025-10-27T10:00:00Z',
    updatedAt: '2025-10-27T11:00:00Z'
  },
  {
    id: '69d28451-7f24-48b8-83a2-8b1cf4a1cc84',
    content: '하울의 성 디자인이 너무 예뻐요.',
    productId: null,
    articleId: 'c8e24e7f-8cb5-47cc-8d45-3d3e91dc7f50',
    createdAt: '2025-10-29T09:15:00Z',
    updatedAt: '2025-10-29T09:30:00Z'
  },
  {
    id: '15b6d80f-06f9-4ef9-b6c9-6d3d9e43493d',
    content: 'OST 들을 때마다 눈물이 납니다.',
    productId: null,
    articleId: 'c8e24e7f-8cb5-47cc-8d45-3d3e91dc7f50',
    createdAt: '2025-10-29T09:15:00Z',
    updatedAt: '2025-10-29T09:30:00Z'
  },
  {
    id: '88bde3ad-9a39-47d8-a0f2-1a7612a83ee7',
    content: '조커 연기가 미쳤어요.',
    productId: null,
    articleId: 'fa72e820-6633-43cb-a7b0-8c80d451b9e3',
    createdAt: '2025-11-02T10:00:00Z',
    updatedAt: '2025-11-02T11:00:00Z'
  },
  {
    id: 'e32d0d4f-cd42-4654-b431-4e94b57b1c77',
    content: '엔딩에서 소름 돋았습니다.',
    productId: null,
    articleId: 'fa72e820-6633-43cb-a7b0-8c80d451b9e3',
    createdAt: '2025-11-02T10:00:00Z',
    updatedAt: '2025-11-02T11:00:00Z'
  },
  {
    id: 'f7a0536c-5e3a-4d31-b879-39e6e6df92ad',
    content: '실화라 더 충격적이었어요.',
    productId: null,
    articleId: 'cfb37212-f1a5-4fcd-8d0f-7a5ff65b6b71',
    createdAt: '2025-11-01T08:00:00Z',
    updatedAt: '2025-11-01T09:00:00Z'
  },
  {
    id: 'd91b1ec7-1d94-45c1-bc31-841c1db3159b',
    content: '배우 연기력이 모두 대단했습니다.',
    productId: null,
    articleId: 'cfb37212-f1a5-4fcd-8d0f-7a5ff65b6b71',
    createdAt: '2025-11-01T08:00:00Z',
    updatedAt: '2025-11-01T09:00:00Z'
  },
  {
    id: 'c246cf56-5e65-476b-b648-44e91fdc0f29',
    content: '감동적인 이야기네요.',
    productId: null,
    articleId: 'd1a6c3fb-4a7a-4b4e-bcb4-49ff83a52e89',
    createdAt: '2025-10-31T12:00:00Z',
    updatedAt: '2025-10-31T13:00:00Z'
  },
  {
    id: '7b43c927-7cd1-479c-b4f9-d8a1a82d26de',
    content: '두 사람의 케미가 너무 좋았어요.',
    productId: null,
    articleId: 'd1a6c3fb-4a7a-4b4e-bcb4-49ff83a52e89',
    createdAt: '2025-10-31T12:00:00Z',
    updatedAt: '2025-10-31T13:00:00Z'
  },
  {
    id: '3acb74cf-1d38-4f79-8948-7a3cf2e1d134',
    content: '색감이 예술이에요.',
    productId: null,
    articleId: 'ee482a72-86f4-4b69-b6f5-9a2d58f3a517',
    createdAt: '2025-10-26T15:00:00Z',
    updatedAt: '2025-10-26T15:30:00Z'
  },
  {
    id: '6aef1732-68cf-4f57-b4e8-8d7e4b3fa7b5',
    content: '웨스 앤더슨 영화답게 디테일이 환상적이에요.',
    productId: null,
    articleId: 'ee482a72-86f4-4b69-b6f5-9a2d58f3a517',
    createdAt: '2025-10-26T15:00:00Z',
    updatedAt: '2025-10-26T15:30:00Z'
  },
  {
    id: 'f6e9a4de-7612-4a84-a02a-b48d61cb79b0',
    content: '인생 영화입니다.',
    productId: null,
    articleId: '7f32484c-56d3-4f7b-91c9-cd57c17794e7',
    createdAt: '2025-10-30T10:20:00Z',
    updatedAt: '2025-10-30T11:10:00Z'
  },
  {
    id: '6ffcc6e0-b97a-4cde-b905-b145cc6e9b0a',
    content: '포레스트 검프의 순수함이 감동적이에요.',
    productId: null,
    articleId: '7f32484c-56d3-4f7b-91c9-cd57c17794e7',
    createdAt: '2025-10-30T10:20:00Z',
    updatedAt: '2025-10-30T11:10:00Z'
  },
  {
    id: '2fd019db-81b9-4f64-bb0f-0a7adf41e7e5',
    content: '호랑이랑의 관계가 인상 깊었어요.',
    productId: null,
    articleId: 'f62d3e43-9c24-44c7-8ed2-59c65b6c4174',
    createdAt: '2025-11-03T09:00:00Z',
    updatedAt: '2025-11-03T10:00:00Z'
  },
  {
    id: '5e2cc0ce-bebc-4a39-9d73-c6e65bdb7e62',
    content: '생명에 대한 메시지가 강렬했어요.',
    productId: null,
    articleId: 'f62d3e43-9c24-44c7-8ed2-59c65b6c4174',
    createdAt: '2025-11-03T09:00:00Z',
    updatedAt: '2025-11-03T10:00:00Z'
  }
];
