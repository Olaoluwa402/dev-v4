function openModal(position) {
  let modal = document.getElementsByClassName("modal-container")[position];
  modal.style.display = "block";
}

function closeModal(position) {
  // const index = modals.findIndex('')
  let modal = document.getElementsByClassName("modal-container")[position];
  modal.style.display = "none";
}

//alert mesages fucntion
function alertMsg(message, type) {
  const alertBox = document.createElement("div");
  alertBox.style.width = "200px";
  alertBox.style.height = "80px";
  alertBox.style.borderRadius = "6px";
  alertBox.style.padding = "10px";
  alertBox.style.color = "#fff";
  alertBox.style.backgroundColor = `${
    type == "success" ? "green" : type == "error" ? "brown" : "brown"
  }`;

  alertBox.style.position = "fixed";
  alertBox.style.top = 0;
  alertBox.style.right = 0;
  alertBox.style.zIndex = 99999;
  alertBox.style.display = "flex";
  alertBox.style.justifyContent = "center";
  alertBox.style.alignItems = "center";

  alertBox.innerHTML = `<p> ${message} </p>`;

  const bodyElem = document.querySelector("body");

  bodyElem.appendChild(alertBox);

  //remove aletbox after 4 seconds
  setTimeout(() => {
    bodyElem.removeChild(alertBox);
  }, 4000);
}

function getItemsStore(key) {
  const items = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : [];

  return items;
}

function saveItemToStore(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

export { openModal, closeModal, alertMsg, getItemsStore, saveItemToStore }; //named export
