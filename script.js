  const text = "Hello, I'm Manolingesh";
  const target = document.getElementById("typed-name");
  let i = 0;

  function typeLetter(){
    if (i < text.length) {
      target.textContent += text.charAt(i);
      i++;
      setTimeout(typeLetter,100); 
    }
  }

   typeLetter();
function showTab(tabId){
    const allTabs = document.querySelectorAll('.tab-section');
    allTabs.forEach(tab =>{
        tab.classList.remove('active');
    });

    const target = document.getElementById(tabId);
    target.classList.add('active');
}    

showTab('about');
function setActive(element) {
    const links = document.querySelectorAll(".dev-nav a");

    links.forEach(link => {
        link.classList.remove("active");
    });

    element.classList.add("active");
}