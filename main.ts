class YoutubeVideo {

    title : string;
    views : string;
    likes : string;
    dislikes : string;
    comments : string;
    datePublished : string;
    channelName : string;
    channelSubscribers : string

    constructor(title : string,views : string,likes : string,dislikes : string,comments : string,datePublished : string,channelName : string,channelSubscribers : string){
        this.title = title
        this.views = views
        this.likes = likes
        this.dislikes = dislikes
        this.comments = comments
        this.datePublished = datePublished
        this.channelName = channelName
        this.channelSubscribers = channelSubscribers
    }

    getTitle = ()=>{
        return this.title
    }
    getViews = ()=>{
        return this.views
    }
    getLikes = ()=>{
        return this.likes
    }
    getDislikes = ()=>{
        return this.dislikes
    }
    getComments = ()=>{
        return this.comments
    }
    getDatePublished = ()=>{
        return this.datePublished
    }
    getChannelName = ()=>{
        return this.channelName
    }
    getChannelSubscribers = ()=>{
        return this.channelSubscribers
    }
}

newFunction();

function newFunction() {
    let despacito = new YoutubeVideo("Despacito", "5.3 B", "28 M", "3.3M", "2,433,574", "Jan 12 2017", "Luis Fonsi Oficial", "20M");
    let channel = despacito.getChannelName();
    console.log(channel);
}
