(function() {
    function AlbumCtrl() {
        this.albumData = angular.copy(albumPicasso);
        this.current = 0;
        this.setCurrent = function(currentSong) {
            this.current = currentSong || 0;
        }
    }
    
    angular
        .module('blocjams')
        .controller('AlbumCtrl', AlbumCtrl);
})();