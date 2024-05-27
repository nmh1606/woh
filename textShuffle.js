var TextShuffle = function(options) {
  var chars = options.chars || "01#/&%$?_-%*";
  var animationSpeed = options.animationSpeed || 10;
  var bindElements = options.bindElement;
  var bindEvent = options.bindEvent || "mouseover";

  function getRandomChar() {
    return chars.charAt(
      getRandomPosition(chars)
    );
  }

  function getRandomPosition(string) {
    return Math.floor(Math.random() * (string.length - 1))
  }

  function changeCharInText(string, position, char) {
    return string.substr(0, position) +
      char +
      string.substr(position + 1, string.length);
  }

  function permString($this, originalText, currentText, counter) {
    counter = counter || 0;

    setTimeout(function($this, originalText, currentText, counter) {
      currentText = changeCharInText(currentText, counter, getRandomChar());
      $this.text(currentText);

      // Stop recursion condition
      if (++counter <= originalText.length) {
        permString($this, originalText, currentText, counter);
      } else {
        restoreString($this, originalText, currentText, counter);
      }
    }, animationSpeed, $this, originalText, currentText, counter);
  }

  function restoreString($this, originalText, currentText, counter) {
    setTimeout(function($this, originalText, currentText, counter) {
      currentText = changeCharInText(currentText, counter, originalText.charAt(counter));
      $this.text(currentText);

      // Stop recursion condition
      if (--counter >= 0) {
        restoreString($this, originalText, currentText, counter);
      }
      else {
        _bindElement($this);
      }
    }, animationSpeed, $this, originalText, currentText, counter);
  }

  function _bind(event, $this) {
    $this = $this || $(this);
    var originalText = $this.text();

    _unbindElement($this);
    permString($this, originalText, originalText);
  }

  function _bindElement($this) {
    $this.on(bindEvent, $this, _bind);
  }

  function _unbindElement($this) {
    $this.off(bindEvent);
  }

  function _init() {
    $(bindElements).on(bindEvent, _bind);
  }

  $(function() {
    _init();
  });
};
