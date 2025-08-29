    const hamb = document.getElementById('hamb');
    const mobile = document.getElementById('mobile');
    hamb?.addEventListener('click',()=>{
      const visible = mobile.style.display === 'block';
      mobile.style.display = visible ? 'none' : 'block';
    });

    document.getElementById('year').textContent = new Date().getFullYear();