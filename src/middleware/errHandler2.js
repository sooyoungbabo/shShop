export default function errHandler2(err, req, res, next) {
  console.error('! 일반 에러 발생:', err);

  // 요청 JSON 파싱 실패 (express.json() 단계)
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).send({ error: '잘못된 JSON 형식입니다.' });
  }

  // 사용자 정의 에러 (예: assert 실패)
  if (err.name === 'AssertionError') {
    return res.status(400).send({ error: err.message || '요청이 유효하지 않습니다.' });
  }

  // 404 미들웨어에서 넘긴 경우
  if (err.status === 404) {
    return res.status(404).send({ error: '요청한 리소스를 찾을 수 없습니다.' });
  }

  // 그 외 런타임 에러
  return res.status(500).send({ error: '서버 내부 오류가 발생했습니다.' });
}
