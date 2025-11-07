'use client';

import { useState } from 'react';
import { formatFileNameToTitle, getEmojiForFile, getSubtitleForFile } from '@/lib/utils';
import PdfThumbnail from '@/components/PdfThumbnail';

interface Book {
  id: number;
  title: string;
  subtitle: string;
  emoji: string;
  type: 'pdf' | 'epub';
  filename?: string;
}

// 파일명 배열에서 동적으로 책 정보 생성
const pdfFilenames = [
  '251027_농업e지_안내서.pdf',
  '251020_농업e지_경영체교재_기본.pdf'
];

const books: Book[] = pdfFilenames.map((filename, index) => ({
  id: index + 1,
  title: formatFileNameToTitle(filename),
  subtitle: getSubtitleForFile(filename),
  emoji: getEmojiForFile(filename),
  type: 'pdf' as const,
  filename: filename
}));

export default function Home() {
  const [selectedType, setSelectedType] = useState<'all' | 'pdf' | 'epub'>('all');

  const filteredBooks = selectedType === 'all' 
    ? books 
    : books.filter(book => book.type === selectedType);

  const openEbook = (book: Book) => {
    if (book.type === 'pdf') {
      // PDF 뷰어로 이동
      const filename = book.filename || `${book.title}.pdf`;
      window.location.href = `/reader?type=pdf&src=/guides_pdf/${encodeURIComponent(filename)}`;
    } else {
      // EPUB 뷰어로 이동
      const filename = book.filename || `${book.title}.epub`;
      window.location.href = `/reader?type=epub&src=/ebooks/${encodeURIComponent(filename)}`;
    }
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="header-content">
            <a href="#" className="logo">농업e지 활용 가이드</a>
            <a 
              href="https://www.nongupez.go.kr/nsm/main" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nongupez-link-btn"
            >
              농업e지 바로가기
            </a>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="main-content">
          <main className="content-area">


            <div className="books-grid">
              {filteredBooks.map((book) => (
                <div
                  key={book.id}
                  className="book-card"
                  onClick={() => openEbook(book)}
                >
                  <div className="book-cover">
                    <PdfThumbnail
                      src={`/images/thumbnails/${book.filename?.includes('안내서') ? '안내가이드_썸네일.png' : book.filename?.includes('경영체') ? '농업경영체_썸네일.png' : 'default.png'}`}
                      alt={book.title}
                      className="book-thumbnail"
                      fallbackEmoji={book.emoji}
                    />
                  </div>
                  <div className="book-info">
                    <div className="book-title">{book.title}</div>
                    <div className="book-subtitle">{book.subtitle}</div>
                    <div className="book-buttons">
                      <button className="book-button">
                        가이드 보기
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </main>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <a 
                href="https://www.mafra.go.kr/sites/home/index.do" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-logo-link"
              >
                <img 
                  src="/images/footer/농림축산식품부 Fav.png" 
                  alt="농림축산식품부" 
                  className="footer-logo-img footer-logo-small"
                />
              </a>
            </div>
            <div className="footer-center">
              <a 
                href="https://www.nongupez.go.kr/nsm/main" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-logo-link"
              >
                <img 
                  src="/images/footer/농업e지 Footer.png" 
                  alt="농업e지" 
                  className="footer-logo-img footer-logo-small"
                />
              </a>
            </div>
            <div className="footer-logo">
              <a 
                href="https://www.epis.or.kr/home/kor/main.do" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-logo-link"
              >
                <img 
                  src="/images/footer/EPIS Fav.png" 
                  alt="EPIS" 
                  className="footer-logo-img footer-logo-large"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
