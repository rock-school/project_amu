(function ($) {

  uiLoad.load("./src/assets/libs/screenfull/dist/screenfull.min.js");
  $(document).on(
    "click",
    "[ui-fullscreen], [data-ui-fullscreen]",
    function (e) {
      e.preventDefault();
      if (screenfull.enabled) {
        screenfull.toggle();
      }
    }
  );
})(jQuery);
