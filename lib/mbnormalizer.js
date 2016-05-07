'use strict';

(function(root) {

  var MbNormalizer = {
    defaultOptions: {
      ignoreWhiteSpace: false,
      normalizeSeriesIndex: false,
      toLowerCase: false
    },

    normalize: function(str, customOptions) {
      var options = this.mergeOptions(this.defaultOptions, customOptions);

      for (var key in options) {
        if (options[key]) {
          var method = key.replace(/^./, function(s) {
            return 'filter' + s.toUpperCase();
          });

          if (method in this && typeof this[method] === 'function') {
            str = this[method](str);
          }
        }
      }
      return str;
    },

    filterIgnoreWhiteSpace: function(str) {
      return str.replace(/\s+/g, '');
    },

    filterNormalizeSeriesIndex: function(str) {
      var patterns = {
        '上': 1,
        '中': 2,
        '下': 3,
        '前': 1,
        '後': 3
      };
      var keys = [];
      for (var key in patterns) {
        keys.push(key);
      }

      var re = new RegExp('[' + keys.join() + ']', 'g');
      return str.replace(re, function(s) {
        return '(' + patterns[s] + ')';
      });
    },

    filterToLowerCase: function(str) {
      return str.toLowerCase();
    },

    mergeOptions: function(baseOptions, customOptions) {
      if (typeof customOptions != 'object') return baseOptions;

      var options = {};
      for (var key in baseOptions) {
        options[key] = key in customOptions ? customOptions[key] : baseOptions[key];
      }
      return options;
    }
  };

  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = MbNormalizer;
    } else {
      exports.MbNormalizer = MbNormalizer;
    }
  } else {
    root.MbNormalizer = MbNormalizer;
  }

})(this);
