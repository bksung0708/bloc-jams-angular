(function() {
    function AlbumCtrl(Fixtures) {
        this.albumData = Fixtures.getAlbum();
        this.current = 0;
        this.setCurrent = function(currentSong) {
            this.current = currentSong || 0;
        }
    }
    
    angular
        .module('blocjams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();