


$.ajax({
    type: "GET",
    url: "/profile/"+$('#userid').val(),
    crossDomain : true,
    contentType: "application/json; charset=UTF-8",
    dataType: 'json',
    success: function(d) {
       //var d = JSON.stringify(d);
       //alert(d);
     // $("#bio").val(d.Item.bio.S);
    //   $("#status").val(d.Item.status.S);
       
       var length_of_user_followed = d.Item.user_followed.SS.length;
       
       for(var i=0;i<length_of_user_followed && i<3 ;i++)
    	   {
    	   		//var html = '<li class="list-group-item">'+d.Item.user_followed.SS[i]+'</li>';
    	   		//$('#listForUser').append($(html));
    	  
    	   appendNewsFeed(d.Item.user_followed.SS[i]);
    	   		
    	   }
       
    }
});

function appendNewsFeed(id)
{
	
	$.ajax({
	    type: "GET",
	    url: "/profile/"+id,
	    crossDomain : true,
	    contentType: "application/json; charset=UTF-8",
	    dataType: 'json',
	    success: function( d ) {
	       //var d = JSON.stringify(d);
	       //alert(d);
	       //$("#bio").val(d.Item.bio.S);
	       //$("#status").val(d.Item.status.S);
	    	
	    //   alert(name1);
	    	// var name1 = getName(id);
	    	  // alert(name1);
	    	var username = getName(id);
	    	
	    	
	    	//alert(name);
	       var length_of_post = d.Item.post.SS.length;
	       
	       for(var i=0;i<length_of_post && i<1 ;i++)
	    	   {
	    	   		//var html = '<li class="list-group-item">'+d.Item.user_followed.SS[i]+'</li>';
	    	   		//$('#listForUser').append($(html));
	    	   			
	    	   //append news feed here in respective div tags
	    	   	
	    	   var html = " ";
		    	html += '<div class="well well-sm">';
		    	html += '<div class="media">';
		    	html += '<div class="media-body">';
		    	html += '<h4 class="media-heading"> </h4>';
		    	html += '<p>'+ username +' posted this:</p>';
		    	html += '<p>'+ d.Item.post.SS[i] +'</p>';
		    	html += '</div>';
		    	html += '</div>';
		    	html += '</div>';
		    	//name = "";
		    	$('#panel-body').append($(html));
	    	   }
	       //delete name1;
	    }
	});


}

function getName(id){
	
	var name;
	
	$.ajax({
	    type: "GET",
	    url: "/getName/"+id,
	    crossDomain : true,
	    contentType: "application/json; charset=UTF-8",
	    dataType: 'json',
	    async : false,
	    success: function( d ) {
	    	
	    	name = d[0].firstname;
	    
	    	//return false;
	    }
	
	});
	
	return name;
}

$(document).ready(function(){
	
	$('#profile').click(function(){
		
			window.location = "/userprofile";
		
});
	$('#job').click(function(){
		window.location = '/showJobs';
	})
	
	$('#search').click(function(){
		window.location =  '/searchPage';
	})
});