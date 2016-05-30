(function() {
  'use strict';

  angular
    .module('gulpprojecttest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
