function createDIV(){
	let obj = document.getElementById("parent");
	let textArea = document.getElementById("srcText");
	let newDIV = document.createElement("div");

	newDIV.innerHTML = textArea.value;

	newDIV.setAttribute("class", "question");

	newDIV.onclick = function() {
		let p = this.parentElement;
		p.removeChild(this);
		alert("질문이 삭제되었습니다. 감사합니다.")
	};

	obj.appendChild(newDIV);
	alert("질문이 정상적으로 등록되었습니다.\n빠르게 확인 후 답변해드리겠습니다. 감사합니다.")
}

function howToUseThisSite(){
	alert("본 페이지는 독도와 관련되어 자주 나오는 질문들을 일부 정리한 페이지로, 질문을 클릭하면 해당 질문에 대한 답변이 하단에 출력됩니다.");
	alert("또한 자바스크립트를 사용하여 사용자의 질문을 div로 페이지에 출력할 수 있도록 하였습니다.");
	alert("최하단 텍스트에어리어에 글을 입력한 후 버튼을 누르면 메시지와 함께 페이지에 글이 출력됩니다. 출력된 텍스트를 누르면 삭제가 됩니다.\n다만 영구적으로 보관하는 것이 아니라 임시로 현재 페이지에 추가하는 것 뿐이므로 페이지를 벗어나면 생성된 질문은 삭제됩니다. 또한 실제로 답변이 달리진 않습니다...");
}