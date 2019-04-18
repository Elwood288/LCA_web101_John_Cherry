 //! Variables //
        
        
 var primaryHipList = [ "Auto Rifle" , "Pulse Rifle" , "Scout Rifle" , "Hand Cannon" , "Sidearm", "Sniper Rifle", "Shotgun", "SMG"] ;
        
 var primaryBackList = [ "Auto Rifle" , "Pulse Rifle" , "Scout Rifle" , "Hand Cannon" , "Sidearm" , "Grenade Launcher" , "Trace Rifle", "Sniper Rifle", "Shotgun", "Fusion Rifle", "SMG"] ;
 
 var sidearmList = [ "Rocket Launcher" , "Linear Fusion Rifle" , "Grenade Launcher", "Whisper of the Worm" , "Sword"] ;
 
 var armList = [ "Arc" , "Solar" , "Void"] ;
 
 // Script 
 
 //primary hip weapon
 
 var  primaryHip = Math.floor(Math.random() * primaryHipList.length);
 
 document.write("Kinetic Weapon: " + primaryHipList[primaryHip] + "<br>");
 
     
 
 //primary back weapon
 
 var  primaryBack = Math.floor(Math.random() * primaryBackList.length);
 
 document.write("Energy Weapon: " + primaryBackList[primaryBack] + "<br>")
 
 
 //sidearm
 
 var  sidearm = Math.floor(Math.random() * sidearmList.length);
 
 document.write("Heavy Weapon: " + sidearmList[sidearm] + "<br>")
         
 
 //arm
 
 var  arm = Math.floor(Math.random() * armList.length);
 
 document.write("Subclass: " + armList[arm] + "<br>")