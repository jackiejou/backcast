var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(query) {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search', 
      type: 'GET',
      data: {maxResults: 5,
        q: query,
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: 'true',
      },
      success: function(data) {
        console.log(data);
      },
      error: function (error) {
        console.log('error' + error);
      },
    });
  }

});
