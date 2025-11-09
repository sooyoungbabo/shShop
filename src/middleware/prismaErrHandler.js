import { Prisma } from '@prisma/client';

export function prismaErrHandler(err, req, res, next) {
  // 알려진 프리즈마 DB 관련 에러 (P2000~P2038)
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    let status = 500;
    let message = '서버 내부 오류가 발생했습니다.';

    switch (err.code) {
      case 'P2002':
        status = 409;
        message = '이미 존재하는 데이터입니다.';
        break;
      case 'P2003':
        status = 400;
        message = '연결된 데이터가 존재하지 않습니다.';
        break;
      case 'P2011':
      case 'P2012':
        status = 400;
        message = '필수 입력값이 누락되었습니다.';
        break;
      case 'P2025':
        status = 404;
        message = '요청한 데이터를 찾을 수 없습니다.';
        break;
      case 'P2023':
        status = 500;
        message = '서버 내부 데이터 구조 불일치 (P2023)';
        break;
      default:
        status = 500;
        message = `알 수 없는 Prisma 에러 (${err.code})`;
        break;
    }

    console.error(`[PrismaError ${err.code}] ${err.message}`);
    return res.status(status).send({ error: message });
  }

  // Unknown Request Error
  if (err instanceof Prisma.PrismaClientUnknownRequestError) {
    console.error('! Unknown Prisma Request Error:', err.message);
    return res.status(500).send({ error: '알 수 없는 Prisma 요청 오류입니다.' });
  }

  // Rust Panic Error
  if (err instanceof Prisma.PrismaClientRustPanicError) {
    console.error('! Prisma Rust Panic:', err.message);
    return res
      .status(500)
      .send({ error: 'Prisma 엔진이 비정상 종료되었습니다. 서버를 재시작해야 합니다.' });
  }

  // Initialization Error
  if (err instanceof Prisma.PrismaClientInitializationError) {
    console.error('! Prisma Initialization Error:', err.message);
    return res.status(500).send({ error: '데이터베이스 연결 설정에 문제가 있습니다.' });
  }

  // Validation Error (쿼리 입력 오류 등)
  if (err instanceof Prisma.PrismaClientValidationError) {
    console.error('! Prisma Validation Error:', err.message);
    return res.status(400).json({ error: '요청 데이터 형식이 올바르지 않습니다.' });
  }

  // 그 외 일반 에러
  next(err);
}
