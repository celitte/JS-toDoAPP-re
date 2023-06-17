
const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";


    const div = document.createElement("div");
    div.className = "list-row";
 
    const li = document.createElement("li");
    li.innerText = inputText;


    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    console.log(completeButton);
    completeButton.addEventListener("click", () => {
        alert("完了")
    })

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    completeButton.addEventListener("click", () => {
        const deleteTarget = deleteButton.parentNode;
        deleteTarget.parentNode.removeChild(deleteTarget);
    });
    
    // 削除ボタンを適切な要素に追加する
    // 例えば、incomplete-list という id を持つ要素に追加する場合
    document.getElementById("incomplete-list").appendChild(deleteButton);
    


    div.appendChild(li);

    div.appendChild(completeButton);
    div.appendChild(deleteButton);


    document.getElementById("incomplete-list").appendChild(div);
  };


// "add-button" というidを持つ要素を取得します
const addButton = document.getElementById("add-button");

// "click" イベントが発生した時に、onClickAdd() 関数が実行されるようにイベントリスナーを追加します
addButton.addEventListener("click", () => {
  onClickAdd();
});


