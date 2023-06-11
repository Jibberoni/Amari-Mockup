class SnippetLoader {
	constructor(snippetFile, targetElement) {
	  this.snippetFile = snippetFile;
	  this.targetElement = targetElement;
	}
  
	load() {
	  const xhr = new XMLHttpRequest();
	  xhr.open('GET', this.snippetFile, true);
  
	  xhr.onreadystatechange = () => {
		if (xhr.readyState === 4 && xhr.status === 200) {
		  const targetElement = document.getElementById(this.targetElement);
		  targetElement.innerHTML = xhr.responseText;
		}
	  };
  
	  xhr.send();
	}
}