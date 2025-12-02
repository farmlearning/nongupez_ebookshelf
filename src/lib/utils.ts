/**
 * 파일명을 읽기 쉬운 제목으로 변환하는 함수
 */
export function formatFileNameToTitle(filename: string): string {
  // 확장자 제거
  const nameWithoutExt = filename.replace(/\.(pdf|epub)$/i, '');
  
  // URL 디코딩
  const decoded = decodeURIComponent(nameWithoutExt);
  
  // 특정 패턴에 따른 제목 변환
  if (decoded.includes('농업e지_안내서') || decoded.includes('농업e지 안내 가이드') || decoded.includes('통합교재_안내서')) {
    return '농업e지 안내 가이드';
  }
  
  if (decoded.includes('농업e지_경영체교재')) {
    return '농업e지 농업경영체 신규 및 변경 등록신청 가이드';
  }
  
  // 기본적으로 언더스코어를 공백으로, 날짜 패턴 제거
  return decoded
    .replace(/^\d{6}_/, '') // 앞의 날짜 패턴 제거 (예: 250808_)
    .replace(/_/g, ' ') // 언더스코어를 공백으로
    .replace(/\s+/g, ' ') // 여러 공백을 하나로
    .trim();
}

/**
 * 파일명에서 이모지를 추출하는 함수
 */
export function getEmojiForFile(filename: string): string {
  const decoded = decodeURIComponent(filename);
  
  if (decoded.includes('안내서') || decoded.includes('안내 가이드')) {
    return '🌱';
  }
  
  if (decoded.includes('경영체')) {
    return '🚜';
  }
  
  // 기본 이모지
  return '📖';
}

/**
 * 파일명에서 부제목을 생성하는 함수
 */
export function getSubtitleForFile(filename: string): string {
  const decoded = decodeURIComponent(filename);
  
  if (decoded.includes('안내서') || decoded.includes('안내 가이드')) {
    return '농업e지의 구조와 기능들을 보실 수 있습니다.';
  }
  
  if (decoded.includes('경영체')) {
    return '농업e지에서 농업인 혹은 농업법인의 농업경영체 등록 혹은 변경 등록하는 방법을 보실 수 있습니다.';
  }
  
  // 기본 부제목
  return '농업e지 활용 교재';
}
