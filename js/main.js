var b=document.querySelector('.burger'),n=document.querySelector('.nav');
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
var f=document.getElementById('cf');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);
var body='الاسم: '+d.get('n')+'\nالهاتف: '+d.get('p')+'\n\n'+d.get('m');
location.href='mailto:info@example.com?subject='+encodeURIComponent('رسالة من الموقع')+'&body='+encodeURIComponent(body)});
