export interface TocItem {
  title: string;
  page: number;
}

export interface TocData {
  [filename: string]: TocItem[];
}

export const tocData: TocData = {
  '251027_농업e지_안내서.pdf': [
    { title: '1. 농업e지 소개', page: 5 },
    { title: '2. 모바일로 간편하게 농업e지 로그인하기', page: 20 },
    { title: '3. PC로 간편하게 농업e지 로그인하기', page: 45 },
    { title: '4. 농업e지의 메인페이지와 주요 기능', page: 65 },
    { title: '5. 농업e지의 농업경영체 알아보기', page: 74 },
    { title: '6. 농업e지의 농식품사업 안내 알아보기', page: 85 },
    { title: '7. 농업e지의 농식품지도 알아보기', page: 95 },
    { title: '8. 농업e지의 농업e지 도우미 알아보기', page: 102 },
    { title: '9. 농업e지의 고객센터 알아보기', page: 121 }
  ],
  '251020_농업e지_경영체교재_기본.pdf': [
    { title: '1. 농업인 농업경영체 등록신청', page: 4 },
    { title: '2. 농업인 농업경영체 변경 등록신청', page: 16 },
    { title: '3. 농업법인 농업경영체 등록신청', page: 27 },
    { title: '4. 농업법인 농업경영체 변경 등록신청', page: 41 }
  ]
};
