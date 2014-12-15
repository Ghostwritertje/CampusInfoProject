'use strict';

angular.module('campusInfo.version', [
  'campusInfo.version.interpolate-filter',
  'campusInfo.version.version-directive'
])

.value('version', '0.1');
