import { assert } from 'superstruct';

const validate = (schema) => {
  return (req, res, next) => {
    try {
      assert(req.body, schema);
      next(); // 검증 통과 시 다음 미들웨어로
    } catch (err) {
      res.status(400).json({
        error: '유효성 검사 실패',
        message: err.message
      });
    }
  };
};

export default validate;
