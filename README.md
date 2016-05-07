# MbNormalizer

Normalize multi-byte character string, such as Japanese Hiragana, Katakana, and Chinese numerals.

# Usage

```js
var MbNormalizer = require('mbnormalizer');

// Hiragana, Katakana
MbNormalizer.normalize('あいうえお');   // アイウエオ
MbNormalizer.normalize('アイウエオ');   // アイウエオ
MbNormalizer.normalize('ｶﾞｷﾞｸﾞｹﾞｺﾞ');   // ガギグゲゴ

// Full-width alphanumeric
MbNormalizer.normalize('ＡＢＣｄｅｆ'); // ABCdef
MbNormalizer.normalize('１２３');       // 123

// Chinese numerals
MbNormalizer.normalize('一二三');     // 123
MbNormalizer.normalize('四百五十九'); // 459

// Others
MbNormalizer.normalize('あい うえお', { ignoreWhiteSpaces: true });   // あいうえお
MbNormalizer.normalize('ＡＢＣｄｅｆ', { toLowerCase: true });        // abcdef
MbNormalizer.normalize('（）【】「」', { normalizeBrackets: true });  // ()()()
MbNormalizer.normalize('上中下 前後', { normalizeSeriesIndex: true });  // (1)(2)(3) (1)(2)

```

# Options

- `ignoreWhiteSpaces` ... remove all white spaces (default: false)
- `toLowerCase` ... convert to lowercase letters (default: false)
- `normalizeBrackets` ... normalize full-width brackets (default: false)
- `normalizeSeriesIndex` ... (default: false)

# License

MIT
