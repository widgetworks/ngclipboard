import ClipboardJS from 'clipboard';
const ngclipboard = {
    register: function(ngModule){
        ngModule.directive('ngclipboard', function() {
            return {
                restrict: 'A',
                scope: {
                    ngclipboardSuccess: '&',
                    ngclipboardError: '&'
                },
                link: function(scope, element) {
                    //constructor for clipboardjs changed to ClipboardJS
                    var clipboard = new ClipboardJS(element[0]);

                    clipboard.on('success', function(e) {
                      scope.$apply(function () {
                        scope.ngclipboardSuccess({
                          e: e
                        });
                      });
                    });

                    clipboard.on('error', function(e) {
                      scope.$apply(function () {
                        scope.ngclipboardError({
                          e: e
                        });
                      });
                    });

                    element.on('$destroy', function() {
                        clipboard.destroy();
                    });

                }
            };
        });

        return ngModule;
    },
};

export {
    ngclipboard
};

