var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(title, views, likes, dislikes, comments, datePublished, channelName, channelSubscribers) {
        var _this = this;
        this.getTitle = function () {
            return _this.title;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.dislikes;
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.getDatePublished = function () {
            return _this.datePublished;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getChannelSubscribers = function () {
            return _this.channelSubscribers;
        };
        this.title = title;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = comments;
        this.datePublished = datePublished;
        this.channelName = channelName;
        this.channelSubscribers = channelSubscribers;
    }
    return YoutubeVideo;
}());
var despacito = new YoutubeVideo("Despacito","5.3 B","28 M","3.3M","2,433,574","Jan 12 2017","Luis Fonsi Oficial","20M")
var channel = despacito.getChannelName()
alert(channel)