const onClickAdd = () => {
  //インプットを取得
  const inputData = document.getElementById("input-data").value;
  document.getElementById("input-data").value = "";
  funcAdd(inputData);
};

const funcAdd = (todo) => {
  //li生成
  const li = document.createElement("li");

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //p生成
  const p = document.createElement("p");
  p.innerText = todo;

  //削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    funcDelete(deleteButton.parentNode.parentNode);
  });

  //完了ボタン生成
  const finishButton = document.createElement("button");
  finishButton.innerText = "完了";
  finishButton.addEventListener("click", () => {
    const tempTarget = finishButton.parentNode;
    tempTarget.removeChild(finishButton);
    tempTarget.removeChild(deleteButton);

    const redoButton = document.createElement("button");
    redoButton.innerText = "戻す";
    redoButton.addEventListener("click", () => {
      funcRedo(redoButton.parentNode.parentNode);
    });

    tempTarget.appendChild(redoButton);
    const finishTarget = tempTarget.parentNode;
    funcDelete(finishTarget);
    const ul = document.getElementById("completed-list");
    ul.appendChild(finishTarget);
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

const funcDelete = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const funcRedo = (target) => {
  const todo = target.firstElementChild.firstElementChild.innerText;
  funcAdd(todo);
  document.getElementById("completed-list").removeChild(target);
};

document.getElementById("add").addEventListener("click", () => onClickAdd());
