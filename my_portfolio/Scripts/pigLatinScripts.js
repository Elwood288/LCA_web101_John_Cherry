function pigLatin(str){
    var original = str;
    var parts = original.split(/([aeiou].*)/);
    var suffix = "ay";
    
    if(parts[1] === undefined){
        console.log( parts[0] + suffix);
    }
    else{
        console.log(parts[1] + parts[0] + suffix);
    }
    }
    
    function convertParagraph(str){
      var splitParagraph = str.split(" ");
      for(i = 0; i < splitParagraph.length; i++){
        pigLatin(splitParagraph[i]);
      }
    }
    
    var fresh = "This is a story all about how my life got flipped turned upsidedown And I'd like to take a minute just sit right there I'll tell you how I became the prince of a town called Bel-Air";
    
    convertParagraph(fresh);
