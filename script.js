function toggleClass(tagname){
    console.log(tagname.value);
    const p= document.getElementById('contact');
    p.classList.toggle(tagname.value);
};