angular.module('app.components')
       .directive('jcCard',jcCard);

function jcCard(){
  var directive = {
    controller: cardCtrl,
    controllerAs: 'vm',
    templateUrl: 'component/card/card.tmpl.html',
    scope: {
      content: '=jcContent',
      dstShow: '@jcDstShow',
      utcCn: '@jcShowUtcCn'
    },
    bindToController: true
  };
  return directive;

  function cardCtrl(APP_CONST) {
    var vm = this;
    vm.prod = APP_CONST.production;

  }
}
