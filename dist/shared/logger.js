'use strict';

System.register([], function (_export, _context) {
  var _typeof, Logger;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function getRGB(color) {
    var result = void 0;

    if (color && color.constructor === Array && color.length === 3) {
      return color;
    }

    result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color);
    if (result) {
      return [parseInt(result[1], 10), parseInt(result[2], 10), parseInt(result[3], 10)];
    }

    result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color);
    if (result) {
      return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
    }

    return jQuery.trim(color).toLowerCase();
  }

  function getColor(elem, attr) {
    var color = void 0;

    do {
      color = jQuery.css(elem, attr);

      if (color && color !== 'transparent' || jQuery.nodeName(elem, 'body')) {
        break;
      }

      attr = 'backgroundColor';

      elem = elem.parentNode;
    } while (elem);

    return getRGB(color);
  }
  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };

      _export('Logger', Logger = function () {
        function Logger() {
          _classCallCheck(this, Logger);
        }

        Logger.prototype.attached = function attached() {
          this.overrideStyles();
        };

        Logger.prototype.log = function log(message, isError, container) {
          var lastContainer = $('.console div:first', container);
          var counter = lastContainer.find('.count').detach();
          var lastMessage = lastContainer.text();
          var count = 1 * (counter.text() || 1);

          lastContainer.append(counter);

          if (!lastContainer.length || message !== lastMessage) {
            $('<div' + (isError ? ' class=\'error\'' : '') + '/>').css({
              marginTop: -24,
              backgroundColor: isError ? '#ffbbbb' : '#b2ebf2'
            }).html(message).prependTo($('.console', container)).animate({ marginTop: 0 }, 300).animate({ backgroundColor: isError ? '#ffdddd' : '#ffffff' }, 800);
          } else {
            count++;

            if (counter.length) {
              counter.html(count);
            } else {
              lastContainer.html(lastMessage).append('<span class=\'count\'>' + count + '</span>');
            }
          }
        };

        Logger.prototype.error = function error(message) {
          this.log(message, true);
        };

        Logger.prototype.overrideStyles = function overrideStyles() {
          jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function (i, attr) {
            jQuery.fx.step[attr] = function (fx) {
              if (!fx.state || _typeof(fx.end) === _typeof('')) {
                fx.start = getColor(fx.elem, attr);
                fx.end = getRGB(fx.end);
              }

              fx.elem.style[attr] = ['rgb(', [Math.max(Math.min(parseInt(fx.pos * (fx.end[0] - fx.start[0]) + fx.start[0], 10), 255), 0), Math.max(Math.min(parseInt(fx.pos * (fx.end[1] - fx.start[1]) + fx.start[1], 10), 255), 0), Math.max(Math.min(parseInt(fx.pos * (fx.end[2] - fx.start[2]) + fx.start[2], 10), 255), 0)].join(','), ')'].join('');
            };
          });
        };

        return Logger;
      }());

      _export('Logger', Logger);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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M0M7QUFFRDtBQUNGO0FBQ0YsUzs7eUJBRUQsSyxrQkFBTSxPLEVBQVM7QUFDYixlQUFLLEdBQUwsQ0FBUyxPQUFULEVBQWtCLElBQWxCO0FBQ0QsUzs7eUJBRUQsYyw2QkFBaUI7QUFDZixpQkFBTyxJQUFQLENBQVksQ0FBQyxpQkFBRCxFQUFvQixtQkFBcEIsRUFBeUMsaUJBQXpDLEVBQTRELGtCQUE1RCxFQUFnRixnQkFBaEYsRUFBa0csT0FBbEcsRUFBMkcsY0FBM0csQ0FBWixFQUF3SSxVQUFTLENBQVQsRUFBWSxJQUFaLEVBQWtCO0FBQ3hKLG1CQUFPLEVBQVAsQ0FBVSxJQUFWLENBQWUsSUFBZixJQUF1QixVQUFTLEVBQVQsRUFBYTtBQUNsQyxrQkFBSSxDQUFDLEdBQUcsS0FBSixJQUFhLFFBQU8sR0FBRyxHQUFWLGNBQXlCLEVBQXpCLENBQWpCLEVBQThDO0FBQzVDLG1CQUFHLEtBQUgsR0FBVyxTQUFTLEdBQUcsSUFBWixFQUFrQixJQUFsQixDQUFYO0FBQ0EsbUJBQUcsR0FBSCxHQUFTLE9BQU8sR0FBRyxHQUFWLENBQVQ7QUFDRDs7QUFFRCxpQkFBRyxJQUFILENBQVEsS0FBUixDQUFjLElBQWQsSUFBc0IsQ0FBQyxNQUFELEVBQVMsQ0FDN0IsS0FBSyxHQUFMLENBQVMsS0FBSyxHQUFMLENBQVMsU0FBVSxHQUFHLEdBQUgsSUFBVSxHQUFHLEdBQUgsQ0FBTyxDQUFQLElBQVksR0FBRyxLQUFILENBQVMsQ0FBVCxDQUF0QixDQUFELEdBQXVDLEdBQUcsS0FBSCxDQUFTLENBQVQsQ0FBaEQsRUFBNkQsRUFBN0QsQ0FBVCxFQUEyRSxHQUEzRSxDQUFULEVBQTBGLENBQTFGLENBRDZCLEVBRTdCLEtBQUssR0FBTCxDQUFTLEtBQUssR0FBTCxDQUFTLFNBQVUsR0FBRyxHQUFILElBQVUsR0FBRyxHQUFILENBQU8sQ0FBUCxJQUFZLEdBQUcsS0FBSCxDQUFTLENBQVQsQ0FBdEIsQ0FBRCxHQUF1QyxHQUFHLEtBQUgsQ0FBUyxDQUFULENBQWhELEVBQTZELEVBQTdELENBQVQsRUFBMkUsR0FBM0UsQ0FBVCxFQUEwRixDQUExRixDQUY2QixFQUc3QixLQUFLLEdBQUwsQ0FBUyxLQUFLLEdBQUwsQ0FBUyxTQUFVLEdBQUcsR0FBSCxJQUFVLEdBQUcsR0FBSCxDQUFPLENBQVAsSUFBWSxHQUFHLEtBQUgsQ0FBUyxDQUFULENBQXRCLENBQUQsR0FBdUMsR0FBRyxLQUFILENBQVMsQ0FBVCxDQUFoRCxFQUE2RCxFQUE3RCxDQUFULEVBQTJFLEdBQTNFLENBQVQsRUFBMEYsQ0FBMUYsQ0FINkIsRUFJN0IsSUFKNkIsQ0FJeEIsR0FKd0IsQ0FBVCxFQUlULEdBSlMsRUFJSixJQUpJLENBSUMsRUFKRCxDQUF0QjtBQUtELGFBWEQ7QUFZRCxXQWJEO0FBY0QsUyIsImZpbGUiOiJzaGFyZWQvbG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
