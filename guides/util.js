function showcode (target){
  ret = document.getElementById(target);
  if ( ret.style.display == "block" )
  {
    ret.style.display = "none";
  } else {
    ret.style.display = "block";
  }
}