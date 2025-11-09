# Codeit Note 6기 미션3 by 정수영

## 🧩 개요: PostgreSQL을 이용한 DB 서버 구축과 배포

- 관계형 DB인 PostgreSQL 사용
- Prisma ORM 이용한 Schema 사용 및 시딩
- Express, REST Client 이용한 DB 서버 API 구축
- Github와 Render 이용하여 public에 배포

## 주요 내용

#### Prisma로 구축된 3 모델

- 중고마켓 Product 스키마: 9개 필드
  -7 필수: id, name, description, price, tags, createdAt, updatedAt
  -2 옵션: imageUrls, comments(관계형)

- 자유게시판 Article 스키마 : 7개 필드
  -5개 필수: id, title, content, createdAt, updatedAt
  -2개 옵션: imageUrls, comments(관계형)

- 댓글 Comment 스키마: 6개 필드
  -4개 필수: id, content, createdAt, updatedAt
  -2개 옵션: productId(FK), articleId(FK)

- 모델 간 관계를 고려하여 onDelete 설정:
  -FK 필드로 가진 Comment는 onDelete=Cascade로 설정

- 모델 간 관계를 고려하여 mock data 만들고, seeding code 작성

#### HTTP 요청 함수 구현

- 중고마켓 (Product) API 함수 및 기본 요구 사항

  - 상품 등록 API: postProduct - name, description, price, tags 입력하여 등록
  - 상품 상세 조회 API: getProduct - id, name, description, price, tags, createdAt 조회
  - 상품 수정 API: patchProduct - PATCH 메소드 사용
  - 상품 삭제 API: deleteProduct
  - 상품 목록 조회 API: getProductLis
    - id, name, price, createdAt 조회
    - offset 방식의 페이지네이션 기능 포함
    - 최신순으로 정렬 가능 (default)
    - name, description에 포함된 단어로 검색 가능
  - 각 API에 3 단계 error hander 적용: prismaErrHandler, routeErrHandler, errHandler
  - 각 API 응답에 적절한 상태 코드 리턴: 200, 201, 400, 404, 500 등

- 자유게시판 (Article) API 함수 및 기본 요구 사항

  - 게시글 등록 API: postArticle - title, content 입력하고 등록
  - 게시글 상세 조회 API: getArticle - id, title, content, createdAt 조회
  - 게시글 수정 API: patchArticle
  - 게시글 삭제 API: deleteArticle
  - 게시글 목록 조회 API: getArticleList
    - id, title, content, createdAt 조회
    - offset 방식의 페이지네이션 기능 포함
    - 최신순(recent)으로 정렬 가능
    - title, content에 포함된 단어로 검색 가능

- 댓글 (Comment) API 함수 및 기본 요구 사항

  - 댓글 등록 API:

    - content를 입력하여 등록
    - 중고마켓 상품 댓글 등록: postProductComment
    - 자유게시판 게시물 댓글 등록: postArticleComment

  - 댓글 수정 API: patchComment

  - 댓글 삭제 API: deleteComment

  - 댓글 목록 조회 API:

    - 댓글 조회: getComment
    - 모든 댓글 목록 조회: getAllCommentList
    - 중고마켓 모든 상품에 대한 댓글 목록 조회: getProductCommentList
    - 자유게사판 모든 게시물에 대한 댓글 목록 조회: getProductCommentList

    - id, content, createdAt 조회
    - 아래 3 API에 cursor 방식의 페이지네이션 적용:
      getAllCommentList, getProductCommentList, getArticleCommentList

- 유효성 검증

  - 상품/게시물 등록 시 필요한 필드의 유효성을 검증하는 미들웨어 구현: modelValidate.js
  - 추가 구현: 상품/게시물 수정, 코멘트 등록/수정 시에도 같은 미들웨어로 유효성 검증 구현

- 이미지 업로드

  - multer 미들웨어를 사용한 이미지 업로드 API 구현:

    - 중고마켓 상품 이미지 업로드: postProductImage
    - 자유게시판 게시물 이미지 업로드: postArticleImage
    - 업로드된 이미지는 서버에 저장 (현재 localhost)
    - 해당 이미지의 경로는 response 객체에 포함하여 반환하고,
    - 해당 이미지 경로는 데이터베이스에 저장: Product의 imageUrls 필드

  - 부가 API 구현:
    - 중고마켓 상품 이미지 삭제: deleteProductImageList
    - 자유게시판 게시물 이미지 삭제: deleteArticleImageList

- HTTP requsts: product.http, article.http, comment.http, image.http

- 에러 처리

  - 3 단계의 미들웨어로 구현: 생각할 수 있는 대부분의 예외 상황 처리

    - 단계1: 프리즈마 에러 (Pxxxx)
    - 단계2: 라우터 에러 (404)
    - 단계3: 일반 에러 (500)

  - 에러 상황에 맞는 상태값 반환:
    - 서버 오류(500), 사용자 입력 오류(400), 리소스 찾을 수 없음 (404) 포함

- 라우트 중복 제거

  - 중복되는 라우트 경로를 app.route()로 통합하여 중복 제거
  - express.Router() 활용하여 중고마켓/자유게시판 관련 라우트를 별도의 모듈로 구분

- 배포

  - 환경 변수 설정: .env
  - CORS 설정: public 허용
  - render.com 으로 배포: https://shshop-o0oy.onrender.com

## 파일 구성

정수영-sprint3/
├── http/
│ ├── article.http
│ ├── comment.http
│ ├── image.http
│ └── product.http
├── images/
├── prisma/
│ ├── migrations/
│ ├── mock.js
│ ├── schema.prisma
│ └── seed.js
├── src/
│ ├── controller/
│ │ ├── article.js
│ │ ├── comment.js
│ │ ├── image.js
│ │ └── product.js
│ ├── lib/
│ │ └── constants.js
│ ├── middleware/
│ │ ├── errhandler.js
│ │ └── validate.js
│ ├── router/
│ │ ├── article.js
│ │ ├── comment.js
│ │ ├── image.js
│ │ └── product.js
│ └── struct/
│ │ └── validate.js
│ └── app.js
├── uploads/
├── package-lock.json
├── package.json
└── README.md
