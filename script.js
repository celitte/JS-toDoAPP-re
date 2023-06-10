
const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";


    const div = document.createElement("div");
    div.className = "list-row";
 
    const li = document.createElement("li");
    li.innerText = inputText;


    div.appendChild(li);

    document.getElementById("incomplete-list").appendChild(div);
  };


// "add-button" というidを持つ要素を取得します
const addButton = document.getElementById("add-button");

// "click" イベントが発生した時に、onClickAdd() 関数が実行されるようにイベントリスナーを追加します
addButton.addEventListener("click", () => {
  onClickAdd();
});


