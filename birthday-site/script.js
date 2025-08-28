// Confetti animation
(function () {
  const c = document.getElementById('confetti-canvas');
  const ctx = c.getContext('2d');
  let W, H, pieces = [];
  function resize() { W = c.width = window.innerWidth; H = c.height = window.innerHeight; }
  window.addEventListener('resize', resize); resize();
  function spawn(n=120) { for (let i=0;i<n;i++){ pieces.push({x:Math.random()*W,y:-10-Math.random()*H,r:4+Math.random()*6,a:Math.random()*Math.PI*2,v:1+Math.random()*2.5,w:(Math.random()-.5)*0.12});}}
  function draw(){ ctx.clearRect(0,0,W,H); pieces.forEach(p=>{p.y+=p.v;p.a+=p.w;if(p.y>H+20){p.y=-10;p.x=Math.random()*W;}ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.a);ctx.fillStyle=['#ffd166','#ef476f','#06d6a0','#118ab2','#ffffff'][Math.floor(Math.random()*5)];ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r);ctx.restore();}); requestAnimationFrame(draw);}
  spawn(200); draw();
})();

// Video UX
const video=document.getElementById('memoryVideo');const unmuteBtn=document.getElementById('unmuteBtn');document.getElementById('year').textContent=new Date().getFullYear();
function showUnmute(){unmuteBtn.style.display='inline-block';}function hideUnmute(){unmuteBtn.style.display='none';}
video.addEventListener('play',showUnmute);video.addEventListener('volumechange',()=>{if(video.muted)showUnmute();else hideUnmute();});
unmuteBtn.addEventListener('click',()=>{video.muted=!video.muted;unmuteBtn.textContent=video.muted?'🔊 Tap to unmute':'🔇 Tap to mute';});
video.play().catch(()=>{});

// Floating hearts
(function(){
  function spawnHeart(){
    const heart=document.createElement('div');
    heart.className='heart'; heart.textContent='❤️';
    heart.style.left=Math.random()*90+'%';
    heart.style.bottom='0'; heart.style.position='fixed';
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),6000);
  }
  setInterval(spawnHeart,2000);
})();
