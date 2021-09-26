const rules = {
  require({label}) {
    return v => !!v || `[${label}] 필수 입력입니다.`;
  },
  min({label, len=3}) {
    return v => !!v ? v.length >= len || `[${label}] ${len}자 이상 입력하세요.` : true;
  },
  alphaNm() {
    return v => !!v ? /^[a-zA-Z0-9]+$/.test(v) || `영어와 숫자만 입력하세요.` : true;
  },
  patter({label, pattern}) {
    return v => !!v ? pattern.test(v) || `[${label}]형식에 맞게 입력하세요.` : true;
  },
  matchValue(origin) {
    return v => origin == v || `비밀번호가 일치하지 않습니다.`;
  },
  id(options) {
    const defaultOption = {
      label : '아이디',
      len : 3,
      require : true,
    };
    const opt = Object.assign(defaultOption, options);
    const arr = [];
    if(opt.required) {
      arr.push(rules.require(opt));
    }
    arr.push(rules.min(opt));
    arr.push(rules.alphaNm());
    return arr;
  }
}

module.exports = rules;