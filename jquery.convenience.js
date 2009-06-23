// create convenience functions for events
(function($) {
  $.convenience = function(name) {
    $.fn[name] = function(fn) {
      return fn ? this.bind(name, fn) : this.trigger(name);
    };
  }
})(jQuery);
