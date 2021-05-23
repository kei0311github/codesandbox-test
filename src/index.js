const onClickAdd = () => {
  //インプットを取得
  const inputData = document.getElementById("input-data").value;
  document.getElementById("input-data").value = "";

  //li生成
  const li = document.createElement("li");

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //p生成
  const p = document.createElement("p");
  p.innerText = inputData;

  //完了ボタン生成
  const finishButton = document.createElement("button");
  finishButton.innerText = "完了";
  finishButton.addEventListener("click", () => {
    alert("完了");
  });

  //削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });
  //組み合わせ
  div.appendChild(p);
  div.appendChild(finishButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  //未完了リストに追加
  const ul = document.getElementById("incomplete-list");
  ul.appendChild(li);
};

document.getElementById("add").addEventListener("click", () => onClickAdd());
